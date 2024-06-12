import PartnerImage from "../../../assets/FunFacts/groupteam.jpeg"

const FunFactsComp = () => {
  return (
      <div className="bg-black">
          <div className="flex justify-around text-white bg-black ">
              <div className="flex flex-col">
                  <h2 className="text-lg">Company Fun Fact</h2>
                  <p className="text-3xl">Behind the Scenes</p>
                  <p className="text-3xl">Surprising Fun Facts</p>
                  <p className="text-3xl">About Presence Software</p>
              </div>
              <div className="flex flex-col ">
                  <h2 className="text-5xl pb-3 font-semibold">5k+</h2>
                  <p>Project Complete</p>
              </div>
              <div className="flex flex-col">
                  <h2 className="text-5xl pb-3 font-semibold">3k+</h2>
                  <p>Satisficed Clients</p>
              </div>
              <div className="flex flex-col">
                  <h2 className="text-5xl pb-3 font-semibold">85k+</h2>
                  <p>Awards Winning</p>
              </div>
          </div>

          <div>
              <img src={PartnerImage}  className=" w-full bg-cover	 mt-20"/>
          </div>
      
    </div>
  )
}

export default FunFactsComp
