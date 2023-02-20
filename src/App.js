import { Button } from "react-bootstrap";

function App() {
  return (
    <div className='App'>
      <h2 className=''>Hello</h2>
      <h1 class='animate__animated animate__bounce'>An animated element</h1>
      <Button as='a' variant='primary'>
        Button as link
      </Button>
      <div>
        <i class='fa-sharp fa-solid fa-location-dot'></i>
      </div>
    </div>
  );
}

export default App;
