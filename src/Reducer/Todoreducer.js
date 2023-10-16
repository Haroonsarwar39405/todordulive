const initialState={
    inpdata:[]
         
}

const Todoreducer=(state=initialState ,action)=>{
    switch(action.type){
   case "getdata": return{
          inpdata:[...state.inpdata,action.payload]
        }
        case "Delet":return{
          ...state,
          inpdata: state.inpdata.filter(ele => ele !== action.payload)
        }
        
        default :return state
    }
    
}
export default Todoreducer