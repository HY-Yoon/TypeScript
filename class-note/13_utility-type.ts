interface Product {
  id: number;
  name: string;
  price: number;
  brand: string;
  stock: number;
}

// 1. 상품 목록을 받아오기 위한 API 함수
function fetchProducts(): Promise<Product[]> {
  const products: Product[] = [];

  return new Promise(resolve => {
    resolve(products)
  });
}

interface ProductDetail {
  id: number;
  name: string;
  price: number;
}
/**
 * ** Pick
 * 기존에 있는 타입을 이용해 원하는 요소만 사용가능
 * 중복된 코드 작성을 줄일 수 있음
 */
// 2. 특정 상품의 상세 정보를 나타내기 위한 함수
type ShoppingItem = Pick<Product, 'id' | 'name' | 'price'>;
function displayProductDetail(shoppingItem: ShoppingItem) {
  // ..
}

// /**
//  * ** Omit
//  * 특정 타입에서 지정된 속성만 제거한 타입 정의
//  */
// interface Todo {
//   title: string;
//   description: string;
//   completed: boolean;
// }

// type TodoPreview = Omit<Todo, "description">;

// const todo: TodoPreview = {
//   title: "Clean room",
//   completed: false,
// };

// interface UpdateProduct {
//   id?: number;
//   name?: string;
//   price?: number;
//   brand?: string;
//   stock?: number;
// }

type UpdateProduct = Partial<Product>;
// 3. 특정 상품 정보를 업데이트(갱신)하는 함수
function updateProductItem(productItem: UpdateProduct) {
  // ..
}

// 4. 유틸리티 타입 구현하기 - Partial
interface UserProfile {
  username: string;
  email: string;
  profilePhotoUrl: string;
}
// interface UserProfileUpdate {
//   username?: string;
//   email?: string;
//   profilePhotoUrl?: string;
// }

// #1 별칭 활용
type UserProfileUpdate1= {
  username?:UserProfile['username'];
  email?:UserProfile['email'];
  profilePhotoUrl?:UserProfile['profilePhotoUrl'];
}

// #2 맵드타입
type UserProfileUpdate2 = {
  [p in 'username' | 'email' | 'profilePhotoUrl']?: UserProfile[p];
}
type UserProfileKeys = keyof UserProfile;

// #3 
type UserProfileUpdate3 = {
  [p in keyof UserProfile]?: UserProfile[p];
}

// #4 Partial의 구현체와 같음
type Subset<T> = {
  [p in keyof T]?: T[p];
}