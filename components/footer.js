import Link from 'next/link'
import styled from 'styled-components'

const Footer = () => (
  <Container>
    <CopyRight>
      &copy; {new Date().getFullYear()}&nbsp;&middot;&nbsp;
      <a href="https://www.auvik.com" target="_blank" rel="noopener noreferrer">
        Auvik Networks Inc
      </a>
      . All rights reserved. Auvik is a trademark of Auvik Networks Inc.,
      registered in the United States of America and certain other countries.
      All other trademarks are the property of their respective owners.
      Reference to them does not imply association or endorsement.
    </CopyRight>
    <Up>
      <Link href="/#top" passHref>
        <UpLink>↑</UpLink>
      </Link>
    </Up>
  </Container>
)

const Container = styled.footer`
  position: relative;
  padding: 2rem;
  border-top: 1px solid var(--grey-200);

  @media (min-width: ${(props) => props.theme.screen.md}) {
    padding: 3rem 4rem;
  }

  @media (min-width: ${(props) => props.theme.screen.lg}) {
    padding: 4rem 16rem 4rem 8rem;
  }
`

const CopyRight = styled.footer`
  font-size: 1.4rem;
`

const Up = styled.footer`
  position: absolute;
  top: 4rem;
  right: 4rem;
`

const UpLink = styled.a`
  padding: 1rem;
  color: var(--grey-600);

  &:hover,
  &:focus {
    outline: none;
    color: var(--blue-700);
  }

  @media (min-width: ${(props) => props.theme.screen.md}) {
    padding: 0.25rem;
  }
`

export default Footer
