import { BsInstagram } from 'react-icons/bs';
import { AiOutlineGithub } from 'react-icons/ai';
import { BiLogoLinkedin } from 'react-icons/bi';

export const Socialmedia = () => {
  return (
    <div className='app__social'>
      <div>
        <a href='https://github.com/iamajjayya'>
          <AiOutlineGithub />
        </a>
      </div>
      <div>
        <a href='https://www.linkedin.com/in/ajjayya-gv/'>
          <BiLogoLinkedin />
        </a>
      </div>
      <div>
        <a href='https://www.instagram.com/iamajayya/?hl=en'>
          <BsInstagram />
        </a>
      </div>
    </div>
  );
};

export default Socialmedia;
