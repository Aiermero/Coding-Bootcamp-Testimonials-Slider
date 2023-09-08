const profileP = document.querySelector('.profile__paragraph');
const profileSpanName = document.querySelector('.profile__span__name');
const profileSpanRoll = document.querySelector('.profile__span__roll');
const profileImg = document.querySelector('.profile__image');
const prevButton = document.querySelector('.profile__arrows__prev')
const nextButton = document.querySelector('.profile__arrows__next')

let currentProfile = 0;

nextButton.addEventListener('click',nextProfile)
prevButton.addEventListener('click',prevProfile)

profileP.textContent = tanyaProfile.description;
profileSpanName.textContent = tanyaProfile.name;
profileSpanRoll.textContent = tanyaProfile.roll;
profileImg.src = tanyaProfile.photo;

function nextProfile(){
    currentProfile++
    if(currentProfile > miniBase.length - 1){
        currentProfile = 0
        profileImg.src = miniBase[currentProfile].photo;
        profileP.textContent = miniBase[currentProfile].description;
        profileSpanName.textContent = miniBase[currentProfile].name;
        profileSpanRoll.textContent = miniBase[currentProfile].roll;
    }else{
        profileImg.src = miniBase[currentProfile].photo;
        profileP.textContent = miniBase[currentProfile].description;
        profileSpanName.textContent = miniBase[currentProfile].name;
        profileSpanRoll.textContent = miniBase[currentProfile].roll;
    }
}
function prevProfile(){
    currentProfile--
    if(currentProfile < 0){
        currentProfile = miniBase.length - 1;
        profileImg.src = miniBase[currentProfile].photo;
        profileP.textContent = miniBase[currentProfile].description;
        profileSpanName.textContent = miniBase[currentProfile].name;
        profileSpanRoll.textContent = miniBase[currentProfile].roll;
        console.log(currentProfile)
    }else{
        profileImg.src = miniBase[currentProfile].photo;
        profileP.textContent = miniBase[currentProfile].description;
        profileSpanName.textContent = miniBase[currentProfile].name;
        profileSpanRoll.textContent = miniBase[currentProfile].roll;
    }
}