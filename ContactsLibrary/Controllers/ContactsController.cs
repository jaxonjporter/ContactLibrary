using System;
using System.Collections.Generic;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;

namespace ContactsLibrary.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class ContactsController : ControllerBase
    {
        private static List<Contact> Contacts = new List<Contact>()
        {
           new Contact()
           {
               ID = 1,
               Name = "Jaxon Porter",
               Group = "Family",
               Birthdate = "1993-11-24",
               Favorite = true,
               CreatedAt = DateTime.Now,
               UpdatedAt = null

           }
        };

        private readonly ILogger<ContactsController> _logger;

        public ContactsController(ILogger<ContactsController> logger)
        {
            _logger = logger;
        }

        [HttpGet]
        public IEnumerable<Contact> Index()
        {
            return Contacts;
        }
    }
}
