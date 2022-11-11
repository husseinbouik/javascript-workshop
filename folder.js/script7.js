function rechercher(){
    let phrase = document.getElementById('phrase').value;
    let mot = document.getElementById('mot').value;
    let search = phrase.includes(mot)

    if(search){
        resulta = 'Le mot '+mot+' existe dans la phrase.'
        }
        else{
        resulta = 'Le mot '+mot+' n\'existe pas dans la phrase.'
        }
    document.getElementById('resulta').innerHTML = resulta;
}
function supprimer(){
    let phrase = document.getElementById('phrase').value;
    let mot = document.getElementById('mot').value;
    let search = phrase.includes(mot)
    let resulta = phrase.replace(mot,"")
    document.getElementById('resulta').innerHTML = resulta;
    if(!search){
        resulta = 'Le mot n\'existe pas dans la phrase.'
    }
}