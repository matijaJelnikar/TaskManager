﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using TaskManager.Data;

namespace TaskManager.Models
{
    public class TaskManagerContext : DbContext
    {
        public TaskManagerContext (DbContextOptions<TaskManagerContext> options)
            : base(options)
        {
        }

        public DbSet<TaskManager.Data.TaskItem> TaskItems { get; set; }
    }
}
