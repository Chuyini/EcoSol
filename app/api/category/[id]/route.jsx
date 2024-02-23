import { NextResponse } from 'next/server';
import { connectionDB } from '../../../../lib/db';
import category from '../../../../models/category';

export async function GET(request, { params }) {
   try {
      connectionDB();
      const categoryData = await category.findById(params.id);
      if (!categoryData) {
         return NextResponse.json(
            { message: 'User not found' },
            { status: 404 }
         );
      }

      return NextResponse.json({
         categoryData,
      });
   } catch (error) {
      return NextResponse.json({ message: error.message }, { status: 400 });
   }
}

export async function PUT(request, { params }) {
   try {
      connectionDB();
      const data = await request.json();
      const updatedCategory = await category.findByIdAndUpdate(
         params.id,
         data,
         {
            new: true,
         }
      );

      if (!updatedCategory) {
         return NextResponse.json(
            { message: 'User not found' },
            { status: 404 }
         );
      }

      return NextResponse.json({ updatedCategory });
   } catch (error) {
      return NextResponse.json({ message: error.message }, { status: 400 });
   }
}

export async function DELETE(request, { params }) {
   try {
      connectionDB();
      const categoryDeleted = await category.findByIdAndDelete(params.id);
      if (!categoryDeleted) {
         return NextResponse.json(
            { message: 'User not found' },
            { status: 404 }
         );
      }

      return NextResponse.json({
         categoryDeleted,
      });
   } catch (error) {
      return NextResponse.json({ message: error.message }, { status: 400 });
   }
}
