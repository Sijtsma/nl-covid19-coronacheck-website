import { format, addHours } from 'date-fns';
import { nl, en } from 'date-fns/locale';
import i18n from '@/i18n'

const monthNumberToMonthNameAbbr = (n) => {
    return i18n.t('date.months.abbr.' + (n - 1))
}

const dateToString = (dateInput, dateFormat = 'dd-MM-yyyy', locale) => {
    switch (locale) {
    case 'en':
        locale = en;
        break;
    default:
        locale = nl;
        break;
    }
    return format(new Date(dateInput), dateFormat, { locale });
}

const dateTimeToString = (dateInput, dateFormat = 'dd-MM-yyyy HH:mm', locale) => {
    switch (locale) {
    case 'en':
        locale = en;
        break;
    default:
        locale = nl;
        break;
    }
    return format(new Date(dateInput), dateFormat, { locale });
}

const addHoursToDate = (dateInput, hours, formatted) => {
    const newDate = addHours(new Date(dateInput), hours);
    console.log(newDate, dateInput);
    return formatted ? dateTimeToString(newDate) : newDate;
}

export default {
    monthNumberToMonthNameAbbr,
    dateToString,
    dateTimeToString,
    addHoursToDate
}
