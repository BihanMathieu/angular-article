export class Article {
    
    id!: number
    title:string
    link:string
    votes:number
    

    constructor(title:string, link:string, votes?:number){
        this.link = link
        this.title = title
        this.votes = votes || 0
    }

    // voteUp(){
    //     this.votes++
    // }

    // voteDown(){
    //     this.votes--
    // }

}
