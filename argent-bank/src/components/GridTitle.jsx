export default function GridTitle({ date, description, amount, balance }) {
    

    return (
        <div data-panel-title-grid>
            <p>{date}</p>
            <p>{description}</p>
            <p>{isNaN(amount) ? `${amount}` : `$${amount}`}</p>
            <p>{isNaN(balance) ? `${balance}` : `$${balance}`}</p>
        </div>
    )
}