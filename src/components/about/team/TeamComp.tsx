import { TeamData } from "./TeamData"

const TeamComp = () => {
  return (
      <div className=" bg-black h-full">
          
          
          <div className="flex flex-col text-center  pt-6">
              <h1 className="text-lg text-sky-400">Meet Our Team</h1>
              <h1 className="text-2xl text-white">We've Exclusive Team member</h1>
              <h1 className="text-2xl text-white">Meet our Professionals</h1>
          </div>
          <div className="flex  mt-[100px] pb-16 ">
          {
                  TeamData.map((item,index) => (
                      <div key={index} className="m-4 p-4 rounded-sm shadow-sm shadow-black  bg-white ">
                          <h1 className="font-semibold	 text-center	">{item.name}</h1>
                          <p className="pl-4 pt-2">{item.role}</p>                              
                              <img src={item.img} className="mt-16 shadow-sm shadow-black" />
                                                      
              </div> 
          ))    
            }  
          </div>
         
    </div>
  )
}

export default TeamComp
