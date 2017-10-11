var pool = require('./pool');

module.exports = {
	findSubType(){
		var sql = "select * from tbl_exam_subjecttype";
		return pool.execute(sql);
	},
	findSubLevel(){
		var sql = "select * from tbl_exam_subjectlevel";
		return pool.execute(sql);
	},
	findEpartment(){
		var sql = "select * from tbl_exam_epartment";
		return pool.execute(sql);
	},
	findTopic(){
		var sql = "select * from tbl_exam_topic";
		return pool.execute(sql);
	}

};