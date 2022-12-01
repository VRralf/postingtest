import { app } from './index.js'
import { getAuth, signInWithPopup, GoogleAuthProvider, signOut } from 'firebase/auth';
import user from '../store/profile.js';

const auth = getAuth(app);
const provider = new GoogleAuthProvider();

const loginWithGoogle = () => {
    signInWithPopup(auth, provider)
    .then((result)=>{
        console.log('result', result);
        user.value = result.user
    })
    .catch((error)=>{
        console.warn('error',error);
    })
}

function logout(){
    signOut(auth).then(() => {
        console.log('logout');
        user.value = null
      }).catch((error) => {
        console.log('error in logout');
      });
}

export { loginWithGoogle, logout }
