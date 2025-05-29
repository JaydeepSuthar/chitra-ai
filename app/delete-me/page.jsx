export default function Page() {
  return <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
    <main className="flex flex-col gap-[32px] row-start-2 items-center">
      <h1 className="text-4xl font-mono font-semibold">Delete you account</h1>
      {/* <p className="text-2xl font-mono">Turn creative thoughts into images</p> */}
      <button type='button' className='bg-[oklch(0.577 0.245 27.325)] p-3 rounded-md text-white'>Delete Me!</button>
    </main>
  </div>
}