import { NextResponse } from 'next/server';
import { connectionDB } from '../../../../lib/db';
import binnacle from '../../../../models/binnacle';

export async function GET(request, { params }) {
   try {
      connectionDB();
      const binnacleData = await binnacle.findById(params.id);
      if (!binnacleData) {
         return NextResponse.json(
            { message: 'User not found' },
            { status: 404 }
         );
      }

      return NextResponse.json({
         binnacleData,
      });
   } catch (error) {
      return NextResponse.json({ message: error.message }, { status: 400 });
   }
}

export async function PUT(request, { params }) {
   try {
      connectionDB();
      const data = await request.json();
      const updatedBinnacle = await binnacle.findByIdAndUpdate(
         params.id,
         data,
         {
            new: true,
         }
      );

      if (!updatedBinnacle) {
         return NextResponse.json(
            { message: 'User not found' },
            { status: 404 }
         );
      }

      return NextResponse.json({ updatedBinnacle });
   } catch (error) {
      return NextResponse.json({ message: error.message }, { status: 400 });
   }
}

export async function DELETE(request, { params }) {
   try {
      connectionDB();
      const binnacleDeleted = await binnacle.findByIdAndDelete(params.id);
      if (!binnacleDeleted) {
         return NextResponse.json(
            { message: 'User not found' },
            { status: 404 }
         );
      }

      return NextResponse.json({
         binnacleDeleted,
      });
   } catch (error) {
      return NextResponse.json({ message: error.message }, { status: 400 });
   }
}
