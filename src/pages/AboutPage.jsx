
const AboutPage = () => {
  return (
    <div class="mx-2.5 my-24" style={{ margin: "100px 20px" }}>
      <div class="bg-gray-100 p-8">
        <h1 class="text-2xl font-semibold mb-4">About Section for E-Commerce Project</h1>
        <p>Welcome to my E-Commerce project</p>

        <h2 class="text-lg font-semibold mt-6">My Technology Stack:</h2>
        <ul class="list-disc pl-6 mt-2">
          <li>React</li>
          <li>Material-UI (MUI)</li>
          <li>Tailwind CSS:</li>
        </ul>

        <h2 class="text-lg font-semibold mt-6">Things I have learned while doing this project</h2>
        <ul class="list-disc pl-6 mt-2">
          <li>How to use Context API</li>
          <li>How to use useReducer</li>
          <li>How to use react-router-dom for creating routes</li>
        </ul>
      </div>
    </div>
  )
}

export default AboutPage
