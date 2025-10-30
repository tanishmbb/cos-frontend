import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import * as eventsApi from "@api/events";

export const useEvents = (params) =>
  useQuery(["events", params], () => eventsApi.fetchEvents(params));

export const useEvent = (id) =>
  useQuery(["event", id], () => eventsApi.fetchEvent(id), { enabled: !!id });

export const useCreateEvent = () => {
  const qc = useQueryClient();
  return useMutation(eventsApi.createEvent, {
    onSuccess: () => qc.invalidateQueries(["events"]),
  });
};
