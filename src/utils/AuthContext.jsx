import { createContext, useState, useEffect, useContext } from "react";
import { account } from "../appwriteConfig";
import { useNavigate } from "react-router-dom";
import { ID} from 'appwrite';
import AtomicSpinner from 'atomic-spinner';
import backgroundImage from '../components/background/background.jpg'


const AuthContext = createContext()

export const AuthProvider = ({children}) => {
        const navigate = useNavigate()

        const [loading, setLoading] = useState(true)
        const [user, setUser] = useState(null)

        useEffect(() => {
            //setLoading(false)
            checkUserStatus()
         }, [])

         const loginUser = async (userInfo) => {
            setLoading(true)

            console.log('userInfo',userInfo)

            try{
                let response = await account.createEmailSession(userInfo.email, userInfo.password)
                let accountDetails = await account.get();
                setUser(accountDetails)
            }catch(error){
                console.error(error)
            }
            setLoading(false)
            
         }

         const logoutUser = async () => {
            await account.deleteSession('current');
            setUser(null)
         }

         const registerUser = async (userInfo) => {
            setLoading(true)

            try{
                
                let response = await account.create(ID.unique(), userInfo.email, userInfo.password1, userInfo.name);
        
                await account.createEmailSession(userInfo.email, userInfo.password1)
                let accountDetails = await account.get();
                setUser(accountDetails)
                navigate('/')
            }catch(error){
                console.error(error)
            }
        
            setLoading(false)
         }

         const checkUserStatus = async () => {
            try{
                let accountDetails = await account.get();
                setUser(accountDetails)
            }catch(error){
                
            }
            setLoading(false)
         }

        const contextData = {
            user,
            loginUser,
            logoutUser,
            registerUser
        }

    return(
        <div className="aUTH" style={{ backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover' }}>
        <AuthContext.Provider value={contextData}>
            {loading ? (
            <div className="flex items-center justify-center h-screen">
                <AtomicSpinner
                atomSize={200}
                displayElectronPaths={true}
                displayNucleus={true}
                electronColorPalette={['#0081C9', '#5BC0F8', '#86E5FF']}
                electronPathCount={3}
                electronPathColor={'#707070'}
                electronPathWidth={0.5}
                electronsPerPath={2}
                electronSize={1.5}
                electronSpeed={0.5}
                nucleusDistanceFromCenter={2.5}
                nucleusLayerCount={2}
                nucleusParticlesPerLayer={3}
                nucleusParticleFillColor={'#707070'}
                nucleusParticleBorderColor={'#999999'}
                nucleusParticleBorderWidth={0.3}
                nucleusParticleSize={2.5}
                nucleusSpeed={2}
                nucleusMaskOverlap={true} />
            </div>
            ) : (
                children
            )}
        </AuthContext.Provider>
        </div>
    )
}

//Custom Hook
export const useAuth = ()=> {return useContext(AuthContext)}

export default AuthContext;