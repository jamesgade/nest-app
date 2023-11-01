import { Module, NestModule, MiddlewareConsumer } from "@nestjs/common";
import { ExampleController } from "../controllers/example.controller";
import { ExampleService } from "../providers/example.service";
import { ExampleMiddleware } from "../middlewares/example.middleware";

@Module({
    imports: [],
    controllers: [ExampleController],
    providers: [ExampleService],
})

export class ExampleModule implements NestModule {
    configure(consumer: MiddlewareConsumer) {
        consumer.apply(ExampleMiddleware).forRoutes('item');
    }
}
