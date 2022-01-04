var h=document.createElement('h1')
h.setAttribute("id","title")
h.classList.add("text-center")
h.innerText="Thirukural"
document.body.append(h)


var div1=document.createElement('div')
div1.classList.add('container')
document.body.appendChild(div1)


var row=document.createElement('div')
row.classList.add('row')
div1.appendChild(row)




// var col1=document.createElement('div')
// col1.classList.add('col')
// row.appendChild(col1)

// var col=document.createElement('div')
// col.classList.add("col-sm-6 col-md-4 col-lg-4 col-xl-4 my-2")
// div1.appendChild(col)

for(let i=0;i<1330;i++)
{
    fetch("https://api-thirukkural.vercel.app/api?num="+`${i}`).then((d)=>{
    return(d.json())
}).then((dat)=>{
    // console.log(dat.chap_tam)
    // console.log(dat.sect_tam)
    // console.log(dat.chapgrp_tam)
    // console.log(i)
    // console.log(dat.line1,dat.line2)
    // console.log(dat.eng_exp)

    var col1=document.createElement('div')
    col1.classList.add("col-sm-6","col-md-4","col-lg-4","col-xl-4" ,"my-2")
    row.appendChild(col1)

    var card=document.createElement('div')
    card.classList.add('card')
    col1.appendChild(card)

    var cardimg=document.createElement('img')
    cardimg.classList.add("card-img-top")
    cardimg.setAttribute("src","https://assets.roar.media/assets/96JuXtPJnBASnRAT_Olai-Chuvadi.jpg?w=840")
    card.append(cardimg)

    var cardtitle=document.createElement('h3')
    cardtitle.classList.add('card-title','text-center')
    cardtitle.innerText=dat.chapgrp_tam
    card.append(cardtitle)

    var cardbody=document.createElement('div')
    cardbody.classList.add('card-body')
    cardbody.innerText=dat.line1+" "+dat.line2
    card.append(cardbody)


    var cardtxt=document.createElement('div')
    cardtxt.classList.add("card-title")
    card.append(cardtxt)

    var a=dat.eng_exp
    var b=i

    var cardbtn=document.createElement('div')
    cardbtn.classList.add("btn", "btn-primary")
    cardbtn.setAttribute('onclick',`trans('${a}','${b}')`)
    cardbtn.innerText="Translate"
    card.append(cardbtn)

    var cardtran=document.createElement('div')
    cardtran.classList.add('card-body')
    cardtran.setAttribute("id",`${i}`)
    card.append(cardtran)



}).catch((er)=>{
    console.log('er')
})
}

function trans(a,m)
{
    console.log('entering')
    document.getElementById(m).innerText=a;
};


// chap_eng: "Dread of Evil Deeds"
// chap_tam: "ஒப்புரவறிதல்"
// chapgrp_eng: "Domestic Virtue"
// chapgrp_tam: "இல்லறவியல்"
// eng: "The good man's poverty and grief  Is want of means to give relief"
// eng_exp: "The poverty of a benevolent man, is nothing but his inability to exercise the same"
// line1: "நயனுடையான் நல்கூர்ந்தா னாதல் செயும்நீர"
// line2: "செய்யாது அமைகலா வாறு."
// number: 219
// sect_eng: "Virtue"
// sect_tam: "அறத்துப்பால்"
// tam_exp: "பிறர்க்கு உதவி செய்வதையே கடமையாகக் கொண்ட பெருந்தகையாளன் ஒருவன், வறுமையடைந்து விட்டான் என்பதை உணர்த்துவது அவனால் பிறர்க்கு உதவிட முடியாமல் செயலிழந்து போகும் நிலைமைதான்"
// [[Prototype]]: Object