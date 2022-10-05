import { useContext } from "react"
import { SectionContext } from "../context/Context"

export default function Content({ children }) {
    let { isOpen, setIsOpen } = useContext(SectionContext)
    
    return (
        <div data-panel-content className={isOpen ? 'expanded' : 'folded'}>
            {children}
        </div>
    )
    }