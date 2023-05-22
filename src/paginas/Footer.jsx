const Footer = () => {
  return (
    <footer className="w-full py-5 sm:py-10 px-4 bg-gray1200">
      <div className="flex flex-col-reverse sm:flex-row md:justify-between lg:justify-around">
        <div className="relative mt-14 sm:mt-0 px-5 flex flex-col justify-center items-center text-gray-500">
          <h1 className="font-title text-4xl text-center font-semibold mt-auto">
            Logo
          </h1>
            <span className="py-4 text-xs">
              &copy;2023, Daiana Olivares All Rights Reserved.
            </span>
          <span
            className="sm:hidden absolute -top-4 left-1/2 w-1/4 h-px bg-gray-400 transform -translate-x-1/2"
            aria-hidden="true"
          />
        </div>
        <div className="grid grid-cols-2 gap-5 text-gray-400">
          <div className="col-span-2 md:col-span-1 pb-0 md:py-3 px-4 flex flex-col items-center sm:items-start">
            <h3 className="py-1.5 md:py-4 text-xl text-gray-500 font-bold tracking-wide">
              Correo
            </h3>
            <p className="inline-flex justify-center sm:justify-start text-sm text-gray-400 font-medium">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="mr-1 h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
              </svg>
              <a href="#email">entrenaya@sports.com</a>
            </p>
          </div>
          <div className="col-span-2 md:col-span-1 pb-0 md:py-3 px-4 flex flex-col items-center sm:items-start">
            <h3 className="py-1.5 md:py-4 text-xl text-gray-500 font-bold tracking-wide">
              Contacto
            </h3>
            <p className="inline-flex justify-center sm:justify-start text-sm text-gray-400 font-bold">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="mr-1 h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                />
              </svg>
              <span>xxx-xxx-xxxx</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
