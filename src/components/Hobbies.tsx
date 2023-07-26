import {SectionHeading} from "./SectionHeading";
import {Container} from "./Container";

export function Hobbies() {
    return (
        <section
            id="hobbies"
            aria-labelledby="hobbies-title"
            className="relative scroll-mt-14 py-16 sm:scroll-mt-32 sm:py-20"
        >
            <Container>
                <SectionHeading number="4" id="hobbies-title">
                    Centres d&apos;intérêt
                </SectionHeading>
            </Container>
        </section>
    )
}