﻿using Back_End_Service_Identity.Entities;
using Back_End_Service_Identity.Models;
using Back_End_Service_Identity.Services;

namespace Back_End_Service_Identity;

public class UserService : IUserService
{
    private readonly IEfRepository<User> _userRepository;
    private readonly IConfiguration _configuration;
    private readonly IMapper _mapper;

    public UserService(IEfRepository<User> userRepository, IConfiguration configuration, IMapper mapper)
    {
        _userRepository = userRepository;
        _configuration = configuration;
        _mapper = mapper;
    }

    public AuthenticateResponse Authenticate(AuthenticateRequest model)
    {
        var user = _userRepository
            .GetAll()
            .FirstOrDefault(x => x.Username == model.Username && x.Password == model.Password);

        if (user == null)
        {
            // todo: need to add logger
            return null;
        }

        var token = _configuration.GenerateJwtToken(user);

        return new AuthenticateResponse(user, token);
    }

    public async Task<AuthenticateResponse> Register(UserModel userModel)
    {
        var user = _mapper.Map<User>(userModel);

        var addedUser = await _userRepository.Add(user);

        var response = Authenticate(new AuthenticateRequest
        {
            Username = user.Username,
            Password = user.Password
        });
            
        return response;
    }
        
    public IEnumerable<User> GetAll()
    {
        return _userRepository.GetAll();
    }

    public User GetById(int id)
    {
        return _userRepository.GetById(id);
    }
}
}