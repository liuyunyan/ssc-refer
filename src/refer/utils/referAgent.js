/**
 * Created by Administrator on 2017/3/16.
 */
import superagent from 'superagent';

let defaultHeaders = {};
function isObject(obj) { return Object(obj) === obj }

function request(method, url) {
  return superagent(method, url).set(defaultHeaders);
}

request.set = function (field, value) {
  if (isObject(field)) {
    for(var key in field) this.set(key, field[key]);
    return this;
  }
  defaultHeaders[field] = value;
  return this;
}

export default request;