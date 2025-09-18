import { Suspense } from "react";
import "./App.css";
import Countries from "./components/countries/countries";

const countryPromise = fetch(
  `https://openapi.programming-hero.com/api/all`
).then((res) => res.json());

function App() {
  return (
    <>
      <Suspense fallback={<h2>Loading...</h2>}>
        <Countries countryPromise={countryPromise}></Countries>
      </Suspense>
    </>
  );
}

export default App;
