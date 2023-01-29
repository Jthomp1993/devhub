import { useEffect, useContext } from 'react';
import { useRouter } from 'next/navigation';
import Head from 'next/head';
import StyledHomeContainer from '@/styles/StyledHomeContainer';
import Circles from '@/components/Circles';
import { languages, locations } from '@/config';
import { RiCloseFill } from "react-icons/ri";
import { IoIosArrowDown } from "react-icons/io";
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
    }, [setResults, setLoading]);


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
        setTimeout(() => {
            setFormData({
                name: '',
                language: '',
                location: ''
            })

        }, 1000)
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
        <div className="block"></div>
        <Circles />
        <div className="heading">
            <h2>SOURCE DEVELOPERS FROM ACROSS THE GLOBE.</h2>
            <p>DevHub allows you to find developers from across the globe depending on their name, programming language and location.</p>

            <p className='search'><strong>Please fill in at least one of the options below to begin your search.</strong></p>
        </div>
        <div className="form__wrapper">
            <form onSubmit={onSubmit}>
                <input onChange={onChange} id="name" value={formData.name} className='form__input form__validation' type="text" name="name" placeholder="NAME" />
                <div className="form__select"> 
                    <select onChange={onChange} value={formData.language} id="language" className="dropdown__select form__validation">
                        <option value="" disabled="disabled">LANGAUGE</option>
                        {languages.map((lang, index) => (
                            <option key={index} value={lang.name.toLowerCase()}>{lang.name}</option>
                        ))}
                    </select>
                    <span className='arrow'>
                        <IoIosArrowDown />
                    </span>
                </div>
                <input onChange={onChange} id="location" value={formData.location} className='form__input form__validation' type="text" name="location" placeholder="LOCATION" />
                
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
