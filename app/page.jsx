import Feed from '@components/Feed';

const Home = () => {
  return (
    <section className="w-full flex-center flex-col">
        <h1 className="head_text text-center">
            Movie
            <br className="max-md:hidden" />
            <span className="blue_gradient text-center">
                Releases
            </span>
        </h1>
        <p className = "desc text-center">
            Enjoy sharing your love for movies and films of all genres
        </p>

        <Feed />
    </section>
  )
}

export default Home