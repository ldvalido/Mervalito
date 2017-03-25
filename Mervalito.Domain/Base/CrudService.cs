using System.Collections.Generic;
using Mervalito.Storage.Base;

namespace Mervalito.Domain.Base
{
    /// <summary>
    /// 
    /// </summary>
    /// <typeparam name="T"></typeparam>
    public abstract class CrudService<T> : ICrudService<T> where T : class
    {
        public IStorageBase<T> StorageBase { get; set; } 
        /// <summary>
        /// Creates the specified entity.
        /// </summary>
        /// <param name="entity">The entity.</param>
        /// <returns></returns>
        public virtual T Create(T entity)
        {
            return StorageBase.Save(entity);
        }

        /// <summary>
        /// Updates the specified entity.
        /// </summary>
        /// <param name="entity">The entity.</param>
        /// <returns></returns>
        public virtual T Update(T entity)
        {
            return StorageBase.Update(entity);
        }

        /// <summary>
        /// Lists this instance.
        /// </summary>
        /// <returns></returns>
        public virtual IEnumerable<T> List()
        {
            return StorageBase.GetAll();
        }

        /// <summary>
        /// Deletes the specified entity.
        /// </summary>
        /// <param name="entity">The entity.</param>
        public virtual T Delete(T entity)
        {
            return StorageBase.Remove(entity);
        }
    }
}
