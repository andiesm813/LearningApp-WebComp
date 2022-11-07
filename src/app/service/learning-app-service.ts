export default class LearningAppService {
  public async getCurrentlyAttending(): Promise<any> {
    const response = await fetch('https://excel2json.io/api/share/411814c4-bebf-4b2c-e661-08dab79fa5b4');
    if (!response.ok) {
      return Promise.reject('Data load failed.');
    }
    return response.json();
  }

  public async getCategories(): Promise<any> {
    const response = await fetch('https://excel2json.io/api/share/c7c0f004-5d70-41db-e663-08dab79fa5b4');
    if (!response.ok) {
      return Promise.reject('Data load failed.');
    }
    return response.json();
  }

  public async getPopularLecturers(): Promise<any> {
    const response = await fetch('https://excel2json.io/api/share/f2c280b7-2b1b-47c5-e662-08dab79fa5b4');
    if (!response.ok) {
      return Promise.reject('Data load failed.');
    }
    return response.json();
  }

  public async getAllCourses(): Promise<any> {
    const response = await fetch('https://excel2json.io/api/share/28f292a3-d187-48c4-e660-08dab79fa5b4');
    if (!response.ok) {
      return Promise.reject('Data load failed.');
    }
    return response.json();
  }
}
