
import { parseISO, format } from "date-fns";

export function formatDate(isoDate: string | null): string {

  if (!isoDate) {
    return "---";
  }

  const date = parseISO(isoDate);
  return format(date, "MMM. d, yyyy");
}
