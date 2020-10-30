class CalenderUtils {
	getDayArrayForMonthOfYear(year) {
		//console.log(year);
		const arr = [];
		for (let i = 0; i < 12; i++) {
			const calender = [];
			for (let x = 0; x < 42; x++) {
				calender.push(0);
			}
			const dateOfFirstDayOfMonth = new Date(year, i, 1, 0, 0, 0, 0);
			const days = this.daysInMonth(i + 1, year);
			let index = dateOfFirstDayOfMonth.getDay();
			for (let j = 1; j <= days; j++) {
				calender.splice(index, 1, j);
				index++;
			}
			//console.log(calender);
			arr.push(calender);
		}
		return arr;
	}
	daysInMonth(month, year) {
		return new Date(year, month, 0).getDate();
	}
	getMonths() {
		return [
			'01',
			'02',
			'03',
			'04',
			'05',
			'06',
			'07',
			'08',
			'09',
			'10',
			'11',
			'12',
		];
	}
	getMonthNameAt(index) {
		const monthNameList = [
			'Janurary',
			'February',
			'March',
			'April',
			'May',
			'June',
			'July',
			'August',
			'September',
			'October',
			'November',
			'December',
		];
		return monthNameList[index - 1];
	}
}

export default CalenderUtils;
