/**
 * @Author: Henry Bbosa
 * @Date:   2017-10-16T01:52:14+03:00
 * @Email:  bbosa.henry1@gmail.com
 * @Project: potato
 * @Filename: config.jsx
 * @Last modified by:   Henry Bbosa
 * @Last modified time: 2017-10-17T17:01:15+03:00
 */

 const data2 = {
     name: 'Videos',
     toggled: true,
     children: [
         {
             name: 'parent',
             children: [
                 { name: 'child1' },
                 { name: 'child2' }
             ]
         },
         {
             name: 'loading parent',
             loading: true,
             children: []
         },
         {
             name: 'parent',
             children: [
                 {
                     name: 'nested parent',
                     children: [
                         { name: 'nested child 1' },
                         { name: 'nested child 2' }
                     ]
                 }
             ]
         }
     ]
 };

 const data3 = {
     name: 'Pictures',
     toggled: true,
     children: [
         {
             name: 'parent',
             children: [
                 { name: 'child1',
                   children :[
                     {name : 'henry'},
                     {name : 'xoxoxo'}
                   ]

                 },
                 { name: 'child2' }
             ]
         },
         {
             name: 'loading parent',
             loading: true,
             children: []
         },
         {
             name: 'parent',
             children: [
                 {
                     name: 'nested parent',
                     children: [
                         { name: 'nested child 1' },
                         { name: 'nested child 2' }
                     ]
                 }
             ]
         }
     ]
 };
