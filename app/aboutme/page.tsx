import Image from 'next/image'
import lyiarLogo from '@/app/ui/images/liarleycodie-logo.svg'

export default async function Aboutme() {
  return (
    <main className="min-h-screen flex flex-col text-center justify-center items-center bg-gray-200 text-gray-600 dark:bg-gray-950 dark:text-gray-500 md:pt-16 px-4">
      <p>
        Hello, my name is{' '}
        <strong className="font-medium text-gray-700 dark:text-gray-300">
          Liarley
        </strong>
        .
      </p>
      <p>
        I am a Brazilian, independent and self-taught{' '}
        <strong className="font-medium text-gray-700 dark:text-gray-300">
          web developer.
        </strong>
      </p>
      <p>
        I have just over 2 (or almost 3) years developing alone in JavaScript
      </p>
      <p>
        <strong className="font-medium text-gray-700 dark:text-gray-300">
          and this blog is a testament to my skills and efforts.
        </strong>
      </p>
      <p>
        I am{' '}
        <strong className="font-medium text-gray-700 dark:text-gray-300">
          completely open
        </strong>{' '}
        for communication and{' '}
        <strong className="font-medium text-gray-700 dark:text-gray-300">
          service
        </strong>
        .
      </p>
      <div className='flex flex-col justify-center items-center'>
        <Image
          className="my-6 dark:filter-none invert"
          src={lyiarLogo}
          alt=""
          height={64}
          width={64}
          draggable={false}
        />
        <p>Do you want to contact me?</p>
        <a
          href="/contactme"
          className="bg-gray-900 border hover:text-indigo-300 border-gray-800 text-sm text-gray-300 hover:bg-gray-800 hover:border-indigo-500 flex justify-center items-center py-2 px-4 mt-1 rounded-md"
        >
          Send me a message
        </a>
      </div>
    </main>
  )
}
