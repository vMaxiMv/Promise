const family = [
    {member: 'mother' , id: 111, coffee:'Latte'},
    {member: 'father' , id: 222, coffee:'Espresso'},
    {member: 'son' , id: 333, coffee:'Black'}
]
const getCoffee = (member)=>{
    const coffeePromise = fetch('https://api.sampleapis.com/coffee/hot')
    return coffeePromise
    .then(data=>data.json())
    .then(list=>{
    const coffee = list.find (res => res.title === member.coffee)
    return { 
        ...member,
        coffee: coffee // МОжно написать просто coffee так как название одинаковые с обеих сторон
    }
    })
}
const getFamilyMember = (id) => {
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
        const member = family.find(res=>res.id === id)
        
        if (member){
            resolve(member)
        }
        else {
            reject(Error('Человек не найден!'))
        } 
        },1000)
    })
}
getFamilyMember(333)
.then(data=>getCoffee(data))
.then(newMember=>{
    console.log('newMember>>>',newMember)
}).catch(err=>{
    console.log(err)
})


