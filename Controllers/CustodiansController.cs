using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Claims;
using System.Threading.Tasks;
using capstone.Data;
using capstone.Models;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;

namespace capstone.Controllers
{
    [Authorize]
    [ApiController]
    [Route("[controller]")]
    public class CustodiansController : ControllerBase
    {
        private ApplicationDbContext _context;

        public CustodiansController(ApplicationDbContext context)
        {
            _context = context;
        }

        [HttpGet]
        public IEnumerable<Custodian> Get()
        {
            var userId = HttpContext.User.FindFirst(ClaimTypes.NameIdentifier).Value;

            Custodian[] custodians = null;
            _context.Custodians.Where(m => m.User.Id == userId).ToArray();

            return custodians;

        }
        [HttpPost]
        public Custodian Post([FromBody]Custodian custodians)
        {
            custodians.UserId = HttpContext.User.FindFirst(ClaimTypes.NameIdentifier).Value; 
            _context.Custodians.Add(custodians);
            _context.SaveChanges();
            return custodians;
        }
    }
}
