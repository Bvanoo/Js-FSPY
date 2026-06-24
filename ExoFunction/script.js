const tabNb = [7,14,42,78];

function sumTab(tab){
    let resultat = 0;
    for(nb of tab){
        resultat+=nb;
    }
    return resultat;
}

// Idem qu'au dessus mais avec méthode .reduce()

// function sumTab(tab){
    //     return tab.reduce((resultat, nbActuel)=> resultat+=nbActuel )
    // }
    
    console.log(sumTab(tabNb));
    
    const tabMot=["palmier", "plage", "coco", "anticonstitutionnellement"]
    
    function wordLen(tab){
        
        let longest ="";
        for(word of tab){
            longest = longest.length>word.length?longest:word;
        }
        return longest;
    }
      
    
// Idem qu'au dessus mais avec méthode .reduce()
// function wordLen(tab){
//     return tab.reduce((longest, actual)=> longest.length>actual.length?longest:actual )
// }

console.log(wordLen(tabMot));


function isBis(year){
    return (year%4===0 && year%100 != 0) ||year%400 === 0?true:false
}

console.log(isBis(1601))


function newList(tab){
    const unorderedList = document.createElement('ul');
    for(w of tab){
        const li = document.createElement('li');
        li.textContent = w;
        unorderedList.appendChild(li);
    }
    document.body.appendChild(unorderedList);
}

newList(tabMot);