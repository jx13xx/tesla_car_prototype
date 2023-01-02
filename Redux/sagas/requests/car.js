import axios from 'axios';
import {BASE_URL} from '@env';

export function requestGetCars() {
  return axios.request({
    method: 'get',
    url: `${BASE_URL}`,
  });
}

export function requestGetCarFeatures(id) {
  return axios.request({
    method: 'get',
    url: `${BASE_URL}/${id}/features`,
  });
}

export function requestGetCarInterior(id) {
  return axios.request({
    method: 'get',
    url: `${BASE_URL}/${id}/interior`,
  });
}

export function requestGetCarExterior(id) {
  return axios.request({
    method: 'GET',
    url: `${BASE_URL}/${id}/exterior`,
  });
}

export function requestGetCarAutopilot(id) {
  return axios.request({
    method: 'get',
    url: `${BASE_URL}/${id}/autopilot`,
  });
}
