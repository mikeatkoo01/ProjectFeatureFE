import { InstagramEmbed } from 'react-social-media-embed';

function InstaLive() {


    return (  

        <div style={{ display: 'flex', justifyContent: 'center' }}>
            <h3>Follow us on Instgram</h3><br/>
            <br/>

  <InstagramEmbed url="https://www.instagram.com/p/C4YsaO_JbUr/" width={328} />
  <InstagramEmbed url="https://www.instagram.com/p/C4hpogeS_7j/" width={328} />
  <InstagramEmbed url="https://www.instagram.com/p/C4k6nJCORsk/" width={328} />

</div>


    );
}

export default InstaLive;