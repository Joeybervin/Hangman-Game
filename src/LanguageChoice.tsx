import languagesList from './langList.json';

//Components
import Button from "./components/Button"

interface Props {
    setLanguages: React.Dispatch<React.SetStateAction<string>>;
}

function LanguagesChoice({ setLanguages }: Props) {

    const handleClick = (choice: string, e: React.MouseEvent<HTMLButtonElement> ) => {
        e.preventDefault();
        setLanguages(choice);
    };



    return (
        <>

        {languagesList.map(language => (
            <Button
                key={language.lang}
                onClick={(e) => handleClick(language.lang, e)}>{language.lang}</Button>
        ))}
        
        </>
    )
}

export default LanguagesChoice
