using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace TaskManager.Interfaces
{
    public interface ITaskRepository : IDisposable
    {
        IEnumerable<TaskManager.Data.TaskItem> GetTasks();
        TaskManager.Data.TaskItem GetTaskByID(int TaskId);
        void InsertTask(TaskManager.Data.TaskItem Task);
        void DeleteTask(int studentID);
        void UpdateTask(TaskManager.Data.TaskItem Task);
        void Save();
    }
}
