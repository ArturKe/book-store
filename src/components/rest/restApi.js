class restApi {
    constructor(url){
        this.url = url

    }

    send(){
        console.log('I am Send from recive')
        
    }

    async reciveData(){
        try{
            const response = await fetch(this.url,{method:'GET'})
            return await response.json()

        } catch(e){
            console.log("Error: " + e)
        }  
    }

    async transformData(){
        const data = await this.reciveData()
        // console.log(data)
        return Object.keys(data).map(key => {
            const item = data[key]
            item.id = key
            // console.log(item)
            return item
        })   
    }

    async showData(){
        // console.log(await this.transformData())
        return await this.transformData()
    }



}

// function Rest (){
//     console.log('I am rest')
// }
const urldata = 'https://library-crm-default-rtdb.europe-west1.firebasedatabase.app/books.json'

const connector = new restApi(urldata)

export default connector;