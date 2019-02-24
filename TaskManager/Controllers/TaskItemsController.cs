using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using TaskManager.Data;
using TaskManager.Models;
using TaskManager.DAL;

namespace taskManager.Controllers
{
    [Produces("application/json")]
    [Route("api/taskItems")]
    public class TaskItemsController : Controller
    {
        private TaskRepository _taskRepository;
        public TaskItemsController(TaskManagerContext context)
        {
            this._taskRepository = new TaskRepository(context);
        }

        // GET: api/taskItems
        [HttpGet]
        public IEnumerable<TaskItem> GetTaskItems()
        {
            return _taskRepository.GetTasks();
        }

        // GET: api/taskItems/5
        [HttpGet("{id}")]
        public IActionResult GetTaskItem([FromRoute] int id)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var taskItem = _taskRepository.GetTaskByID(id); //_context.taskItems.SingleOrDefaultAsync(m => m.ID == id);

            if (taskItem == null)
            {
                return NotFound();
            }

            return Ok(taskItem);
        }

        // PUT: api/taskItems/5
        [HttpPut("{id}")]
        public IActionResult PutTaskItem([FromRoute] int id, [FromBody] TaskItem taskItem)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != taskItem.ID)
            {
                return BadRequest();
            }
            _taskRepository.UpdateTask(taskItem);

            try
            {
                _taskRepository.Save();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!TaskItemExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/taskItems
        [HttpPost]
        public IActionResult PostTaskItem([FromBody] TaskItem taskItem)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            _taskRepository.InsertTask(taskItem);
            _taskRepository.Save();
            //_context.taskItems.Add(taskItem);
            //await _context.SaveChangesAsync();

            return CreatedAtAction("GettaskItem", new { id = taskItem.ID }, taskItem);
        }

        // DELETE: api/taskItems/5
        [HttpDelete("{id}")]
        public IActionResult DeleteTaskItem([FromRoute] int id)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            //var taskItem = await _context.taskItems.SingleOrDefaultAsync(m => m.ID == id);
            var taskItem = _taskRepository.GetTaskByID(id);
            if (taskItem == null)
            {
                return NotFound();
            }

            _taskRepository.DeleteTask(taskItem.ID);
            _taskRepository.Save();
            //_context.taskItems.Remove(taskItem);
            //await _context.SaveChangesAsync();

            return Ok(taskItem);
        }

        private bool TaskItemExists(int id)
        {
            if (_taskRepository.GetTaskByID(id) == null)
            {
                return false;
            }
            else
            {
                return true;
            }

        }
    }
}