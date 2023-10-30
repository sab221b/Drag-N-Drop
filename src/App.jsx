import './App.css';
import DraggableContainer from './DraggableContainer/DraggableContainer';
import CustomComponent from './CustomComponent/CustomComponent';

function App() {
  return (
    <div className="container">
      <p>Drag & Drop Elements</p>
      <DraggableContainer>
        {/* child - 1 */}
        <button className='btn btn-secondary'>{"Button"}</button>
        {/* child - 2 */}
        <div class="form-group col-10">
          <label for="exampleInputEmail1">Email address</label>
          <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
        </div>
        {/* child - 3 */}
        <h4 className='m-0'>This is a heading</h4>
        {/* child - 4 */}
        <CustomComponent />
        {/* child - 5 */}
        <div class="form-check">
          <input type="checkbox" class="form-check-input" id="exampleCheck1" />
          <label class="form-check-label" for="exampleCheck1">Check me out</label>
        </div>
      </DraggableContainer>
      <br />
    </div>
  );
}

export default App;
