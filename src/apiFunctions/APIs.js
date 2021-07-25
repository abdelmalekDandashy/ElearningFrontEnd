import {
    Proxy
} from '../fetch/fetch'
import * as P from '../fetch/fetch';


let myProxy = new Proxy();


export async function Get_Answer_By_OWNER_ID_Adv(OWNER_ID) {

    let oParams_Get_Answer_By_OWNER_ID = new P.Params_Get_Answer_By_OWNER_ID();
    oParams_Get_Answer_By_OWNER_ID.OWNER_ID = OWNER_ID;
    let result = await myProxy.Get_Answer_By_OWNER_ID_Adv(oParams_Get_Answer_By_OWNER_ID);
    let newRes = [];
    // console.log('all answers by owner id' + JSON.stringify(result));

    if (result?.My_Result) {
        // console.log(result.My_Result);
        result.My_Result.map((x) => newRes.push({
            'QUESTION_ID': x.QUESTION_ID,
            'answer': x.DESCRIPTION,
            'TEACHER_ID': x.TEACHER_ID,
            'question': x.My_Question.DESCRIPTION,
            'STUDENT_ID': x.My_Question.STUDENT_ID,
            'CATEGORY_ID': x.My_Question.CATEGORY_ID,
            'ANSWER_ID': x.ANSWER_ID,

        }))
    }
    return newRes;
};

export async function Get_Answer_Details(QUESTION_ID) {

    let oParams_Get_Answer_Details = new P.Params_Get_Answer_Details();
    oParams_Get_Answer_Details.QUESTION_ID = QUESTION_ID;
    let result = await myProxy.Get_Answer_Details(oParams_Get_Answer_Details);

    if (result?.My_Result) {
        // console.log(result.My_Result);

        return result.My_Result;
    }
};
export async function Get_Category_By_OWNER_ID(OWNER_ID) {

    let oParams_Get_Category_By_OWNER_ID = new P.Params_Get_Category_By_OWNER_ID();
    oParams_Get_Category_By_OWNER_ID.OWNER_ID = OWNER_ID;
    let result = await myProxy.Get_Category_By_OWNER_ID(oParams_Get_Category_By_OWNER_ID);

    if (result?.My_Result) {
        // console.log(result.My_Result);

        return result.My_Result;
    }
    return result;
};
export async function Get_Question_By_OWNER_ID(OWNER_ID) {

    let oParams_Get_Question_By_OWNER_ID = new P.Params_Get_Question_By_OWNER_ID();
    oParams_Get_Question_By_OWNER_ID.OWNER_ID = OWNER_ID;
    let result = await myProxy.Get_Question_By_OWNER_ID(oParams_Get_Question_By_OWNER_ID);

    if (result?.My_Result) {
        // console.log(result.My_Result);

        return result.My_Result;
    }
    return result;
};


