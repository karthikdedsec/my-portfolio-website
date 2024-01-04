import WorkImg from "../assets/projects/workImg.png";
import WorkImg2 from "../assets/projects/workImg2.png";
import WorkImg3 from "../assets/projects/workImg3.png";
import WorkImg4 from "../assets/projects/workImg4.png";
import WorkImg5 from "../assets/projects/workImg5.png";
import WorkImg6 from "../assets/projects/workImg6.png";
import WorkImg7 from "../assets/projects/workImg7.png";
import WorkImg8 from "../assets/projects/workImg8.png";

export default function Work() {
  return (
    <div name="work" className="w-full md:h-screen text-gray-300 bg-[#0a192f]">
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold font-realtor inline border-b-4 text-gray-300 border-pink-600">
            Works
          </p>
          <p className="py-6 font-realtor">
            // Check out some of my recent works
          </p>
        </div>

        {/* container */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 ">
          {/* Grid item */}
          <div
            style={{ backgroundImage: `url(${WorkImg7})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* hover effect */}
            <div className="mx-4 opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold font-realtor text-white tracking-wider">
                Netflix clone using Reactjs , Tailwind css, javascript and
                firebase
              </span>
              <div className="pt-8 text-center">
                <a href="https://netflix-clone-react-adfdd.web.app/">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold font-realtor text-lg">
                    Demo
                  </button>
                </a>
                <a href="https://github.com/karthikdedsec/realtor-cl-react">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold font-realtor text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div
            style={{ backgroundImage: `url(${WorkImg8})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* hover effect */}
            <div className="mx-4 opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold font-realtor text-white tracking-wider">
                Nike site Created using Reactjs and Tailwindcss and included
                animation and dark mode
              </span>
              <div className="pt-8 text-center">
                <a href="https://nike-website-iota.vercel.app/">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold font-realtor text-lg">
                    Demo
                  </button>
                </a>
                <a href="https://github.com/karthikdedsec/Nike-website">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold font-realtor text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>

          <div
            style={{ backgroundImage: `url(${WorkImg})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* hover effect */}
            <div className="mx-4 opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold font-realtor text-white tracking-wider">
                Realestate site using Reactjs, firebase and tailwind
              </span>
              <div className="pt-8 text-center">
                <a href="https://realtor-cl-react.vercel.app/">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold font-realtor text-lg">
                    Demo
                  </button>
                </a>
                <a href="https://github.com/karthikdedsec/realtor-cl-react">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold font-realtor text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div
            style={{ backgroundImage: `url(${WorkImg2})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* hover effect */}
            <div className="mx-4 opacity-0 group-hover:opacity-100">
              <span className=" text-2xl font-bold font-realtor text-white tracking-wider">
                Memory Game using Reactjs
              </span>
              <div className="pt-8 text-center">
                <a href="https://memory-game-8551a.web.app/">
                  <button className="text-center font-realtor rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Demo
                  </button>
                </a>
                <a href="https://github.com/karthikdedsec/memory-game-react">
                  <button className="text-center font-realtor rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div
            style={{ backgroundImage: `url(${WorkImg6})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* hover effect */}
            <div className="mx-4 opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold font-realtor text-white tracking-wider">
                Online job portal site using Reactjs, Tailwind css and firebase.
              </span>
              <div className="pt-8 text-center">
                <a href="https://job-portal-website-five.vercel.app/">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold font-realtor text-lg">
                    Demo
                  </button>
                </a>
                <a href="https://github.com/karthikdedsec/realtor-cl-react">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold font-realtor text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div
            style={{ backgroundImage: `url(${WorkImg3})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* hover effect */}
            <div className="mx-4 opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-realtor font-bold text-white tracking-wider">
                Project management site using Reactjs and firebase
              </span>
              <div className="pt-8 text-center">
                <a href="https://thecodehub-fdc5e.web.app/login">
                  <button className="text-center font-realtor rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Demo
                  </button>
                </a>
                <a href="/">
                  <button className="text-center font-realtor rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
          {/* <div
            style={{ backgroundImage: `url(${WorkImg4})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
           
            <div className="mx-4 opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-realtor font-bold text-white tracking-wider">
                Transaction tracker using Reactjs and firebase
              </span>
              <div className="pt-8 text-center">
                <a href="https://mymoney-c479c.web.app/login">
                  <button className="text-center font-realtor rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Demo
                  </button>
                </a>
                <a href="https://github.com/karthikdedsec/finance-tracker">
                  <button className="text-center font-realtor rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div> */}
          {/* <div
            style={{ backgroundImage: `url(${WorkImg5})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            
            <div className="mx-4 opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold font-realtor text-white tracking-wider">
                Cooking recipes page using Reactjs and firebase
              </span>
              <div className="pt-8 text-center">
                <a href="https://cooking-book-site-63329.web.app/">
                  <button className="text-center font-realtor rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Demo
                  </button>
                </a>
                <a href="https://github.com/karthikdedsec/cooking-book-revisited-firebase-v9-">
                  <button className="text-center font-realtor rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
}
