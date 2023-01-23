import React, { createContext, useState } from "react";
import { InvoiceInterface } from "../interfaces/InvoiceInterface";
import file from '../data.json'

interface ContextProps {
  invoice: InvoiceInterface | null;
  setInvoice: React.Dispatch<React.SetStateAction<InvoiceInterface | null>>;
  overlay: boolean;
  setOverlay: React.Dispatch<React.SetStateAction<boolean>>;
  data: InvoiceInterface[] | [];
  setData: React.Dispatch<React.SetStateAction<InvoiceInterface[] | []>>;
  original: InvoiceInterface[] | [];
  setOriginal: React.Dispatch<React.SetStateAction<InvoiceInterface[] | []>>;
}

export const Context = createContext<ContextProps>({} as ContextProps)

export default function InvoiceContext({ children }: any) {
  const [invoice, setInvoice] = useState<InvoiceInterface | null>(null)
  const [overlay, setOverlay] = useState<boolean>(false)
  const [data, setData] = useState<InvoiceInterface[] | []>(file)
  const [original, setOriginal] = useState<InvoiceInterface[] | []>(file)

  return (
    <Context.Provider value={{ invoice, setInvoice, overlay, setOverlay, data, setData, original, setOriginal }}>
      {children}
    </Context.Provider>
  )
}

