import { usePathname, useLocalSearchParams } from "expo-router";
import { STEP_MAPS, TITLE_MAPS, TOTAL_STEPS } from "@constants/signupSteps";

type Role = keyof typeof STEP_MAPS;

export function useSignUpSteps() {
  const params = useLocalSearchParams<{ role?: Role }>();
  const role = params.role as Role | undefined;

  const pathname = usePathname();
  const screen = pathname.split("/").pop();

  if (!role || !STEP_MAPS[role] || !TITLE_MAPS[role] || !TOTAL_STEPS[role]) {
    return {
      step: undefined,
      totalSteps: undefined,
      title: undefined,
    };
  }

  const stepMap = STEP_MAPS[role];
  const titleMap = TITLE_MAPS[role];
  const totalSteps = TOTAL_STEPS[role];

  const rawStep = screen ? stepMap[screen] : undefined;
  const step = typeof rawStep === "number" ? rawStep + 1 : undefined;
  const title = screen ? titleMap[screen] : undefined;

  return {
    step,
    totalSteps,
    title,
  };
}
