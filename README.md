# AspCoreAngular2Seed - NGHero 4[用户输入]

## ASP.NET Core With Angular 2 Seed Project 

### Usage
- using Visual Studio 2015 open MyNG2Test.sln
- detail: [使用Visual Studio 2015來開發ASP.NET Core Angular 2 專案](https://dotblogs.com.tw/rainmaker/2016/09/19/172823)
- implement from [4.用户输入](https://angular.cn/docs/ts/latest/guide/user-input.html)

### 清除 git 
- rm -rf .git

### 刪除長檔案，可透過 7-Zip
- 使用 7-Zip 開啟要刪除的目錄，然後按下 Ctrl + Delete 鍵就可以立馬刪除它 

### 使用說明
- 開啟專案後，會自動node套件(會花一些時間)，等完成後。請開啟 Task Runner Explorer 視窗
- 在 Tasks 下，在 copy:nodeModules 上按右鍵，執行
- 完成後，在 tsc 上按右鍵，執行
- 最後在方案總管中，在 wwwroot 目錄中的 index.html 上按右鍵 View in Browser 就可以看到結果了。
- ![Image of Demo](https://github.com/rainmakerho/AspCoreAngular2Seed/blob/NGHero4/result.png?raw=true)

### 學習心得
- 使用綁定使用 (event) 例如 (click) (keyup) (keyup.enter) ...
- 可傳入 $event ，然後由 $event.target 取得一個 HTMLInputElement 物件
- 可以使用 # template reference variables 來代替使用 $event.target。例如 <input #box (keyup)="0" ><p>{{box.value}}</p>