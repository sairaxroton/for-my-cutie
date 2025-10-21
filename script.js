// মজাদার, নিরীহ উত্তরের তালিকা
const funnyResponses = [
    "তুমি? তুমি হলে ভাই 'ঘুমের অলিম্পিকে গোল্ড মেডেলিস্ট' আর 'পিজ্জা খাওয়ার বিশ্ব চ্যাম্পিয়ন'! অসাধারণ মানুষ তুমি! 😂",
    "হাহা! তুমি একটা 'এনার্জির বোমা', কিন্তু মাঝে মাঝে 'আলসেমির রাজা/রানী'। ব্যালেন্সড পার্সোনালিটি! 🤩",
    "তুমি? তুমি হলে 'কমেডি সিনেমার প্রধান চরিত্র'। তোমার জীবনে যা ঘটে, তাতেই হাসি! তবে মনটা খাঁটি সোনা। ✨",
    "তোমার মধ্যে আছে 'অ্যাডভেঞ্চারের ভূত' আর 'ডায়পার পরা শিশুর সরলতা'। একটা কমপ্লিট প্যাকেজ! 😇",
    "তুমি এমন একজন, যে 'কথা বলার আগে দু'বার ভাবে', কিন্তু 'খাওয়ার আগে পাঁচবারও ভাবে না'! এটাই তোমার আসল রূপ! 🍔",
    "তোমার আসল পরিচয়? তুমি হলে 'নেটফ্লিক্সের শেষ এপিসোড না দেখা পর্যন্ত না ঘুমানো মানুষ'! আর একটা বন্ধু হিসেবে দারুণ! 😎",
    "আরে ভাই! তুমি তো 'গোপন ক্ষমতা সম্পন্ন মানুষ'! তোমার ক্ষমতা হলো 'সবাইকে হাসানো'। চালিয়ে যাও! 🥳",
    "সত্যি বলতে? তুমি একটা 'পারফেক্ট গন্ডগোল'। তুমি যেখানে যাও, সেখানে মজা আর বিশৃঙ্খলা দুটোই হয়! 🤣",
    "তোমার মতো মানুষ এই পৃথিবীতে দুর্লভ! তুমি 'বিড়ালছানার মতো কিউট' কিন্তু 'চিপসের প্যাকেট দেখলে বাঘ' হয়ে যাও। 🐯",
    "তুমি? তুমি হলে 'নিজের নিয়মে চলা এক মুক্ত আত্মা'। তবে, 'সকালে ঘুম থেকে ওঠাটা তোমার নিয়মে নেই'! 😜"
];

const nameInput = document.getElementById('nameInput');
const submitBtn = document.getElementById('submitBtn');
const responseBox = document.getElementById('responseBox');

// উত্তরের ফাংশন
function generateResponse() {
    const fullText = nameInput.value.trim();
    if (fullText === "") {
        responseBox.innerHTML = "আগে তোমার নাম লিখে প্রশ্ন করো তো!";
        responseBox.classList.add('show');
        return;
    }

    // ইনপুট থেকে নাম বের করার চেষ্টা (খুব সাধারণ উপায়ে)
    let userName = "বন্ধু";
    const nameMatch = fullText.match(/(আমার নাম|আমি হলাম|আমি)( রকি| জন| আবির| তনু| মিতু| [^\s,]+)/i);

    if (nameMatch && nameMatch[2]) {
        // প্রথম অক্ষর বড় হাতের করে দেই
        userName = nameMatch[2].trim().replace(/^( |রকি| জন| আবির| তনু| মিতু)/i, (match) => {
            // যদি " রকি" বা " জন" দিয়ে শুরু হয়, তবে প্রথম অক্ষরটি বড় হাতের করবে
            return match.charAt(1).toUpperCase() + match.slice(2);
        });

        // যদি "আমার নাম" বা "আমি হলাম" দিয়ে শুরু হয়, তাহলে নামটিকে সুন্দরভাবে ব্যবহার করব
        userName = userName.charAt(0).toUpperCase() + userName.slice(1);
    } else {
         // যদি নাম খুঁজে না পায়, তবে ইনপুটের প্রথম শব্দটি ব্যবহার করবে
         const firstWord = fullText.split(/[\s,]/)[0];
         userName = firstWord.charAt(0).toUpperCase() + firstWord.slice(1);
    }
    
    // র্যান্ডম উত্তর নির্বাচন
    const randomIndex = Math.floor(Math.random() * funnyResponses.length);
    let randomResponse = funnyResponses[randomIndex];
    
    // উত্তরের শুরুতে 'userName' যোগ করে একটি মজার রূপ দেওয়া
    const finalResponse = `${userName}? ${randomResponse}`;

    // রেসপন্স বক্সে দেখানো
    responseBox.classList.remove('show'); // অ্যানিমেশন ট্রিক: আউটের জন্য
    setTimeout(() => {
        responseBox.innerHTML = finalResponse;
        responseBox.classList.add('show'); // ইন এর জন্য
    }, 100); 
}

