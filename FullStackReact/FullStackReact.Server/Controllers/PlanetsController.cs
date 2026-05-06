using FullStackReact.Server.Data;
using FullStackReact.Server.ViewModel;
using Microsoft.AspNetCore.Mvc;

namespace FullStackReact.Server.Controllers
{

    [ApiController]
    [Route("api/[controller]")]
    public class PlanetsController : ControllerBase
    {
        private readonly PlanetContext _context;  // Konstruktor

        public PlanetsController
            (
                PlanetContext context
            )
        {
            _context = context;
        }

        public IActionResult SchoolIndex()
        {
            // muutuja result sisse pannakse domaini alt saadud info
            // mis antakse edasi vaatesse (return Ok(result))
            // Lisaks sellele antakse info edasi domaini modelist view modelisse
            var result = _context.Planets
                .Select(x => new PlanetsListViewModel
                {
                    PlanetsId = x.PlanetsId,
                    Name = x.Name,
                    Description = x.Description,
                    Type = x.Type,
                    Mass = x.Mass
                });

            return Ok(result);
        }
    }
}
