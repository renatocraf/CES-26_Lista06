import './Calc.css'
import React,{Component, useReducer} from 'react'

export default class Calc extends Component{

render(){
    return(
        <div className='calc rounded'>
            <div className='rounded text-right'  id='visor'>visor</div>
            <button className='btn btn-primary'id='zerar'>C</button>
            <button className='btn btn-primary'id='modulo'>%</button>
            <button className='btn btn-primary'id='dividir'>/</button>
            <button className='btn btn-primary'id='mult'>*</button>
            <button className='btn btn-primary'id='menos'>-</button>
            <button className='btn btn-primary'id='mais'>+</button>
            <button className='btn btn-primary'id='igual'>=</button>
            <button className='btn btn-primary'id='zero'>0</button>
            <button className='btn btn-primary'id='um'>1</button>
            <button className='btn btn-primary'id='dois'>2</button>
            <button className='btn btn-primary'id='tres'>3</button>
            <button className='btn btn-primary'id='quatro'>4</button>
            <button className='btn btn-primary'id='cinco'>5</button>
            <button className='btn btn-primary'id='seis'>6</button>
            <button className='btn btn-primary'id='sete'>7</button>
            <button className='btn btn-primary'id='oito'>8</button>
            <button className='btn btn-primary'id='nove'>9</button>
        </div>
    )
}


}