//连接池
let mysql = require('mysql');

pool = global.pool;
if (!pool) {
	let pool = mysql.createPool({
		// host: 127.0.0.1,
		database: 'exam',
		user: 'root',
		password: 'root',
		port:3306
	});
	global.pool = pool;
}
//获取连接
function getConnection(){
	return new Promise(function(resolve,reject){
		pool.getConnection(function(err,connection){
			if (!err) {
				resolve(connection);
			}else{
				reject(err);
			}
		});
	});
};
//执行

function execute(sql){
	return new Promise(function(resolve,reject){
		var conn;
		getConnection().then(function(connection){
			conn = connection;
			connection.query(sql,function(err,results){
				if (!err) {
					resolve(results);
				}else{
					reject(err);
				}
			});
		}).catch(function(err){
			reject(err);
		}).finally(function(){
			if (conn) {
				conn.release();
			}
		});
	});
}


module.exports = {getConnection,execute};
