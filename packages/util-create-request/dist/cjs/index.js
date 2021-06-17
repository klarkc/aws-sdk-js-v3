"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createRequest = void 0;
async function createRequest(client, command) {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const interceptMiddleware = (next) => async (args) => {
        return { output: { request: args.request }, response: undefined };
    };
    const clientStack = client.middlewareStack.clone();
    // @ts-ignore: add middleware to the last of 'build' step
    clientStack.add(interceptMiddleware, {
        step: "build",
        priority: "low",
    });
    const handler = command.resolveMiddleware(clientStack, client.config, undefined);
    // @ts-ignore
    return await handler(command).then((output) => output.output.request);
}
exports.createRequest = createRequest;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBR08sS0FBSyxVQUFVLGFBQWEsQ0FLakMsTUFBeUQsRUFDekQsT0FBNkU7SUFFN0UsNkRBQTZEO0lBQzdELE1BQU0sbUJBQW1CLEdBQTJDLENBQUMsSUFBSSxFQUFFLEVBQUUsQ0FBQyxLQUFLLEVBQUUsSUFBSSxFQUFFLEVBQUU7UUFDM0YsT0FBTyxFQUFFLE1BQU0sRUFBRSxFQUFFLE9BQU8sRUFBRSxJQUFJLENBQUMsT0FBTyxFQUFTLEVBQUUsUUFBUSxFQUFFLFNBQVMsRUFBRSxDQUFDO0lBQzNFLENBQUMsQ0FBQztJQUNGLE1BQU0sV0FBVyxHQUFHLE1BQU0sQ0FBQyxlQUFlLENBQUMsS0FBSyxFQUFFLENBQUM7SUFFbkQseURBQXlEO0lBQ3pELFdBQVcsQ0FBQyxHQUFHLENBQUMsbUJBQW1CLEVBQUU7UUFDbkMsSUFBSSxFQUFFLE9BQU87UUFDYixRQUFRLEVBQUUsS0FBSztLQUNoQixDQUFDLENBQUM7SUFFSCxNQUFNLE9BQU8sR0FBRyxPQUFPLENBQUMsaUJBQWlCLENBQUMsV0FBVyxFQUFFLE1BQU0sQ0FBQyxNQUFNLEVBQUUsU0FBUyxDQUFDLENBQUM7SUFFakYsYUFBYTtJQUNiLE9BQU8sTUFBTSxPQUFPLENBQUMsT0FBTyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsTUFBTSxFQUFFLEVBQUUsQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0FBQ3hFLENBQUM7QUF4QkQsc0NBd0JDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ2xpZW50LCBDb21tYW5kIH0gZnJvbSBcIkBhd3Mtc2RrL3NtaXRoeS1jbGllbnRcIjtcbmltcG9ydCB7IEJ1aWxkTWlkZGxld2FyZSwgSHR0cFJlcXVlc3QsIE1ldGFkYXRhQmVhcmVyIH0gZnJvbSBcIkBhd3Mtc2RrL3R5cGVzXCI7XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBjcmVhdGVSZXF1ZXN0PFxuICBJbnB1dFR5cGVzVW5pb24gZXh0ZW5kcyBvYmplY3QsXG4gIElucHV0VHlwZSBleHRlbmRzIElucHV0VHlwZXNVbmlvbixcbiAgT3V0cHV0VHlwZSBleHRlbmRzIE1ldGFkYXRhQmVhcmVyID0gTWV0YWRhdGFCZWFyZXJcbj4oXG4gIGNsaWVudDogQ2xpZW50PGFueSwgSW5wdXRUeXBlc1VuaW9uLCBNZXRhZGF0YUJlYXJlciwgYW55PixcbiAgY29tbWFuZDogQ29tbWFuZDxJbnB1dFR5cGUsIE91dHB1dFR5cGUsIGFueSwgSW5wdXRUeXBlc1VuaW9uLCBNZXRhZGF0YUJlYXJlcj5cbik6IFByb21pc2U8SHR0cFJlcXVlc3Q+IHtcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby11bnVzZWQtdmFyc1xuICBjb25zdCBpbnRlcmNlcHRNaWRkbGV3YXJlOiBCdWlsZE1pZGRsZXdhcmU8SW5wdXRUeXBlLCBPdXRwdXRUeXBlPiA9IChuZXh0KSA9PiBhc3luYyAoYXJncykgPT4ge1xuICAgIHJldHVybiB7IG91dHB1dDogeyByZXF1ZXN0OiBhcmdzLnJlcXVlc3QgfSBhcyBhbnksIHJlc3BvbnNlOiB1bmRlZmluZWQgfTtcbiAgfTtcbiAgY29uc3QgY2xpZW50U3RhY2sgPSBjbGllbnQubWlkZGxld2FyZVN0YWNrLmNsb25lKCk7XG5cbiAgLy8gQHRzLWlnbm9yZTogYWRkIG1pZGRsZXdhcmUgdG8gdGhlIGxhc3Qgb2YgJ2J1aWxkJyBzdGVwXG4gIGNsaWVudFN0YWNrLmFkZChpbnRlcmNlcHRNaWRkbGV3YXJlLCB7XG4gICAgc3RlcDogXCJidWlsZFwiLFxuICAgIHByaW9yaXR5OiBcImxvd1wiLFxuICB9KTtcblxuICBjb25zdCBoYW5kbGVyID0gY29tbWFuZC5yZXNvbHZlTWlkZGxld2FyZShjbGllbnRTdGFjaywgY2xpZW50LmNvbmZpZywgdW5kZWZpbmVkKTtcblxuICAvLyBAdHMtaWdub3JlXG4gIHJldHVybiBhd2FpdCBoYW5kbGVyKGNvbW1hbmQpLnRoZW4oKG91dHB1dCkgPT4gb3V0cHV0Lm91dHB1dC5yZXF1ZXN0KTtcbn1cbiJdfQ==