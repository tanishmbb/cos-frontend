import { useQuery } from "@tanstack/react-query";
import * as badgeSkillApi from "@api/badges_skills";

export const useBadges = () =>
  useQuery(["badges"], badgeSkillApi.fetchBadges);
