import { useContext } from 'react';
import { CardContext } from "../defaults";

export default function TextLayer({propKey, index, setCardData} : textSection)  {
  const data = useContext(CardContext);
  const layers = data[propKey];

  return <>

  </>
}