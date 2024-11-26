import React from 'react'

export default function HomePage(props) {
    const {setAudioStream, setFile} = props;



    return (
        <main className='flex-1 p-4 flex flex-col gap-3 text-center sm:gap-4 md:gap-5 justify-center pb-20'>
            <h1 classname="font-semibold text-5xl sm:text-6xl md:text-7xl">Ulti<span className="text-blue-400 bold">Translate</span></h1>
            <h3 clasname="font-medium md:text-lg">
                Record<span classname="text-blue-400">&rarr;</span>
                Transcribe<span classname="text-blue-400">&rarr;</span>
                Translate
            </h3>
            <button clasname="flex specialBtn px-4 py-2 rounded-xl items-center text-base justify-between gap-4 mx-auto w-72 max-w-full my-4">
                <p classname='text-blue-400'>Record</p>
                <i classname="fa-solid fa-microphone-lines"></i>
            </button>
            <p classname="text-base">Or <label className='text-blue-400 cursor-pointer hover:text-blue-600 duration-200'>upload 
                <input onChange={(e) => {const tempFile = e.target.files[0] 
                setFile(tempFile)}} 
                classname="hidden" type="file" accept=".mp3,.wave"></input></label>a mp3 file</p>
            <p className='italic text-slate-500'>Free forever!</p>

        </main>
    )
}
