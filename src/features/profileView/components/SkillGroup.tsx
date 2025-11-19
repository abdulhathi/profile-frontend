import Headline from '../../../components/Headline'

type TechnicalSkill = {
  name: string
  experience_years: number
  is_experienced: boolean
}

type SkillGroupProps = {
  skillGroupTitle?: string
  skills: TechnicalSkill[]
  fontSize?: string
}

const SkillGroup = ({ skillGroupTitle, skills, fontSize = '12' }: SkillGroupProps) => {
  const isExperienced = skills.some((s) => s.is_experienced)
  if (!isExperienced) return <></>
  return (
    <div className="flex flex-col gap-0 font-normal">
      <Headline fontSize='12' className="font-medium text-[#458EF7]">{skillGroupTitle}</Headline>
      <div className={`text-[${fontSize}px] flex flex-row flex-wrap gap-1`}>
        {skills.map(
          ({ name, is_experienced }, index) =>
            is_experienced && (
              <div className="border-gray-400 font-semibold border-[1px] px-1" key={index}>
                {name}
              </div>
            )
        )}
      </div>
    </div>
  )
}

export default SkillGroup
