import { redirect } from "next/navigation"
import {
    getFeedbackByInterviewId,
    getInterviewById,
  } from "@/lib/actions/general.action";
import { Imperial_Script } from "next/font/google";

import Image from "next/image";
import { getRandomInterviewCover } from "@/lib/utils";
import DisplayTechicons from "@/components/DisplayTechicons";
import Agent from "@/components/Agent";
import { getCurrentUser } from "@/lib/actions/auth.action";
       
const page = async ({ params }: RouteParams) => {
    const { id } = params;
    const user = await getCurrentUser();
    const interview = await getInterviewById(id);

    if(!interview) redirect('/');
  return (
    <>
       <div className="flex flex-row gap-4 justify-between">
           <div className="flex flex-row items-center max-sm:flex-col">
              <div className="flex flex-row gap-4">
                 <Image src={getRandomInterviewCover()}  width={40} height={40} className="rounded-full object-cover size-[40px]" alt="user_logo" />
                 <h3 className="capitalize">{interview.role} Interview</h3>
              </div>

              <DisplayTechicons techStack={interview.techstack} />
             
           </div>
           <p className="bg-dark-200 px-4 py-2 rounded-lg h-fit capitalize">{interview.type}</p>
        </div>
        <Agent
            userName={user ?.name}
            userId={user?.id}
            interviewId={id}
            type="interview"
            questions={interview.questions}
        // feedbackId={feedback?.id}
        />
    </>
    
  )
}

export default page