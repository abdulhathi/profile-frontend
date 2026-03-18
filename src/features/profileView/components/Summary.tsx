import SectionTitle from './SectionTitle'
import summaries from '../data/summary.json'
import ReactMarkdown from 'react-markdown'

interface SummaryProps {
  fontSize?: string
}
const Summary = ({ fontSize = '12' }: SummaryProps) => {
  return (
    <div className="flex flex-col gap-1">
      <SectionTitle children="Summary" />
      <div className={`flex flex-col gap-2 text-[${fontSize}px]`}>
        {summaries[2].summary.map((s) => (
          <ReactMarkdown>{s}</ReactMarkdown>
        ))}
      </div>
    </div>
  )
}

export default Summary
