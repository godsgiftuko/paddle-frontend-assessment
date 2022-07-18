import { convertStringToHTML } from '../../../utils';
export const breakParagraph = (str, symbol) => {
    const symbolPos = str.includes(symbol) && str.indexOf(symbol);
    const strLength = str.length;
    
    return symbolPos 
    ? (
        <>
            { str.slice(0, symbolPos) }
            <br/>
            { str.slice(symbolPos, strLength).replace(symbol, '') }
        </>
           
    ) : str;
}