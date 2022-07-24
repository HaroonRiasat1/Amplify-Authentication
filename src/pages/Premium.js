import { Authenticator } from "@aws-amplify/ui-react";
import '@aws-amplify/ui-react/styles.css'
const Premium = () => {
    return <Authenticator>
        {({signOut})=>(
            <div>
                <h1>
                    Hello to my website
                </h1>
                <h3>
                    You are Authenticated
                </h3>
                <button onClick={signOut}>signOut</button>
            </div>
        )}
    </Authenticator>
}
export default Premium;