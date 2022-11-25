var mapId={4:"p4",3:"p3",2:"p2",1:"p1"}
var tourIdMap={0:"s0",1:"s1",2:"s2"}
var move=[];

var tours =[[4,3,2,1],[],[]];
var nbCoups=0;

var newPara = document.createElement('p');
newPara.id = 'nouveau';
// var texte = document.createTextNode("erreur de fou");
// newPara.appendChild(texte);
// document.body.appendChild(newPara);

function addPalet(tourId,palet){
    tours[tourId].push(palet);
    let node = document.createElement("div");
    node.id=mapId[palet];
    // let textnode = document.createTextNode(palet.toString());
    // node.appendChild(textnode);
    document.getElementById(tourIdMap[tourId]).appendChild(node);
    let list = document.getElementById(tourIdMap[tourId]);
    console.log(list.childNodes);
}
function delPalet(tourId){
    let idPalet= tours[tourId].pop();
    let list = document.getElementById(tourIdMap[tourId]);
    let temp=0;
    for (let index = 0; index < list.childNodes.length; index++) {
        if(list.childNodes[index].nodeType!=3){
        temp=index;
        console.log(index);
        }
    }
    
    list.removeChild(list.childNodes[temp]);
    return idPalet;
}
function movePalet(startId,endId){
    addPalet(endId,delPalet(startId));
}
function possibleMove(startId,endId){
    if(tours[endId].slice(-1)[0]>tours[startId].slice(-1)[0] || tours[endId].length==0){
        return true;
    }
    else{
        return false;
    }
}
function testVictory(){
    if(tours[2].length==4){
        return true;
    }else{
        return false
    }
}





function moveAdd(towerId){
    if(move.length==0){
        move+=[towerId];
    }
    if(move.length==1){
        if(towerId!=move[0]){
        move+=[towerId];
        }else{

        }
    }
    if(move.length==2){
        if(possibleMove(move[0],move[1])){
            movePalet(move[0],move[1]);
            move=[];
            nbCoups+=1;
            if(testVictory()==true){
                var texte = document.createTextNode("VOUS AVEZ GAGNE EN "+nbCoups+" COUPS!");
                newPara.appendChild(texte);
                document.body.appendChild(newPara);
                console.log("win!");
                move="win";
            }
        }else{
            //H2 ERREUR GRAND SUR PETIT!
            console.log("impossible");
            move=move.slice(1);
        } 
    }
    if(move=="win"){
        console.log("vous avez win en "+nbCoups+" coups!");
    }
}





