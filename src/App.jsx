import styled from 'styled-components'
function App() {
  let FirstX = null;
  let FirstY = null;
  let EndX = null;
  let EndY = null;

  return (
    <Contenedor>
      <Span id='drag' draggable onTouchStart={(e)=>{
                FirstX = e.changedTouches[0].clientX
               FirstY = e.changedTouches[0].clientY
                
            }}
            
            onTouchEnd={(e)=>{
                
                EndX = e.changedTouches[0].clientX - FirstX;
                EndY = e.changedTouches[0].clientY - FirstY;
                document.getElementById('drag').style.transform = `translate(${EndX}px,${EndY}px)`
            }}>
        Testing Touch
      </Span>
    </Contenedor>
  )
}

const Contenedor = styled.div`
display:flex;
justify-content:center;
align-items:center;
height:100vh;
background:#91c8d057;
`
const Span = styled.h1`

`
export default App
