import { Button } from '@/components/ui/button'
import Image from 'next/image'
import  Link  from 'next/link'  
import InterviewCard from '@/components/InterviewCard'
import { getCurrentUser } from '@/lib/actions/auth.action'
import {  getInterviewsByUserId,getLatestInterviews } from '@/lib/actions/general.action'
import React from 'react'

const page = async () => {
  const user = await getCurrentUser();

  const [userInterviews,latestInterviews] = await Promise.all([
    getInterviewsByUserId(user?.id!),
    getLatestInterviews({ userId: user?.id! })
  ]);

  
  const hasPassedInterview = userInterviews?.length > 0;
  const hasUpcomingInterviews = latestInterviews?.length > 0;


  return (
    <>
      <section className='card-cta'>
        <div className="flex flex-col gap-6 max-w-lg">
          <h2>Get Interview-Ready with AI-Powered Practice</h2>
          <p className='text-lg'>
            Practice on real interview questions and get instant feedback.
          </p>

          <Button asChild className='btn-primary 
          max-sm:w-full'>
            <Link href="/interview">Start an Interview</Link>
          </Button>
        </div>
        <Image src="/robot.png" alt="robo-dude" width={400}
        height={400} className="max-sm:hidden" />
      </section>
      <section className='flex flex-col gap-6 mt-8'>
        <h2>Your Interviews</h2>
         
        <div className="interviews-section">
         {hasPassedInterview ? (
            latestInterviews?.map((interview) => (
              <InterviewCard {...interview} key={interview.id} />
            ))) : (
              <p> There are no interviews available</p>
            )}
        </div>
      </section> 

      <section className='flex flex-col gap-6 mt-8'>
        <h2>Take an Interview</h2>

        <div className="interviews-section">
           
          {hasUpcomingInterviews ? (
              userInterviews?.map((interview) => (
                <InterviewCard {...interview} key={interview.id} />
              ))) : (
                <p> You haven&apos;t taken an interviews yet</p>
              )}
        </div>
      </section>
    </>
  )
}

export default page