import { useRouter } from "next/router";
import Image from "next/image";

// const Post = () => {
//   const router = useRouter();
//   const { id } = router.query;

//   return <p>Post: {id}</p>;
// };

// export default Post;

export const config = {
  runtime: "experimental-edge",
};

function Page({ data }) {
  // Render data...
  return (
    <>
      <p>Post: {JSON.stringify(data)}</p>
      <Image
        src="/feature.jpg"
        alt="Vercel Logo"
        width={650}
        height={400}
        priority
      />
    </>
  );
}

// This gets called on every request
export async function getServerSideProps(context) {
  // Fetch data from external API
  const { id } = context.query;
  try {
    const res = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`);
    const data = await res.json();
    return { props: { data } };
  } catch (error) {}

  // Pass data to the page via props
  return { props: { error } };
}

export default Page;
