import Head from 'next/Head';
import Layout from 'components/Layout';


export default function Home({pokemon}) {
  console.log(pokemon);
  return (
    <Layout title="NextJS pokapp">
      <h1 className='text-4xl mb-8 text-center'>NextJS pokapp</h1>
    </Layout>
  );
}

export async function getStaticProps(context){
  try{
    const res = await fetch('https://pokeapi.co/api/v2/pokemon?limit=150');
    const {results} = await res.json();
    const pokemon = results.map((result,index)=>{
    const paddedIndex = ("00"+(index+1)).slice(-3);  //001
      const image = `https://assets.pokemon.com/assets/cms2/img/pokedex/full/${paddedIndex}.png`
      return{
        ...result,
        image,
      };
    });
    return{
      props:{pokemon},
    };
  }catch(err){
    console.error(err);
  }
}
