import {createClient} from '@supabase/supabase-js';
import {Auth} from '@supabase/auth-ui-react';
import { ThemeSupa } from "@supabase/auth-ui-shared";
import { useNavigate } from 'react-router-dom';

const supabase = createClient(
    "https://dybzygtoxlixovnbqdfp.supabase.co",
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImR5Ynp5Z3RveGxpeG92bmJxZGZwIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDA5MjU0NzMsImV4cCI6MjAxNjUwMTQ3M30.kzQnlsvKNUHuD_7OQ2oH8liBfA9sZLRSWZde_C5ogAk"
)
function Login() {
    const navigate = useNavigate();
    
    supabase.auth.onAuthStateChange(async (event) => {
        if (event === "SIGNED_IN"){
            //forward to success callback
            navigate("/success");
        }else{
            //forward to login callback
            navigate("/");
        }
    });
    return (
      <div className="App">
        <header className="App-header">
            <Auth
                supabaseClient={supabase}
                appearance={{theme: ThemeSupa}}
                theme = "dark"
                providers={["discord"]}
            />
        </header>
      </div>
    );
  }
  
  export default Login;