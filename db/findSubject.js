var pool = require('./pool');

module.exports = {

	getAllSubjects(){
		var sql = "select * from tbl_exam_subject"
		return pool.execute(sql);
	},

	getDepartmentSubject(typeId,levelId,depmId,topicId){
		var sql = "select * from tbl_exam_subject where subjectType_id in ("
		+typeId.join()+") and subjectLevel_id in ("
		+levelId.join()+") and department_id in ("
		+depmId.join()+") and topic_id in ("
		+topicId.join()+")";
		return pool.execute(sql);
	},
	//查找答案
	showAnswer(id){
		var sql = "select * from tbl_exam_subject where id = "+id;
		return pool.execute(sql);
	},
	showRadioAnswer(id){
		var sql = "select * from tbl_exam_choice where subject_id = "+id;
		return pool.execute(sql);
	},
	
	getDepartmentSubjectType(id){
		var sql = "select * from tbl_exam_subject where subjectType_id = "+id;
		return pool.execute(sql);
	},

	getDepartmentSubjectlevel(id){
		var sql = "select * from tbl_exam_subject where subjectLevel_id = "+id;
		return pool.execute(sql);
	},

	getDepartmentdepartment(id){
		var sql = "select * from tbl_exam_subject where department_id = "+id;
		return pool.execute(sql);
	},

	getDepartmentTopics(id){
		var sql = "select * from tbl_exam_subject where topic_id = "+id;
		return pool.execute(sql);
	},

	//关键字查找
	findSubjectByStem(stem){
		var sql = "select * from tbl_exam_subject where stem like'%"+stem+"%'";
		return pool.execute(sql);
	},

	//审核
	checkSubject(id,key){
		var sql = 'update tbl_exam_subject set checkState = "'+key+'" where id = '+id;
		return pool.execute(sql);
	},

	//删除题目
	delSubject(id){
		var sql = "delete from tbl_exam_subject where id = "+id;
		return pool.execute(sql);
	}

};