/**
 * @Author: Henry Bbosa
 * @Date:   2017-10-12T04:59:16+03:00
 * @Email:  bbosa.henry1@gmail.com
 * @Project: reactweb
 * @Filename: actions.test.jsx
 * @Last modified by:   Henry Bbosa
 * @Last modified time: 2017-10-15T07:15:03+03:00
 */

 import {assert} from "chai";
 import{
  LOGIN_USER,
  EMAIL_CHANGED,
  LOGIN_USER_SUCCESS,
  LOGIN_EMAIL_CHANGED,
  PASSWORD_CHANGED,
  LOGIN_USER_FAIL,
  LOGIN_REDIRECT_ACCEPTED
} from 'Settings'
 import {
  loginEmailChangeAction,
  loginAction,
  loginPasswordChangeAction
} from "LoginActions";
 import _ from 'lodash'

 describe("LoginActions",()=>{

    
    it('Should generate changemail Action',()=>{

          const action = {
            type :LOGIN_EMAIL_CHANGED,
            email:'bbosa.henry1@gmail.com'
          }
          const res = loginEmailChangeAction(action.email);
          assert.equal(_.isEqual(res, action),true) ;

    })

    
    it("Should generate password change action",()=>{
        const action ={
          type : PASSWORD_CHANGED,
          password : 'she_elf'
        } 
        const res = loginPasswordChangeAction(action.password);
        expect(_.isEqual(res, action)).to.equal(true);
    });

    describe('Login Action',()=>{
      let email , password=''
      beforeEach(()=>{
        email ="peter@peter.com";
        password="123456";
      });
      it('should generate Action loginUser',()=>{
        const action ={
          type :LOGIN_USER
        }
        const res = loginAction(email,password);
        expect(_.isEqual(res,action)).to.equal(true);
      });
      it('should generate action userSuccess given presence of user',()=>{
        // const user = {

        //   id : '4393538ujrere',
        //   name : henry,
        //   email: Gosia,

        // }_
        // const res=loginAction(email,password);

      })
    });

 });
