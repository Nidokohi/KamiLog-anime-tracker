
import { parseISO, format } from "date-fns";

export function formatDate(isoDate: string): string {
  const date = parseISO(isoDate);
  return format(date, "MMM. d, yyyy");
}
