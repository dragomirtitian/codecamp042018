class Vehicle {
    public run(): void { console.log('Vehicle.run'); }
}

class Task {
    public run(): void { console.log('Task.run'); }
}

function runTask(t: Task) {
    t.run();
}

runTask(new Task());
runTask(new Vehicle()); // Will be a compile time error