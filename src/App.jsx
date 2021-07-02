import logo from './logo.svg';
import './App.css';
import { Button } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="container">

      <div className="row">
        <div className="col-xs-6 col-sm-6 col-md-6 col-xlg-6">1</div>
        <div className="col-xs-6 col-sm-6 col-md-6 col-xlg-6">2</div>
      </div>

      <div className="row">
        <div className="col-xs-6 col-sm-6 col-md-6 col-xlg-6">3</div>
        <div className="col-xs-6 col-sm-6 col-md-6 col-xlg-6">4</div>
      </div>

      <div className="row">
        <div className="col-xs-6 col-sm-6 col-md-6 col-xlg-6">
          <p className="">你好, React</p>
        </div>

        <div className="col-xs-6 col-sm-6 col-md-6 col-xlg-6">
          <button class="btn btn-primary btn-lg" type="submit">Button</button>
        </div>
      </div>

    </div>
  );
}

export default App;
