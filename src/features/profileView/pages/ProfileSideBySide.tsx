import Summary from '../components/Summary'
import Activities from './Activities'
import Certifications from './Certifications'
import Education from './Educations'
import Experiences from './Experiences'
import Projects from './Projects'
import Skills from './Skills'
import Strengths from './Strengths'
import './ProfileView.css'
import skills from '../data/skills.json'
import ProfileHeaderNew from '../components/ProfileHeaderNew'

const ProfileSideBySide = () => {
  return (
    <div className="flex flex-col profile-font-family bg-white text-black">
      <div className="flex flex-col items-center w-[828px] mt-2 h-[1026px] px-8 py-6 gap-1">
        <ProfileHeaderNew />
        <div className="flex flex-row gap-2">
          <div className="flex flex-col gap-1.5 w-[66%]">
            <Summary fontSize="11" />
            <Experiences start={0} end={2} fontSize="11" designationFontSize="12" durationFontSize="11" />
          </div>
          <div className="w-[34%]">
            <Skills fontSize="10" start={0} end={skills.length - 1} />
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center w-[828px] h-[1026px] mt-6 px-8 py-6 gap-2">
        <div className="flex flex-row gap-2 w-full">
          <div className="flex flex-col gap-2 w-[66%]">
            <Experiences
              start={3}
              end={3}
              fontSize="10"
              designationFontSize="12"
              durationFontSize="11"
              showTitle={false}
            />
            <Education />
            <Certifications />
            <Activities />
            <Strengths />
          </div>
          <div className="flex flex-col w-[34%] gap-1">
            <Projects projectsCount={10} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProfileSideBySide
