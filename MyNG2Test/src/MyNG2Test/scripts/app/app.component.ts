import { Component } from '@angular/core';
import { Hero } from './hero/hero';
@Component({
    moduleId: module.id,
    selector: 'my-app',
    template: `
    <h1>{{title}}</h1>
    <h2>My favorite hero is: {{myHero.name}}</h2>
    <input #newHero 
        (keyup.enter)="addHero(newHero.value);newHero.value='';">
    <button (click)="addHero(newHero.value);newHero.value='';">Add</button>
    <p>Heroes:</p>
    <ul>
        <li *ngFor="let hero of heroes">
            {{ hero.name }}
        </li>
    </ul>
    <p *ngIf="heroes.length > 3">There are many heroes!</p>
    <hr>
        <b>pass value ,not elements</b>
    <hr>
    <div>
        <p>event binding - without strong typing</p>
        <input (keyup)="onKey($event)">
        <p>{{values}}</p>
    </div>
    <div>
        <p>event binding - with strong typing</p>
        <input (keyup)="onKey2($event)">
        <p>{{values}}</p>
    </div>
    <div>
        <p>模板引用变量</p>
        <input #box (keyup)="0">
        <p>{{box.value}}</p>
    </div>
    <div>
        <p>event binding - 模板引用变量</p>
        <input #myKey (keyup)="onKey3(myKey.value)">
        <p>{{values}}</p>
    </div>
    <div>
        <p>filter key events 要按下enter哦!</p>
        <input #myKey2 (keyup.enter)="values=values + myKey2.value + '|' ">
        <p>{{values}}</p>
    </div>
`
})
export class AppComponent {
    title = 'Tour of Heroes';
    heroes = [
        new Hero(1, 'Windstorm'),
        new Hero(2, 'Bombasto'),
        new Hero(3, 'Magneta'),
        new Hero(4, 'Tornado')
    ];
    myHero = this.heroes[0];
    addHero(heroName: string) {
        if (heroName) {
            let newHeroId = this.heroes.length + 1;
            let newHero = new Hero(newHeroId, heroName);
            this.heroes.push(newHero);
        }
    }


    values = '';
    // without strong typing
    onKey(event: any) {
        this.values += event.target.value + ' | ';
    }
    // with strong typing
    onKey2(event: KeyboardEvent) {
        this.values += (<HTMLInputElement>event.target).value + ' | ';
    }

    // with strong typing
    onKey3(value: string) {
        this.values += value + ' | ';
    }
}