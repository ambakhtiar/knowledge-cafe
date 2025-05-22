import profile from '../../assets/profile.png';

const Header = () => {
    return (
        <div className='flex justify-between items-center py-2 w-10/12 mx-auto'>
            <h1 className='text-4xl'>React Knowledge Cafe </h1>
            <img src={profile} alt="" />
        </div>
    );
};

export default Header;