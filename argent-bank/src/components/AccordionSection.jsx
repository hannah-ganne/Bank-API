import { SectionContext } from '../utils/context/Context'
import { useState } from 'react'

export default function Section({ children, disabled }) {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <SectionContext.Provider value={{ disabled, isOpen, setIsOpen}}>
            <div>{children}</div>
        </SectionContext.Provider>
    )
    }