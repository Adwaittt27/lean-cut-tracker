import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

export default function LeanCutTracker() {
  const [tasks, setTasks] = useState({
    wakeUp: false,
    meal1: false,
    college: false,
    meal2: false,
    driving: false,
    gym: false,
    meal3: false,
    meal4: false,
    sleep: false,
  });

  const toggleTask = (task) => {
    setTasks({ ...tasks, [task]: !tasks[task] });
  };

  const schedule = [
    { time: '7:00 AM', label: 'Wake Up', key: 'wakeUp' },
    { time: '7:30 AM', label: 'Meal 1 (High Protein)', key: 'meal1' },
    { time: '7:45 AM – 4:00 PM', label: 'College', key: 'college' },
    { time: '4:30 PM', label: 'Meal 2 (Carb + Protein)', key: 'meal2' },
    { time: '6:30 PM', label: 'Driving Class', key: 'driving' },
    { time: '7:30 PM', label: 'Gym (Heavy Lift + Abs)', key: 'gym' },
    { time: '9:30 PM', label: 'Meal 3 (Post Workout)', key: 'meal3' },
    { time: '11:00 PM', label: 'Meal 4 (Light + Protein)', key: 'meal4' },
    { time: '12:00 AM', label: 'Sleep', key: 'sleep' },
  ];

  return (
    <div className="p-4 space-y-4 max-w-md mx-auto">
      <h1 className="text-2xl font-bold text-center">Lean Cut Tracker</h1>
      {schedule.map(({ time, label, key }) => (
        <Card key={key} className="bg-white shadow">
          <CardContent className="p-4 flex items-center justify-between">
            <div>
              <div className="text-sm text-gray-500">{time}</div>
              <div className="text-lg font-semibold">{label}</div>
            </div>
            <Button onClick={() => toggleTask(key)} variant={tasks[key] ? 'default' : 'outline'}>
              {tasks[key] ? 'Done' : 'Mark'}
            </Button>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
