import '../sass/overlayform.scss'
import InvoiceForm from './InvoiceForm'

export default function OverlayForm() {
  return (
    <div>
      <div id="overlay"></div>
      <div id="formContainer">
        <InvoiceForm />
      </div>
    </div>
  )
}