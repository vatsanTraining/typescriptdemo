import LoginForm from "./LoginForm";
import ManageState from "./ManageState";
import ShowMessage from "./ShowMessage"
import ShowProduct from "./ShowProduct"
import ShowProfile from "./ShowProfile";

export interface Product{
    productCode:number,productName:string
}
export interface Profile{
    profileId:number;tagName:string;
    }

    export interface ProfileData{
        profile:Profile
    }
  
    const profile:Profile ={profileId:101,tagName:'Food Blogger'}


const RootLayout = () => {
  return (
    <div>
           <ShowMessage greeter={"Ramesh"} greeting={'Happy Birthday'}/>

              <ShowProduct productCode={101} productName={"tv"}></ShowProduct>

              <ShowProfile profile ={profile}></ShowProfile>
              <LoginForm></LoginForm>
              <ManageState></ManageState>

    </div>
  )
}

export default RootLayout