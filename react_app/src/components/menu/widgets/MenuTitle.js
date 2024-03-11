export default function ({ title }) {
  return (
    <>
      <h6
        className="text-center p-2 text-xl mt-3 cursor-pointer"
        onClick={() => window.location.reload()}
      >
        {title}
      </h6>
    </>
  );
}
