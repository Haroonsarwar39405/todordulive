export const Handleonchange=(data)=>{
return {
  type:"getdata",
  payload: data
}
}
export const HandleDelet=(ele)=>{
    return{
      type:"Delet",
      payload:ele
    }
}
