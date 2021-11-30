import { Routes, Route, Navigate } from "react-router-dom";
// Այն ժամանակ կար Switch component հիմա դրա փոխարեն Routes-նա

import { Homepage } from "./pages/Homepage";
import { About } from "./pages/Aboutpage";
import { Blogpage } from "./pages/Blogpage";
import { Contact } from "./pages/Contact";
import { Createpost } from "./pages/Createpost";
import { Editpost } from "./pages/Editpost";
import { Singlepage } from "./pages/Singlepage";
import { Notfoundpage } from "./pages/Notfoundpage";
import { Layout } from "./components/Layout";
import { RequireAuth } from "./hoc/RequireAuth";
import { Private } from "./pages/Private";
import { Loginpage } from "./pages/Loginpage";
import { AuthProvider } from "./hoc/AuthProvider";

// Routing միջոցով ապահովում ենք կայքը SPA(Single Page Application ) լինելուն
function App() {
  return (
    // AuthProvider createContext-ով և useContext-ով value ունի որը կարան օգտագործեն բոլորը իրա մեջ փաթաթաց
    <AuthProvider>
      <Routes>
        {/*  path-հասցե, element-ինչը ցույց տա*/}
        <Route path="/" element={<Layout />}>
          <Route index element={<Homepage />} />
          {/* index տալով հասկացնում ենք որ ինքը  path="/" */}
          <Route path="about" element={<About />}>
            {/* about ծնողի մեջի  Route path լինեւմ են default about
                օրինակ՝ path="contacts" == about/contacts*/}
            <Route path="contacts" element={<p>Our Contacts</p>} />
            <Route path="team" element={<p>Our Team</p>} />
          </Route>
          {/* 
              Ридирект
              Սենց կարանք տանք path որը կգննա նույն element-ը
              Սենց խորհուրդ չի տրվում search ռոբոտը կհասկանա 2 դուբլ
              Ճիշտ Ридирект անելու համար խորհուրդա տրվում օգտագործել Navigate կոմպոնենտը
              <Route path="about-us" element={<About />} /> 
          */}
          {/* Navigate to-ով անում ենք պերեադրեսացիյա replace դնում ենք որ հիշողությունում չպահի*/}
          <Route path="about-us" element={<Navigate to="/about" replace />} />
          <Route path="posts" element={<Blogpage />} />
          <Route path="contact" element={<Contact />} />

          {/* <Route path="posts/:id/:category/:title" element={<Singlepage />} /> */}
          {/* posts/:id - սենց կետով փոխանցում ենք useParams {id: "id"}*/}
          <Route path="posts/:id" element={<Singlepage />} />
          <Route path="posts/new/" element={<Createpost />} />
          <Route path="posts/:id/edit" element={<Editpost />} />
          <Route
            path="posts/private" /* User-ը անցնելով այս path-ով, ընգնումա RequireAuth այնտեղ
                                    եթե user-ը անցելա  ավտորիզացյան գնումա private page{children},
                                    հակառակ դեպքում redirect է լինում login page */
            element={
              /* RequireAuth-ով  կապահովի պերեադրեսացյան*/
              // RequireAuth փաթաթում ենք տարբեր Private route
              <RequireAuth>
                <Private />
              </RequireAuth>
            }
          />
          <Route path="login" element={<Loginpage />} />
          {/* "*"-դնելով հասկացնում ենք մնացած դեպքերում  */}
          <Route path="*" element={<Notfoundpage />} />
        </Route>
      </Routes>
    </AuthProvider>
  );
}

export default App;
