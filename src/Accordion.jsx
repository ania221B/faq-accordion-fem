import AccordionPanel from './AccordionPanel'

function Accordion ({ questions }) {
  return (
    <div className='accordion'>
      {questions.map(question => {
        return <AccordionPanel {...question} key={question.id}></AccordionPanel>
      })}
    </div>
  )
}
export default Accordion
