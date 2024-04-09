import FaqCard from './FaqCard'
import bgDesktop from './assets/images/background-pattern-desktop.svg'
import bgMobile from './assets/images/background-pattern-mobile.svg'

function App () {
  return (
    <main>
      <section className='stack-grid'>
        <picture>
          <source srcSet={bgDesktop} media='(min-width: 45em)' />
          <img
            src={bgMobile}
            alt='a corridor in a building'
            className='bg-img'
          />
        </picture>
        <div className='main-content'>
          <FaqCard></FaqCard>
        </div>
      </section>
    </main>
  )
}

export default App
