"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var hero_1 = require('./hero/hero');
var AppComponent = (function () {
    function AppComponent() {
        this.title = 'Tour of Heroes';
        this.heroes = [
            new hero_1.Hero(1, 'Windstorm'),
            new hero_1.Hero(2, 'Bombasto'),
            new hero_1.Hero(3, 'Magneta'),
            new hero_1.Hero(4, 'Tornado')
        ];
        this.myHero = this.heroes[0];
        this.values = '';
    }
    AppComponent.prototype.addHero = function (heroName) {
        if (heroName) {
            var newHeroId = this.heroes.length + 1;
            var newHero = new hero_1.Hero(newHeroId, heroName);
            this.heroes.push(newHero);
        }
    };
    // without strong typing
    AppComponent.prototype.onKey = function (event) {
        this.values += event.target.value + ' | ';
    };
    // with strong typing
    AppComponent.prototype.onKey2 = function (event) {
        this.values += event.target.value + ' | ';
    };
    // with strong typing
    AppComponent.prototype.onKey3 = function (value) {
        this.values += value + ' | ';
    };
    AppComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'my-app',
            template: "\n    <h1>{{title}}</h1>\n    <h2>My favorite hero is: {{myHero.name}}</h2>\n    <input #newHero \n        (keyup.enter)=\"addHero(newHero.value);newHero.value='';\">\n    <button (click)=\"addHero(newHero.value);newHero.value='';\">Add</button>\n    <p>Heroes:</p>\n    <ul>\n        <li *ngFor=\"let hero of heroes\">\n            {{ hero.name }}\n        </li>\n    </ul>\n    <p *ngIf=\"heroes.length > 3\">There are many heroes!</p>\n    <hr>\n        <b>pass value ,not elements</b>\n    <hr>\n    <div>\n        <p>event binding - without strong typing</p>\n        <input (keyup)=\"onKey($event)\">\n        <p>{{values}}</p>\n    </div>\n    <div>\n        <p>event binding - with strong typing</p>\n        <input (keyup)=\"onKey2($event)\">\n        <p>{{values}}</p>\n    </div>\n    <div>\n        <p>\u6A21\u677F\u5F15\u7528\u53D8\u91CF</p>\n        <input #box (keyup)=\"0\">\n        <p>{{box.value}}</p>\n    </div>\n    <div>\n        <p>event binding - \u6A21\u677F\u5F15\u7528\u53D8\u91CF</p>\n        <input #myKey (keyup)=\"onKey3(myKey.value)\">\n        <p>{{values}}</p>\n    </div>\n    <div>\n        <p>filter key events \u8981\u6309\u4E0Benter\u54E6!</p>\n        <input #myKey2 (keyup.enter)=\"values=values + myKey2.value + '|' \">\n        <p>{{values}}</p>\n    </div>\n"
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
