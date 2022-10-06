import Main from '../components/Main'
import Button from '../components/Button'
import Section from '../components/Section'
import Account from '../components/Account'
import { accounts } from '../assets/data/accounts'

export default function User() {
    return (
        <Main className="main bg-dark">
            <div className="header">
                <h1>Welcome back<br />Tony Jarvis!</h1>
                <Button className="edit-button" label="Edit Name" />
            </div>
            <h2 className="sr-only">Accounts</h2>
            {accounts.map(item => {
                return (
                    <Section className="account">
                        <Account
                            title={item.title}
                            amount={item.amount}
                            description={item.description}
                        />
                    </Section>
                )
            })}
        </Main>
    )
}