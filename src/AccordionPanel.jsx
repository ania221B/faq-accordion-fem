import { useAppGlobalContext } from './context'

function AccordionPanel ({ id, question, answer }) {
  const { openedPanelId, togglePanel } = useAppGlobalContext()

  const isOpen = id === openedPanelId
  return (
    <article
      className='accordion__panel'
      data-state={isOpen ? 'opened' : 'closed'}
    >
      <h2 id={`panel-${id}-title`} className='accordion__title'>
        <button
          type='button'
          aria-label={isOpen ? `hide answer` : `show answer`}
          aria-controls={`accordion__content-${id}`}
          aria-expanded={isOpen}
          className='button accordion__toggle'
          onClick={() => {
            togglePanel(id)
          }}
        >
          <span>{question}</span>
          {isOpen ? (
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='30'
              height='31'
              fill='none'
              viewBox='0 0 30 31'
            >
              <path
                fill='#301534'
                d='M15 3.313A12.187 12.187 0 1 0 27.188 15.5 12.2 12.2 0 0 0 15 3.312Zm4.688 13.124h-9.375a.938.938 0 0 1 0-1.875h9.374a.938.938 0 0 1 0 1.876Z'
              />
            </svg>
          ) : (
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='30'
              height='31'
              fill='none'
              viewBox='0 0 30 31'
            >
              <path
                fill='#AD28EB'
                d='M15 3.313A12.187 12.187 0 1 0 27.188 15.5 12.203 12.203 0 0 0 15 3.312Zm4.688 13.124h-3.75v3.75a.938.938 0 0 1-1.876 0v-3.75h-3.75a.938.938 0 0 1 0-1.875h3.75v-3.75a.938.938 0 0 1 1.876 0v3.75h3.75a.938.938 0 0 1 0 1.876Z'
              />
            </svg>
          )}
        </button>
      </h2>
      <div
        className='accordion__content'
        id={`accordion__content-${id}`}
        aria-labelledby={`panel-${id}-title`}
      >
        <div className='accordion__content-wrapper'>
          <p>{answer}</p>
        </div>
      </div>
    </article>
  )
}
export default AccordionPanel
