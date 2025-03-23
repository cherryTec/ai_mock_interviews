import  {ReactNode} from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { redirect } from 'next/navigation';
import { isAuthenticated } from '@/lib/actions/auth.action';

const RootLayout = async ({children}: {children: ReactNode}) => {
  const isUserAuthenticated = await isAuthenticated();
  //此处待修复，是登录的逻辑 初步判断session cookie的问题
  //if(!isUserAuthenticated) redirect('/sign-in');
  return (
    <div className='root-layout'>
      <nav>
        <Link href="/" className="flex items-center gap-2"/>
          <Image src="/logo.svg" alt="logo" height= {32} 
          width={38}/>
          <h2 className='text-primary-100'>PrepWise</h2>
      </nav>

      {children}
    </div>
  )
}

export default RootLayout