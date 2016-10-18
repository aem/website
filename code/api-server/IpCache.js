import { Map, Record } from 'immutable';

const SECOND_MS = 1000;
const MINUTE_MS = 60 * SECOND_MS;
const HOUR_MS = 60 * MINUTE_MS;
const DAY_MS = 24 * HOUR_MS;
const WEEK_MS = 7 * DAY_MS;

let cache = new Map();

const IpInfo = new Record({
  count: 1,
  date: new Date()
});

const requestIpLease = function(ip) {
  if (!cache.has(ip)) {
    cache = cache.set(ip, new IpInfo()).merge({date: new Date()});
    return true;
  }
  if (cache.get(ip).count >= 3) {
    if (new Date() - cache.get(ip).date < WEEK_MS) {
      return false;
    } else {
      cache = cache.set(ip, new IpInfo().merge({date: new Date()}));
      return true;
    }
  }
  cache = cache.set(ip, new IpInfo().merge({
    count: cache.get(ip).count + 1,
    date: new Date()
  }));
  return true;
};

export default { requestIpLease };
