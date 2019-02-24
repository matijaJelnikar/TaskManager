using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace TaskManager.DAL
{
    public interface IUnitOfWork
    {
        //    ITaskRepository TaskRepository { get; }

        //    /// 
        //    /// Commits all changes
        //    /// 
        //    void Commit();
        //    /// 
        //    /// Discards all changes that has not been commited
        //    /// 
        //    void RejectChanges();
        //    void Dispose();
        //}
        //public class UnitOfWork : IUnitOfWork
        //{
        //    private readonly MyDbContext _dbContext;
        //    #region Repositories
        //    public IRepository AuthorRepository =>
        //       new GenericRepository(_dbContext);
        //    public IRepository BookRepository =>
        //       new GenericRepository(_dbContext);
        //    #endregion
        //    public UnitOfWork(MyDbContext dbContext)
        //    {
        //        _dbContext = dbContext;
        //    }
        //    public void Commit()
        //    {
        //        _dbContext.SaveChanges();
        //    }
        //    public void Dispose()
        //    {
        //        _dbContext.Dispose();
        //    }
        //    public void RejectChanges()
        //    {
        //        foreach (var entry in _dbContext.ChangeTracker.Entries()
        //              .Where(e => e.State != EntityState.Unchanged))
        //        {
        //            switch (entry.State)
        //            {
        //                case EntityState.Added:
        //                    entry.State = EntityState.Detached;
        //                    break;
        //                case EntityState.Modified:
        //                case EntityState.Deleted:
        //                    entry.Reload();
        //                    break;
        //            }
        //        }
        //    }
    }
}
