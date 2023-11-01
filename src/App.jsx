import './App.css';
import DraggableContainer from './DraggableContainer/DraggableContainer';
import CustomComponent from './CustomComponent/CustomComponent';

function App() {
  return (
    <div className="container">
      <p>Drag & Drop Elements</p>
      <DraggableContainer>
        <button className='btn btn-secondary'>{"Button"}</button>
        <div className="form-group col-10">
          <label htmlFor="exampleInputEmail1">Email address</label>
          <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
        </div>
        <h4 className='m-0'>This is a heading</h4>
        <CustomComponent />
        <div className="form-check">
          <input type="checkbox" className="form-check-input" id="exampleCheck1" />
          <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
        </div>
      </DraggableContainer>
      <br />
    </div>
  );
}

export default App;
