export default function ({ callbackFunction }) {
  return (
    <div className="mb-5">
      <label className="block mb-2 text-sm font-medium text-gray-900">
        Nome
      </label>
      <input
        type="email"
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500"
        onChange={(evt) => callbackFunction(evt.target.value)}
        required
      />
    </div>
  );
}
