import { useRef } from "react";
import { Outlet } from "react-router-dom";
import Header from "./components/Header";

const App = () => {
  const wrapperRef = useRef<HTMLDivElement>(null!);
  return (
    <main className="w-screen h-screen bg-portfolio overflow-hidden ">
      <section className="overflow-hidden w-full h-full">
        <div className="relative container lg:max-w-200 p-2 pt-0 h-full mx-auto ">
          <div
            ref={wrapperRef}
            className="flex flex-col items-center gap-y-4 w-full h-full overflow-auto overflow-x-hidden scrollbar"
          >
            <Header wrapperRef={wrapperRef} />
            <div className="w-11/12 h-full px-3 flex flex-col gap-y-4">
              <Outlet />
              {/* <footer className="text-center te xt-small text-secondary">
                <span>Copyright@Harish ravi-2026</span>
              </footer> */}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};
export default App;
