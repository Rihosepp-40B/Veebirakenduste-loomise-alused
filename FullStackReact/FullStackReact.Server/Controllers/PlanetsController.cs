using FullStackReact.Server.Data;
using FullStackReact.Server.ViewModel;
using FullStackReact.Server.Domain;
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

        public IActionResult PlanetIndex()
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

        [HttpPost]
        public IActionResult Create([FromBody] PlanetsCreateViewModel model)
        {
            if (string.IsNullOrWhiteSpace(model.Name))
            {
                return BadRequest("Name is required");
            }

            var planet = new Planets
            {
                PlanetsId = Guid.NewGuid(),
                Name = model.Name,
                Description = model.Description,
                Type = model.Type,
                Mass = model.Mass
            };

            _context.Planets.Add(planet);
            _context.SaveChanges();

            return Ok(new
            {
                planetsId = planet.PlanetsId,
                name = planet.Name,
                description = planet.Description,
                type = planet.Type,
                mass = planet.Mass
            });
        }

		// GET: api/planets/{id}
		[HttpGet("{planetsId:guid}")]
		public IActionResult Detail(Guid planetsId)
		{
			var planet = _context.Planets
				.Where(x => x.PlanetsId == planetsId)
				.Select(x => new PlanetsDetailViewModel
				{
					PlanetsId = x.PlanetsId,
					Name = x.Name,
					Description = x.Description,
					Type = x.Type,
					Mass = x.Mass
				})
				.FirstOrDefault();

			if (planet == null)
			{
				return NotFound();
			}

			return Ok(planet);
		}

		[HttpPut("{planetsId:guid}")]
		public IActionResult Update(Guid planetsId, [FromBody] PlanetsUpdateViewModel model)
		{
			//siin tuleb kontrollida, kas planet on olemas, kui ei ole, siis tagastada NotFound
			var planet = _context.Planets.FirstOrDefault(x => x.PlanetsId == planetsId);
			if (planet == null)
			{
				return NotFound();
			}

			//siin tuleb kontrollida
			//kas Name on tühi, kui on, siis tagastada BadRequest
			if (string.IsNullOrWhiteSpace(model.Name))
			{
				return BadRequest("Name is required");
			}

			//siin tuleb updateida olemasolevat planet objekti, mitte luua uut
			planet.Name = model.Name;
			planet.Description = model.Description;
			planet.Type = model.Type;
			planet.Mass = model.Mass;

			//siin salvestad muutused andmebaasi
			_context.SaveChanges();

			//siin tagastad Ok, kuna update on edukas
			//võid ka tagastada updated planet objekti, kui soovid
			return Ok();
		}

		// DELETE: api/planets/{id}
		[HttpDelete("{planetsId:guid}")]
		public IActionResult Delete(Guid planetsId)
		{
			//siin tuleb kontrollida, kas planet on olemas, kui ei ole, siis tagastada NotFound
			var planet = _context.Planets.FirstOrDefault(x => x.PlanetsId == planetsId);
			if (planet == null)
			{
				return NotFound();
			}

			//siin tuleb eemaldada planet objekti andmebaasist
			_context.Planets.Remove(planet);
			//siin salvestad muutused andmebaasi
			_context.SaveChanges();
			return Ok();
		}
	}
}
