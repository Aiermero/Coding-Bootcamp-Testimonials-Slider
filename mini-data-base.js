const miniBase = []
class Profile {
    constructor({
        photo,
        name,
        roll,
        description,
    }){
        this.photo = photo;
        this.name = name;
        this.roll = roll;
        this.description = description;
        addInBase(this)
    };
}
const tanyaProfile = new Profile ({
    photo: './images/image-tanya.jpg',
    name: 'Tanya Sinclair',
    roll: 'UX Engineer',
    description: '“ I’ve been interested in coding for a while but never taken the jump, until now. I couldn’t recommend this course enough. I’m now in the job of my dreams and so excited about the future. ”',
})

const johnProfile = new Profile ({
    photo: './images/image-john.jpg',
    name: 'John Tarkpor',
    roll: 'Junior Front-end Developer',
    description: '“ If you want to lay the best foundation possible I’d recommend taking this course. The depth the instructors go into is incredible. I now feel soconfident about starting up as a professional developer. ”',
})

function addInBase(item){
    miniBase.push(item)
}