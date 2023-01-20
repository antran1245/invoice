import React, { createContext, useState } from "react";
import { InvoiceInterface } from "../interfaces/InvoiceInterface";

interface ContextProps {
  invoice: InvoiceInterface | null;
  setInvoice: React.Dispatch<React.SetStateAction<InvoiceInterface | null>>;
  overlay: boolean;
  setOverlay: React.Dispatch<React.SetStateAction<boolean>>;
}

export const Context = createContext<ContextProps>({} as ContextProps)

export default function InvoiceContext({ children }: any) {
  const [invoice, setInvoice] = useState<InvoiceInterface | null>(null)
  const [overlay, setOverlay] = useState<boolean>(false)
  return (
    <Context.Provider value={{ invoice, setInvoice, overlay, setOverlay }}>
      {children}
    </Context.Provider>
  )
}

