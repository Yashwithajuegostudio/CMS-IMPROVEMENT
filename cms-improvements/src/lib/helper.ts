import Router from "next/router";
import { useState } from "react";
import { ButtonName, StatusCode } from "./constant";

//helper function
export const validateEmail = (email: string): boolean => {
  const reg = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
  if (email.match(reg)) return true;
  return false;
};

export const validateMobileNumber = (mobileNo: string): boolean => {
  const reg = /(0|91)?[7-9][0-9]{9}/;
  if (mobileNo.match(reg)) return true;
  return false;
};

export const routerNavigation = (path: string) => {
  return Router.push(path);
};

export const convertToSeconds = (time: string) => {
  const [hours, minutes, seconds] = time.split(":");
  const totalSeconds = +hours * 60 * 60 + +minutes * 60 + +seconds;
  return totalSeconds;
};

export const dateValidation = (
  start_date: string | number | Date | any,
  end_date: string | number | Date | any
) => {
  if (new Date(start_date) >= new Date(end_date)) {
    return true;
  } else {
    return false;
  }
};

export const range = (start: number, end: number) => {
  let length = end - start + 1;
  return Array.from({ length }, (_, idx) => idx + start);
};

export const padTo2Digits = (num: number) => {
  return num.toString().padStart(2, "0");
};

export const convertMsToHM = (milliseconds: number) => {
  let seconds = Math.floor(milliseconds / 1000);
  let minutes = Math.floor(seconds / 60);
  let hours = Math.floor(minutes / 60);
  minutes = minutes % 60;
  return `${padTo2Digits(hours)}:${padTo2Digits(minutes)}`;
};

// two decimal place regex pattern
export const pattern = /^[0-9\b]+$/;

// validate two decimal place function
export const validateNumber = (value: string) => {
  if (pattern.test(value)) {
    return value;
  }
};

const getQuery = () => {
  if (typeof window !== "undefined") {
    return new URLSearchParams(window.location.search);
  }
  return new URLSearchParams();
};
const getQueryStringVal = (key: string): string | null => {
  return getQuery().get(key);
};

// query parameter passing to the URL
export const useQueryParam = (
  key: string,
  defaultVal: string
): [string, (val: string) => void] => {
  const [query, setQuery] = useState(getQueryStringVal(key) || defaultVal);

  const updateUrl = (newVal: string) => {
    setQuery(newVal);

    const query = getQuery();

    if (newVal.trim() !== "") {
      query.set(key, newVal);
    } else {
      query.delete(key);
    }

    // This check is necessary if using the hook with Gatsby
    if (typeof window !== "undefined") {
      const { protocol, pathname, host } = window.location;
      const newUrl = `${protocol}//${host}${pathname}?${query.toString()}`;
      window.history.pushState({}, "", newUrl);
    }
  };

  return [query, updateUrl];
};

// check button status
export const checkStatus = (status: string) => {
  const statusValue =
    status === ButtonName.Active
      ? StatusCode.Active
      : status === ButtonName.InProgress
      ? StatusCode.InProgress
      : status === ButtonName.Deleted
      ? StatusCode.Deleted
      : status === ButtonName.Completed
      ? StatusCode.Completed
      : StatusCode.Pending;
  return statusValue;
};
