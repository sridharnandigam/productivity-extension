export class Task{
    constructor(name, hoursAllocated, minutesAllocated, startHour, startMinute){
        this.name = name;
        this.hoursAllocated = hoursAllocated;
        this.minutesAllocated = minutesAllocated;

        this.startHour = startHour;
        this.star = startMinute;

        var actualHours = 0;
        var actualMinutes = 0;
    }
    getActualTimeSpent(){
        return actualHours + ":" + actualMinutes;
    }
}