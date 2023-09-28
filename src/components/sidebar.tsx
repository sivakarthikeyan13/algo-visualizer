export function Sidebar() {
  return (
    <aside className="sidebar h-full sidebar-fixed-left justify-start mt-16">
      <section className="items-center p-4">
        <div className="flex flex-col">
          <h2 className="font-medium font-mono text-lg">Path-Finding</h2>
        </div>
      </section>
      <section className="bg-gray-2 rounded-xl">
        <div className="p-4">
          <div className="w-full">
            <label className="sr-only" htmlFor="name">
              algorithm
            </label>
            <select className="select select-solid">
              <option>Option 1</option>
              <option>Option 2</option>
              <option>Option 3</option>
            </select>
          </div>

          <div className="mt-4 space-y-2">
            <button
              type="button"
              className="rounded-lg btn btn-primary btn-block"
            >
              Visualize
            </button>
            <div className="grid grid-cols-1 gap-1 sm:grid-cols-2">
              <button
                type="button"
                className="rounded-lg btn btn-solid-success"
              >
                Clear path
              </button>
              <button
                type="button"
                className="rounded-lg btn btn-solid-success"
              >
                Clear board
              </button>
            </div>
            <button
              type="button"
              className="rounded-lg btn btn-solid-secondary btn-block"
            >
              Speed
            </button>
          </div>
        </div>
      </section>
    </aside>
  );
}
