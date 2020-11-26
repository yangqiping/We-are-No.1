const pg = require('pg');

function _add(tablename,fields,client){
  if(!tablename) return;
  var str = "insert into "+tablename+"(";
  var field = [];
  var value = [];
  var num = [];
  var count = 0;
  for(var i in fields){
    count++;
    field.push(i);
    value.push(fields[i]);
    num.push("$"+count);
  }
  str += field.join(",") +") values("+num.join(",")+")";
  client.query(str,value,function(err){
    if(err){
      console.log("err")
    }
  });

}

function _del(tablename,fields,client){
  if(!tablename) return;
  var str = "delete from "+tablename+" where ";
  var field = [];
  var value = [];
  var count = 0;
  for(var i in fields){
    count++;
    field.push(i+"=$" +count);
    value.push(fields[i]);
  }
  str += field.join(" and ");
  client.query(str,value,function(err){
    if(err){
      console.log('err')
    }
  })
}

function _upd(tablename,mainfields,fields,client){
  if(!tablename) return;
  var str = "update "+tablename+" set ";
  var field = [];
  var value = [];
  var count = 0;
  for(var i in fields){
    count++;
    field.push(i+"=$"+count);
    value.push(fields[i]);
  }
  str += field.join(",") +" where ";
  field = [];
  for(var j in mainfields){
    count++;
    field.push(j+"=$"+count);
    value.push(mainfields[j]);
  }
  str += field.join("and");
  client.query(str,value,function(err){
    if(err){
      console.log('err');
    }
  })
}

function _sel(tablename,fields,returnfields,client){
  if(!tablename) return;
  var returnStr = "";
  if(returnfields.length == 0)
    returnStr = '*';
  else
    returnStr= returnfields.join(",");
  var str = "select "+returnStr+ " from "+tablename+" where ";
  var field = [];
  var value = [];
  var count = 0;
  for(var i in fields){
    count++;
    field.push(i+"=$"+count);
    value.push(fields[i]);
  }
  str += field.join(" and ");
  client.query(str,value,function(err,result){
    if(err){
      console.log('err');
    }
    console.log(result.rows);
    return result.rows;
  })
}


exports.add = _add;
exports.del = _del;
exports.upd = _upd;
exports.sel = _sel;


//调用：
// pool.connect(function(err,client,done){
//   fun.add('user_list',{'user_id':'userid','user_name':'fanruzi','user_head':'fff.gif','user_self':'jianjie'},client)
//   fun.del('user_list',{"user_id":'userid'},client)
//   fun.upd('user_list',{"user_id":"userid3"},{"user_name":"gengxin"},client);
//                       查询条件               更改内容
//   fun.sel('user_list',{"user_id":"userid3"},['user_name','user_head'],client);
//                       查询条件               显示内容列表
// })