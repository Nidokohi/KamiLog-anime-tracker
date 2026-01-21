


export function localizeTime( time: string, sourceTimeZone: string  ) {

    const userTimeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;

    const [hour, minute] = time.split(":").map(Number);
    const now = new Date();

    const utcDate = new Date(Date.UTC(
      now.getUTCFullYear(),
      now.getUTCMonth(),
      now.getUTCDate(),
      hour,
      minute
    ));

    const localized = new Date(
      utcDate.toLocaleString("en-US", { timeZone: sourceTimeZone })
    );

    return new Intl.DateTimeFormat(undefined, {
      hour: "2-digit",
      minute: "2-digit",
      hour12: false,
      timeZone: userTimeZone
    }).format(localized);
}
