export const environment = {
  production: false,
  ws: 'http://localhost:8080/socket'
};

export const title = 'ECG Analysis';

// export const API_URL = "http://localhost:51862/";
export const API_URL = "http://localhost:8080/api/";

export const LOGIN_URL = API_URL + "auth/signin";
export const REGISTRATION_URL = API_URL + "auth/signup";

export const GLUCOSE_ENDPOINT_URL = API_URL + "glucose/";
export const GET_GLUCOSE_RECORDS_FOR_CURR_USER_URL = GLUCOSE_ENDPOINT_URL + "user/";


export const INIT_TEXT = "Cardiovascular diseases are widespread throughout the world and are a major cause of death. Every year, 17.5 million people worldwide die from cardiovascular disease. Analysis of electrocardiograms allows to determine the presence of various abnormalities in the heart such as blockade, myocardial damage of various ischemic (when the heart muscle lacks oxygen due to impaired blood flow through blood vessels) or dystrophic (when the heart suffers secondary to endocrine disorders, electrolyte changes). blood composition, anemia and other causes). Also, the analysis of electrocardiograms allows you to assess the regularity of heart rate (normal, too fast, slow or irregular). Thanks to the correct diagnosis, it is possible to detect cardiac disorders in time and take all necessary measures to restore its normal functioning as soon as possible.";
//
// export const TEST_CONTROLLER = API_URL + "api/test/";
// export const USER_TESTS_URL = TEST_CONTROLLER + "user/";
// export const SEARCH_TESTS_CONTAINING_NAME_URL = TEST_CONTROLLER + "search/";
// export const SEARCH_TESTS_BY_GROUP_NAME_URL = TEST_CONTROLLER + "group/";
//
// export const QUESTION_CONTROLLER = API_URL + "api/question/";
//
// export const ANSWER_CONTROLLER = API_URL + "api/answer/";
//
// export const TEST_HISTORY_CONTROLLER = API_URL + "api/history/test/";
// export const TEST_STATISTICS_URL = TEST_HISTORY_CONTROLLER + "statistic/";
// export const TEST_STATISTICS_COMPLETION_URL = TEST_STATISTICS_URL + "completion/";
// export const USER_TEST_HISTORY_URL = TEST_HISTORY_CONTROLLER + "user/";
//
// export const ANSWER_HISTORY_CONTROLLER = API_URL + "api/history/test/";
