using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using TaskManager.Models;
using TaskManager.Data;
using TaskManager.Interfaces;
using Microsoft.EntityFrameworkCore;

namespace TaskManager.DAL
{
    public class TaskRepository //: ITaskRepository, IDisposable
    {
        public TaskManagerContext context;

        public TaskRepository(TaskManagerContext DbContext)
        {
            this.context = DbContext;
        }


        public IEnumerable<TaskItem> GetTasks()
        {
            if (context.TaskItems.Count() == 0) {
                context.TaskItems.Add(new TaskItem { ID = null, DateCreated = DateTime.Now.AddDays(-24), Title = "Wake up", Description = "First sample task", DueDate = DateTime.Now.AddDays(7) });
                context.TaskItems.Add(new TaskItem { ID = null, DateCreated = DateTime.Now.AddDays(-10), Title = "Do your best", Description = "Second sample task", DueDate = DateTime.Now.AddDays(14) });
                context.TaskItems.Add(new TaskItem { ID = null, DateCreated = DateTime.Now, Title = "Go to sleep", Description = "Third sample task", DueDate = DateTime.Now.AddDays(21) });
                context.SaveChanges();
            }
           
            return context.TaskItems.ToList();
        }

        public TaskItem GetTaskByID(int id)
        {
            return context.TaskItems.Find(id);
        }

        public void InsertTask(TaskItem Task)
        {
            context.TaskItems.Add(Task);
        }

        public void DeleteTask(int? TaskID)
        {
            TaskItem Task = context.TaskItems.Find(TaskID);
            context.TaskItems.Remove(Task);
        }

        public void UpdateTask(TaskItem Task)
        {
            context.Entry(Task).State = EntityState.Modified;
        }

        public void Save()
        {
            context.SaveChanges();
        }

        private bool disposed = false;

        protected virtual void Dispose(bool disposing)
        {
            if (!this.disposed)
            {
                if (disposing)
                {
                    context.Dispose();
                }
            }
            this.disposed = true;
        }

        public void Dispose()
        {
            Dispose(true);
            GC.SuppressFinalize(this);
        }
    }
}
