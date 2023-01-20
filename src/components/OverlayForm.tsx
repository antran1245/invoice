import { useContext } from 'react'
import { Context } from '../context/InvoiceContext'
import '../sass/overlayform.scss'
import InvoiceForm from './InvoiceForm'

export default function OverlayForm() {
  const { overlay, setOverlay } = useContext(Context)
  return (
    <div style={{ display: overlay ? 'block' : 'none' }}>
      <div id="overlay" onClick={() => setOverlay(false)}></div>
      <div id="formContainer">
        <InvoiceForm />
      </div>
    </div>
  )
}