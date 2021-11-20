import Layout from "../../components/Layout";

const articles = ({ posts }) => {
  return (
    <div className='box-border p-5'>
      <Layout>
        <p
          className='mt-40 m-auto text-center font-bold text-center'
          style={{ fontFamily: "Noto Serif JP" }}
        >
          Coming soon
        </p>
      </Layout>
    </div>
  );
};

export default articles;
