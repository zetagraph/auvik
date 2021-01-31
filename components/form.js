import styled from 'styled-components'

const Form = () => (
  <Section id="form">
    <FormContainer>
      <Title>
        Get the Use Case <span>Ebook</span>
      </Title>
      <form>
        <input
          class="text-input"
          name="firstName"
          value=""
          placeholder="First Name"
        />
        <input
          class="text-input"
          name="lastName"
          value=""
          placeholder="Last Name"
        />
        <input
          class="text-input"
          name="companyName"
          value=""
          placeholder="Company Name"
        />
        <input
          class="text-input"
          name="phoneNumber"
          value=""
          placeholder="Phone Number"
        />
        <input class="text-input" name="email" value="" placeholder="Email" />

        <select class="select-input" value="" name="destination">
          <option value="" disabled="disabled" selected="selected">
            I am:
          </option>
          <option value="MSP/VAR">An MSP or IT service provider</option>
          <option value="Corporate IT">In-house corporate IT</option>
          <option value="Home User/Student">A student or home user</option>
        </select>
        <button>Download Now</button>
        <label>
          <input class="check-box-input" type="checkbox" name="checkBox" />
          Yes, I agree to be contacted by Auvik so they can share product and
          industry resources with me.
        </label>
      </form>
      <LegalText>
        By submitting this form, I acknowledge I've reviewed and accepted{' '}
        <a>Auvik's privacy notice</a>,{' '}
        <span>
          which details how my personal information will be processed.
        </span>
      </LegalText>
    </FormContainer>
  </Section>
)


const Section = styled.section`
  padding: 4rem;
  background-color: #6c3682;
  @media (min-width: ${(props) => props.theme.screen.md}) {
    padding: 6rem 4rem;
  }

  @media (min-width: ${(props) => props.theme.screen.lg}) {
    padding: 10rem 8rem;
  }
`

const Title = styled.h2`
  text-align: center;
  margin-bottom: 5rem;
  font-size: 4rem;
  line-height: 1;
  font-weight: 800;
  color: var(--white);

  @media (min-width: ${(props) => props.theme.screen.lg}) {
    font-size: 6rem;
  }
  span {
    color: #f1c40f;
  }
`

const FormContainer = styled.div`
  margin: 0 auto;

  @media (min-width: ${(props) => props.theme.screen.md}) {
    width: 55%;
  }

  .text-input {
    display: block;
    width: 100%;
    padding: 2rem;
    margin-bottom: 2rem;
    border: none;
    font-size: 1.8rem;
  }

  .select-input {
    display: block;
    width: 100%;
    padding: 2rem;
    margin-bottom: 3rem;
    border: none;
    font-size: 1.8rem;
    color: #757575;
  }

  button {
    display: block;
    width: 100%;
    padding: 2rem;
    margin-bottom: 3rem;
    border: none;
    border-radius: 4px;
    background-color: var(--blue-50);
    color: var(--white);
    font-size: 2rem;
    font-weight: 800;
    cursor: pointer;
    transition: 0.3s;

    &:hover {
      background-color: #f1c40f;
    }
  }

  .check-box-input {
    border: none;
    margin-right: 1rem;
  }

  label {
    color: var(--white);
  }
`

const LegalText = styled.div`
  padding-top: 1rem;
  font-size: 1.6rem;
  color: var(--white);

  a {
    color: #f1c40f;
  }
`

export default Form
