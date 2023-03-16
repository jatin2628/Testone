const { Op } = require('sequelize');
const models = require('../models');
const Availibility_Slot = models.Availibility_Slot;
const Availibility = models.Availibility;

exports.avSlots = async (req,res)=>{
    try {
        const userid = req.userid;
       
        if(!userid){
           res.status(400).json({msg:"please login for access this permission"})
           return;
        }

        const {availbilty_id} = req.body;

        const slotst = await Availibility.findOne({where:{id:availbilty_id}});


        const data = await Availibility_Slot.create({
            user_id:userid,
            availbilty_id:availbilty_id,
            slots_time:slotst.slots
        })

        res.status(200).json({status:"ok",msg:"Inserted",data:data});
        
    } catch (e) {
        console.log(e);
    }
}

exports.listSlots = async (req,res)=>{
    try {
        const userid = req.userid;
        const date = req.body.date;
        const search = [];

        if(date!=undefined){
            const datedata = await Availibility.findAll({ where: { date: date } });
            if(datedata[0]==undefined){
                        res.status(200).json({msg:"No slot avilable this date"});
                        return;
            }
            for(const dt of datedata){
                // console.log("id is  ",dt.id);
                const real = await Availibility_Slot.findOne({where:
                    {
                        [Op.and]:[
                            {availbilty_id:dt.id},
                            {user_id:userid}
                        ]
                    }});
                if(real){
                    search.push({"mydata" : real.dataValues});
                }
                
                
            }
            res.status(200).json({status:"ok",msg:"Avilable slots are ",data:search});
            return;
        }

        const data = await Availibility_Slot.findAll({
            where:{
                user_id:userid
            }
        })

        res.status(200).json({status:"ok",msg:"Avilable slots are ",data:data});
    } catch (e) {
        console.log(e);
    }
}




       
        

        
        





 // const date = req.body.date;
        
        // if(date!=undefined){
        //     const arr = [];
        //     const datedata =await Availibility.findAll({ where: { date: date } });
        //     if(datedata[0]==undefined){
        //         res.status(200).json({msg:"No slot avilable this date"});
        //         return;
        //     }
        //     for (const dl of datedata) {
        //         console.log("udfuig8u8gu8r9u",dl.dataValues.id)
        //         const avd = await Availibility_Slot.findOne({
        //             where: {
        //                 [Op.and]:[
        //                 {user_id: userid},
        //                 {availbilty_id: dl.id}
        //                 ]
        //             }
        //         })
        //         arr.push({avd});
        //         res.status(200).json({ status: "ok", msg: "Avilable slots are ", data: arr });
        //         return;
        //     }            
        // }
        