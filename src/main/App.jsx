import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Header from '../components/templates/Header'
import {Counter} from '../components/counter/Counter'



export default props=>
<div className="app">
    <Header></Header>
    <Counter></Counter>
</div>
