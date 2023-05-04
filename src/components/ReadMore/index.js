import {useState} from 'react'
import {Container, Image, Button, Heading} from './styledComponents'

const ReadMore = props => {
  const {reactHooksDescription} = props
  const [readLess, limitFunction] = useState(true)
  const changeContent = () => {
    limitFunction(prevState => !prevState)
  }
  const content = readLess
    ? reactHooksDescription.slice(0, 170)
    : reactHooksDescription

  const btnText = readLess ? 'Read More' : 'Read Less'

  return (
    <Container>
      <Heading>React Hooks</Heading>
      <p>Hooks are a new addition to React</p>
      <Image
        src="https://assets.ccbp.in/frontend/hooks/react-hooks-img.png"
        alt="react hooks"
      />
      <p>{content}</p>
      <Button type="button" onClick={changeContent}>
        {btnText}
      </Button>
    </Container>
  )
}

export default ReadMore
