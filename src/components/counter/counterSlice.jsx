import { createSlice } from '@reduxjs/toolkit';

export const initialState= {
    visor: '',
    opera:'',
    memo: '',
    operou:false
  }

function igualar(state){
  if(state.memo =='')
    state.memo = state.visor;
  if(state.opera == '')
    state.visor = state.memo;
  else{
    switch(state.opera){
      case '+':
        state.memo = String(Number(state.memo)+Number(state.visor));            
        break;
      case '-':
        state.memo = String(Number(state.memo)-Number(state.visor));
        break;
      case '*':
        state.memo = String(Number(state.memo)*Number(state.visor));
        break;
      case '/':        
        if(state.visor == '0'){
          state.visor = 'ERRO';
        }
          
        else
          state.memo = String(Number(state.memo)/Number(state.visor));
        break;
      case '%':
        state.memo = String(Number(state.memo)%Number(state.visor));
        break;
    }
    state.opera = '';
    state.visor = state.memo;
  }
}

export const counterSlice = createSlice({
  //aki fica os reducers
  name : 'counter',
  initialState,
  reducers:{

    zerar: (state) => {
      state.visor = '';
      state.memo = '';
      state.opera = '';
    },
    operador:(state,action) => {
      igualar(state);
      state.opera = String(action.payload);
      state.operou = true;
    },

    igual: (state) => {
      igualar(state);
      state.operou = true;
    }

    ,
    numero: (state,action) =>{
      if(state.visor == '0' || state.visor =='ERRO' || state.operou)
        state.visor = String(action.payload);        
      else
        state.visor = state.visor + String(action.payload)
      state.operou = false;
    }

  }

})

export const{zerar,numero,igual,operador} = counterSlice.actions;

export const selectCount = state => state.counter.visor;

export default counterSlice.reducer;