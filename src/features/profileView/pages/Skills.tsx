import SectionTitle from '../components/SectionTitle'
import SkillGroup from '../components/SkillGroup'
// import skills from '../data/skills.json'
import { technical_skills } from '../data/tech_skills_master.json'

interface SkillsProps {
  doubleSided?: boolean
  fontSize?: string
  start?: number
  end?: number
  showTitle?: boolean
}
const Skills = ({ doubleSided = false, fontSize, start = 0, end = 100, showTitle = true }: SkillsProps) => {
  return (
    <div className="flex flex-col gap-1 w-full">
      {showTitle && <SectionTitle children="Skills" />}
      {doubleSided ? (
        <div className="flex flex-row justify-between gap-1">
          <div className="flex flex-col w-[50%]">
            {technical_skills.map(
              ({ group, skills }, index) =>
                index < 5 && (
                  <div key={index}>
                    <SkillGroup skillGroupTitle={group} skills={skills} fontSize={fontSize} />
                  </div>
                )
            )}
          </div>
          <div className="flex flex-col w-[50%]">
            {technical_skills.map(
              ({ group, skills }, index) =>
                index >= 5 && (
                  <div key={index}>
                    <SkillGroup skillGroupTitle={group} skills={skills} fontSize={fontSize} />
                  </div>
                )
            )}
          </div>
        </div>
      ) : (
        <div className="flex flex-col gap-2">
          {technical_skills.map(
            ({ group, skills }, index) =>
              index >= start &&
              index <= end && (
                <SkillGroup key={index} skillGroupTitle={group} skills={skills} fontSize={fontSize} />
              )
          )}
        </div>
      )}
    </div>
  )
}

export default Skills
