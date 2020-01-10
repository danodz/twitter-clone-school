import format from 'date-fns/format';
import formatDistanceToNow from 'date-fns/formatDistanceToNow';
import parseISO from 'date-fns/parseISO';

export const getHumanizedDate = timestamp => {
  return format(parseISO(timestamp), 'MMM do');
};
