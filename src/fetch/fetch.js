
export class Proxy {
  constructor() {
    this.APIBaseUrl = 'https://localhost:5001/api/data';
    this.url = '';
    this.Ticket = 'USER_ID:4[~!@]OWNER_ID:1[~!@]START_DATE:2021-05-03[~!@]START_MINUTE:43[~!@]SESSION_PERIOD:60';
    this.TicketMode = 'url';
  }
  api(url) {
    return fetch(url)
      .then(response => {
        if (!response.ok) {
          throw new Error(response.statusText);
        }
        return response.json();
      });
  }
  apiPost(url, data) {
    return fetch(url, {
      method: 'POST',
      mode: 'cors',
      cache: 'no-cache',
      credentials: 'same-origin',
      headers: {
        'Content-Type': 'application/json',
        ticket: this.Ticket
      },
      referrerPolicy: 'no-referrer',
      body: JSON.stringify(data)
    })
      .then(response => {
        if (!response.ok) {
          // console.log(response);
          throw new Error(response.statusText);
        }
        return response.json();
      });
  }
  async Get_Answer_By_OWNER_ID(i_Params_Get_Answer_By_OWNER_ID) {
    this.url = this.APIBaseUrl + '/Get_Answer_By_OWNER_ID?Ticket=' + (this.TicketMode === 'url' ? this.Ticket : '');
    const result = await this.apiPost(this.url, i_Params_Get_Answer_By_OWNER_ID).then(async (resp) => {
      return resp;
    });
    return result.My_Result;
  }
  async Edit_Answer(i_Answer) {
    this.url = this.APIBaseUrl + '/Edit_Answer?Ticket=' + (this.TicketMode === 'url' ? this.Ticket : '');
    const result = await this.apiPost(this.url, i_Answer).then(async (resp) => {
      return resp;
    });
    return result.My_Answer;
  }
  async Get_Answer_By_Criteria(i_Params_Get_Answer_By_Criteria) {
    this.url = this.APIBaseUrl + '/Get_Answer_By_Criteria?Ticket=' + (this.TicketMode === 'url' ? this.Ticket : '');
    const result = await this.apiPost(this.url, i_Params_Get_Answer_By_Criteria).then(async (resp) => {
      return resp;
    });
    return result.My_Result;
  }
  async Delete_Answer(i_Params_Delete_Answer) {
    this.url = this.APIBaseUrl + '/Delete_Answer?Ticket=' + (this.TicketMode === 'url' ? this.Ticket : '');
    const result = await this.apiPost(this.url, i_Params_Delete_Answer).then(async (resp) => {
      return resp;
    });
    return result.any;
  }
  async Get_Answer_By_STUDENT_ID_List(i_Params_Get_Answer_By_STUDENT_ID_List) {
    this.url = this.APIBaseUrl + '/Get_Answer_By_STUDENT_ID_List?Ticket=' + (this.TicketMode === 'url' ? this.Ticket : '');
    const result = await this.apiPost(this.url, i_Params_Get_Answer_By_STUDENT_ID_List).then(async (resp) => {
      return resp;
    });
    return result;
  }

  async Get_Answer_By_OWNER_ID_Adv(i_Params_Get_Answer_By_OWNER_ID) {
    this.url = this.APIBaseUrl + '/Get_Answer_By_OWNER_ID_Adv?Ticket=' + (this.TicketMode === 'url' ? this.Ticket : '');
    const result = await this.apiPost(this.url, i_Params_Get_Answer_By_OWNER_ID).then(async (resp) => {
      return resp;
    })
    return result;
  }

  async Get_Answer_By_QUESTION_ID_Adv(i_Params_Get_Answer_By_QUESTION_ID) {
    this.url = this.APIBaseUrl + '/Get_Answer_By_QUESTION_ID_Adv?Ticket=' + (this.TicketMode === 'url' ? this.Ticket : '');
    const result = await this.apiPost(this.url, i_Params_Get_Answer_By_QUESTION_ID).then(async (resp) => {
      return resp;
    })
    return result;
  }
  async Get_Answer_Details(i_Params_Get_Answer_Details) {
    this.url = this.APIBaseUrl + '/Get_Answer_Details?Ticket=' + (this.TicketMode === 'url' ? this.Ticket : '');
    const result = await this.apiPost(this.url, i_Params_Get_Answer_Details).then(async (resp) => {
      return resp;
    })
    return result;
  }

