import React,{useState} from 'react'

interface Product {
    id: number;
    name: string;
    price: number;
}


const ManageState:React.FC = () => {
    const [count, setCount] = useState<number>(0);
    const [name, setName] = useState<string>('');
    const [user, setUser] = useState<{ id: number, name: string } | null>(null); 
    
    const [products, setProducts] = useState<Product[]>([{id:101,name:'tv',price:5000}]);

    const incrementCount = () => {
        setCount(count + 1);
        setProducts(prev=>[...prev,{id:102,name:'laptop',price:6000}])

    };

  return (
    <div>

<ul>
      {products.map((item) => (
        <li key={item.id}>{item.name}</li>
      ))}
    </ul>

<p>Count: {count}</p>
                <button onClick={incrementCount}>Increment</button>

                {user && (
                    <p>User Name: {user.name}</p>
                )}

    </div>
  )
}

export default ManageState