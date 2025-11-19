import certifications from '../../profileView/data/certification.json'
import { useParams } from 'react-router-dom'
import CertificateView from '../components/CertificateView'
import { Link } from 'react-router-dom'

const certificateMap: { [key: string]: string } = {}
certifications.forEach((c) => (certificateMap[c.key] = `${c.pdf}${c.key}.pdf`))

const CertificationsView = () => {
  const { name } = useParams()
  return (
    <div className="flex flex-col gap-3 p-2">
      <div className="flex flex-row flex-wrap justify-center gap-1">
        {certifications.map(({ key, name }) => (
          <Link
            key={key}
            className="px-3 py-1 font-medium bg-amber-600 text-white rounded-[10px]"
            to={`../certifications/${key}`}
          >
            {name}
          </Link>
        ))}
      </div>
      <div className="flex flex-row justify-center p-2">
        <CertificateView path={name && certificateMap[name]} />
      </div>
    </div>
  )
}

export default CertificationsView
