// create your App component here
import { useEffect, useState } from "react";

//create an app function
function App(){
    const [dogImage, setDogImage]=useState(null);
    const[isLoading, setIsLoading]=useState(true);

    useEffect(()=>{
        //fetching random image
        fetch("https://dog.ceo/api/breeds/image/random")
        .then(response=>{
            if(!response.ok){
                throw new Error("Failed to Fetch Dog Image");
            }
            return response.json();
        })
        .then(data=>{
            //Update the dog image in URL
            setDogImage(data.message);
            setIsLoading(false);
        })
        .catch(error =>{
            console.error("Error fetching dog image:");

        })
    }, []);
    return(
        <div>
            {isLoading ? (
        <p>Loading...</p>
      ) : (
        // Show dog image once fetched
        <img src={dogImage} alt="A Random Dog" />
      )}
        </div>
    )
}
export default App;
