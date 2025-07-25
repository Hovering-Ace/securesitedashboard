// prisma/seed.js
const { PrismaClient } = require('@prisma/client');
const { faker } = require('@faker-js/faker');

const prisma = new PrismaClient();

const CAMERA_LOCATIONS = [
  { name: 'Shop Floor A', location: 'Production Area A' },
  { name: 'Vault Camera', location: 'Main Vault' },
  { name: 'Entrance Alpha', location: 'Building Entrance' },
  { name: 'Parking Lot', location: 'External Parking' },
];

const INCIDENT_TYPES = [
  'Suspicious Activity',
  'Gun Threat',
  'Unauthorised Access',
  'Face Recognised',
  'Traffic Congestion',
];

const THUMBNAILS = [
  '/thumbnails/placeholder-1.jpg',
  '/thumbnails/placeholder-2.jpg',
  '/thumbnails/placeholder-3.jpg',
];

function randomRecentTimeWithin24Hours() {
  const now = Date.now();
  const past24h = now - 24 * 60 * 60 * 1000;
  return new Date(faker.number.int({ min: past24h, max: now }));
}

function randomDuration2to3Min(tsStart) {
  const durationMs = faker.number.int({ min: 2, max: 3 }) * 60 * 1000;
  return new Date(tsStart.getTime() + durationMs);
}

async function main() {
  console.log('🌱 Seeding database...');

  await prisma.incident.deleteMany();
  await prisma.camera.deleteMany();

  const cameras = await Promise.all(
    CAMERA_LOCATIONS.map((cam) =>
      prisma.camera.create({
        data: {
          name: cam.name,
          location: cam.location,
        },
      })
    )
  );
  console.log(`✅ Created ${cameras.length} cameras`);

  const incidents = [];

  for (let i = 0; i < 15; i++) {
    const tsStart = randomRecentTimeWithin24Hours();
    const resolved = faker.datatype.boolean(0.0);
    const tsEnd = randomDuration2to3Min(tsStart);

    const incident = await prisma.incident.create({
      data: {
        cameraId: faker.helpers.arrayElement(cameras).id,
        type: faker.helpers.arrayElement(INCIDENT_TYPES),
        tsStart,
        tsEnd,
        thumbnailUrl: faker.helpers.arrayElement(THUMBNAILS),
        resolved,
      },
    });

    incidents.push(incident);
  }

  console.log(`✅ Created ${incidents.length} incidents`);
  console.log('🎉 Done seeding.');
  console.log('incidents:', incidents);
  console.log('cameras:', cameras);
}

main()
  .catch((e) => {
    console.error('❌ Seed failed:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
