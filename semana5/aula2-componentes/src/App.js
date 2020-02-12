import React from 'react';
import './App.css';
import PageSection from './Components/PageSection/PageSection';
import BigCard from './Components/BigCard/BigCard';
import BigCardItem from './Components/BigCard/BigCardItem/BigCardItem';
import SmallCard from './Components/SmallCard/SmallCard';
import SmallCardItem from './Components/SmallCard/SmallCardItem/SmallCardItem';
import ImageButton from './Components/ImageButton/ImageButton';
import ImageButtonItem from './Components/ImageButton/ImageButtonItem/ImageButtonItem';



function App() {
  return (
    <div className="AppDiv">

      <PageSection>
        <h2>Dados Pessoais</h2>

        <BigCard>
          <BigCardItem title="Leonardo Crispim" description="Um estudante muito legal que perdeu muito tempo pra fazer esse exercicio" image="https://images.freeimages.com/images/small-previews/369/suit-and-tie-1239928.jpg" />
        </BigCard>

        <SmallCard>
          <SmallCardItem title ="Email: " description="Leonardo.Crispim@outlook.com.br" image="https://png.pngtree.com/svg/20160617/mail_122991.png" />
        </SmallCard>

        <SmallCard>
          <SmallCardItem title ="Endereco: " description="Av. Bancarios, 99" image="https://image.flaticon.com/icons/svg/25/25694.svg" />
        </SmallCard>

        <ImageButton>
          <ImageButtonItem description="Ver Mais" image="https://cdn0.iconfinder.com/data/icons/sharp-edges/24/sharp-icons-dropdown-512.png" />
        </ImageButton>
        
      </PageSection>

      <PageSection>
        <h2>Experiencias Profissionais</h2>

        <BigCard>
          <BigCardItem title="Future4" description="Formando desenvolvedores para o futuro!" image="https://s3.amazonaws.com/future4.com.br/static/headf4-c492117ca2373dc85ca81bf715b3dc2a.png" />
        </BigCard>

      </PageSection>

      <PageSection>

        <h3>Minhas Redes Sociais</h3>

        <ImageButton>
          <ImageButtonItem description="Facebook" image="https://cdn3.iconfinder.com/data/icons/facebook-ui-flat/48/Facebook_UI-03-512.png" />
          <ImageButtonItem description="Twitter" image="https://cdn3.iconfinder.com/data/icons/picons-social/57/43-twitter-512.png" />
          <ImageButtonItem description="Linkedin" image="https://image.flaticon.com/icons/png/512/174/174857.png" />
        </ImageButton>

      </PageSection>
      
    </div>
  );
}

export default App;
