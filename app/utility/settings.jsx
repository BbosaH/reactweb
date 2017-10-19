/**
 * @Author: Henry Bbosa
 * @Date:   2017-10-13T23:38:58+03:00
 * @Email:  bbosa.henry1@gmail.com
 * @Project: reactweb
 * @Filename: settings.jsx
 * @Last modified by:   Henry Bbosa
 * @Last modified time: 2017-10-17T20:04:40+03:00
 */
 export const EMAIL_CHANGED = 'email_changed';
 export const LOGIN_EMAIL_CHANGED = 'login_email_changed';
 export const PASSWORD_CHANGED = 'password_changed';
 export const LOGIN_USER = 'login_user'
 export const LOGIN_USER_SUCCESS = 'login_user_success'
 export const LOGIN_USER_FAIL = 'login_user_fail'
 export const REGISTER_USER = 'login_user'
 export const REGISTRATION_USER_SUCCESS = 'login_user_success'
 export const REGISTRATION_USER_FAIL = 'login_user_fail'
 export const REQUEST_INVITATION="request_for_invitation"
 export const REQUEST_INVITATION_SUCCESS="invitaion_request_successful"
 export const REQUEST_INVITATION_FAIL="invitation_request_failed"
 export const LOGIN_REDIRECT_ACCEPTED="redirect_to_home"
 export const WRONG_EMAIL_PROVIDED="Wrong Email format"
 export const INVITATION_ITEM_CLICKED="invitation_item_clicked"
 export const INVITATION_REQUESTS_UPDATED="invitation_requests_updated"
 export const NAVIGATED_TOSHAREDKNOWLEDGE="navigated_to_sharedknowledge"
 export const SHOW_ARTICLES="SHOW_ARTICLES"
 export const CREATE_ARTICLE="CREATE_ARTICLE"
 export const ARTICLE_TEXT_CHANGED="ARTICLE_TEXT_CHANGED"
 export const ARTICLE_TITLE_CHANGED="ARTICLE_TITLE_CHANGED"
 export const ARTICLE_SUBMITED="ARTICLE_SUBMITED"
 export const ARTICLE_IMAGE_CHANGED="ARTICLE_IMAGE_CHANGED"
 export const  ARTICLES_FETCHED = " ARTICLES_FETCHED"
 export const SHOW_MY_ARTICLES="SHOW_MY_ARTICLES"

 export const INVITATION_REQUEST_STATUS_PENDING = "pending"
 export const INVITATION_REQUEST_STATUS_ACCEPTED = "accepted"
 export const INVITATION_REQUEST_STATUS_REJECTED = "rejected"
 export const EMAIL_REG_EXP = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
 export const NUM_REG_EXP = /^[0-9]+$/;
 export const TIMEZONE_REG_EXP =/^(?:Z|[+-](?:2[0-3]|[01][0-9]):[0-5][0-9])$/;

 export const API_URL = process.env.NODE_ENV === 'production' ?
 'http://localhost:3000' : 'http://localhost:3000';
 export const ARTICLE_IMAGE_URL = API_URL+"/article_image";
 export const ARTICLE_IMAGE_URL_PICK = API_URL+"/images/";

 export const PRIMARY_COLOR=""
 export const SECONDARY_COLOR=""
 export const ACCENT_COLOR =""
