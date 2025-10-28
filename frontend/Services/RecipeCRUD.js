export const PostRecipe = async (formData) => {
  try {
    const res = await fetch("http://localhost:3030/api/connection/RecipeAdder", {
      method: "POST",
      body: formData,
    });

    if (!res.ok) {
      throw new Error(`HTTP error! status: ${res.status}`);
    }

    const data = await res.json();
    console.log("Recipe saved:", data.message);
    return "Data was posted successfully (From RecipeCRUD/postRecipe)";
  } catch (err) {a
    console.error("Error posting recipe:", err);
    throw err;
  }
};

export const GetRecipe = async ()=>{
  try {
    const res =  await fetch("http://localhost:3030/api/connection/GetRecipes",{
      method: "GET",
      headers:{ "Content-Type": "application/json" },
    })

    if (!res.ok){
      throw new Error(`HTTP error! Status: ${res.status}`)
    }

    const data = await res.json()
    return data

  } catch (error) {
   console.log("Error Occured while Fetching",error) 
  }
}

export const GetSingleRecipe = async(id)=>{
  try {
    const res = await fetch(`http://localhost:3030/api/connection/details/${id}`,{
    method:"GET",
    })
    const data = await res.json()
    return data
  } catch (error) {
    console.log("Error has Occured",error) 
  }

}

export const GetUserRecipes = async(id)=>{
  try {
    const res = await fetch(`http://localhost:3030/api/connection/GetRecipes`,{
    method:"GET",
    headers:{ "Content-Type": "application/json" },
    })
    const data = await res.json()
    return data;
  } catch (error) {
    console.log("Error has occured",error)
  }
}


export const DeleteRecipe = async(id)=>{
 try {
  const response = await fetch(`http://localhost:3030/api/connection/delete/${id}`,{
    method:"DELETE",
  })
  const data = await response.json()
  return data;
 } catch (error) {
  console.log("Error occured while deleting",error)
 }
}
export const UpdateRecipe = async(id,formData)=>{
  try {
    const response = await fetch(`http://localhost:3030/api/connection/update/${id}`,{  
      method:"PUT",
      body: formData,
    })
    const data = await response.json()
    return data;
  } catch (error) {
    console.log("Error occured while updating",error)
  }
}