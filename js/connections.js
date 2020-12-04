mysql = require("promise-mysql"),
config = require("./configs.js");
doquery = function(sql,callback){
    mysqlconfig = config.mysql();
    con = mysql.createConnection({
        host:mysqlconfig.host,
        database:mysqlconfig.database,
        user:mysqlconfig.user,
        password:mysqlconfig.password
    })
    .then(function(cn){
        var result = cn.query(sql);
        cn.end();
        return result;
    })
    .then(function(rows){
        callback(rows);
    })
    .error(function(err){
        console.log('Connection error',err);
    })

}
getdata = function(sql,callback){
    mysqlconfig = config.mysql();
    con = mysql.createConnection({
        host:mysqlconfig.host,
        database:mysqlconfig.database,
        user:mysqlconfig.user,
        password:mysqlconfig.password
    })
    .then(function(cn){
        var result = cn.query(sql);
        cn.end();
        return result;
    })
    .then(function(rows){
        callback(rows);
    })
    .error(function(err){
        console.log('Connection error',err);
    })
};
getdatatable = function(obj,callback){
    console.log("OBJ",obj)
    doquery(obj,res=>{
        callback({"aaData":res.map(element => {
            return [element.id_fb,element.kategori_fb,element.jenis_usaha,element.alamat,element.telp,element.fax]
        })
        })
    })
}
module.exports = {
    getdata: getdata,
    getdatatable: getdatatable
};

