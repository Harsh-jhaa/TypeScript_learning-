const score : Array<number> =[]
const names : Array<string> =[]

function identityOne(val:number | string | boolean): number | string | boolean{
    return val;
}

function identityTwo(val:any):any{
    return val;
}

function identityThree<Type>(val:Type):Type{
    return val;
}
function identityFour<T>(val:T):T{
    return val;
}

interface identity{
    brand: string;
    model: string;
    year: number;
}

function identityFive<identity>(){}

function getSearchProducts<T>(products:T[]):T{
    const myIndex = 3;
    return products[myIndex];
}
// since arguments is an array of objects, we can use the generic type T and return the type of the object is also T, means the same type of the object
const  getProducts = <T>(products: T[]): T => {
  const myIndex = 3;
  return products[myIndex];
}

interface Quiz {
    name: string;
    type: string;
}

interface Course {
    author : string;
    name : string;
    subject : string;
}

class Syllable<T>{
    public cart: T[] = []

    addToCart(products:T){
        this.cart.push(products)
    }
}
    