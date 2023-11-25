import {createClient} from '@supabase/supabase-js';
import {Auth} from '@supabase/auth-ui-react';
import { ThemeSupa } from "@supabase/auth-ui-shared";
import { useNavigate } from 'react-router-dom';
import React, {useEffect, useState} from 'react';

const supabase = createClient(
    "https://dybzygtoxlixovnbqdfp.supabase.co",
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImR5Ynp5Z3RveGxpeG92bmJxZGZwIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDA5MjU0NzMsImV4cCI6MjAxNjUwMTQ3M30.kzQnlsvKNUHuD_7OQ2oH8liBfA9sZLRSWZde_C5ogAk"
)

function Success() {
    const [user,setUser] = useState({});
    const navigate = useNavigate();

    useEffect(()=>{
        async function getUserData() {
            await supabase.auth.getUser().then((value) => {
                if(value.data?.user){
                    console.log(value.data.user);
                    setUser(value.data.user);
                }
            })
        }
        getUserData();
    }, []);

    async function signOutUser(){
        const {error} = await supabase.auth.signOut();
        navigate("/");
    }

    return (
      <div className="App">
        <header className="App-header">
        {Object.keys(user) !== 0 ? 
            <>
            <h1>Success</h1>
            <button onClick={()=> signOutUser()}>Sign Out</button>
            </>

            :

            <>
                <h1>User is not logged in</h1>
                <button onClick={()=>{navigate("/")}}>Go back home</button>
            </>
            
            }

        </header>
      </div>
    );
  }
  
  export default Success;