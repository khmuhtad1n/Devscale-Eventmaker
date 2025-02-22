import Link from "next/link";
export function Sidebar() {
  return (
    <div className="flex-1 flex">
      <aside className="w-64 border-r border-gray-200 hidden md:block">
        <div className="p-4 space-y-4">
          <nav className="space-y-1">
            <Link
              href="/dashboard/ask-ai"
              className="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-md"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 512 512"
              >
                <path
                  fill="currentColor"
                  d="M512 310.829v-73.154c-3.616-38.626-31.154-38.29-73.143-36.576v146.306c67.411 7.006 70.837-19.505 73.143-36.576M73.143 347.405V201.1C31.153 199.386 3.616 199.05 0 237.676v73.154c2.306 17.07 5.732 43.582 73.143 36.576m-54.857 91.442h475.428V512H18.286zM328.32 73.08c-11.526-94.655-130.877-100.188-144.64 0zM21.482 32.86c9.852-18.592 36.27-19.676 47.438-1.947c9.628 15.282 1.753 34.795-14.068 40.43l.005 111.467H36.571V71.394C21.558 66.182 13.321 48.26 21.482 32.86m325.947 195.67c0 21.04-22.93 34.26-41.174 23.74c-18.245-10.519-18.245-36.96 0-47.48s41.174 2.7 41.174 23.74m-169.174 23.74c18.244 10.52 41.174-2.7 41.174-23.74s-22.93-34.26-41.174-23.74c-18.245 10.52-18.245 36.961 0 47.48m242.316-87.749V420.56H91.43V164.522c0-40.399 32.75-73.153 73.142-73.153H347.43c40.393 0 73.142 32.754 73.142 73.153M169.091 268.1c30.408 17.532 68.623-4.502 68.623-39.568s-38.215-57.1-68.623-39.567s-30.407 61.602 0 79.135m178.338 61.018H164.57v36.577h182.86zm18.285-100.586c0-35.065-38.215-57.1-68.623-39.567s-30.407 61.602 0 79.135c30.408 17.532 68.623-4.502 68.623-39.568"
                />
              </svg>
              Ask AI
            </Link>
            <Link
              href="/dashboard/create"
              className="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-md"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  d="M17 22v-3h-3v-2h3v-3h2v3h3v2h-3v3zM5 20q-.825 0-1.412-.587T3 18V6q0-.825.588-1.412T5 4h1V2h2v2h6V2h2v2h1q.825 0 1.413.588T19 6v6.1q-.5-.075-1-.075t-1 .075V10H5v8h7q0 .5.075 1t.275 1z"
                />
              </svg>
              Create Event
            </Link>
            <Link
              href="/dashboard/my-events"
              className="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-md"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  fillOpacity="0"
                  stroke="currentColor"
                  strokeDasharray="64"
                  strokeDashoffset="64"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 3l2.35 5.76l6.21 0.46l-4.76 4.02l1.49 6.04l-5.29 -3.28l-5.29 3.28l1.49 -6.04l-4.76 -4.02l6.21 -0.46Z"
                >
                  <animate
                    fill="freeze"
                    attributeName="fill-opacity"
                    begin="0.6s"
                    dur="0.15s"
                    values="0;0.3"
                  />
                  <animate
                    fill="freeze"
                    attributeName="stroke-dashoffset"
                    dur="0.6s"
                    values="64;0"
                  />
                </path>
              </svg>
              My Events
            </Link>
          </nav>
        </div>
      </aside>
    </div>
  );
}
