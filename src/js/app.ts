namespace application {

  export class appController {

    public startyear = 1976;
    public endyear = 2016;
    public years: number[] = [];

    public players: models.player[] = [];

    static $inject = [
      '$http'
    ];

    constructor(
      private $http: ng.IHttpService
    ) {
      console.log(this.players)
      let current = 0;
      while(this.startyear + current <= this.endyear){
        this.years[current] = this.startyear + current
        current++;
      }
    }

    public logcon(){
      console.log("click");
    }

    public getPlayers(year: number): void {
      this.$http.get(`data/roster-${year}.json`)
        .then((result) => this.players = <models.player[]>result.data)
        .catch((error) => console.log('no worke', error))
        .finally(() => {});
    }
  }

    angular
      .module('app', [])
      .controller('appController', appController);
}