  async Edit_Question(i_Question) {
    this.url = this.APIBaseUrl + '/Edit_Question?Ticket=' + (this.TicketMode === 'url' ? this.Ticket : '');
    const result = await this.apiPost(this.url, i_Question).then(async (resp) => {
      return resp;
    });
    return result;
  }
  async Get_Question_By_CATEGORY_ID_List(i_Params_Get_Question_By_CATEGORY_ID_List) {
    this.url = this.APIBaseUrl + '/Get_Question_By_CATEGORY_ID_List?Ticket=' + (this.TicketMode === 'url' ? this.Ticket : '');
    const result = await this.apiPost(this.url, i_Params_Get_Question_By_CATEGORY_ID_List).then(async (resp) => {
      return resp;
    });
    return result.My_Result;
  }
  async Get_Question_By_STUDENT_ID_List(i_Params_Get_Question_By_STUDENT_ID_List) {
    this.url = this.APIBaseUrl + '/Get_Question_By_STUDENT_ID_List?Ticket=' + (this.TicketMode === 'url' ? this.Ticket : '');
    const result = await this.apiPost(this.url, i_Params_Get_Question_By_STUDENT_ID_List).then(async (resp) => {
      return resp;
    });
    return result.My_Result;
  }
  async Get_Question_By_QUESTION_ID(i_Params_Get_Question_By_QUESTION_ID) {
    this.url = this.APIBaseUrl + '/Get_Question_By_QUESTION_ID?Ticket=' + (this.TicketMode === 'url' ? this.Ticket : '');
    const result = await this.apiPost(this.url, i_Params_Get_Question_By_QUESTION_ID).then(async (resp) => {
      return resp;
    });
    return result.My_Result;
  }
  async Delete_Question(i_Params_Delete_Question) {
    this.url = this.APIBaseUrl + '/Delete_Question?Ticket=' + (this.TicketMode === 'url' ? this.Ticket : '');
    const result = await this.apiPost(this.url, i_Params_Delete_Question).then(async (resp) => {
      return resp;
    });
    return result.any;
  }
  async Get_Question_By_Criteria(i_Params_Get_Question_By_Criteria) {
    this.url = this.APIBaseUrl + '/Get_Question_By_Criteria?Ticket=' + (this.TicketMode === 'url' ? this.Ticket : '');
    const result = await this.apiPost(this.url, i_Params_Get_Question_By_Criteria).then(async (resp) => {
      return resp;
    });
    return result.My_Result;
  }
  async Get_Question_By_OWNER_ID(i_Params_Get_Question_By_OWNER_ID) {
    this.url = this.APIBaseUrl + '/Get_Question_By_OWNER_ID?Ticket=' + (this.TicketMode === 'url' ? this.Ticket : '');
    const result = await this.apiPost(this.url, i_Params_Get_Question_By_OWNER_ID).then(async (resp) => {
      return resp;
    });
    return result.My_Result;
  }
  async Edit_Category_favorite(i_Category_favorite) {
    this.url = this.APIBaseUrl + '/Edit_Category_favorite?Ticket=' + (this.TicketMode === 'url' ? this.Ticket : '');
    const result = await this.apiPost(this.url, i_Category_favorite).then(async (resp) => {
      return resp;
    });
    return result.My_Category_favorite;
  }
  async Get_Category_By_OWNER_ID(i_Params_Get_Category_By_OWNER_ID) {
    this.url = this.APIBaseUrl + '/Get_Category_By_OWNER_ID?Ticket=' + (this.TicketMode === 'url' ? this.Ticket : '');
    const result = await this.apiPost(this.url, i_Params_Get_Category_By_OWNER_ID).then(async (resp) => {
      return resp;
    });
    return result.My_Result;
  }
  async Get_Student_By_OWNER_ID(i_Params_Get_Student_By_OWNER_ID) {
    this.url = this.APIBaseUrl + '/Get_Student_By_OWNER_ID?Ticket=' + (this.TicketMode === 'url' ? this.Ticket : '');
    const result = await this.apiPost(this.url, i_Params_Get_Student_By_OWNER_ID).then(async (resp) => {
      return resp;
    });
    return result.My_Result;
  }
  async Get_Student_By_STUDENT_ID_Adv(i_Params_Get_Student_By_STUDENT_ID) {
    this.url = this.APIBaseUrl + '/Get_Student_By_STUDENT_ID_Adv?Ticket=' + (this.TicketMode === 'url' ? this.Ticket : '');
    const result = await this.apiPost(this.url, i_Params_Get_Student_By_STUDENT_ID).then(async (resp) => {
      return resp;
    });
    return result.My_Result;
  }

