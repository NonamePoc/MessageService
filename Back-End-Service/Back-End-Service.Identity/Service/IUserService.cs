﻿using System.Security.Principal;
using Back_End_Service.Identity.Entities;
using Back_End_Service.Identity.Models;
using Microsoft.AspNetCore.Identity;

namespace Back_End_Service.Identity.Service;

public interface IUserService
{
    Task<AuthenticateResponse> Authenticate(AuthenticateRequest model);
    Task Register(UserModel userModel, string? route);

    Task ChangePasswordAsync(ChangePassword changePassword, string route, User user);
    
    Task ChangeEmailAsync(ChangeEmail changeEmail, string route, User user);

    Task SendRequestChangeEmailAsync(SendChangeEmail changeEmail, string route, User user);
    
    Task ChangeUserDataAsync(ChangeUserData changeUserData, User user);
}