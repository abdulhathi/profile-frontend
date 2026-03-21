import EducationVerticle from '../components/EducationVerticle'
import SectionTitle from '../components/SectionTitle'

const EducationsRight = () => (
  <div className="flex flex-col gap-2 w-full">
    <SectionTitle children="Education" />
    <EducationVerticle
      name="B-Tech, Information Technology"
      dateFrom="2001"
      dateTo="2005"
      issuer="Anna University"
      location="Chennai, India"
    ></EducationVerticle>
  </div>
)

export default EducationsRight
