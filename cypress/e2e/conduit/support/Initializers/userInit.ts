import { userAPIPayload } from "../API-Helpers/payloads/userAPIPayload";
import genericFunctions from "../genericFunctions";

export default class userInit{
    static initUser(): userAPIPayload {
        return {
            user: {
<<<<<<< HEAD
                username: `ibaa{genericFunctions.genericRandomNumber()}`,
                email:`ibaa{genericFunctions.genericRandomNumber()}@gmail.com`,
=======
                username: `ibaa${genericFunctions.genericRandomNumber()}`,
                email:`ibaa${genericFunctions.genericRandomNumber()}@gmail.com`,
>>>>>>> origin/test
                password: '123456'
            }
        }
    }
}
