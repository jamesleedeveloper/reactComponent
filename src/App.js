import React,{useState} from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import './App.css'
import Input from './component/input'

const App = () => {
  const [inputForm, setInputForm] = useState([
    {
      elementType: 'input',
      label:'First Name',
      type:"text",
      value: ''
    },
    {
      elementType: 'select',
      label:'Type of Car you like',
      config:{
        required:false,
        options:[
          {value:"Volvo"},
          {value:"Saab"},
          {value:"Opel"},
          {value:"Audi"},
        ]
      },
      value: ''
    }
  ])

  const handlerOnChange=(e,i)=>{
     const updateInputForm = [...inputForm]
     updateInputForm[i].value = e.target.value
     setInputForm(updateInputForm)
  }

  return (
    <Container>
      <Row>
      {inputForm.map((d,i)=>(
        <Col md={12} key={i}>
          <Input
          elementType={d.elementType}
          label={d.label}
          onChange ={(e)=>handlerOnChange(e, i)}
          config={d.config}
          />
          </Col>
      ))}
      </Row>
    </Container>
  );
}

export default App;
