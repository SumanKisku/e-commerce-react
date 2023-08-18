
const AboutPage = () => {
  return (
    <div className="mx-2.5 mt-24">
      <div className="p-8 bg-gray-100">
        <h1 className="mb-4 text-2xl font-semibold">About Section for E-Commerce Project</h1>
        <p>Welcome to my E-Commerce project</p>

        <h2 className="mt-6 text-lg font-semibold">My Technology Stack:</h2>
        <ul className="pl-6 mt-2 list-disc">
          <li>React</li>
          <li>Material-UI (MUI)</li>
          <li>Tailwind CSS:</li>
        </ul>

        <h2 className="mt-6 text-lg font-semibold">Things I have learned while doing this project</h2>
        <ul className="pl-6 mt-2 list-disc">
          <li>How to use Context API</li>
          <li>How to use useReducer</li>
          <li>How to use react-router-dom for creating routes</li>
        </ul>
      </div>
    </div>
  )
}

export default AboutPage
