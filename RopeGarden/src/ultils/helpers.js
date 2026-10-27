import { ulid } from 'ulid';
import axios from 'axios';

import {
  addDays as addDaysDateFns,
  endOfDay as endOfDayDateFns,
  format as formatDateFns,
  isBefore as isAfterDateFns,
  startOfDay as startOfDayDateFns,
} from 'date-fns';
import is from 'express';

export function sortByDate(a, b) {
  if (a.createdAt > b.createdAt) {
    return -1;
  } else {
    return 1;
  }
}

export function id() {
  const newId = ulid();
  return newId;
}

export function addDays(data, days) {
  const newDate = addDaysDateFns(data, days);
  return newDate;
}

export function startOfDay(data, days) {
  return startOfDayDateFns(data, days);
}

export function isAfter(initial, final) {
  return isAfterDateFns(initial, final);
}

export function endOfDay(date) {
  return endOfDayDateFns(date);
}

export function newDate() {
  const response = new Date();
  return response;
}

export function yesterday() {
  const today = newDate();

  return new Date(
    today.getFullYear(),
    today.getMonth(),
    today.getDate() - 1,
  );
}

export function startDate(date) {
  return new Date(
    new Date(
      date.getFullYear(),
      date.getMonth(),
      date.getDate(),
      0,
      0,
      0,
    ).toISOString());
};

export function endDate(date) {
  return new Date(
    new Date(
      date.getFullYear(),
      date.getMonth(),
      date.getDate(),
      23,
      59,
      59,
    ).toISOString());

};

export function createNewDate(data) {
  const response = new Date(data);
  return response;
}

export function formatDate(data, type) {
  const response = formatDateFns(data, type);
  return response;
}

export function strip(number) {
  return parseFloat(number.toFixed(2));
}