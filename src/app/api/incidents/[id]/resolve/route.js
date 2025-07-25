import { NextResponse } from 'next/server';
import { Prisma } from '@prisma/client';
import { prisma } from '../../../../lib/db';
import { ResolveIncidentSchema } from '../../../../lib/types.js';

export async function PATCH(request, { params }) {
  try {
    const {id} = await params;
    const body = await request.json();
    let { resolved } = body;
    // console.log(resolved)
    // resolved = resolved;
    
    const incident = await prisma.incident.update({
      where: { id: id },
      data: { resolved },
      include: {
        camera: true
      }
    });

    return NextResponse.json(incident);
  } catch (error) {
    console.error('Failed to resolve incident:', error);
    return NextResponse.json(
      { error: 'Failed to resolve incident' },
      { status: 500 }
    );
  }
}
