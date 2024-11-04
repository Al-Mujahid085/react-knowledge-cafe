import profile from "../../assets/images/profile.jpg"

const Header = () => {
    return (
        <div className="flex justify-between items-center ">
            <h1 className='text-5xl'>Knowledge Cafe</h1>
            <img src={profile} alt="" />
        </div>
    );
};

export default Header;