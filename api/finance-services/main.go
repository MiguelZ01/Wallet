package main

import (
	"finance-services/routes"

	"github.com/gofiber/fiber/v2"
)

func main() {
	app := fiber.New()

	routes.Routes(app)

	app.Listen(":5000")
}
