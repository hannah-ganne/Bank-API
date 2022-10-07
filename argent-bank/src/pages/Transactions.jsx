import Main from '../components/Main'
import Accordion from '../components/Accordion'
import AccordionSection from '../components/AccordionSection'
import AccordionTitle from '../components/AccordionTitle'
import AccordionContent from '../components/AccordionContent'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDown } from '@fortawesome/free-solid-svg-icons'
import GridTitle from '../components/GridTitle'
import { useSelector } from 'react-redux'
import { selectTransaction } from '../utils/redux/transactionSlice'
import TransactionContent from '../components/TransactionContent'


export default function Transactions() {
    const transactions = useSelector(selectTransaction)

    return (
        <Main className="main bg-gray">
            <div className="trans-header ft-dark">
                <h3 className="account-title">Argent Bank Checking (x8349)</h3>
                <p className="account-amount">$2,082.79</p>
                <p className="account-amount-description">Available balance</p>
            </div>
            <Accordion>
                <header data-accordion-header>
                    <FontAwesomeIcon icon={faAngleDown} size="lg" />
                    <GridTitle 
                        date="DATE"
                        description="DESCRIPTION"
                        amount="AMOUNT"
                        balance="BALANCE"
                    />
                </header>
                {transactions.map((item, index) => {
                    return (
                        <AccordionSection key={item.id}>
                            <AccordionTitle>
                                <GridTitle
                                    date={item.date}
                                    description={item.description}
                                    amount={item.amount}
                                    balance={item.balance}
                                />
                            </AccordionTitle>
                            <AccordionContent>
                                <TransactionContent
                                    index={index}
                                    type={item.type}
                                    category={item.category}
                                    notes={item.notes} 
                                />
                            </AccordionContent>
                        </AccordionSection>
                    )
                })}
            </Accordion>
        </Main>
    )
}