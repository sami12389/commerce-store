import getBillboard from '@/actions/getBillboard'
import getProducts from '@/actions/getProducts'
import Container from '@/components/ui/container'
import Billboard from '@/components/billboard'
import ProductList from "@/components/productList"


export const revalidate = 0

const HomePage = async() => {
  const products = await getProducts({isFeatured: true})
  const billboard = await getBillboard("781e40a5-edc5-4f72-a5ad-1afdc9bac91f")
  return(
    <Container>
      <div className = "space-y-10 pb-10">
        <Billboard data = {billboard}/>
      </div>
      <div className = "flex flex-col gap-y-8 px-4 sm:px-6 lg:px-8">
        <ProductList title = "Featured Products" items = {products}/>
      </div>
    </Container>
  )
}

export default HomePage
