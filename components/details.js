import styled from 'styled-components'
import Link from 'next/link'

const Details = () => (
  <Section id="details">
    <Container>
      <TitleWrap>
        <Title>
          ​In this <strong>ebook</strong>, you’ll learn how IT teams around the world are using
          Auvik’s <strong>network monitoring</strong> and{' '}
          <strong>management software</strong> to:
        </Title>
      </TitleWrap>
      <List>
        <ListItem><span>&#8212;</span> Find &amp; fix network issues—fast</ListItem>
        <ListItem><span>&#8212;</span> Manage network device configs effortlessly</ListItem>
        <ListItem>
          <span>&#8212;</span> Monitor app usage for bandwidth bottlenecks &amp; security
          issues
        </ListItem>
        <ListItem>
          <span>&#8212;</span> Make the case for network upgrades, with hard data
        </ListItem>
        <ListItem>… and more.</ListItem>
      </List>
    </Container>
  </Section>
)

const Section = styled.section`
  padding: 4rem 2rem;

  @media (min-width: ${(props) => props.theme.screen.md}) {
    padding: 8rem 0;
  }
`
const Container = styled.div`
  padding: 0 2rem;
  margin: 0 auto;
  text-align: center;

  @media (min-width: ${(props) => props.theme.screen.md}) {
    max-width: 80%;
  }
`

const TitleWrap = styled.div`
  text-align: center;
`
const Title = styled.h2`
  margin-bottom: 4rem;
  font-size: 4rem;
  line-height: 1;
  font-weight: 800;
  color: #6c3682;

  @media (min-width: ${(props) => props.theme.screen.md}) {
    margin-bottom: 6rem;
    font-size: 7rem;
  }

  strong {
    font-weight: 800;
    color: #262262;
  }
`

const List = styled.ul`
  list-style: none;
`

const ListItem = styled.li`
  margin-bottom: 0.5rem;
  font-size: 2rem;
  color: #262262;

  @media (min-width: ${(props) => props.theme.screen.md}) {
    font-size: 3rem;
  }

  span {
    color: var(--blue-50);
  }
`

export default Details
