'use client';

export default function ButtonSubmit() {
    return (
        <nav className=''>
            <button
                type='button'
                className='h-[43px] w-[110px] rounded-full  bg-blue-1 text-white hover:bg-blue-1/90 hover:text-white '>
                <div className='align-center flex justify-center '>
                    <p className='m-[10px]'>Submit</p>
                </div>
            </button>
        </nav>
    );
}