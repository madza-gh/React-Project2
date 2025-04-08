type Post = {
  id: number;
  title: string;
  text: string;
};

type PostsProps = {
  posts: Post[];
};

function PostList({ posts }: PostsProps) {
  return (
    <div>
      <ul>
        {posts.map((item)=>(
            <li key={item.id}>
                <h2>{item.title}</h2>
                <p>{item.text}</p>
            </li>
        ))}
      </ul>
    </div>
  );
}

export default PostList;
