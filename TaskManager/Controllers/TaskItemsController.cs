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
    public class taskItemsController : Controller
    {
        private TaskRepository _taskRepository;
        public taskItemsController(TaskManagerContext context)
        {
            this._taskRepository = new TaskRepository(context);
        }

        // GET: api/taskItems
        [HttpGet]
        public IEnumerable<TaskItem> GettaskItems()
        {
            return _taskRepository.GetTasks();
        }

        // GET: api/taskItems/5
        [HttpGet("{id}")]
        public IActionResult GettaskItem([FromRoute] int id)
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
        public IActionResult PuttaskItem([FromRoute] int id, [FromBody] TaskItem taskItem)
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
                if (!taskItemExists(id))
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
        public IActionResult PosttaskItem([FromBody] TaskItem taskItem)
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
        public IActionResult DeletetaskItem([FromRoute] int id)
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

        private bool taskItemExists(int id)
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