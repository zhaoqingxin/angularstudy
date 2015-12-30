#通过官网api,git和源码，学习angular
#学习angular插件

#angular-API（v1.3.9）

#通过文献认识angular应用中的组件，组件包括directives指令, services服务, filters过滤器, providers, templates模板, global APIs全局API, and testing mocks测试.

#ng(核心模块)——AngularJS提供的核心模块
> Directives
- 这是核心指令的集合，你可以使用在模板代码中来建立angular应用，比如：ngClick,ngRepeat等

> Services/Factories
- 这是核心服务的集合，在你的应用中提供服务，比如$http,$compile,$location等

- Filters
- 过滤器在模块中用于在渲染之前转化模板数据，比如filter,date,currency,lowercase,uppercase等

- Global API
- 核心全局函数附在angular对象上（angular的属性），在应用程序中帮助js操作，比如angular.copy(),angular.equals()等。

#ngRoute
- ngRoute用于在你的应用程序中的路由，支持通过哈希和HTML5的pushState来管理URL。需要引入angular-route.js 
- Services/Factories——下面的服务用于路由管理
- $routeParams 用于允许在URL中查询字符串值（参数）
- $route 用于路由详细信息
- $routeProvider 用于在应用程序中注册路由

- Directives 
- 当前路由的页面模板会在ngView指令中显示

- 提示：现在已经没人使用ngRoute了，比较流行的路由管理是uiRoute

#ngAnimate
- 允许在你的应用中使用动画，动画通过CSS transitions/animations 或者 JavaScript回调定义，需要引入angular-animate.js.
- Services / Factories	在你的指令代码中用$animate触发动画操作。
- CSS-based animations	在Angular中引用 CSS transitions / keyframe animations。一旦被定义,动画可以通过在HTML模板代码中引用css的class被触发。
- JS-based animations	    用module.animation()注册一个JavaScript动画.一旦被定义, 动画可以通过在HTML模板代码中引用css的class被触发。

#ngAria
- 用ngAria在指令和注入通用可访问的属性


#angular提供的function（感觉整体用处不大）
- angular.lowercase(string)	转换成小写字符串
- angular.uppercase(string)	转换成大写字符串
- angular.forEach(obj,iterator,context) obj(被迭代的对象)是数组或者JSON；iterator迭代函数(参数value,key,obj===被迭代的对象)，context上下文（this）对象
- angular.bind 这个没看懂，我实验没成功
- angular.bootstrap 这个没看懂，手动启动什么东西，不知道干什么用
- angular.copy(source, [destination])把第一个对象copy到第二个对象上
- angular.element 获取对象，但无法获取页面的标签，可以在指令的link之类的地方使用
- angular.equals(obj1,obj2) 判断是否相等
- angular.extend(targetObj,sourceObj) 通过枚举复制属性
- angular.merge 跟extend差不多,可以把多个对象属性合并到一个上面
- angular.fromJson(json) json转string
- angular.identity(arguments) 返回第一个参数
- angular.isArray
- angular.isDate
- angular.isDefined
- angular.isElement
- angular.isFunction
- angular.isNumber
- angular.isObject
- angular.isString
- angular.isUndefined
- angular.injector没看太懂，看懂了再解释
- angular.module声明模块和依赖
- angular.noop 这个没看太懂
- angular.reloadWithDebugInfo 这个没看太懂
- angular.toJson 序列化成json格式

#derictive
- a 如果href为空，不会刷新页面
- form （name="" Name of the form. If specified, the form controller will be published into related scope, under this name.）
- ng-valid is set if the form is valid.
- ng-invalid is set if the form is invalid.
- ng-pending is set if the form is pending.
- ng-pristine is set if the form is pristine.
- ng-dirty is set if the form is dirty.
- ng-submitted is set if the form was submitted.
- input
  (ng-model="string"
  [name="string"]
  [required="string"]
  [ng-required="boolean"]
  [ng-minlength="number"]
  [ng-maxlength="number"]
  [ng-pattern="string"]
  [ng-change="string"]
  [ng-trim="boolean"])
- input[checkbox]
- input[date]
- input[datetime-local]
- input[email]
- input[month]
- input[number]
- input[radio]
- input[text]
- input[time]
- input[url]
- input[week]
- ngApp
- ngBind
- ngBindHtml
- ngBindTemplate
- ngBlur
- ngChange
- ngChecked
- ngClass
- ngClassEven
- ngClassOdd
- ngClick
- ngCloak
- ngController
- ngCopy
- ngCsp
- ngCut
- ngDblclick
- ngDisabled
- ngFocus
- ngForm
- ngHide
- ngHref
- ngIf
- ngInclude
- ngInit
- ngJq
- ngKeydown
- ngKeypress
- ngKeyup
- ngList
- ngModel
- ngModelOptions
- ngMousedown
- ngMouseenter
- ngMouseleave
- ngMousemove
- ngMouseover
- ngMouseup
- ngNonBindable
- ngOpen
- ngOptions
- ngPaste
- ngPluralize
- ngReadonly
- ngRepeat
- ngSelected
- ngShow
- ngSrc
- ngSrcset
- ngStyle
- ngSubmit
- ngSwitch
- ngTransclude
- ngValue
- script
- select
- textarea
