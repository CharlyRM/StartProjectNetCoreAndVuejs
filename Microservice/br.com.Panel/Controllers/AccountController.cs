using AutoMapper;
using br.com.DAL.br.com.Model.br.com.Management.br.com.Authentication;
using br.com.DAL.br.com.Repository.br.com.Management.br.com.Authentication;
using br.com.DAL.br.com.Validation;
using br.com.Model.br.com.Model.br.com.Management.br.com.Library;
using EmailService;
using br.com.Painel.Models;
using Microsoft.AspNetCore.Authentication;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Security.Claims;
using System.Threading.Tasks;

/*
    Developer Linkedin Inglish : https://br.linkedin.com/in/charly-milhomem-76156637/en
    Developer Linkedin Português : https://br.linkedin.com/in/charly-milhomem-76156637
*/

namespace br.com.Painel.Controllers
{
    public class AccountController : Controller
    {
        UserRepository userRepository = new UserRepository();

        private readonly IMapper _mapper;
        private readonly UserManager<Models.User> _userManager;
        private readonly SignInManager<Models.User> _signInManager;
        private readonly IEmailSender _emailSender;

        public AccountController(IMapper mapper, UserManager<Models.User> userManager, SignInManager<Models.User> signInManager, IEmailSender emailSender)
        {
            _mapper = mapper;
            _userManager = userManager;
            _signInManager = signInManager;
            _emailSender = emailSender;
        }

        [HttpGet]
        public IActionResult Register()
        {
            return View();
        }

        [HttpPost]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> Register(UserRegistrationModel userModel)
        {
            WebError result = new WebError();
            DAL.br.com.Model.br.com.Management.br.com.Authentication.User users = new DAL.br.com.Model.br.com.Management.br.com.Authentication.User();
            result.occurredError = false;

            if (!ModelState.IsValid || !ValidationEmail.ValidationAddressEmail(userModel.Email))
            {
                return View(userModel);
            }

            var user = _mapper.Map<Models.User>(userModel);

            users.email = userModel.Email;
            users.name = userModel.Nome;
            users.password = userModel.Password;
            var token = await _userManager.GenerateEmailConfirmationTokenAsync(user);
            users.singleCode = token;
            users.recoveryPassword = "N";

            result = userRepository.RecordUserTemp(users);

            if (result.occurredError)
            {                
                ModelState.TryAddModelError(string.Empty, result.message);
                return View(userModel);
            }
           
            var confirmationLink = Url.Action(nameof(ConfirmEmail), "Account", new { token, email = user.Email }, Request.Scheme);
            var message = new Message(new string[] { user.Email }, "Registration confirmation link", confirmationLink, null);
            await _emailSender.SendEmailAsync(message);

            return RedirectToAction(nameof(SuccessRegistration));
        }

        [HttpGet]
        public async Task<IActionResult> ConfirmEmail(string token, string email)
        {
            WebError result = new WebError();
            result.occurredError = false;
            List<DAL.br.com.Model.br.com.Management.br.com.Authentication.User> listUser;

            listUser = userRepository.SearchUserTemp("TOV", token);
           
            if (listUser.Count == 1)
            {
                result = userRepository.RecordConfirmationEmailRegister(token);
                result = userRepository.SaveUserFirstAccess(listUser[0]);
            }
            
            return View(listUser.Count == 1 && !result.occurredError ? nameof(ConfirmEmail) : "Error");
        }

        [HttpGet]
        public IActionResult SuccessRegistration()
        {
            return View();
        }

        [HttpGet]
        public IActionResult Login(string returnUrl = null)
        {
            ViewData["ReturnUrl"] = returnUrl;
            return View();
        }

        [HttpGet]
        public IActionResult ForgotPassword()
        {
            return View();
        }

        [HttpPost]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> ForgotPassword(ForgotPasswordModel forgotPasswordModel)
        {
            UserRegistrationModel userModel = new UserRegistrationModel();
            WebError result = new WebError();
            result.occurredError = false;
            List<DAL.br.com.Model.br.com.Management.br.com.Authentication.User> listUsers;

            if (!ModelState.IsValid)
                return View(forgotPasswordModel);

            listUsers = userRepository.SearchUser("EML", forgotPasswordModel.Email);
            
            if (listUsers[0] == null && listUsers[0].status == 0)
                return View("ErrorForgotPassword");

            userModel.Nome = listUsers[0].name;
            userModel.Email = listUsers[0].email;
            userModel.Password = listUsers[0].password;

            var user = _mapper.Map<Models.User>(userModel);
            var token = await _userManager.GeneratePasswordResetTokenAsync(user);

            listUsers[0].password = "";
            listUsers[0].singleCode = token;
            listUsers[0].recoveryPassword = "S";
            result = userRepository.RecordUserTemp(listUsers[0]);

            var callback = Url.Action(nameof(ResetPassword), "Account", new { token, email = user.Email }, Request.Scheme);
            var message = new Message(new string[] { user.Email }, "Link to recover password", callback, null);
            await _emailSender.SendEmailAsync(message);

            return RedirectToAction(nameof(ForgotPasswordConfirmation));
        }

        public IActionResult ForgotPasswordConfirmation()
        {
            return View();
        }

        [HttpGet]
        public IActionResult ResetPassword(string token, string email)
        {
            var model = new ResetPasswordModel { Token = token, Email = email };
            return View(model);
        }

        [HttpPost]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> ResetPassword(ResetPasswordModel resetPasswordModel)
        {
            WebError result = new WebError();
            result.occurredError = false;
            List<DAL.br.com.Model.br.com.Management.br.com.Authentication.User> listUsers;

            if (!ModelState.IsValid)
                return View(resetPasswordModel);

            listUsers = userRepository.SearchUserTemp("TVR", resetPasswordModel.Token);

            if (listUsers.Count == 0)
                return View("ErrorResetPassword");

            listUsers[0].password = resetPasswordModel.Password;

            result = userRepository.RecoverUserPassword(listUsers[0]);

            return View(listUsers.Count == 1 && !result.occurredError ? nameof(ResetPasswordConfirmation) : "ErrorResetPassword");
        }

        [HttpGet]
        public IActionResult ResetPasswordConfirmation()
        {
            return View();
        }

        private IActionResult RedirectToLocal(string returnUrl)
        {
            if (Url.IsLocalUrl(returnUrl))
                return Redirect(returnUrl);
            else
                return RedirectToAction(nameof(HomeController.Index), "Home");
        }

        [HttpGet]
        public IActionResult Error()
        {
            return View();
        }
    }
}