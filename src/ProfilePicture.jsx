function ProfilePicture(){

    const imageUrl = './src/assets/github-readme.gif';

    const handleClick = () => console.log("Profile Picture Clicked!");

    return (
        <img onClick={handleClick} src={imageUrl} alt="Profile" width="400" height="250" />
    )
}
export default ProfilePicture;