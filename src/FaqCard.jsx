import Accordion from './Accordion'
import { useAppGlobalContext } from './context'

function FaqCard () {
  const { panels } = useAppGlobalContext()
  return (
    <div className='faq-card container flow' data-container='small'>
      <header>
        <h1>FAQ</h1>
      </header>
      <Accordion questions={panels}></Accordion>
    </div>
  )
}
export default FaqCard
