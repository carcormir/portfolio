import Link from 'next/link';
import Layout from './Layout';

export default function Footer() {
  return (
    <footer  className='w-full border-t-2 border-solid border-dark bg-dark'>
      <Layout className='py-8 flex items-center justify-between'>
        <span>{new Date().getFullYear()} &copy; All Rights Reserved</span>
        <div className='flex items-center'>
          Built with <span className='text-pink-500 px-1'>❤</span> by&nbsp;
          <Link href='/' className='underline underline-offset-3'>Carlos Corchado</Link>
        </div>
        <Link href='/' className='underline underline-offset-3'>Say Hello</Link>
      </Layout>
    </footer>
  );
}