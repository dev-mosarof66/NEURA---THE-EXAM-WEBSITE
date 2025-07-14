import dbConfig from '@/db/dbConfig';
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import Teacher from '@/models/teacher.models';
import Student from '@/models/student.models';

dbConfig();

export const POST = async (req: NextRequest) => {
  try {
    const body = await req.json();
    const { email, role } = body;


    if (role === 'Teacher') {
      const existingTeacher = await Teacher.findOne({ email });
      if (!existingTeacher) {
        const newTeacher = new Teacher({ email });
        await newTeacher.save();
      }
    } else if (role === 'Student') {
      const existingStudent = await Student.findOne({ email });
      if (!existingStudent) {
        const newStudent = new Student({ email });
        await newStudent.save();
      }
    } else {
      return NextResponse.json({ message: 'Invalid role' }, { status: 400 });
    }

    return NextResponse.json({ message: 'User registered successfully' }, { status: 201 });
  } catch (error) {
    console.error('Error in registration:', error);
    return NextResponse.json({ message: 'Internal Server Error' }, { status: 500 });
  }
};
