require('babel-polyfill');

let express = require('express');
let findType = require('../db/findType');
let findSubject = require('../db/findSubject');
let Subject = require('../module/module');
let Choose = require('../module/module');

let router = express.Router();

//获取题目类型菜单
router.get('/getAllSubjectType',function(req,resp){
	findType.findSubType().then(function(data){
		resp.send(data);
	}).catch(function(err){
		resp.send(err);
	});
});

router.get('/getAllSubjectLevel',function(req,resp){
	findType.findSubLevel().then(function(data){
		resp.send(data);
	}).catch(function(err){
		resp.send(err);
	});
});

router.get('/getAllDepartmentes',function(req,resp){
	findType.findEpartment().then(function(data){
		resp.send(data);
	}).catch(function(err){
		resp.send(err);
	});
});

router.get('/getAllTopics',function(req,resp){
	findType.findTopic().then(function(data){
		resp.send(data);
	}).catch(function(err){
		resp.send(err);
	});
});

//找题目
//联合寻找题目
router.get('/getDepartmentSubject',function(req,resp){
	var id = req.query.id;
	var typeId = JSON.parse(id[0]);
	var levelId = JSON.parse(id[1]);
	var depmId = JSON.parse(id[2]);
	var topicId = JSON.parse(id[3]);
	findSubject.getDepartmentSubject(typeId,levelId,depmId,topicId).then(function(data){
		resp.send(data);
	}).catch(function(err){
		resp.send(err);
	});
});

router.get('/getDepartmentSubjectType',function(req,resp){
	var id = req.query.id;
	findSubject.getDepartmentSubjectType(id).then(function(data){
		resp.send(data);
	}).catch(function(err){
		resp.send(err);
	});
});

router.get('/getDepartmentSubjectlevel',function(req,resp){
	var id = req.query.id;
	findSubject.getDepartmentSubjectlevel(id).then(function(data){
		resp.send(data);
	}).catch(function(err){
		resp.send(err);
	});
});

router.get('/getDepartmentdepartment',function(req,resp){
	var id = req.query.id;
	findSubject.getDepartmentdepartment(id).then(function(data){
		resp.send(data);
	}).catch(function(err){
		resp.send(err);
	});
});

router.get('/getDepartmentTopics',function(req,resp){
	var id = req.query.id;
	findSubject.getDepartmentTopics(id).then(function(data){
		resp.send(data);
	}).catch(function(err){
		resp.send(err);
	});
});

//题干关键字查找
router.get('/findSubjectByStem',function(req,resp){
	var stem = req.query.stem;
	console.log(stem);
	findSubject.findSubjectByStem(stem).then(function(data){
		resp.send(data);
	}).catch(function(err){
		resp.send(err);
	});
});
//根据id查找题目答案
router.get ('/showAnswer',function(req,resp){
	var id = req.query.id;
	findSubject.showAnswer(id).then(function(data){
		resp.send(data);
	}).catch(function(err){
		resp.send(err);
	});
});

router.get ('/showRadioAnswer',function(req,resp){
	var id = req.query.id;
	findSubject.showRadioAnswer(id).then(function(data){
		resp.send(data);
	}).catch(function(err){
		resp.send(err);
	});
});

//添加题目
router.post('/saveSubject',function(req,resp){
	var subject = new Subject();
	Object.assign(subject,req.body);
	findSubject.saveSubject(subject).then(function(data){
		var choose = new Subject();
		choose.subject_id = data.insertId;
		Object.assign(choose,req.body);
		findSubject.saveSubjectChoose(choose).then(function(data1){
			
		}).catch(function(err1){
			resp.send(err1);
		});
	}).catch(function(err){
		resp.send(err);
	});
});

//修改审核状态
router.post('/checkSubject',function(req,resp){
	var id = req.body.id;
	var key = req.body.key;
	findSubject.checkSubject(id,key).then(function(data){
		resp.send(data);
	}).catch(function(err){
		resp.send(err);
	});
});

//修改审核状态
router.post('/delSubject',function(req,resp){
	var id = req.body.id;
	console.log(id);
	findSubject.delSubject(id).then(function(data){
		resp.send(data);
	}).catch(function(err){
		resp.send(err);
	});
});
module.exports = router;