import reducers from '../components/redux/reducers';
test('reducers', () => {
    let state;
    state = reducers(
        {leads:
            {
                leads:[{id:1,name:'deepitha',email:'deepithacutiepie@shankarsheart.com',message:'atleast one time.....achu mama..nu sollu chellam',created_at:'2020-12-22T12:47:35.138000Z'},
                {id:2,name:'deepi',email:'deepitha@sparrowsheart.com',message:'sarangey',created_at:'2020-12-22T12:52:13.535000Z'},
                {id:3,name:'cutiepie',email:'shankar\'sdoubt@deepithaheart.com',message:'you are a one in million girl',created_at:'2020-12-22T12:53:24.998000Z'},
                {id:4,name:'cutieheartie',email:'sparrow@deepitha.com',message:'you are a one in million girl',created_at:'2020-12-23T05:49:59.908000Z'},
                {id:5,name:'cutiepie',email:'sparrowdoubt@deepithaheart.com',message:'you are a one in million girl',created_at:'2020-12-23T06:22:09.980000Z'},
                {id:8,name:'cutiepie',email:'sparrow@deepithaheart.com',message:'you are a one in million girl',created_at:'2020-12-23T14:29:28.086000Z'},
                {id:9,name:'cutiepie',email:'sparrow@deepiheart.com',message:'you are a one in million girl',created_at:'2020-12-23T14:29:44.725000Z'}]}},
                 {type:'GET_LEADS',payload:[{id:1,name:'deepitha',email:'deepithacutiepie@shankarsheart.com',message:'atleast one time.....achu mama..nu sollu chellam',created_at:'2020-12-22T12:47:35.138000Z'},
                 {id:2,name:'deepi',email:'deepitha@sparrowsheart.com',message:'sarangey',created_at:'2020-12-22T12:52:13.535000Z'},
                 {id:3,name:'cutiepie',email:'shankar\'sdoubt@deepithaheart.com',message:'you are a one in million girl',created_at:'2020-12-22T12:53:24.998000Z'},
                 {id:4,name:'cutieheartie',email:'sparrow@deepitha.com',message:'you are a one in million girl',created_at:'2020-12-23T05:49:59.908000Z'},
                 {id:5,name:'cutiepie',email:'sparrowdoubt@deepithaheart.com',message:'you are a one in million girl',created_at:'2020-12-23T06:22:09.980000Z'},
                 {id:8,name:'cutiepie',email:'sparrow@deepithaheart.com',message:'you are a one in million girl',created_at:'2020-12-23T14:29:28.086000Z'},
                 {id:9,name:'cutiepie',email:'sparrow@deepiheart.com',message:'you are a one in million girl',created_at:'2020-12-23T14:29:44.725000Z'}]});
    expect(state).toEqual({leads:{leads:[{id:1,name:'deepitha',email:'deepithacutiepie@shankarsheart.com',message:'atleast one time.....achu mama..nu sollu chellam',created_at:'2020-12-22T12:47:35.138000Z'},
    {id:2,name:'deepi',email:'deepitha@sparrowsheart.com',message:'sarangey',created_at:'2020-12-22T12:52:13.535000Z'},
    {id:3,name:'cutiepie',email:'shankar\'sdoubt@deepithaheart.com',message:'you are a one in million girl',created_at:'2020-12-22T12:53:24.998000Z'},
    {id:4,name:'cutieheartie',email:'sparrow@deepitha.com',message:'you are a one in million girl',created_at:'2020-12-23T05:49:59.908000Z'},
    {id:5,name:'cutiepie',email:'sparrowdoubt@deepithaheart.com',message:'you are a one in million girl',created_at:'2020-12-23T06:22:09.980000Z'},
    {id:8,name:'cutiepie',email:'sparrow@deepithaheart.com',message:'you are a one in million girl',created_at:'2020-12-23T14:29:28.086000Z'},
    {id:9,name:'cutiepie',email:'sparrow@deepiheart.com',message:'you are a one in million girl',created_at:'2020-12-23T14:29:44.725000Z'}]}});
  });