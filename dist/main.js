var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
// Variable
var numVar = 1;
var stringVar = "this is a string";
numVar = 2;
stringVar = "this is another string";
// Function
var getFullName = function (name, sirName) {
    return name + " " + sirName;
};
console.log(getFullName("kyle", "ong"));
var user1 = {
    name: "Kyle",
    age: 24,
    getMessage: function () {
        return "Hello";
    }
};
var user2 = {
    name: "John",
    getMessage: function () {
        return "Hello";
    }
};
// Union and Type alias
var username = "kyle";
var pageNumber = "1"; // Union
var errorMessage = null; // recommended define default value
var user = null;
var id = "001";
var popularTags = ["dragon", "coffee"];
var dragonsTag = "dragons";
// void any never unknown
var doSomething = function () {
    console.log("doSomething");
};
var anything = 1; // avoid use any at any causes
var neverEnd = function () {
    console.log("start");
    throw Error;
    console.log("never execute");
};
var varAny = 10;
var varUnknown = 10;
var s1 = varAny;
var s2 = varUnknown; // type assertion: convert unknown to string type and assign to another string type
var stringPageNumber = "1";
var numericPageNumber = stringPageNumber;
// DOM Element
var someElement = document.querySelector(".foo");
someElement.addEventListener("blur", function (event) {
    var target = event.target;
    console.log(target.value);
});
console.log("someElement", someElement.value);
var NewUser = /** @class */ (function () {
    function NewUser(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.unchangableName = firstName;
    }
    NewUser.prototype.getFullname = function () {
        //this.unchangableName = this.lastName; 
        return this.firstName + " " + this.lastName;
    };
    NewUser.maxAge = 50;
    return NewUser;
}());
var AdminUser = /** @class */ (function (_super) {
    __extends(AdminUser, _super);
    function AdminUser() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    AdminUser.prototype.setEditor = function (editor) {
        this.editor = editor;
    };
    AdminUser.prototype.getEditor = function () {
        return this.editor;
    };
    return AdminUser;
}(NewUser)); // any extended classes can use property and methods
var newUser = new NewUser("Kyle", "Ong");
console.log(NewUser.maxAge);
var admin = new AdminUser("Foo", "Bar");
// Generic 
var addId = function (obj) {
    var id = Math.random().toString(16);
    return __assign(__assign({}, obj), { id: id });
};
var genericUser = {
    name: "jack",
    data: {
        meta: "foo"
    },
    meta: "123"
};
var genericUser2 = {
    name: "John",
    data: {
        meta: ["foo", "bar"]
    },
    meta: 1
};
var result = addId(genericUser);
console.log("result", result);
// enum
var StatusEnum;
(function (StatusEnum) {
    StatusEnum["NotStarted"] = "not started";
    StatusEnum["InProgress"] = "in progress";
    StatusEnum["Done"] = "done";
})(StatusEnum || (StatusEnum = {}));
var notStartedStatus = StatusEnum.NotStarted;
notStartedStatus = StatusEnum.Done;
console.log(StatusEnum.Done);
