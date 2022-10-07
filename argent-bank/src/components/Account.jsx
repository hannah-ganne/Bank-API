import Button from './Button'
import { useNavigate } from 'react-router-dom'

export default function Account({ index, title, amount, description }) {
    const navigate = useNavigate()
    const viewTransaction = () => {
        navigate(`/transactions/${index}`)
    }

    return (
    <>
        <div className="account-content-wrapper">
            <h3 className="account-title">{title}</h3>
            <p className="account-amount">{`$${amount.toFixed(2)}`}</p>
            <p className="account-amount-description">{description}</p>
        </div>
        <div className="account-content-wrapper cta">
            <Button className="transaction-button" label="View Transactions" onClick={viewTransaction} />
        </div>
    </>    
    )
}