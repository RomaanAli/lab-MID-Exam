


    document.getElementById("btn").addEventListener("mouseout", function() {
        document.getElementById('data').style.display = 'block';
});

function inputQuestion(){
let quest=document.getElementById('quest').value
let ans=document.getElementById('ans').value
const q=document.createElement('h3')
const a=document.createElement('p')

q.innerText=quest;
a.innerText=ans;

const cont=document.getElementById('first');
cont.appendChild(q);
const con=document.getElementById('last');
con.appendChild(a);
}






