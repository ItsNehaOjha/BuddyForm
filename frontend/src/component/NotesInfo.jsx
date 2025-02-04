import fevicon1 from "../assets/notesIcon/fevicon1forNotes.png";
import check from "../assets/notesIcon/check.svg";
import { notesApps, notesContent, notesText } from "../constants";
import Button from "./Button";
import Section from "./Section";
import { LeftCurve, RightCurve } from "./design/NotesTools";

const Collaboration = () => {
  return (
    <Section crosses id="features">
      <div className="container lg:flex">
        <div className="max-w-[25rem]">
          <h2 className="h2 mb-4 md:mb-8 ml-3">
            Your Hub for Academic Resources
          </h2>

          <ul className="max-w-[22rem] mb-10 md:mb-14 ml-3">
            {notesContent.map((item) => (
              <li className="mb-3 py-3" key={item.id}>
                <div className="flex items-center">
                  <img src={check} width={24} height={24} alt="check" />
                  <h6 className="body-2 ml-5">{item.title}</h6>
                </div>
                {item.text && <p className="body-2 mt-3 text-n-4"></p>}
              </li>
            ))}
          </ul>

          <Button href="/notes">Buy Notes</Button>
        </div>

        <div className="lg:ml-auto xl:w-[38rem] mt-4">
          <p className="body-2 mb-8 text-n-2 md:mb-16 lg:mb-32 lg:w-[22rem] lg:mx-auto">
            {notesText}
          </p>

          <div className="relative left-1/2 flex w-[22rem] aspect-square border border-n-6 rounded-full -translate-x-1/2 scale:75 md:scale-100">
            <div className="flex w-60 aspect-square m-auto border border-n-6 rounded-full">
              <div className="w-[6rem] aspect-square m-auto p-[0.2rem] bg-conic-gradient rounded-full">
                <div className="flex items-center justify-center w-full h-full bg-n-8 rounded-full">
                  <img
                    className="w-full h-full object-cover rounded-full"
                    src={fevicon1}
                    alt="buddyForum"
                  />
                </div>
              </div>
            </div>

            <ul>
              {notesApps.map((app, index) => (
                <li
                  key={app.id}
                  className={`absolute top-0 left-1/2 h-1/2 -ml-[1.6rem] origin-bottom rotate-${
                    index * 45
                  }`}
                >
                  <div
                    className={`relative -top-[1.6rem] flex w-[3.2rem] h-[3.2rem] bg-n-7 border border-n-1/15 rounded-xl -rotate-${
                      index * 45
                    } group`} 
                    >

                    <img
                      className="m-auto cursor-pointer "
                      width={app.width}
                      height={app.height}
                      alt={app.title}
                      src={app.icon}
                    />

                  
                    <div className="absolute bottom-14 left-1/2 -translate-x-1/2 opacity-0 transition-opacity group-hover:opacity-100 bg-black text-white text-xs rounded-md px-2 py-1 z-10">
                      {app.title}
                    </div>
                  </div>
                </li>
              ))}
            </ul>

            <LeftCurve />
            <RightCurve />
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Collaboration;
