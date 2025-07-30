type StepMap = Record<string, number>;
type TitleMap = Record<string, string>;

export type Role = "teacher" | "student";

export const STEP_MAPS: Record<Role, Record<string, number>> = {
  teacher: {
    name: 0,
    email: 1,
    password: 2,
    confirm: 3,
    success: 4,
  },
  student: {
    "teacher-code": 0,
    name: 1,
    email: 2,
    password: 3,
    confirm: 4,
    success: 5,
  },
};

export const TITLE_MAPS: Record<Role, TitleMap> = {
  teacher: {
    name: "What's your name?",
    email: "What's your email?",
    password: "Create a password",
    confirm: "Enter the code sent to your email",
    success: "You're ready!",
  },
  student: {
    "teacher-code": "Enter your teacher's code",
    name: "What's your name?",
    email: "What's your email?",
    password: "Create a password",
    confirm: "Enter the code sent to your email",
    success: "You're ready!",
  },
};

export const TOTAL_STEPS: Record<Role, number> = {
  teacher: Object.keys(STEP_MAPS.teacher).length,
  student: Object.keys(STEP_MAPS.student).length,
};
