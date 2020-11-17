import './Counter.css';
import{zerar,numero,selectCount, igual, operador} from './counterSlice';
import React,{Component, useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';


export  function Counter (){
    const visor = useSelector(selectCount);//mudar funcao de dentro

    const dispatch = useDispatch();
    //const [incrementAmount,setIncrementAmount] =useState('2'); // vai usar???

    return(
        <div className='calc rounded'>
            <div className='rounded text-right'  id='visor'>{visor}</div>
            <button className='btn btn-danger' onClick={() => dispatch(zerar())} id='zerar'>C</button>
            <button className='btn btn-warning' value='%' onClick={e => dispatch(operador(e.target.value))} id='modulo'>%</button>
            <button className='btn btn-warning' value='/' onClick={e => dispatch(operador(e.target.value))} id='dividir'>/</button>
            <button className='btn btn-warning' value='*' onClick={e => dispatch(operador(e.target.value))} id='mult'>*</button>
            <button className='btn btn-warning' value='-' onClick={e => dispatch(operador(e.target.value))} id='menos'>-</button>
            <button className='btn btn-warning' value='+' onClick={e => dispatch(operador(e.target.value))} id='mais'>+</button>
            <button className='btn btn-success' onClick={() => dispatch(igual())} id='igual'>=</button>
            <button className='btn btn-primary' value='1' onClick={e =>dispatch(numero(e.target.value))} id='um'>1</button>
            <button className='btn btn-primary' value='0' onClick={e =>dispatch(numero(e.target.value))} id='zero'>0</button>
            <button className='btn btn-primary' value='2' onClick={e =>dispatch(numero(e.target.value))} id='dois'>2</button>
            <button className='btn btn-primary' value='3' onClick={e =>dispatch(numero(e.target.value))} id='tres'>3</button>
            <button className='btn btn-primary' value='4' onClick={e =>dispatch(numero(e.target.value))} id='quatro'>4</button>
            <button className='btn btn-primary' value='5' onClick={e =>dispatch(numero(e.target.value))} id='cinco'>5</button>
            <button className='btn btn-primary' value='6' onClick={e =>dispatch(numero(e.target.value))} id='seis'>6</button>
            <button className='btn btn-primary' value='7' onClick={e =>dispatch(numero(e.target.value))} id='sete'>7</button>
            <button className='btn btn-primary' value='8' onClick={e =>dispatch(numero(e.target.value))} id='oito'>8</button>
            <button className='btn btn-primary' value='9' onClick={e =>dispatch(numero(e.target.value))} id='nove'>9</button>
        </div>
    )

}