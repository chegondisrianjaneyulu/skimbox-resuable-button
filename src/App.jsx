import Button from './components/Button/Button'
function App() {

  const clickedFirstButton = (event) => {
    event.preventDefault()
    alert('first Button was clicked')
  }

  const clickedSecondButton = (event) => {
    event.preventDefault()
    alert('second Button was clicked')
  }

  return (
    <div className="flex flex-row justify-center items-center min-h-screen ">
     <Button children={'Click Me!'} onClick={clickedFirstButton} types={'success'}/>
     <Button children={'Button'} onClick={clickedSecondButton} types={'danger'} />
     <Button type={'submit'} children={'Submit'} types={'primary'}/>
     <Button type={'submit'} children={'Button'} types={'transparent'}/>

    </div>
  )
}

export default App
