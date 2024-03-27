/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from 'react'

import languagesList from './langList.json';
// Components
import Button from "./components/Button"
import LanguagesChoice from './LanguageChoice'




function App() {




  const [languages, setLanguages] = useState("")
  const [wordToGuess, setWordToGuess] = useState("")

  const  getTheWordToGuess = (language: string) =>{
    const selectedLanguage = languagesList.find(lang => lang.lang === language);
    if (selectedLanguage) {
          fetch("https://random-word-api.herokuapp.com/word?lang=" + selectedLanguage?.apiUrl)
              .then(response => response.json())
              .then(data => {
                  const randomWord = data[0];
                  setWordToGuess(randomWord);
              })
              .catch(error => {
                  console.error('Error fetching random word:', error);
              });
      } 
  };

  useEffect(() => {
    if (languages !== "") {
        getTheWordToGuess(languages);
    }
}, [languages]);



  return (
    <>
    { languages === "" ?
    <>
      <p>Nothing was choose</p>
      <LanguagesChoice setLanguages={setLanguages} />
    </>
    :
    <p>we choosen</p>}
    {wordToGuess}
    
    
    </>
  )
}

export default App
