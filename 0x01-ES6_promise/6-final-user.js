import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

function handleProfileSignup(firstName, lastName, fileName) {
  const singup = signUpUser(firstName, lastName);
  const photo = uploadPhoto(fileName);

  return Promise.allSettled([singup, photo])
    .then((results) => results.map((result) => {
      if (result.status === 'fulfilled') {
        return { status: result.status, value: result.value };
      }
      return { status: result.status, value: result.reason };
    }));
}
export default handleProfileSignup;
