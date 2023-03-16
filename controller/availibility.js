const models = require('../models');
const Availibility = models.Availibility;
const Availibility_Slot = models.Availibility_Slot;
const moment = require('moment');
const { Op } = require('sequelize');


exports.Availibility = async(req,res)=>{
    try {
        const userid = req.userid;
       
        if(!userid){
           res.status(400).json({msg:"please login for access this permission"})
           return;
        }

        const {date,slot_time_to,slot_time_from,session_length,break_bw_session,slots} = req.body;
        const av_arr = [];

        const slotts = [];
        

        


        for(const sl of slots){
             av_arr.push(
                {
                    date:date,
                    slot_time_to:slot_time_to,
                    slot_time_from:slot_time_from,
                    session_length:session_length,
                    break_bw_session:break_bw_session,
                    slots:sl
                }
            );
        }

        
        const adata = await Availibility.bulkCreate(av_arr);
        res.status(200).json({status:"ok",msg:"Inserted",data:adata});

    } catch (e) {
        console.log(e);
    }
}