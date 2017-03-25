﻿using System;
using System.Collections.Generic;

namespace Mervalito.Storage.Base
{
    public interface IStorageBase<T> where T : class
    {
        IEnumerable<T> GetAll();
        IEnumerable<T> GetByCriteria(Func<T, bool> fncCriteria);
        T Remove(T element);
        T Save(T element);
        T Update(T entity);
    }
}