import { useQuery } from "@tanstack/react-query";
import * as badgeSkillApi from "@api/badges_skills";

export const useSkills = () =>
  useQuery(["skills"], badgeSkillApi.fetchSkills);
