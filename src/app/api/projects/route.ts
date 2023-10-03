import startDatabase from "@/lib/db";
import { ProjectsModelSchema } from "@/lib/model/project.model";
import { NextResponse } from "next/server";


export async function GET(){
    await startDatabase();

    const projects=await ProjectsModelSchema.find();
    console.log(projects);

    return NextResponse.json({projects});
}