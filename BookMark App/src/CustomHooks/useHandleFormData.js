export const useHandleFormData = (obj)=>{

  const jsonString = JSON.stringify(obj);
  localStorage.setItem(obj.id,jsonString);
  const jsonData = localStorage.getItem(obj.id);
  
  const data = JSON.parse(jsonData);



  return data;
 



}






