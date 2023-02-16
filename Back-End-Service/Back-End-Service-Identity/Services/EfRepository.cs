﻿using Back_End_Service_Identity.Entities;

namespace Back_End_Service_Identity.Services;

public class UserRepository<T>: IEfRepository<T> where T: IBaseEntity
{
    private readonly DateContext.DataContext _context;

    public UserRepository(DateContext.DataContext context)
    {
        _context = context;
    }

    public List<T> GetAll()
    {
        return _context.Set<T>().ToList();
    }

    public T GetById(long id)
    {
        var result = _context.Set<T>().FirstOrDefault(x => x.Id == id);

        if (result == null)
        {
            //todo: need to add logger
            return null;
        }

        return result;
    }

    public async Task<long> Add(T entity)
    {
        var result = await _context.Set<T>().AddAsync(entity);
        await _context.SaveChangesAsync();
        return result.Entity.Id;
    }
}