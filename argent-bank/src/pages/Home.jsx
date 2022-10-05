import Main from '../components/Main'
import Hero from '../components/Hero'
import Section from '../components/Section'
import { features } from '../assets/data/features'
import Feature from '../components/Feature'

export default function Home() {
    return (
        <Main>
            <Hero />
            <Section className="features">
                <h2 class="sr-only">Features</h2>
                {features.map(item =>
                    <Feature
                        img={item.img}
                        alt={item.alt}
                        title={item.title}
                        description={item.description} 
                    />
                )}
            </Section>
        </Main>
    )
}