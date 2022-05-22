'use strict';

// { name: タスクの文字列, state: 完了しているかどうかの真偽値 }
const tasks = [];

/**
 * TODOを追加する
 * @param {string} taskName
 */
function add(taskName) {
  tasks.push({ name: taskName, state: false });
}

/**
 * タスクが完了したかどうかが含まれるオブジェクトを受け取り、完了したかを返す
 * @param {object} taskAndIsDonePair
 * @returns {boolean} 完了したかどうか
 */
function isDone(taskAndIsDonePair) {
  return taskAndIsDonePair.state;
}

/**
 * タスクと完了したかどうかが含まれるオブジェクトを受け取り、完了していないかを返す
 * @param {object} taskAndIsDonePair
 * @returns {boolean} 完了していないかどうか
 */
function isNotDone(taskAndIsDonePair) {
  return !isDone(taskAndIsDonePair);
}

/**
 * TODOの一覧の配列を取得
 * @return {array}
 */
function list() {
  return tasks.filter(isNotDone).map((task) => task.name);
}

/**
 * TODOを完了状態にする
 * @param {string} taskName
 */

function done(taskName) {
  const indexFound = tasks.findIndex((task) => task.name === taskName);
  if (indexFound !== -1) {
    tasks[indexFound].state = true;
  }
}

/**
 * 完了済みのタスクの一覧の配列を取得する
 * @returns {array}
 */

function donelist() {
  return tasks.filter(isDone).map((task) => task.name);
}

/**
 * TODOを削除する
 * @param {string} taskName
 */

function del(taskName) {
  const indexFound = tasks.findIndex((task) => task.name === taskName);
  if (indexFound !== -1) {
    tasks.splice(indexFound, 1);
  }
}

module.exports = { add, list, done, donelist, del };
