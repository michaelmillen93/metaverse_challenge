import Image from 'next/image';
import {useMoralis} from 'react-moralis';
import Avatar from './Avatar';
import ChangeUsername from './ChangeUsername';

function Header() {

    const {user} = useMoralis();

    return (
        <div className="text-pink-500 p-5 sticky top-0 z-100 bg-black shadow-sm border-b-2 border-pink-700">
            <div className="grid grid-cols-5 lg:grid-cols-6 items-end lg:items-center">

            <div className="relative h-24 w-24 mx-auto hidden lg:inline-grid">
                <Image src='https://links.papareact.com/3pi' objectFit='cover' className='rounded-full' layout='fill'/>
            </div>

            <div className="col-span-4 text-left lg:text-center">
                {/* AVATAR */}
                <div className="h-48 w-48 relative lg:mx-auto border-pink-500 border-8 rounded-full">
                    <Avatar logoutOnPress />
                </div>

                {/* WELCOME MESSAGES */}
                <h1 className="text-3xl">Welcome to the Metaverse</h1>
                {/* USERNAME */}
                <h2 className="text-5xl font-bold truncate">
                    {user.getUsername()}
                </h2>

                {/* CHANGE USERNAME COMPONENT */}
                <ChangeUsername />
            </div>
            </div>
        </div>
    )
}

export default Header
