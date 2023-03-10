/* eslint-disable jsx-a11y/alt-text */
import { useState, useEffect } from 'react'
import Head from 'next/head'
import styles from '@/styles/Home.module.css'
import { BsFillEmojiSunglassesFill, BsSearch } from 'react-icons/bs'
import axios from 'axios'
import Popup from './Popup'
import Cart from './Cart'



export default function Home() {
  const [input, setInput] = useState('')
  const [Data, setData] = useState()
  const [show, setShow] = useState(false)

  const submitHandler = async (e) => {
    e.preventDefault()
    try {
      const res = await axios.get(`http://api.weatherapi.com/v1/current.json?key=797a7f08978c4dad85061704231502&q=${input}&aqi=no`)
      setData(res.data)
    } catch {
      setShow(true)
    }
  }
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main >
        <section className='w-full h-full flex flex-col items-center py-10 bg-[#0000004f] relative'>
          {/* logo website  */}

          <h1 className={styles.logo}><BsFillEmojiSunglassesFill className='mb-2' /> MR.WatherApp</h1>

          {/* search location  form  */}
          <form className='w-full' onSubmit={submitHandler}>
            <div className='w-[80%] lg:w-[60%] mx-auto relative'>
              <input type="text" required placeholder='Search your location' value={input} onChange={(e) => setInput(e.target.value)} className='p-4 px-8 w-full rounded-full font-bold text-md' />
              <button type='submit' className='absolute flex justify-center items-center right-3 top-[50%] translate-y-[-50%] bg-gray-300 transition-all hover:bg-gray-600 hover:text-white p-3 rounded-full px-9'>
                <BsSearch className='text-xl' />
              </button>
            </div>
          </form>

          {Data == null ?
            <div className='h-1/3 flex justify-center items-center'>
              <h1 className='text-3xl text-white'>Plase search your Location</h1>
            </div>
            :
            <section className='w-[80%] lg:w-[55%] mt-10 h-full'>
              {Data == undefined ? null : <Cart data={Data} />}
              {show ? <Popup close={() => setShow(false)} /> : null}
            </section>
          }
        </section>

      </main>
    </>
  )
}