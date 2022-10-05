import { SectionContext } from "../utils/context/Context"
import { useContext } from "react"

export default function Title({ children }) {
    let { disabled, isOpen, setIsOpen } = useContext(SectionContext)
    
    return (
        <div
            data-panel-title
            className={
            disabled ? 'disabled' : isOpen ? 'expanded' : 'folded'
            }
            onClick={() => {
                if (!disabled) {
                setIsOpen(prev => !prev)
            }
        }}
        >
            {children}
        </div>
    )
    }