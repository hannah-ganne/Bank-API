import Main from '../components/Main'
import Accordion from '../components/Accordion'
import AccordionSection from '../components/AccordionSection'
import AccordionTitle from '../components/AccordionTitle'
import AccordionContent from '../components/AccordionContent'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDown } from '@fortawesome/free-solid-svg-icons'
import GridTitle from '../components/GridTitle'

export default function Transactions() {
    return (
        <Main className="main bg-gray">
            <div className="header ft-dark">
                <h3 className="account-title">Argent Bank Checking (x8349)</h3>
                <p className="account-amount">$2,082.79</p>
                <p className="account-amount-description">Available balance</p>
            </div>
            <Accordion>
                <AccordionSection>
                    <AccordionTitle>
                        <FontAwesomeIcon icon={faAngleDown} size="lg" />
                        <GridTitle />
                    </AccordionTitle>
                    <AccordionContent>
                        <p>Transaction Type: Electronic</p>
                        <p>Category: Food</p>
                        <p>Notes:</p>
                    </AccordionContent>
                </AccordionSection>
                <AccordionSection>
                    <AccordionTitle>
                        <FontAwesomeIcon icon={faAngleDown} size="lg" />
                        <GridTitle />
                    </AccordionTitle>
                    <AccordionContent>
                        Transaction 1
                    </AccordionContent>
                </AccordionSection>
                <AccordionSection>
                    <AccordionTitle>
                        <FontAwesomeIcon icon={faAngleDown} size="lg" />
                        <GridTitle />
                    </AccordionTitle>
                    <AccordionContent>
                        Transaction 1
                    </AccordionContent>
                </AccordionSection>
                <AccordionSection>
                    <AccordionTitle>
                        <FontAwesomeIcon icon={faAngleDown} size="lg" />
                        <GridTitle />
                    </AccordionTitle>
                    <AccordionContent>
                        Transaction 1
                    </AccordionContent>
                </AccordionSection>
                <AccordionSection>
                    <AccordionTitle>
                        <FontAwesomeIcon icon={faAngleDown} size="lg" />
                        <GridTitle />
                    </AccordionTitle>
                    <AccordionContent>
                        Transaction 1
                    </AccordionContent>
                </AccordionSection>
                <AccordionSection>
                    <AccordionTitle>
                        <FontAwesomeIcon icon={faAngleDown} size="lg" />
                        <GridTitle />
                    </AccordionTitle>
                    <AccordionContent>
                        Transaction 1
                    </AccordionContent>
                </AccordionSection>
            </Accordion>
        </Main>
    )
}