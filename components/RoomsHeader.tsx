// import { ChevronDownIcon, SearchIcon, SortAscendingIcon } from '@heroicons/react/solid'

export default function RoomsHeader() {
  return (
    <div className="px-4 pb-5 md:mt-14 border-b border-gray-200 sm:flex sm:items-center sm:justify-between">
      <h3 className="text-3xl sm:text-5xl leading-6 font-bold text-gray-900">
        Our Rooms
      </h3>
      {/* search */}
      {/* <div className="mt-7 sm:mt-0 sm:ml-4">
        <label htmlFor="search_candidate" className="sr-only">
          Search
        </label>
        <div className="flex rounded-md shadow-sm">
          <div className="relative flex-grow focus-within:z-10">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <SearchIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
            </div>
            <input
              type="text"
              name="search_candidate"
              id="search_candidate"
              className="focus:ring-indigo-500 focus:border-indigo-500 block w-full rounded-none rounded-l-md pl-10 sm:hidden border-gray-300"
              placeholder="Search"
            />
            <input
              type="text"
              name="search_candidate"
              id="search_candidate"
              className="hidden focus:ring-indigo-500 focus:border-indigo-500 w-full rounded-none rounded-l-md pl-10 sm:block sm:text-sm border-gray-300"
              placeholder="Search rooms"
            />
          </div>
          <button
            type="button"
            className="-ml-px relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-r-md text-gray-700 bg-gray-50 hover:bg-gray-100 focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500"
          >
            <SortAscendingIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
            <span className="ml-2">Sort</span>
            <ChevronDownIcon
              className="ml-2.5 -mr-1.5 h-5 w-5 text-gray-400"
              aria-hidden="true"
            />
          </button>
        </div>
      </div>
    */}
    </div>
  )
}
