import { useState , useEffect, type ReactNode } from "react"
import { get } from "./util/http"
import PostList from "./components/PostList"

type Post ={
  id: number
  title: string
  text: string
}

type Data ={
  userId: number
  id: number
  title: string
  body: string
}

function App(){
  const[fetchedPosts,setFetchedPosts] = useState<Post[]>()

  useEffect(()=>{
    async function fetchData(){
      const data = await get('https://jsonplaceholder.typicode.com/posts') as Data[]

      const blogPosts: Post[] = data.map((item)=>{
        return{
          id: item.id,
          title: item.title,
          text: item.body
        }
      })
      setFetchedPosts(blogPosts)
    }
    fetchData()
  },[])

  let content: ReactNode

  if(fetchedPosts){
    content = <PostList posts={fetchedPosts}/>
  }
  
  return(

      <div>{content}</div>
 )
  
}

export default App