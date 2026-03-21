import { FaCalendarAlt } from 'react-icons/fa'
import Headline from '../../../components/Headline'
import { FaLocationDot } from 'react-icons/fa6'

export type EducationVerticleProps = {
  name: string
  issuer: string
  dateFrom: string
  dateTo?: string
  location: string
}

const EducationVerticle = ({ name, issuer, dateFrom, dateTo, location }: EducationVerticleProps) => {
  return (
    <div className="flex flex-col">
      <div className="flex flex-row gap-0 justify-between">
        {issuer && <div className="text-[11px]">{name}</div>}
        <Headline fontSize='10'>{issuer}</Headline>
      </div>
      <div className="flex flex-row gap-4 italic">
        {(dateFrom || dateTo) && (
          <div className="flex flex-row gap-1 items-center text-[10px]">
            <FaCalendarAlt />
            {dateFrom && dateTo ? `${dateFrom} - ${dateTo}` : dateFrom ? dateFrom : dateTo}
          </div>
        )}
        {location && (
          <div className="flex flex-row gap-1 items-center text-[10px]">
            <FaLocationDot />
            <div>{location}</div>
          </div>
        )}
      </div>
    </div>
  )
}

export default EducationVerticle
