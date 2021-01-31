import Link from 'next/link'
import styled from 'styled-components'
import Nav from '../components/nav'

const Header = () => (
  <Container id="top">
    <Brand>
      <img src="/images/logo.svg" alt="logo" />
    </Brand>
    <NavContainer>
      <Nav />
      <NavLinks>
        <Link href="/" passHref>
          <SignupLink>Request Trial</SignupLink>
        </Link>
      </NavLinks>
    </NavContainer>
  </Container>
)

const Container = styled.header`
  padding: 1rem 2rem;

  @media (min-width: ${(props) => props.theme.screen.md}) {
    display: flex;
    align-items: center;
    padding: 2rem 8rem;
  }

  @media (min-width: ${(props) => props.theme.screen.lg}) {
    padding: 2rem 12rem;
  }
`
const Brand = styled.div`
  max-width: 10rem;
  margin-bottom: 2rem;

  @media (min-width: ${(props) => props.theme.screen.md}) {
    margin-bottom: 0;
  }
`

const NavContainer = styled.div`
  display: none;

  @media (min-width: ${(props) => props.theme.screen.md}) {
    display: flex;
    margin-left: auto;
  }
`

const NavLinks = styled.div`
  @media (min-width: ${(props) => props.theme.screen.md}) {
    display: flex;
    align-items: center;
  }
`

const SignupLink = styled.a`
  padding: 0.5rem 1.25rem;
  white-space: nowrap;
  background-color: var(--blue-50);
  border-radius: 4px;
  font-size: 1.6rem;
  color: var(--white);
  font-weight: 400;

  &:hover {
    background-color: #f1c40f;
  }
`

export default Header
