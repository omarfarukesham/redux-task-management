import { AddTask } from "@/components/tasks/AddTask"
import TaskCard from "@/components/tasks/TaskCard"
import { selectTasks } from "@/feature/task/taskSlice"
import { useAppSelector } from "@/store/hook"

function Home() {
   const tasks = useAppSelector(selectTasks)
  return (
    <div className="flex flex-col gap-5 justify-center items-center w-full h-screen">
      <div>
          <AddTask />
      </div>
        <div className="flex flex-col gap-5 h-[80%]">
            {tasks.map((task) => (
                <TaskCard key={task.id} data={task} />
            ))} 
      </div>
    </div>
  )
}

export default Home