// ইভেন্ট লিসেনার সেট করা
submitBtn.addEventListener('click', generateResponse);
nameInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        generateResponse();
    }
});


// ----------------------------------------------------------------
// পার্টিক্যালস এফেক্টের জন্য ভ্যানিলা জাভাস্ক্রিপ্ট কোড
// ----------------------------------------------------------------

const canvas = document.getElementById('particleCanvas');
const ctx = canvas.getContext('2d');
let particlesArray;

// ক্যানভাসের আকার সেট করা
function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}
window.addEventListener('resize', resizeCanvas);
resizeCanvas(); // প্রথমে কল করা

// পার্টিক্যাল কনস্ট্রাক্টর
class Particle {
    constructor(x, y, directionX, directionY, size, color) {
        this.x = x;
        this.y = y;
        this.directionX = directionX;
        this.directionY = directionY;
        this.size = size;
        this.color = color;
    }

    // পার্টিক্যাল আঁকা
    draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2, false);
        ctx.fillStyle = this.color;
        ctx.fill();
    }

    // পার্টিক্যাল আপডেট করা
    update() {
        // বাউন্ডারি চেক
        if (this.x > canvas.width || this.x < 0) {
            this.directionX = -this.directionX;
        }
        if (this.y > canvas.height || this.y < 0) {
            this.directionY = -this.directionY;
        }

        // মুভমেন্ট
        this.x += this.directionX;
        this.y += this.directionY;
        
        // পার্টিক্যাল আঁকা
        this.draw();
    }
}

// পার্টিক্যালস ইনিশিয়ালাইজ করা
function initParticles() {
    particlesArray = [];
    const numberOfParticles = (canvas.width * canvas.height) / 15000;
    
    for (let i = 0; i < numberOfParticles; i++) {
        const size = (Math.random() * 5) + 1;
        const x = (Math.random() * ((canvas.width - size * 2) - (size * 2)) + size * 2);
        const y = (Math.random() * ((canvas.height - size * 2) - (size * 2)) + size * 2);
        const directionX = (Math.random() * 0.4) - 0.2; // -0.2 to +0.2
        const directionY = (Math.random() * 0.4) - 0.2;
        // রঙের অপশন: হালকা নীল, হলুদ, বা গোলাপি
        const colors = ['#a4a4b5', '#ffe66d', '#ff416c']; 
        const color = colors[Math.floor(Math.random() * colors.length)];

        particlesArray.push(new Particle(x, y, directionX, directionY, size, color));
    }
}

// পার্টিক্যালস কানেক্ট করা
function connectParticles() {
    let opacityValue = 1;
    for (let a = 0; a < particlesArray.length; a++) {
        for (let b = a; b < particlesArray.length; b++) {
            const distance = ((particlesArray[a].x - particlesArray[b].x) * (particlesArray[a].x - particlesArray[b].x)) + 
                             ((particlesArray[a].y - particlesArray[b].y) * (particlesArray[a].y - particlesArray[b].y));
            
            // একটি নির্দিষ্ট দূরত্বের মধ্যে থাকলে রেখা আঁকা
            if (distance < (canvas.width/7) * (canvas.height/7)) {
                opacityValue = 1 - (distance / 20000);
                ctx.strokeStyle = `rgba(255, 65, 108, ${opacityValue})`; // কানেকশন লাইন গোলাপি
                ctx.lineWidth = 1;
                ctx.beginPath();
                ctx.moveTo(particlesArray[a].x, particlesArray[a].y);
                ctx.lineTo(particlesArray[b].x, particlesArray[b].y);
                ctx.stroke();
            }
        }
    }
}


// অ্যানিমেশন লুপ
function animate() {
    requestAnimationFrame(animate);
    ctx.clearRect(0, 0, canvas.width, canvas.height); // প্রতি ফ্রেমে ক্যানভাস পরিষ্কার করা

    for (let i = 0; i < particlesArray.length; i++) {
        particlesArray[i].update();
    }
    connectParticles();
}

// পার্টিক্যালস শুরু করা
initParticles();
animate();

// স্ক্রিনের আকার পরিবর্তন হলে পার্টিক্যালস রিশেপ করা
window.addEventListener('resize', () => {
    resizeCanvas();
    initParticles(); 
});
