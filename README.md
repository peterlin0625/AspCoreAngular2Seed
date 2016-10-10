# AspCoreAngular2Seed - NGHero 3 [显示数据]

## ASP.NET Core With Angular 2 Seed Project 

A simple starter project demonstrating the basic concepts of Angular 2.


### Usage
- using Visual Studio 2015 open MyNG2Test.sln
- detail: [使用Visual Studio 2015來開發ASP.NET Core Angular 2 專案](https://dotblogs.com.tw/rainmaker/2016/09/19/172823)
- implement from [显示数据](https://angular.cn/docs/ts/latest/guide/displaying-data.html)

修改 gulpfile.js 中的 ts 路徑，
從 src 從 ['./scripts/app/*.ts'] 改成  ['./scripts/app/**/*.ts']
因為 /scripts/app 目錄下新增 hero 的目錄，存放 hero 相關的 ts 檔。

在指令中之有看過 # 的用法，如下，
*ngFor="#hero of heroes" 
現在要使用 let 
*ngFor="let hero of heroes" 

### 清除 git 
rm -rf .git

### 使用說明
- 開啟專案後，會自動node套件(會花一些時間)，等完成後。請開啟 Task Runner Explorer 視窗
- 在 Tasks 下，在 copy:nodeModules 上按右鍵，執行
- 完成後，在 tsc 上按右鍵，執行
- 最後在方案總管中，在 wwwroot 目錄中的 index.html 上按右鍵 View in Browser 就可以看到結果了。
- ![Image of Demo](https://github.com/rainmakerho/AspCoreAngular2Seed/blob/NGHero3/result.png?raw=true)


