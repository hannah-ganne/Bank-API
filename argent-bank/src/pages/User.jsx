import Main from '../components/Main'
import Button from '../components/Button'
import Section from '../components/Section'
import Account from '../components/Account'

export default function User() {
    return (
        <Main className="main bg-dark">
            <div class="header">
                <h1>Welcome back<br />Tony Jarvis!</h1>
                <Button className="edit-button" label="Edit Name" />
            </div>
            <h2 class="sr-only">Accounts</h2>
            <Section className="account">
                <Account />
            </Section>
            <Section className="account">
                <Account />
            </Section>
            <Section className="account">
                <Account />
            </Section>
        </Main>
    )
}