package routes

import (
	"finance-services/handlers"

	"github.com/gofiber/fiber/v2"
)

func Routes(app *fiber.App) {
	app.Get("/", handlers.HomeHandlers)
}
