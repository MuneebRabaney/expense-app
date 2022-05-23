import { Container } from "src/components";
function Home() {
  return (
    <div className='container mx-auto px-2 max-w-5xl pt-10 md:pt-32'>
      <header>
        <h1 className='text-center font-bold text-2xl text-gray-700'>Welcome</h1>
      </header>
      <Container>
        <div className='w-full max-w-xs'>
          <form className='bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4'>
            <div className='flex items-center justify-between'>
              <button
                className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 w-fullrounded focus:outline-none focus:shadow-outline'
                type='button'>
                Sign In
              </button>
              <a
                href='/expenses'
                className='inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800'>
                View Expenses
              </a>
            </div>
          </form>
          <p className='text-center text-gray-500 text-xs'>&copy; Datasapiens</p>
        </div>
      </Container>
    </div>
  );
}

export default Home;
