import Link from 'next/link'
import styled from 'styled-components'

const Nav = () => (
  <NavItems>
    <NavItem>
      <Link href="/" passHref>
        <NavLink>Product</NavLink>
      </Link>
    </NavItem>
    <NavItem>
      <Link href="/" passHref>
        <NavLink>For MSPs</NavLink>
      </Link>
    </NavItem>
    <NavItem>
      <Link href="/" passHref>
        <NavLink>For Business</NavLink>
      </Link>
    </NavItem>
    <NavItem>
      <Link href="/" passHref>
        <NavLink>Resources</NavLink>
      </Link>
    </NavItem>
    <NavItem>
      <Link href="/" passHref>
        <NavLink>Company</NavLink>
      </Link>
    </NavItem>
  </NavItems>
)

const NavItems = styled.ul`
  display: none;
  list-style-type: none;

  @media (min-width: ${(props) => props.theme.screen.lg}) {
    display: block;
    margin-right: 8rem;
  }
`

const NavItem = styled.li`
  position: relative;
  display: inline-block;

  &:not(:last-child) {
    margin-right: 1.8rem;
    padding-right: 2rem;

    @media (min-width: ${(props) => props.theme.screen.lg}) {
      margin-right: 2.3rem;
      padding-right: 2.5rem;
    }
  }

  &:not(:last-child):before {
    content: '';
    position: absolute;
    height: 16px;
    width: 1px;
    transform: rotate(20deg);
    background-color: var(--pink-1);
    right: 0;
    top: 25%;
  }
`

const NavLink = styled.a`
  position: relative;
  display: inline-block;
  font-size: 1.8rem;
  padding: 0.5rem;
  color: #6c3682;
  font-weight: 400;

  &:after {
    --scale: 0;
    content: '';
    position: absolute;
    left: 0;
    right: 0;
    top: 100%;
    height: 1px;
    background: var(--pink-1);
    transform: scaleX(var(--scale));
    transform-origin: var(--x) 50%;
    transition: transform 0.3s cubic-bezier(0.51, 0.92, 0.24, 1);
  }

  &:hover,
  &:focus {
    outline: none;
    color: var(--blue-50);
  }

  &:hover:after {
    --scale: 1;
  }

  @media (min-width: ${(props) => props.theme.screen.md}) {
    padding: 0 0 0.25rem;
  }
`

export default Nav
