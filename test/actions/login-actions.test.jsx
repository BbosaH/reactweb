/**
 * @Author: Henry Bbosa
 * @Date:   2017-10-12T04:59:16+03:00
 * @Email:  bbosa.henry1@gmail.com
 * @Project: reactweb
 * @Filename: actions.test.jsx
 * @Last modified by:   Henry Bbosa
 * @Last modified time: 2017-10-15T07:15:03+03:00
 */

 import {assert} from 'chai'
 import {emailChangeAction,loginAction} from "LoginActions"

 describe("LoginActions",()=>{
    describe('changeEmailAction',()=>{
      it('Should generate changemail Action',()=>{
          const action ={
            type :'EMAIL_CHANGED',
            email:'bbosa.henry1@gmail.com'
          }
          const res = emailChangeAction(action.email);
          assert.equal(res,action);


      })

    });

 });
