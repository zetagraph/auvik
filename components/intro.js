import styled, { keyframes } from 'styled-components'
import Link from 'next/link'

const Intro = () => (
  <Section id="intro">
    <TitleWrap>
      <Title>
        <LineOne>More than just an awesome</LineOne>
        <LineTwo>Network Map</LineTwo>
      </Title>
      <SubTitle>
        See <strong>17 ways</strong> Auvik helps you gain true network
        visibility and control.
      </SubTitle>
      <CtaWrap>
        <Link href="#form" passHref>
          <Cta>Get Use Case Ebook</Cta>
        </Link>
      </CtaWrap>
    </TitleWrap>
  </Section>
)

const fadeUp = keyframes`
  100% {
    opacity: 1;
    transform: translateY(0);
  }
`

const fadeIn = keyframes`
  100% {
    opacity: 1;
  }
`

const Section = styled.section`
  padding: 6rem 0;
  background-color: #6c3682;

  @media (min-width: ${(props) => props.theme.screen.md}) {
    padding: 12rem 0;
  }
`
const TitleWrap = styled.div`
  padding: 0 2rem;
  margin: 0 auto;
  text-align: center;

  @media (min-width: ${(props) => props.theme.screen.md}) {
    max-width: 120rem;
  }
`
const Title = styled.h1`
  margin-bottom: 3rem;
  font-size: 6rem;
  line-height: 1;
  font-weight: 800;
  color: var(--white);

  @media (min-width: ${(props) => props.theme.screen.md}) {
    margin-bottom: 4rem;
    font-size: 8rem;
  }

  @media (min-width: ${(props) => props.theme.screen.md}) {
    font-size: 12rem;
    font-size: min(max(8rem, 6.8vw), 12rem);
  }
`

const LineOne = styled.div`
  opacity: 0;
  transform: translateY(100px);
  animation: ${fadeUp} 1s 0.2s cubic-bezier(0.215, 0.61, 0.355, 1) 1 forwards;
`

const LineTwo = styled.div`
  opacity: 0;
  transform: translateY(100px);
  animation: ${fadeUp} 1s 0.6s cubic-bezier(0.215, 0.61, 0.355, 1) 1 forwards;
  color: #f1c40f;
`

const SubTitle = styled.div`
  margin-bottom: 4rem;
  font-size: 2.4rem;
  line-height: 1.3;
  opacity: 0;
  animation: ${fadeUp} 1s 0.8s cubic-bezier(0.215, 0.61, 0.355, 1) 1 forwards;
  transform: translateY(100px);
  color: var(--white);

  @media (min-width: ${(props) => props.theme.screen.lg}) {
    margin: 0 auto 6rem;
    width: 50%;
    font-size: 3rem;
  }

  strong {
    white-space: nowrap;
  }
`

const CtaWrap = styled.div`
  opacity: 0;
  transform: translateY(100px);
  animation: ${fadeUp} 1s 0.8s cubic-bezier(0.215, 0.61, 0.355, 1) 1 forwards;

  @media (min-width: ${(props) => props.theme.screen.lg}) {
    margin: 0 16rem;
  }
`

const Cta = styled.a`
  display: inline-block;
  padding: 2rem 3rem;
  text-align: center;
  transition: 0.3s;
  background-color: var(--blue-50);
  border-radius: 4px;
  color: var(--white);
  font-size: 2rem;
  font-weight: 700;

  &:hover {
    background-color: var(--blue-400);
  }
`

export default Intro