  async Get_Student_By_USER_ID(i_Params_Get_Student_By_USER_ID) {
    this.url = this.APIBaseUrl + '/Get_Student_By_USER_ID?Ticket=' + (this.TicketMode === 'url' ? this.Ticket : '');
    const result = await this.apiPost(this.url, i_Params_Get_Student_By_USER_ID).then(async (resp) => {
      return resp;
    })
    return result;
  }
  async Get_Teacher_By_CATEGORY_ID_List(i_Params_Get_Teacher_By_CATEGORY_ID_List) {
    this.url = this.APIBaseUrl + '/Get_Teacher_By_CATEGORY_ID_List?Ticket=' + (this.TicketMode === 'url' ? this.Ticket : '');
    const result = await this.apiPost(this.url, i_Params_Get_Teacher_By_CATEGORY_ID_List).then(async (resp) => {
      return resp;
    });
    return result.My_Result;
  }
  async Get_Teacher_By_OWNER_ID(i_Params_Get_Teacher_By_OWNER_ID) {
    this.url = this.APIBaseUrl + '/Get_Teacher_By_OWNER_ID?Ticket=' + (this.TicketMode === 'url' ? this.Ticket : '');
    const result = await this.apiPost(this.url, i_Params_Get_Teacher_By_OWNER_ID).then(async (resp) => {
      return resp;
    });
    return result.My_Result;
  }
  async Get_Teacher_By_TEACHER_ID_Adv(i_Params_Get_Teacher_By_TEACHER_ID) {
    this.url = this.APIBaseUrl + '/Get_Teacher_By_TEACHER_ID_Adv?Ticket=' + (this.TicketMode === 'url' ? this.Ticket : '');
    const result = await this.apiPost(this.url, i_Params_Get_Teacher_By_TEACHER_ID).then(async (resp) => {
      return resp;
    });
    return result.My_Result;
  }
  async Edit_Teacher_favorite(i_Teacher_favorite) {
    this.url = this.APIBaseUrl + '/Edit_Teacher_favorite?Ticket=' + (this.TicketMode === 'url' ? this.Ticket : '');
    const result = await this.apiPost(this.url, i_Teacher_favorite).then(async (resp) => {
      return resp;
    });
    return result.My_Teacher_favorite;
  }
  async Get_User_By_USER_ID_Adv(i_Params_Get_User_By_USER_ID) {
    this.url = this.APIBaseUrl + '/Get_User_By_USER_ID_Adv?Ticket=' + (this.TicketMode === 'url' ? this.Ticket : '');
    const result = await this.apiPost(this.url, i_Params_Get_User_By_USER_ID).then(async (resp) => {
      return resp;
    });
    return result.My_Result;
  }
  async Get_User_By_USER_ID(i_Params_Get_User_By_USER_ID) {
    this.url = this.APIBaseUrl + '/Get_User_By_USER_ID?Ticket=' + (this.TicketMode === 'url' ? this.Ticket : '');
    const result = await this.apiPost(this.url, i_Params_Get_User_By_USER_ID).then(async (resp) => {
      return resp;
    });
    return result.My_Result;
  }
  async Get_User_By_OWNER_ID(i_Params_Get_User_By_OWNER_ID) {
    this.url = this.APIBaseUrl + '/Get_User_By_OWNER_ID?Ticket=' + (this.TicketMode === 'url' ? this.Ticket : '');
    const result = await this.apiPost(this.url, i_Params_Get_User_By_OWNER_ID).then(async (resp) => {
      return resp;
    });
    return result.My_Result;
  }
  async Delete_User(i_Params_Delete_User) {
    this.url = this.APIBaseUrl + '/Delete_User?Ticket=' + (this.TicketMode === 'url' ? this.Ticket : '');
    const result = await this.apiPost(this.url, i_Params_Delete_User).then(async (resp) => {
      return resp;
    });
    return result.any;
  }
  async Edit_User(i_User) {
    this.url = this.APIBaseUrl + '/Edit_User?Ticket=' + (this.TicketMode === 'url' ? this.Ticket : '');
    const result = await this.apiPost(this.url, i_User).then(async (resp) => {
      return resp;
    });
    return result;
  }
  async Authenticate(i_Params_Authenticate) {
    this.url = this.APIBaseUrl + '/Authenticate?Ticket=' + (this.TicketMode === 'url' ? this.Ticket : '');
    const result = await this.apiPost(this.url, i_Params_Authenticate).then(async (resp) => {
      return resp;
    });
    return result;
  }
  async GetTopNTeachers(i_Params_Get_Top_N_Teachers) {
    this.url = this.APIBaseUrl + '/GetTopNTeachers?Ticket=' + (this.TicketMode === 'url' ? this.Ticket : '');
    const result = await this.apiPost(this.url, i_Params_Get_Top_N_Teachers).then(async (resp) => {
      return resp;
    })
    return result;
  }
  async Get_Teacher_By_USER_ID_List(i_Params_Get_Teacher_By_USER_ID_List) {
    this.url = this.APIBaseUrl + '/Get_Teacher_By_USER_ID_List?Ticket=' + (this.TicketMode === 'url' ? this.Ticket : '');
    const result = await this.apiPost(this.url, i_Params_Get_Teacher_By_USER_ID_List).then(async (resp) => {
      return resp;
    });
    return result;
  }
}
export class Params_Get_Teacher_By_USER_ID_List {
}
export class Params_Get_Answer_By_OWNER_ID {
}
export class Answer {
}
export class Question {
}
export class Teacher {
}
export class Student {
}
export class Params_Get_Answer_By_Criteria {
}
export class Params_Delete_Answer {
}
export class Params_Get_Answer_By_STUDENT_ID_List {
}
export class Params_Get_Answer_By_QUESTION_ID {
}
export class Params_Get_Answer_Details {
}
export class Params_Get_Question_By_CATEGORY_ID_List {
}
export class Params_Get_Question_By_STUDENT_ID_List {
}
export class Params_Get_Question_By_QUESTION_ID {
}
export class Params_Delete_Question {
}
export class Params_Get_Question_By_Criteria {
}
export class Params_Get_Question_By_OWNER_ID {
}
export class Category_favorite {
}
export class Params_Get_Category_By_OWNER_ID {
}
export class Category {
}
export class Params_Get_Student_By_OWNER_ID {
}
export class Params_Get_Student_By_STUDENT_ID {
}
export class Params_Get_Student_By_USER_ID {
}
export class Params_Get_Teacher_By_CATEGORY_ID_List {
}
export class Params_Get_Teacher_By_OWNER_ID {
}
export class Params_Get_Teacher_By_TEACHER_ID {
}
export class Teacher_favorite {
}
export class Params_Get_User_By_USER_ID {
}
export class User {
}
export class User_type_code {
}
export class TopTeachers {
}
export class Params_Get_User_By_OWNER_ID {
}
export class Params_Delete_User {
}
export class Params_Authenticate {
}
export class Params_Get_Top_N_Teachers {
}
export class Action_Result {
}
export class Result_Get_Answer_By_OWNER_ID extends Action_Result {
}
export class Result_Edit_Answer extends Action_Result {
}
export class Result_Get_Answer_By_Criteria extends Action_Result {
}
export class Result_Delete_Answer extends Action_Result {
}
export class Result_Get_Answer_By_STUDENT_ID_List extends Action_Result {
}
export class Result_Get_Answer_By_QUESTION_ID_Adv extends Action_Result {
}
export class Result_Edit_Question extends Action_Result {
}
export class Result_Get_Question_By_CATEGORY_ID_List extends Action_Result {
}
export class Result_Get_Question_By_STUDENT_ID_List extends Action_Result {
}
export class Result_Get_Question_By_QUESTION_ID extends Action_Result {
}
export class Result_Delete_Question extends Action_Result {
}
export class Result_Get_Question_By_Criteria extends Action_Result {
}
export class Result_Get_Question_By_OWNER_ID extends Action_Result {
}
export class Result_Edit_Category_favorite extends Action_Result {
}
export class Result_Get_Category_By_OWNER_ID extends Action_Result {
}
export class Result_Get_Student_By_OWNER_ID extends Action_Result {
}
export class Result_Get_Student_By_STUDENT_ID_Adv extends Action_Result {
}
export class Result_Get_Teacher_By_CATEGORY_ID_List extends Action_Result {
}
export class Result_Get_Student_By_USER_ID extends Action_Result {
}
export class Result_Get_Teacher_By_OWNER_ID extends Action_Result {
}
export class Result_Get_Teacher_By_TEACHER_ID_Adv extends Action_Result {
}
export class Result_Edit_Teacher_favorite extends Action_Result {
}
export class Result_Get_User_By_USER_ID_Adv extends Action_Result {
}
export class Result_Get_User_By_USER_ID extends Action_Result {
}
export class Result_Get_User_By_OWNER_ID extends Action_Result {
}
export class Result_Delete_User extends Action_Result {
}
export class Result_Edit_User extends Action_Result {
}
export class Result_Authenticate extends Action_Result {
}

export class Result_GetTopNTeachers extends Action_Result {
}
