import Head from 'next/head';
import StyledHomeContainer from '@/styles/StyledHomeContainer';
import Circles from '@/components/Circles';
import { languages, locations } from '@/config';

export default function Home() {
   
    
  return (
    <>
      <Head>
        <title>DevHub - Home</title>
        <meta name="description" content="DevHub is a web app which enables users to source developers across the globe." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <StyledHomeContainer>
        <Circles />

        <div className="heading">
            <h2>SOURCE DEVELOPERS FROM ACROSS THE GLOBE.</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>

            <p className='search'><strong>Please fill in at least one of the options below to begin your search.</strong></p>
        </div>
        <div className="form__wrapper">
            <form>
                <div className="form__select">
                <input id="name" className='form__input' type="text" name="name" placeholder="NAME" />
                <select name="language" className="dropdown__select">
                    <option className='select__placeholder' value="language" selected disabled hidden>LANGAUGE</option>
                    {languages.map((lang, index) => (
                        <option key={index} value={lang.name.toLowerCase()}>{lang.name}</option>
                    ))}
                </select>
                <select name="location" className="dropdown__select">
                    <option value="location" selected disabled hidden>LOCATION</option>
                    {locations.map((location, index) => (
                        <option key={index} value={location.name.toLowerCase()}>{location.name}</option>
                    ))}
                </select>
                </div>
            </form>
        </div>

      </StyledHomeContainer>
    </>
  )
}
