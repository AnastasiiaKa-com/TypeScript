import style from "./ProfileCard.module.css";

interface ProfileCardProps {
  avatar: string;
  name: string;
  occupation: string;
  hobby: string;
}

function ProfileCard(obj: ProfileCardProps): JSX.Element {
  return (
    <div>
      <div className={style.profileCard}>
        <div className={style.profileCard_img}>
          <img src={obj.avatar} alt={obj.name} />
          <p>
            <span>Name: </span>
            {obj.name}
          </p>

          <p>
            <span>Occupation:</span>
            {obj.occupation}
          </p>
          <p>
            <span>Hobbies: </span>
            {obj.hobby}
          </p>
        </div>
      </div>
    </div>
  );
}
export default ProfileCard;
