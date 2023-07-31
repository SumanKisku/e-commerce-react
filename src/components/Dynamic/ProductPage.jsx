import { useParams } from "react-router-dom";

const ProductPage = () => {
  const { id } = useParams();
  return (
    <div className="mt-20 text-red-600">ProductPage: {id}</div>
  )
}

export default ProductPage
