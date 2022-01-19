const button = document.querySelector('button')
const text = document.querySelector('h2')
const container = document.querySelector('.container')
const newImage = document.createElement('img')


const facts = [

    {
        id:'e1',
        text: 'It’s possible to find rivers and lakes beneath the ocean',
        img2: 'https://images.unsplash.com/photo-1488278905738-514111aa236c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fG9jZWFufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60',
    },
    {
        id: 'e2',
        text: 'The average person spends two weeks of their life waiting at traffic lights.',
        img2: 'https://images.unsplash.com/photo-1584649525122-8d6895492a5d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dHJhZmZpYyUyMGxpZ2h0fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60',
    },
    {
        id: 'e3',
        text: 'A group of owls is called a parliament.',
        img2: 'https://images.unsplash.com/photo-1553264701-d138db4fd5d4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8b3dsfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60',
    },
    {
        id: 'e4',
        text: '12% of the World’s People Live in the Mountains',
        img2: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8bW91bnRhaW5zfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60',
    },
    {
        id: 'e5',
        text: 'Each sunflower can contain as many as 1,000 to 2,000 seeds.',
        img2: 'https://images.unsplash.com/photo-1512238701577-f182d9ef8af7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8c3VuZmxvd2VyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60',
    },
    {
        id: 'e6',
        text: 'You lose up to 30 percent of your taste buds during flight.',
        img2: 'https://images.unsplash.com/photo-1608023136037-626dad6c6188?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fGZsaWdodCUyMGluc2lkZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60',
    },
  
    {
        id: 'e7',
        text: ' The term "astronaut" comes from greek words that mean "star" and "sailor."',
        img2: 'https://images.unsplash.com/photo-1494022299300-899b96e49893?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGFzdHJvbmF1dHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60',
    },
    {
        id: 'e8',
        text: 'The Moon makes the Earth move as well as the tides',
        img2: 'https://images.unsplash.com/photo-1517866184231-7ef94c2ea930?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fG1vb258ZW58MHwwfDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60',
    },
    {
        id: 'e9',
        text: 'More people visit France than any other country.',
        img2: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8ZnJhbmNlfGVufDB8MHwwfHw%3D&auto=format&fit=crop&w=600&q=60',
    },
    {
        id: 'e10',
        text: 'M&Ms are named after the businessmen who created them.',
        img2: 'https://images.unsplash.com/photo-1598214239128-55b3de289853?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8bSUyNm18ZW58MHwwfDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60',
    },
    {
        id: 'e11',
        text: 'The heart of a shrimp is located in its head.',
        img2: 'https://images.unsplash.com/photo-1538960792157-b2e2b62d1f3c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8c2hyaW1wfGVufDB8MHwwfHw%3D&auto=format&fit=crop&w=600&q=60',
    },
    {
        id: 'e12',
        text: 'A bolt of lightning is five times hotter than the sun.',
        img2: 'https://images.unsplash.com/photo-1500674425229-f692875b0ab7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8bGlnaHRlbmluZ3xlbnwwfDB8MHx8&auto=format&fit=crop&w=600&q=60',
    },
    {
        id: 'e13',
        text: 'The opposite sides of the dice always add up to seven.',
        img2: 'https://images.unsplash.com/photo-1570303345338-e1f0eddf4946?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8ZGljZXxlbnwwfDB8MHx8&auto=format&fit=crop&w=600&q=60',
    },
    {
        id: 'e14',
        text: "Glaciers and ice sheets hold about 69 percent of the world's freshwater.",
        img2: 'https://images.unsplash.com/photo-1493855344473-0378f32bd0d4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8aWNlJTIwYmVyZ3xlbnwwfDB8MHx8&auto=format&fit=crop&w=600&q=60',
    },
    {
        id: 'e15',
        text: "The fastest gust of wind ever recorded on Earth was 253 miles per hour.",
        img2: 'https://images.unsplash.com/photo-1587168173357-99c7e95fb5cd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8d2luZG1pbGx8ZW58MHwwfDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60',
    },
    {
        id: 'e16',
        text: "Tsundoku is the act of acquiring books and not reading them.",
        img2: 'https://media.istockphoto.com/photos/school-picture-id1016131800?b=1&k=20&m=1016131800&s=170667a&w=0&h=imifkJTvS-4b8cvOhVNlCqqvZlwI4S-xCKZ6Oxbla4Q=',
    },
    {
        id: 'e17',
        text: " A jar of Nutella sells every 2.5 seconds.",
        img2: 'https://media.istockphoto.com/photos/chocolate-hazelnut-spread-picture-id175390163?b=1&k=20&m=175390163&s=170667a&w=0&h=H-nXym8toqd-lMBWUhOpMSqGEZWD5rzToHFiQIak2mw=',
    },
    {
        id: 'e18',
        text: "The probability of a blue lobster existing is widely touted as being one in two million.",
        img2: 'https://images.unsplash.com/photo-1530511960699-9d7ccd279040?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Ymx1ZSUyMGxvYnN0ZXJ8ZW58MHwwfDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60',
    },
    {
        id: 'e19',
        text: 'The coldest temperature ever recorded was -144 degrees Fahrenheit.',
        img2: 'https://images.unsplash.com/photo-1528231843764-7ab0490b6676?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzR8fGljZXxlbnwwfDB8MHx8&auto=format&fit=crop&w=600&q=60',
    },
    {
        id: 'e20',
        text: 'It’s possible to find rivers and lakes beneath the ocean',
        img2: 'https://images.unsplash.com/photo-1456753510773-a8bd200a4a26?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mzh8fG9jZWFufGVufDB8MHwwfHw%3D&auto=format&fit=crop&w=600&q=60',
    },
    {
        id: 'e21',
        text: 'A group of penguins in the water is called a raft but on land they’re called a waddle!',
        img2: 'https://images.unsplash.com/photo-1595792463990-07008351a4fb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8cGVuZ3VpbnxlbnwwfDB8MHx8&auto=format&fit=crop&w=600&q=60',
    },
    {
        id: 'e22',
        text: 'Baby flamingos are born grey, not pink.',
        img2: 'https://images.unsplash.com/photo-1553520077-205eb37650fa?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTl8fGZsYW1pbmdvc3xlbnwwfDB8MHx8&auto=format&fit=crop&w=600&q=60',
    },
    {
        id: 'e23',
        text: 'Back when dinosaurs existed, there used to be volcanoes that were erupting on the moon.',
        img2: 'https://images.unsplash.com/photo-1548391350-968f58dedaed?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bW9vbnxlbnwwfDB8MHx8&auto=format&fit=crop&w=600&q=60',
    },
    {
        id: 'e24',
        text: 'Limes most likely originated in Southeast Asia.',
        img2: 'https://images.unsplash.com/photo-1585433206082-ca1f8da26ae8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bGltZXN8ZW58MHwwfDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60',
    },
    {
        id: 'e25',
        text: 'BMW used to specialize in airplane engines.',
        img2: 'https://images.unsplash.com/photo-1542308160-57866b7c095c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8Ym13fGVufDB8MHwwfHw%3D&auto=format&fit=crop&w=600&q=60',
    },
    {
        id: 'e26',
        text: 'A house cat can reach speeds of up to 30mph',
        img2: 'https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Y2F0fGVufDB8MHwwfHw%3D&auto=format&fit=crop&w=600&q=60',
    },
    {
        id: 'e27',
        text: 'Cotton candy was invented by a dentist.',
        img2: 'https://images.unsplash.com/photo-1626407298500-45fadba418ee?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y290dG9uJTIwY2FuZHl8ZW58MHwwfDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60',
    },
    {
        id: 'e28',
        text: 'The Sahara Desert can reach up to 136 degrees.',
        img2: 'https://images.unsplash.com/photo-1473580044384-7ba9967e16a0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8ZGVzZXJ0fGVufDB8MHwwfHw%3D&auto=format&fit=crop&w=600&q=60',
    },
    {
        id: 'e29',
        text: 'The heaviest onion ever grown was 17 pounds.',
        img2: 'https://images.unsplash.com/photo-1588626174995-11643e2918ea?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8b25pb258ZW58MHwwfDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60',
    },
    {
        id: 'e30',
        text: '"E" is the most common letter and appears in 11 percent of all english words.',
        img2: 'https://images.unsplash.com/photo-1533669955142-6a73332af4db?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fGJvb2t8ZW58MHwwfDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60',
    },
    {
        id: 'e31',
        text: 'France has a dozen time zones.',
        img2: 'https://images.unsplash.com/photo-1541480601022-2308c0f02487?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Y2xvY2t8ZW58MHwwfDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60',
    },
    {
        id: 'e32',
        text: 'Saudi Arabia imports camels from Australia.',
        img2: 'https://images.unsplash.com/photo-1598113972215-96c018fb1a0b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Y2FtZWx8ZW58MHwwfDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60',
    },
    {
        id: 'e33',
        text: 'The best place in the world to see rainbows is in Hawaii.',
        img2: 'https://images.unsplash.com/photo-1579313205978-cd787f9bfb4a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fHJhaW5ib3d8ZW58MHwwfDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60',
    },
    {
        id: 'e34',
        text: 'Starfish can re-grow their arms. In fact, a single arm can regenerate a whole body.',
        img2: 'https://images.unsplash.com/photo-1520301267532-5b3708e14b09?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fHN0YXJmaXNofGVufDB8MHwwfHw%3D&auto=format&fit=crop&w=600&q=60',
    },
    {
        id: 'e35',
        text: 'There are more stars in space than there are grains of sand on a beach.',
        img2: 'https://images.unsplash.com/photo-1465101162946-4377e57745c3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fHN0YXJzfGVufDB8MHwwfHw%3D&auto=format&fit=crop&w=600&q=60',
    },
    {
        id: 'e36',
        text: 'French fries originated in Belgium, not France.',
        img2: 'https://images.unsplash.com/photo-1585109649139-366815a0d713?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8ZnJpZXN8ZW58MHwwfDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60',
    },
    {
        id: 'e37',
        text: "The world's quietest room is located at Microsoft's headquarters in Washington state.",
        img2: 'https://images.unsplash.com/photo-1635821410579-baa223cff5e6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8bWljcm9zb2Z0fGVufDB8MHwwfHw%3D&auto=format&fit=crop&w=600&q=60',
    },
    {
        id: 'e38',
        text: 'A shark is the only known fish that can blink with both eyes.',
        img2: 'https://images.unsplash.com/photo-1560275619-4662e36fa65c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8c2hhcmt8ZW58MHwwfDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60',
    },
    {
        id: 'e39',
        text: 'Almonds are a member of the peach family.',
        img2: 'https://images.unsplash.com/photo-1608797178974-15b35a64ede9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8YWxtb25kc3xlbnwwfDB8MHx8&auto=format&fit=crop&w=600&q=60',
    },
    {
        id: 'e40',
        text: 'In many advertisements, the time displayed on a watch is 10:10.',
        img2: 'https://images.unsplash.com/photo-1554151447-b9d2197448f9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fHdhdGNofGVufDB8MHwwfHw%3D&auto=format&fit=crop&w=600&q=60',
    },
  
];

let random;
let randomImg;

const randomFact = () => {
    let i = Math.floor(Math.random() * facts.length)
    random = facts[i].text
    randomImg = facts[i].img2
}

button.addEventListener('click', () => {
    removeImg()
    randomFact()
    console.log(random)
    text.innerHTML = random
    //creating img tag 

    newImage.src = randomImg

    if(newImage)
    container.appendChild(newImage)

    
})

function removeImg(){
    newImage.remove()

}