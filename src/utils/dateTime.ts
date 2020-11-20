
export const getTimeStringWithWeekday = (isoDateString : string, locale : string = 'de') => new Date(isoDateString)
				.toLocaleString(
					locale,
					{
						weekday: 'short',
						hour12: false,
						hour: '2-digit',
						minute: '2-digit',
						second: undefined,
					});

export const getTimeString = (isoDateString : string, locale : string = 'de') => new Date(isoDateString)
					.toLocaleString(
						locale,
						{
							weekday: undefined,
							hour12: false,
							hour: '2-digit',
							minute: '2-digit',
							second: undefined,
						});

