# AspCoreAngular2Seed - NGHero 5[表单]

## 使用Visual Studio 2015來開發ASP.NET Core Angular 2 專案
### 實作 [Angular 2 官網 5.表单](https://angular.cn/docs/ts/latest/guide/forms.html) 的範例

### 學習目標
- 使用组件和模板构建一个 Angular 表单
- 使用 [(ngModel)] 语法实现双向数据绑定，以便于读取和写入输入控件的值
- 结合表单来使用 ngModel ，能让我们跟踪状态的变化并对表单控件做验证
- 使用特殊的 CSS 类来跟踪控件状态，并提供强烈的视觉反馈
- 向用户显示有效性验证的错误提示，以及禁用 / 启用表单控件
- 通过模板引用变量，在控件之间共享信息


### 學習心得
- 1. moduleId: module.id 属性设置了以相对于模块的路径加载 templateUrl 时使用的基地址。
- 1.1. 所以新增一個 app.d.ts 裡面宣告 module 的變數，declare var module:any;
- 1.2. 如果在 Component 沒有設定 moduleId 值的話， templateUrl 就要改成 templateUrl:'app/hero/hero-form.component.html'	
- 1.3. 設定 moduleId 只要設定 templateUrl:'hero-form.component.html' 就可以了。
- 2. 在 DOM 物件中 設定 [(ngModel)] 後，也要設定 DOM 物件 name 屬性。


### Usage
- using Visual Studio 2015 open MyNG2Test.sln
- detail: [使用Visual Studio 2015來開發ASP.NET Core Angular 2 專案](https://dotblogs.com.tw/rainmaker/2016/09/19/172823)
- implement from [5.表单](https://angular.cn/docs/ts/latest/guide/forms.html)

### 清除 git 
- rm -rf .git

### 刪除長檔案，可透過 7-Zip
- 使用 7-Zip 開啟要刪除的目錄，然後按下 Ctrl + Delete 鍵就可以立馬刪除它 

### 使用說明
- 發現使用Angular2後，再透過 Gulp Copy 到 wwwroot 蠻麻煩的，所以讓 Client 端的都到 wwwroot 之中。
- package.json, tsconfig.json, typings.json 都改放到了 wwwroot 之中。
- 開啟專案後，請開啟 wwwroot/package.json 檔案，然後按下存檔( Ctrl+S )，VS就會執行 npm install，如下圖，
- ![Image of Save package.json](https://github.com/rainmakerho/AspCoreAngular2Seed/blob/NGHero5/npmInstall.png?raw=true)
- 最後在方案總管中，在 wwwroot 目錄中的 index.html 上按右鍵 View in Browser 就可以看到結果了。結果如下，
- ![Image of Result](https://github.com/rainmakerho/AspCoreAngular2Seed/blob/NGHero5/result.png?raw=true)
- 如果要調整 ts 檔的話，在 wwwroot 目錄下，開啟 Command ，然後輸入 npm run tsc:w ，這樣檔案有調整，就會立馬 compile 了。




