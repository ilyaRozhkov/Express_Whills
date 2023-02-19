export default class Services{

    async getInfo(url){
        const result = await fetch(url);
        const res = await result.json();
        return res.pickPoints;
    }

}