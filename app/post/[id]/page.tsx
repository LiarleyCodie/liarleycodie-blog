interface IPostsProps {
  params: { id: string }
  searchParams: {}
}

export default function Posts({params}: IPostsProps) {
  const { id } = params
  return (
    <main className='flex flex-col justify-center items-center min-h-screen'>
      <h1>We are the chamitos</h1>
      <p>post id: {id}</p>
    </main>
  )
}