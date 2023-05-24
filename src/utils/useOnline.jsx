import { useState } from "react"




const useOnline = () => {

    const [isOnline, setIsOnline] = useState(true)

    
         {
            (!isOnline)?setIsOnline(false):setIsOnline(true)
         }
       

    return isOnline
}

export default useOnline