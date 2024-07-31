function App() {
  return (
    <div>
      <header className="text-base text-gray-50 grid md:grid-cols-5 gap-x-5 m-8 mb-10 items-center sm:grid-cols-1 sm:place-items-center iphone:grid-cols-1 iphone:place-items-center overflow-y-hidden h-1/2">
        <a className="text-gray-50 font-museo text-3xl font-bold">
          MC.
        </a>
        {/* <h3 className="md:col-start-3 sm:col-auto md:justify-self-end">Home</h3>
        <h3 className="md:col-start-4 sm:col-auto md:justify-self-end">About</h3>
        <h3 className="md:col-start-5 sm:col-auto md:justify-self-end">Experience</h3> */}
      </header>
      <section id="presentation" className="flex flex-col text-center overflow-y-hidden">
        <a className="flex-1 self-center"><img src="../src/assets/icon_person.png"></img></a>
        <h2 className="col-span-full grid-cols-subgrid text-2xl font-bold text-gray-100">Software and Network <br></br>Design Engineer</h2>
        <h1 className="font-museo text-6xl font-bold m-3">Bryan Daniel Macias</h1>
        <p className="text-base text-gray-50 mb-4">I am a software engineer who focuses <br></br>more on the part web</p>
      </section>
      <section className="gradient grid grid-cols-1 grid-rows-6 justify-items-center items-end h-full overflow-y-hidden">
        <div className="flex bg-inherit space-x-32 mt-5">
          <svg className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 m-2 size-12 bg-inherit" xmlns="http://www.w3.org/2000/svg" width="100" height="98" viewBox="0 0 100 98" fill="none">
            <a href="https://github.com/OneSuchDan" target="_blank">
              <path d="M50 0C22.375 0 0 22.375 0 50C0 72.125 14.3125 90.8125 34.1875 97.4375C36.6875 97.875 37.625 96.375 37.625 95.0625C37.625 93.875 37.5625 89.9375 37.5625 85.75C25 88.0625 21.75 82.6875 20.75 79.875C20.1875 78.4375 17.75 74 15.625 72.8125C13.875 71.875 11.375 69.5625 15.5625 69.5C19.5 69.4375 22.3125 73.125 23.25 74.625C27.75 82.1875 34.9375 80.0625 37.8125 78.75C38.25 75.5 39.5625 73.3125 41 72.0625C29.875 70.8125 18.25 66.5 18.25 47.375C18.25 41.9375 20.1875 37.4375 23.375 33.9375C22.875 32.6875 21.125 27.5625 23.875 20.6875C23.875 20.6875 28.0625 19.375 37.625 25.8125C41.625 24.6875 45.875 24.125 50.125 24.125C54.375 24.125 58.625 24.6875 62.625 25.8125C72.1875 19.3125 76.375 20.6875 76.375 20.6875C79.125 27.5625 77.375 32.6875 76.875 33.9375C80.0625 37.4375 82 41.875 82 47.375C82 66.5625 70.3125 70.8125 59.1875 72.0625C61 73.625 62.5625 76.625 62.5625 81.3125C62.5625 88 62.5 93.375 62.5 95.0625C62.5 96.375 63.4375 97.9375 65.9375 97.4375C75.865 94.0891 84.4917 87.7104 90.6025 79.2002C96.7133 70.6899 100 60.4769 100 50C100 22.375 77.625 0 50 0Z" fill="#71D5F4" />
            </a>
          </svg>
          <svg className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 m-2 size-12 bg-inherit" xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 100 100" fill="none">
            <a href="https://www.linkedin.com/in/danielmaciassoftware/" target="_blank">
              <path d="M0 7.1625C0 3.20625 3.2875 0 7.34375 0H92.6562C96.7125 0 100 3.20625 100 7.1625V92.8375C100 96.7938 96.7125 100 92.6562 100H7.34375C3.2875 100 0 96.7938 0 92.8375V7.1625ZM30.8937 83.7125V38.5563H15.8875V83.7125H30.8937ZM23.3938 32.3875C28.625 32.3875 31.8812 28.925 31.8812 24.5875C31.7875 20.1563 28.6313 16.7875 23.4938 16.7875C18.3563 16.7875 15 20.1625 15 24.5875C15 28.925 18.2563 32.3875 23.2937 32.3875H23.3938ZM54.0688 83.7125V58.4938C54.0688 57.1438 54.1687 55.7937 54.5687 54.8312C55.65 52.1375 58.1188 49.3437 62.2688 49.3437C67.7 49.3437 69.8687 53.4813 69.8687 59.5563V83.7125H84.875V57.8125C84.875 43.9375 77.475 37.4875 67.6 37.4875C59.6375 37.4875 56.0688 41.8625 54.0688 44.9437V45.1H53.9688L54.0688 44.9437V38.5563H39.0687C39.2562 42.7938 39.0687 83.7125 39.0687 83.7125H54.0688Z" fill="#71D5F4" />
            </a>
          </svg>
        </div>
        <p className=" static hover:text-gray-400 text-gray-100 bg-inherit md:row-span-3 sm:row-span-3 text-xl">Scroll to see more</p>

      </section>
    </div>
  )
}

export default App
