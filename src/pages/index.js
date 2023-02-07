import Head from 'next/Head';
import Layout from 'components/Layout';


export default function Home() {
  return (
    <Layout title="NextJS pokapp">
      <h1 className='text-4xl mb-8 text-center'>NextJS pokapp</h1>
    </Layout>
  );
}

export async function getStaticProps(context){
  return{
    props:{}
  }
}
