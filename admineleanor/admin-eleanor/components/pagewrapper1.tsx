import { ReactNode } from "react"
export default function pagewrapper({children}:{children :ReactNode}) {
    return (
      <div className="bg-slate-50  flex grow text-black">
      
     {children}
      </div>
    )
  }
  