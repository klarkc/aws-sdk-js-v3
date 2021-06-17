"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.resolveCustomEndpointsConfig = void 0;
const resolveCustomEndpointsConfig = (input) => {
    var _a;
    return ({
        ...input,
        tls: (_a = input.tls) !== null && _a !== void 0 ? _a : true,
        endpoint: normalizeEndpoint(input),
        isCustomEndpoint: true,
    });
};
exports.resolveCustomEndpointsConfig = resolveCustomEndpointsConfig;
const normalizeEndpoint = (input) => {
    const { endpoint, urlParser } = input;
    if (typeof endpoint === "string") {
        const promisified = Promise.resolve(urlParser(endpoint));
        return () => promisified;
    }
    else if (typeof endpoint === "object") {
        const promisified = Promise.resolve(endpoint);
        return () => promisified;
    }
    return endpoint;
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ3VzdG9tRW5kcG9pbnRzQ29uZmlnLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL0N1c3RvbUVuZHBvaW50c0NvbmZpZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUE4Qk8sTUFBTSw0QkFBNEIsR0FBRyxDQUMxQyxLQUEwRCxFQUN2QixFQUFFOztJQUFDLE9BQUEsQ0FBQztRQUN2QyxHQUFHLEtBQUs7UUFDUixHQUFHLEVBQUUsTUFBQSxLQUFLLENBQUMsR0FBRyxtQ0FBSSxJQUFJO1FBQ3RCLFFBQVEsRUFBRSxpQkFBaUIsQ0FBQyxLQUFLLENBQUM7UUFDbEMsZ0JBQWdCLEVBQUUsSUFBSTtLQUN2QixDQUFDLENBQUE7Q0FBQSxDQUFDO0FBUFUsUUFBQSw0QkFBNEIsZ0NBT3RDO0FBRUgsTUFBTSxpQkFBaUIsR0FBRyxDQUFDLEtBQXNELEVBQXNCLEVBQUU7SUFDdkcsTUFBTSxFQUFFLFFBQVEsRUFBRSxTQUFTLEVBQUUsR0FBRyxLQUFLLENBQUM7SUFDdEMsSUFBSSxPQUFPLFFBQVEsS0FBSyxRQUFRLEVBQUU7UUFDaEMsTUFBTSxXQUFXLEdBQUcsT0FBTyxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQztRQUN6RCxPQUFPLEdBQUcsRUFBRSxDQUFDLFdBQVcsQ0FBQztLQUMxQjtTQUFNLElBQUksT0FBTyxRQUFRLEtBQUssUUFBUSxFQUFFO1FBQ3ZDLE1BQU0sV0FBVyxHQUFHLE9BQU8sQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDOUMsT0FBTyxHQUFHLEVBQUUsQ0FBQyxXQUFXLENBQUM7S0FDMUI7SUFDRCxPQUFPLFFBQVEsQ0FBQztBQUNsQixDQUFDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBFbmRwb2ludCwgUHJvdmlkZXIsIFVybFBhcnNlciB9IGZyb20gXCJAYXdzLXNkay90eXBlc1wiO1xuXG5leHBvcnQgaW50ZXJmYWNlIEN1c3RvbUVuZHBvaW50c0lucHV0Q29uZmlnIHtcbiAgLyoqXG4gICAqIFRoZSBmdWxseSBxdWFsaWZpZWQgZW5kcG9pbnQgb2YgdGhlIHdlYnNlcnZpY2UuXG4gICAqL1xuICBlbmRwb2ludDogc3RyaW5nIHwgRW5kcG9pbnQgfCBQcm92aWRlcjxFbmRwb2ludD47XG5cbiAgLyoqXG4gICAqIFdoZXRoZXIgVExTIGlzIGVuYWJsZWQgZm9yIHJlcXVlc3RzLlxuICAgKi9cbiAgdGxzPzogYm9vbGVhbjtcbn1cblxuaW50ZXJmYWNlIFByZXZpb3VzbHlSZXNvbHZlZCB7XG4gIHVybFBhcnNlcjogVXJsUGFyc2VyO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIEN1c3RvbUVuZHBvaW50c1Jlc29sdmVkQ29uZmlnIGV4dGVuZHMgUmVxdWlyZWQ8Q3VzdG9tRW5kcG9pbnRzSW5wdXRDb25maWc+IHtcbiAgLyoqXG4gICAqIFJlc29sdmVkIHZhbHVlIGZvciBpbnB1dCB7QGxpbmsgQ3VzdG9tRW5kcG9pbnRzSW5wdXRDb25maWcuZW5kcG9pbnR9XG4gICAqL1xuICBlbmRwb2ludDogUHJvdmlkZXI8RW5kcG9pbnQ+O1xuICAvKipcbiAgICogV2hldGhlciB0aGUgZW5kcG9pbnQgaXMgc3BlY2lmaWVkIGJ5IGNhbGxlci5cbiAgICogQGludGVybmFsXG4gICAqL1xuICBpc0N1c3RvbUVuZHBvaW50OiB0cnVlO1xufVxuXG5leHBvcnQgY29uc3QgcmVzb2x2ZUN1c3RvbUVuZHBvaW50c0NvbmZpZyA9IDxUPihcbiAgaW5wdXQ6IFQgJiBDdXN0b21FbmRwb2ludHNJbnB1dENvbmZpZyAmIFByZXZpb3VzbHlSZXNvbHZlZFxuKTogVCAmIEN1c3RvbUVuZHBvaW50c1Jlc29sdmVkQ29uZmlnID0+ICh7XG4gIC4uLmlucHV0LFxuICB0bHM6IGlucHV0LnRscyA/PyB0cnVlLFxuICBlbmRwb2ludDogbm9ybWFsaXplRW5kcG9pbnQoaW5wdXQpLFxuICBpc0N1c3RvbUVuZHBvaW50OiB0cnVlLFxufSk7XG5cbmNvbnN0IG5vcm1hbGl6ZUVuZHBvaW50ID0gKGlucHV0OiBDdXN0b21FbmRwb2ludHNJbnB1dENvbmZpZyAmIFByZXZpb3VzbHlSZXNvbHZlZCk6IFByb3ZpZGVyPEVuZHBvaW50PiA9PiB7XG4gIGNvbnN0IHsgZW5kcG9pbnQsIHVybFBhcnNlciB9ID0gaW5wdXQ7XG4gIGlmICh0eXBlb2YgZW5kcG9pbnQgPT09IFwic3RyaW5nXCIpIHtcbiAgICBjb25zdCBwcm9taXNpZmllZCA9IFByb21pc2UucmVzb2x2ZSh1cmxQYXJzZXIoZW5kcG9pbnQpKTtcbiAgICByZXR1cm4gKCkgPT4gcHJvbWlzaWZpZWQ7XG4gIH0gZWxzZSBpZiAodHlwZW9mIGVuZHBvaW50ID09PSBcIm9iamVjdFwiKSB7XG4gICAgY29uc3QgcHJvbWlzaWZpZWQgPSBQcm9taXNlLnJlc29sdmUoZW5kcG9pbnQpO1xuICAgIHJldHVybiAoKSA9PiBwcm9taXNpZmllZDtcbiAgfVxuICByZXR1cm4gZW5kcG9pbnQ7XG59O1xuIl19