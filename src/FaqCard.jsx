import Accordion from './Accordion'
import Header from './Header'
import { useAppGlobalContext } from './context'

function FaqCard () {
  const { panels } = useAppGlobalContext()
  return (
    <div className='faq-card flow'>
      <Header></Header>
      <Accordion questions={panels}></Accordion>
    </div>
  )
}
export default FaqCard
