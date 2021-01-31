import styled from 'styled-components'

const Quote = () => (
  <QuoteSection>
    <Container>
      <QuoteWrap>
        <QuoteText>
          <p>
            "I don't have to have a tech guy go in and save a firewall
            configuration every month just to be safe. It's already being done
            automatically in Auvik. We don't have to worry about a checklist of
            things to do during the week. We know it's already taken care of.
            It's very good for efficiency."
          </p>
          <cite>— Joe Pittman | CTO, JAD Technologies</cite>
        </QuoteText>
        <QuoteImage>
          <img src="/images/joe-pittman.jpg" alt="joe-pittman" />
        </QuoteImage>
      </QuoteWrap>
    </Container>
    <QuoteNav>
      <QuoteNavLeft>&lsaquo;</QuoteNavLeft>
      <QuoteNavRight>&rsaquo;</QuoteNavRight>
    </QuoteNav>
  </QuoteSection>
)

const QuoteSection = styled.section`
  position: relative;
  padding: 8rem 4rem;
  @media (min-width: ${(props) => props.theme.screen.lg}) {
    padding: 10rem 0 14rem;
  }
`

const Container = styled.div`
  position: relative;

  @media (min-width: ${(props) => props.theme.screen.lg}) {
    width: 50%;
    margin: 0 auto;
  }
`

const QuoteWrap = styled.div`
  @media (min-width: ${(props) => props.theme.screen.md}) {
    display: flex;
    margin-bottom: 1rem;
  }
`
const QuoteText = styled.blockquote`
  margin-bottom: 2rem;

  @media (min-width: ${(props) => props.theme.screen.md}) {
    flex: 1;
    margin-right: 10rem;
    text-align: right;
  }

  p {
    margin-bottom: 3rem;
    font-size: 2rem;
    line-height: 1.25;
    font-weight: 200;
    font-style: italic;
    color: #262262;

    @media (min-width: ${(props) => props.theme.screen.lg}) {
      font-size: 3rem;
    }
  }

  cite {
    margin-right: 1rem;
    font-style: normal;
    font-size: 2rem;
  }
`

const QuoteImage = styled.div`
  display: block;
  width: 140px;
  height: 140px;
  position: relative;
  overflow: hidden;
  border-radius: 50%;

  img {
    display: inline;
    margin: 0 auto;
    height: 100%;
    width: auto;
  }
`
const QuoteNav = styled.div`
  display: none;

  @media (min-width: ${(props) => props.theme.screen.lg}) {
    display: block;
    position: absolute;
    width: 100%;
    top: 25%;

    font-size: 16rem;
    font-weight: 100;
    line-height: 1;
    cursor: pointer;
    color: var(--grey-300);
  }

  &:hover {
    color: var(--blue-50);
  }
`

const QuoteNavLeft = styled.div`
  position: absolute;
  top: 0;
  left: 4rem;
`

const QuoteNavRight = styled.div`
  position: absolute;
  top: 0;
  right: 4rem;
`

export default Quote
