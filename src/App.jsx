import Accordion from './Accordion'
import { useAppGlobalContext } from './context'

function App () {
  const { panels } = useAppGlobalContext()
  return (
    <main>
      <section className='section'>
        <div className='container'>
          <h1>FAQ</h1>
          <Accordion questions={panels}></Accordion>
        </div>
      </section>
    </main>
  )
}

export default App
