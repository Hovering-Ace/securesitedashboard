import { z } from 'zod';

// Enum for incident types
export const IncidentType = z.enum([
  'Suspicious Activity',
  'Gun Threat',
  'Unauthorised Access',
  'Face Recognised',
  'Traffic Congestion'
]);
// Schema to validate { resolved: boolean }
export const ResolveIncidentSchema = z.object({
  resolved: z.boolean()
});

// Schema for an incident with camera data
export const IncidentWithCameraSchema = z.object({
  id: z.string(),
  type: IncidentType,
  tsStart: z.date(),
  tsEnd: z.date().nullable(),
  thumbnailUrl: z.string(),
  resolved: z.boolean(),
  camera: z.object({
    id: z.string(),
    name: z.string(),
    location: z.string()
  })
});

// Schema for a timeline event
export const TimelineEventSchema = z.object({
  id: z.string(),
  type: IncidentType,
  startTime: z.date(),
  endTime: z.date().optional(),
  cameraId: z.string()
});
