namespace application {

  export class appController {

    public number1: number = 0;
    public number2: number = 0;

    public results: number = 0;

    constructor() {

    }

    public getresults(){
      this.results = this.number1 + this.number2;
    }
  }

    angular
      .module('app', [])
      .controller('appController', appController);
}
