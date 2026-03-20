import Divider from '../../../components/Divider'
import Experience from '../components/Experience'
import SectionTitle from '../components/SectionTitle'
import experiences from '../data/experience.json'

interface ExperiencesProps {
  start: number
  end: number
  showTitle?: boolean
  fontSize?: string
  designationFontSize?: string
  durationFontSize?: string
  showExperienceHeaders?: boolean[]
  expPoints?: number[][]
}
const Experiences = ({
  start,
  end,
  showTitle = true,
  fontSize,
  designationFontSize,
  durationFontSize,
  showExperienceHeaders,
  expPoints,
}: ExperiencesProps) => {
  console.log(showExperienceHeaders, expPoints)
  return (
    <div className="flex flex-col gap-1">
      {showTitle && <SectionTitle children="Experience" />}
      <div className="flex flex-col">
        {experiences.map(
          ({ designation, companyName, dateFrom, dateTo, location, summaryPoints }, index) =>
            index >= start &&
            index <= end && (
              <div key={index}>
                <Experience
                  key={companyName}
                  designation={designation}
                  companyName={companyName}
                  dateFrom={dateFrom}
                  dateTo={dateTo}
                  location={location}
                  summaryPoints={summaryPoints}
                  fontSize={fontSize}
                  designationFontSize={designationFontSize}
                  durationFontSize={durationFontSize}
                  showExperienceHeader={showExperienceHeaders ? showExperienceHeaders[index] : true}
                  points={expPoints ? expPoints[index] : [0, 1000]}
                />
                {index < end && <Divider marginY="my-2" />}
              </div>
            ),
        )}
      </div>
    </div>
  )
}

export default Experiences
