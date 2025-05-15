abstract class takePhoto{
    constructor (
        public cameraMode : string,
        public filter : string

    ){}
}

//  in abstract class we can not create instance of the class, means we can not create object of the class, these are just blueprints of the class
class instagram extends takePhoto{
    constructor(
        public cameraMode : string,
        public filter : string,
        public burst : number
    ){
        super(cameraMode, filter);
    }
    getReelTime(){
        console.log('Reel time is 10 sec');
    }
}