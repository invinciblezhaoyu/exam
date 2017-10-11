require('babel-polyfill');
var express = require('express');
var findType = require('./findType');
var findType = require('./findSubject');

// findType.findSubType().then(function(data){
// 	console.log(data);
// }).catch(function(err){
// 	console.log(err);
// });

// findType.findSubLevel().then(function(data){
// 	console.log(data);
// }).catch(function(err){
// 	console.log(err);
// });

// findType.findEpartment().then(function(data){
// 	console.log(data);
// }).catch(function(err){
// 	console.log(err);
// });

// findType.findTopic().then(function(data){
// 	console.log(data);
// }).catch(function(err){
// 	console.log(err);
// });

// findType.getAllSubjects().then(function(data){
// 	console.log(data);
// }).catch(function(err){
// 	console.log(err);
// });

// findType.getAllSubjectType(3).then(function(data){
// 	console.log(data);
// }).catch(function(err){
// 	console.log(err);
// });

// findType.getAllSubjectlevel(1).then(function(data){
// 	console.log(data);
// }).catch(function(err){
// 	console.log(err);
// });

// findType.getAllDepartment(1).then(function(data){
// 	console.log(data);
// }).catch(function(err){
// 	console.log(err);
// });

// findType.getDepartmentTopics(1).then(function(data){
// 	console.log(data);
// }).catch(function(err){
// 	console.log(err);
// });