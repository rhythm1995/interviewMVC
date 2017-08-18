//在indexDB创建一个数据库用来存储数据
function createDatabase() {
    var resource = window.indexedDB.open('interviewDB', 1);
    resource.onsuccess = function (event) {
        database = resource.result;
    };

    resource.onerror = functionI(event) {
        console.log('创建数据库失败' + resource.error);
    };

    resource.onupgradeneeded = function (event) {
        var db = resource.result;
        var objectStore = db.createObjectStore("interviewList", {
            keyPath: "time"
        })
    };
}


//存储数据
function save() {
    var interview = new initInterview();//新建一个对象
    var Name = document.getElementById("name").value;
    var Time = getSelect();
    var Description = document.getElementById("description").value;
    if(JTrim(Name) != "" && JTrim(Description) != "") {//JTrim()函数是用于判断输入是否为空值
        contact.name = Name;
        contact.time = Time;
        contact.description = Description;
        var transaction = database.transaction(["managerList"],"readwrite");//读写
        var resource = transaction.objectStore("managerList").put(contact);//利用put()将数据存入

    } else {
        alert("you should write something...");
        return;
    }

    resource.onsuccess = function(event) {//成功
        alert("create note success!");
    };

    resource.onerror = function(event) {//失败
       alert("can't create database,error:" + resource.error);//告知错误
    };
}


// 面试类
function initInterview(company, applyDatetime, written, one, oneDatetime, two, twoDatetime, three, threeDatetime, four, fourDatetime, get) {
    this.company = company; //string
    this.datetime = datetime; //string
    this.written = written; //string
    this.applyDatetime = applyDatetime; //string
    this.one = one; //boolean
    this.oneDatetime = oneDatetime; //string
    this.two = two; //boolean
    this.twoDatetime = twoDatetime; //string
    this.three = three; //boolean
    this.threeDatetime = threeDatetime; //string
    this.four = four; //boolean
    this.fourDatetime = fourDatetime; //boolean
}

//写入


// 公司列表
function initCompanyNameList() {
    var compnayList = [];


    return
}