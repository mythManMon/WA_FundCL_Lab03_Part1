const greeting = "World";

export function hello(world: string = greeting): string{
    if (world == "WebAcademy") {
        return "Hi WebAcademy!";
    }
    return `Hello ${world}!`;
}