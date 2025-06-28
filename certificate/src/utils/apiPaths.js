export const BASE_URL = "http://localhost:8000";
export const API_PATHS = {
  AUTH: {
    REGISTER: "/api/auth/register",
    LOGIN: "/api/auth/login",
    GET_PROFILE: "/api/auth/profile",
    ADMIN_LOGIN: "/api/auth/admin/login",
  },
  USERS: {
    GET_ALL_USERS: "/api/users/all-users",
  },
  TASKS: {
    GET_USER_TASKS: (userId) => `/api/tasks/user/${userId}`,
    UPDATE_STATUS: (taskId) => `/api/tasks/${taskId}/status`,
    SUBMIT_TASK: "/api/tasks/submit",
    GET_USERS_WITH_TASK_STATUS: "/api/tasks/admin/user-statuses",
    GET_LOGGEDIN_USER_TASKS: "/api/tasks/my-tasks",
  },
  IMAGE: {
    UPLOAD_IMAGE: "/api/auth/upload-image",
  },
};
