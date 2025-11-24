interface ProfileCardProps {
  imageUrl: string;
  name: string;
  title: string;
  bio: string;
}
function ProfileCard(props: ProfileCardProps) {
  return (
    <>
      <div className=" m-2 max-w-sm bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 ">
        <img
          src={props.imageUrl}
          alt="this is profile-image"
          className=" w-full h-48 object-cover"
        />
        <div className=" p-6 ">
          <h2 className=" text-2xl font-semibold text-gray-800">
            {props.name}
          </h2>
          <p className=" text-sm text-gray-500 mb-2">{props.title}</p>
          <p className=" text-gray-600 text-base">{props.bio}</p>
        </div>
      </div>
    </>
  );
}

export default ProfileCard;
