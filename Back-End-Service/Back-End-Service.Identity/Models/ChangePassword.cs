﻿namespace Back_End_Service.Identity.Models;

public class ChangePassword
{
    /// <summary>
    ///     Пароль.
    /// </summary>
    public string Password { get; set; }
    
    public string Email { get; set; }
    
    /// <summary>
    ///     Новый пароль.
    /// </summary>
    public string NewPassword { get; set; }
}