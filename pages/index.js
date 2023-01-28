import { useEffect, useContext } from 'react';
import { useRouter } from 'next/navigation';
import Head from 'next/head';
import StyledHomeContainer from '@/styles/StyledHomeContainer';
import Circles from '@/components/Circles';
import { languages, locations } from '@/config';
import { RiCloseFill } from "react-icons/ri";
import AppContext from '@/context/AppContext';


export default function Home() {
    const { fetchData, formData, setFormData, formErr, setFormErr, setResults, setLoading } = useContext(AppContext);

    const router = useRouter();

    useEffect(() => {
        const input = document.querySelectorAll('.form__validation');
        input.forEach((item) => {
            if(formErr) {
                item.style.borderBottom = '2px solid #9D4539';
            } else {
                item.style.borderBottom = '2px solid white';
            }
        })
    }, [formErr]);

    // Refresh results data and loading state
    useEffect(() => {
        setResults([]);
        setLoading(true);
    }, []);

    // Get values from form
    const onChange = (e) => {
        setFormData((prevState) => ({
            ...prevState,
            [e.target.id]: e.target.value
        }));
    }

    const onSubmit = (e) => {
        e.preventDefault();
        if(formData.name === '' && formData.language === '' && formData.location === '') {
            setFormErr(true);
        } else {
            setFormErr(false);
            fetchData();
            router.push('/Results');
        }
        setFormData({
            name: '',
            language: '',
            location: ''
        })
    }
    
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
            <form onSubmit={onSubmit}>
                <div className="form__select">
                <input onChange={onChange} id="name" value={formData.name} className='form__input form__validation' type="text" name="name" placeholder="NAME" />
                <select onChange={onChange} id="language" name="language" className="dropdown__select form__validation">
                    <option value="language" selected hidden disabled>LANGAUGE</option>
                    {languages.map((lang, index) => (
                        <option key={index} value={lang.name.toLowerCase()}>{lang.name}</option>
                    ))}
                </select>
                <input onChange={onChange} id="location" value={formData.location} className='form__input form__validation' type="text" name="location" placeholder="LOCATION" />
                </div>
                {formErr && (
                    <div className="error__msg">
                        <RiCloseFill className="error__icon" /><p>Please fill out at least one of the options above to begin your search.</p>
                    </div>
                )}
                <button type='submit' className='pill__btn' style={{ float: 'right'}}>Go</button>
            </form>
        </div>
      </StyledHomeContainer>
    </>
  )
}
