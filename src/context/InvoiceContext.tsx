import React, { createContext, useState } from "react";
import { InvoiceInterface } from "../interfaces/InvoiceInterface";

interface ContextProps {
  invoice: InvoiceInterface | null;
  setInvoice: React.Dispatch<React.SetStateAction<InvoiceInterface | null>>;
}
export const Context = createContext<ContextProps | null>(null)

export default function InvoiceContext({ children }: any) {
  const [invoice, setInvoice] = useState<InvoiceInterface | null>(null)

  return (
    <Context.Provider value={{ invoice, setInvoice }}>
      {children}
    </Context.Provider>
  )
}

