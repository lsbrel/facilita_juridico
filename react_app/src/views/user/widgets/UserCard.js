export default function ({ data, callbackFunction }) {
  return (
    <>
      <div className="flex flex-row gap-4 items-center w-2/4 mx-auto shadow-md p-4 rounded-md">
        <span className="text-xl ml-3">{data.name}</span>
        <span className="text-md ml-3">{data.email}</span>
        <span className="text-md">{data.phone}</span>
        <button
          className="ml-auto text-white bg-red-500 hover:bg-red-600 focus:outline-none focus:ring-4  font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 "
          onClick={() => callbackFunction(data.id)}
        >
          Deletar
        </button>
      </div>
    </>
  );
}
