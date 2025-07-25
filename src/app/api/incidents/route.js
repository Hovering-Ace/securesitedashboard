import { NextResponse } from 'next/server';
import { Prisma } from '@prisma/client';
import { z } from 'zod';
import { prisma } from '../../lib/db';
// import { prisma } from '@/app/lib/db';

const GetIncidentsSchema = z.object({
  resolved: z
    .string()
    .optional()
    .transform((val) => val === 'true')
});

export async function GET(request) {
  try {
    const { searchParams } = new URL(request.url);
    let resolved=searchParams.get('resolved');
    console.log(resolved)
    // const resolved = searchParams.get('resolved')?searchParams.get('resolved')=="true"?true:false:null;
    if(resolved!=undefined){
      if(resolved=="true") resolved=true;
      if(resolved=="false") resolved=false;
    }
    else{
      resolved = {}
    }
    

    const incidents = await prisma.incident.findMany({
      where: {
        resolved: resolved
      },
      include: {
        camera: true
      },
      orderBy: {
        tsStart: 'desc'
      }
    });

    return NextResponse.json(incidents);
    
  } catch (error) {
    console.error('Failed to fetch incidents:', error);
    return NextResponse.json(
      { error: 'Failed to fetch incidents' },
      { status: 500 }
    );
  }
}
