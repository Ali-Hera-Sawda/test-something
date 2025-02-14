import { motion } from 'framer-motion'
import { ChevronDown, ChevronLeft, ChevronUp } from 'lucide-react'
import { Link, Outlet, Route, Routes, useLocation } from 'react-router'

function App() {
    return (
        <Routes>
            <Route path='/' element={<Layout />}>
                <Route
                    path='/'
                    element={
                        <Link to='/other' className='relative z-10'>
                            Other
                        </Link>
                    }
                />
                <Route path='/other' element={<OtherPage />} />
            </Route>
        </Routes>
    )
}

const Layout = () => {
    const location = useLocation()
    const isOtherPage = location.pathname === '/other'

    console.log(location)

    return (
        <div className='min-h-screen bg-gray-900 text-white flex flex-col items-center justify-center'>
            {!isOtherPage && (
                <div className='fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-50'>
                    <div className='flex'>
                        <motion.div
                            layoutId='chevron-up'
                            transition={{
                                type: 'spring',
                                stiffness: 300,
                                damping: 30,
                            }}
                        >
                            <ChevronUp className='size-50 -rotate-25 translate-x-10 translate-y-1' />
                        </motion.div>
                        <motion.div
                            layoutId='chevron-down'
                            transition={{
                                type: 'spring',
                                stiffness: 300,
                                damping: 30,
                            }}
                        >
                            <ChevronDown className='size-50 -rotate-50 translate-y-25 translate-x-5' />
                        </motion.div>
                    </div>
                    <motion.div
                        layoutId='chevron-left'
                        transition={{
                            type: 'spring',
                            stiffness: 300,
                            damping: 30,
                        }}
                    >
                        <ChevronLeft className='size-50 -rotate-75 translate-x-15 translate-y-1' />
                    </motion.div>
                </div>
            )}
            <Outlet />
        </div>
    )
}

const OtherPage = () => {
    return (
        <div className='flex items-center justify-center gap-10 px-20 mt-24'>
            <div className='flex flex-col items-center justify-center'>
                <motion.div
                    layoutId='chevron-left'
                    transition={{
                        duration: 0.8,
                    }}
                >
                    <ChevronLeft className='size-50' />
                </motion.div>
                <h1 className='text-2xl font-bold mt-4'>Title</h1>
                <p className='mt-2 text-center'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea
                    adipisci, reprehenderit sequi deleniti consectetur
                    blanditiis eius modi a molestias, repudiandae perspiciatis.
                </p>
            </div>

            <div className='flex flex-col items-center justify-center'>
                <motion.div
                    layoutId='chevron-up'
                    transition={{
                        duration: 0.8,
                    }}
                >
                    <ChevronUp className='size-50' />
                </motion.div>
                <h1 className='text-2xl font-bold mt-4'>Title</h1>
                <p className='mt-2 text-center'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea
                    adipisci, reprehenderit sequi deleniti consectetur
                    blanditiis eius modi a molestias, repudiandae perspiciatis.
                </p>
            </div>

            <div className='flex flex-col items-center justify-center'>
                <motion.div
                    layoutId='chevron-down'
                    transition={{
                        duration: 0.8,
                    }}
                >
                    <ChevronDown className='size-50' />
                </motion.div>
                <h1 className='text-2xl font-bold mt-4'>Title</h1>
                <p className='mt-2 text-center'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea
                    adipisci, reprehenderit sequi deleniti consectetur
                    blanditiis eius modi a molestias, repudiandae perspiciatis.
                </p>
            </div>

            <Link
                to='/'
                className='fixed bottom-8 right-8 text-xl font-semibold hover:underline'
            >
                Back to Home
            </Link>
        </div>
    )
}
export default App
