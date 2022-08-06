function Hello() {
  return (
    <>
      <div className="flex p-3 justify-center flex-col">
        <div className="flex justify-center">
          <p className="font-bold text-2xl">
            Welcome to MusiMatch admin dashboard
          </p>
        </div>
        <div className="flex flex-wrap flex-col items-center ">
          <p className="text-lg">
            Click on the arrow to toggle between screens
          </p>
          <p className="text-lg">
            You can go to home page (this page) or to users managment page
          </p>
        </div>
      </div>
    </>
  );
}

export default Hello;
