export class User{
    constructor(
        public email:string,
        public id:string,
        private _tokenId: string,
        private _expirationDate:Date
    ){}
    get token (){
if(!this._expirationDate || new Date()> this._expirationDate){
    return null;
}
else{
    return this._tokenId;
}
    }
}