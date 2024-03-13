import profile from '../../assets/img/profile.png'
const Header = () => {
    return (
        <div className=' flex justify-between items-center p-4 max-w-6xl mx-auto border-b-2'>
            <h1 className="text-4xl font-bold" >Knowlrdge cafe</h1>
            <img src={profile} alt="" />
        </div>
    );
};

export default Header;