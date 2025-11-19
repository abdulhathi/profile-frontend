import { useEffect, useState } from 'react'
import { Document, Page, pdfjs } from 'react-pdf'
import { getWindowWidth } from '../../../utils/utls'

pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`

interface CertificateViewProps {
  path?: string
}
const CertificateView = ({ path }: CertificateViewProps) => {
  const [scale, setScale] = useState(getWindowWidth())

  useEffect(() => {
    const handleResize = () => {
      setScale(getWindowWidth())
    }
    // Add event listener
    window.addEventListener('resize', handleResize)

    // Cleanup the listener when window unmount
    return () => window.removeEventListener('resize', handleResize)
  }, [])
  return (
    <Document file={path}>
      <Page pageNumber={1} scale={scale} />
    </Document>
  )
}

export default CertificateView
