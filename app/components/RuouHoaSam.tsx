
import ProductList from '@/app/components/ProductList';
import CategoryNav from '@/app/components/CategoryNav';
import { notFound } from 'next/navigation';
import { Category, getAllCategories, getProductsByCategory } from '@/app/components/api';
import Nav from '@/app/components/Nav';
import FooterSection from '@/app/components/Footer';
import Link from 'next/link';

interface CategoryPageProps {
  params: {
    category: string;
  };
}



export default async function RuouHoaPage() {
  const category = "che-bien";
  const categories = await getAllCategories();

  // Kiểm tra nếu thể loại tồn tại
  const categoryExists = categories.some(c => c.slug === category);
  if (!categoryExists) {
    notFound();
  }

  // Lấy thông tin thể loại hiện tại
  const currentCategory = categories.find(c => c.slug === category) as Category;
  console.log(currentCategory)
  // Fetch sản phẩm theo thể loại
  const products = await getProductsByCategory(currentCategory.name);
  console.log(products)
  return (
    <>
      <div className="h-full w-full max-w-8xl mx-auto p-2 md:p-2 mb-2 bg-blue-50">


        {/* Banner */}
        <div className="bg-gradient-to-r from-amber-50 to-amber-50 flex items-center justify-center text-black p-6 md:p-8 rounded-xl overflow-hidden relative my-4 shadow-sm">


          <div className="text-center z-10">
            <h1 className="text-xl md:text-3xl font-semibold text-blue-800 mb-2">Các sản phẩm chế biến từ Sâm Ngọc Linh</h1>
            <p className="text-sm md:text-base text-blue-700 max-w-2xl">
              Với các công dụng như chống buồn ngủ khi lái xe và bổ dưỡng cho cơ thể, chúng tôi cung cấp các sản phẩm chất lượng nhất từ Sâm Ngọc Linh đến với mọi người
            </p>
          </div>
        </div>


        {/* Product list */}
        <div className="relative rounded-xl overflow-hidden bg-white p-1">
          {products.length > 0 ? (
            <ProductList isChebien={true} products={products.slice(0, 4)} />
          ) : (
            <p className="text-center py-12 text-gray-500">
              Không có sản phẩm nào trong thể loại này.
            </p>
          )}
        </div>
        <div className="mt-6 text-center">
          <Link href="/san-pham/ruou-hoa-sam-ngoc-linh" className="inline-flex items-center rounded-md border border-transparent bg-blue-600 px-4 py-2 md:px-6 md:py-3 text-xs md:text-base font-medium text-white shadow-sm transition-colors hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
            Xem thêm sản phẩm
            <svg className="ml-3 -mr-1 h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </div>

    </>
  );
}