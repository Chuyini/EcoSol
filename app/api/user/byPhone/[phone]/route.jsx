import { NextResponse } from 'next/server';
import { connectionDB } from '../../../../../lib/db';
import user from '../../../../../models/user';

export async function GET(request, { params }) {
   try {
      const phone = { phone: params.phone };
      connectionDB();
      const userData = await user.findOne(phone);
      if (!userData) {
         return NextResponse.json(
            { message: 'User not found' },
            { status: 201 }
         );
      }

      return NextResponse.json({
         userData,
      });
   } catch (error) {
      return NextResponse.json({ message: error.message }, { status: 400 });
   }
}
