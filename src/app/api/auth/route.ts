import dbConfig from '@/db/dbConfig';
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import Student from '@/models/student.models';
import Teacher from '@/models/teacher.models';



dbConfig();

export const GET = async (request: NextRequest) => {
    try {
        const { searchParams } = new URL(request.url);
        const email = searchParams.get('email');

        if (!email) {
            return NextResponse.json({ error: 'Login session expired' }, { status: 400 });
        }
        const student = await Student.findOne({ email });
        const teacher = await Teacher.findOne({ email });

        if (student) {
            return NextResponse.json({
                user: student,
                role: 'Student'
            }, { status: 200 });
        } else if (teacher) {
            return NextResponse.json({
                user: teacher,
                role: 'Teacher'
            }, { status: 200 });
        }
    } catch (error) {
        console.error('Error fetching user role:', error);
        return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
    }

}