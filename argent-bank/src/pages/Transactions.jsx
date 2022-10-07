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
import { accounts } from '../assets/data/accounts'
import { useParams } from 'react-router-dom'
import { selectUser } from '../utils/redux/userSlice'
import { Navigate } from 'react-router-dom'

export default function Transactions() {
    const transactions = useSelector(selectTransaction)
    let { id } = useParams();
    const { checking, savings, credit } = transactions
    const account = [checking, savings, credit]

    const user = useSelector(selectUser)

    return (
        <Main className="main bg-gray">
            {!user.token && (<Navigate to="/" replace={true} />)}
            <div className="trans-header ft-dark">
                <h3 className="account-title">{accounts[id].title}</h3>
                <p className="account-amount">${accounts[id].amount}</p>
                <p className="account-amount-description">{accounts[id].description}</p>
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
                {account[id].map((item, index) => {
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