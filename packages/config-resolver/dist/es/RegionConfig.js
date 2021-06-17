import { __assign } from "tslib";
export var REGION_ENV_NAME = "AWS_REGION";
export var REGION_INI_NAME = "region";
export var NODE_REGION_CONFIG_OPTIONS = {
    environmentVariableSelector: function (env) { return env[REGION_ENV_NAME]; },
    configFileSelector: function (profile) { return profile[REGION_INI_NAME]; },
    default: function () {
        throw new Error("Region is missing");
    },
};
export var NODE_REGION_CONFIG_FILE_OPTIONS = {
    preferredFile: "credentials",
};
export var resolveRegionConfig = function (input) {
    if (!input.region) {
        throw new Error("Region is missing");
    }
    return __assign(__assign({}, input), { region: normalizeRegion(input.region) });
};
var normalizeRegion = function (region) {
    if (typeof region === "string") {
        var promisified_1 = Promise.resolve(region);
        return function () { return promisified_1; };
    }
    return region;
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUmVnaW9uQ29uZmlnLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL1JlZ2lvbkNvbmZpZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBR0EsTUFBTSxDQUFDLElBQU0sZUFBZSxHQUFHLFlBQVksQ0FBQztBQUM1QyxNQUFNLENBQUMsSUFBTSxlQUFlLEdBQUcsUUFBUSxDQUFDO0FBRXhDLE1BQU0sQ0FBQyxJQUFNLDBCQUEwQixHQUFrQztJQUN2RSwyQkFBMkIsRUFBRSxVQUFDLEdBQUcsSUFBSyxPQUFBLEdBQUcsQ0FBQyxlQUFlLENBQUMsRUFBcEIsQ0FBb0I7SUFDMUQsa0JBQWtCLEVBQUUsVUFBQyxPQUFPLElBQUssT0FBQSxPQUFPLENBQUMsZUFBZSxDQUFDLEVBQXhCLENBQXdCO0lBQ3pELE9BQU8sRUFBRTtRQUNQLE1BQU0sSUFBSSxLQUFLLENBQUMsbUJBQW1CLENBQUMsQ0FBQztJQUN2QyxDQUFDO0NBQ0YsQ0FBQztBQUVGLE1BQU0sQ0FBQyxJQUFNLCtCQUErQixHQUF1QjtJQUNqRSxhQUFhLEVBQUUsYUFBYTtDQUM3QixDQUFDO0FBa0JGLE1BQU0sQ0FBQyxJQUFNLG1CQUFtQixHQUFHLFVBQUksS0FBaUQ7SUFDdEYsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLEVBQUU7UUFDakIsTUFBTSxJQUFJLEtBQUssQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDO0tBQ3RDO0lBQ0QsNkJBQ0ssS0FBSyxLQUNSLE1BQU0sRUFBRSxlQUFlLENBQUMsS0FBSyxDQUFDLE1BQU8sQ0FBQyxJQUN0QztBQUNKLENBQUMsQ0FBQztBQUVGLElBQU0sZUFBZSxHQUFHLFVBQUMsTUFBaUM7SUFDeEQsSUFBSSxPQUFPLE1BQU0sS0FBSyxRQUFRLEVBQUU7UUFDOUIsSUFBTSxhQUFXLEdBQUcsT0FBTyxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUM1QyxPQUFPLGNBQU0sT0FBQSxhQUFXLEVBQVgsQ0FBVyxDQUFDO0tBQzFCO0lBQ0QsT0FBTyxNQUEwQixDQUFDO0FBQ3BDLENBQUMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IExvYWRlZENvbmZpZ1NlbGVjdG9ycywgTG9jYWxDb25maWdPcHRpb25zIH0gZnJvbSBcIkBhd3Mtc2RrL25vZGUtY29uZmlnLXByb3ZpZGVyXCI7XG5pbXBvcnQgeyBQcm92aWRlciB9IGZyb20gXCJAYXdzLXNkay90eXBlc1wiO1xuXG5leHBvcnQgY29uc3QgUkVHSU9OX0VOVl9OQU1FID0gXCJBV1NfUkVHSU9OXCI7XG5leHBvcnQgY29uc3QgUkVHSU9OX0lOSV9OQU1FID0gXCJyZWdpb25cIjtcblxuZXhwb3J0IGNvbnN0IE5PREVfUkVHSU9OX0NPTkZJR19PUFRJT05TOiBMb2FkZWRDb25maWdTZWxlY3RvcnM8c3RyaW5nPiA9IHtcbiAgZW52aXJvbm1lbnRWYXJpYWJsZVNlbGVjdG9yOiAoZW52KSA9PiBlbnZbUkVHSU9OX0VOVl9OQU1FXSxcbiAgY29uZmlnRmlsZVNlbGVjdG9yOiAocHJvZmlsZSkgPT4gcHJvZmlsZVtSRUdJT05fSU5JX05BTUVdLFxuICBkZWZhdWx0OiAoKSA9PiB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiUmVnaW9uIGlzIG1pc3NpbmdcIik7XG4gIH0sXG59O1xuXG5leHBvcnQgY29uc3QgTk9ERV9SRUdJT05fQ09ORklHX0ZJTEVfT1BUSU9OUzogTG9jYWxDb25maWdPcHRpb25zID0ge1xuICBwcmVmZXJyZWRGaWxlOiBcImNyZWRlbnRpYWxzXCIsXG59O1xuXG5leHBvcnQgaW50ZXJmYWNlIFJlZ2lvbklucHV0Q29uZmlnIHtcbiAgLyoqXG4gICAqIFRoZSBBV1MgcmVnaW9uIHRvIHdoaWNoIHRoaXMgY2xpZW50IHdpbGwgc2VuZCByZXF1ZXN0c1xuICAgKi9cbiAgcmVnaW9uPzogc3RyaW5nIHwgUHJvdmlkZXI8c3RyaW5nPjtcbn1cblxuaW50ZXJmYWNlIFByZXZpb3VzbHlSZXNvbHZlZCB7fVxuXG5leHBvcnQgaW50ZXJmYWNlIFJlZ2lvblJlc29sdmVkQ29uZmlnIHtcbiAgLyoqXG4gICAqIFJlc29sdmVkIHZhbHVlIGZvciBpbnB1dCBjb25maWcge0BsaW5rIFJlZ2lvbklucHV0Q29uZmlnLnJlZ2lvbn1cbiAgICovXG4gIHJlZ2lvbjogUHJvdmlkZXI8c3RyaW5nPjtcbn1cblxuZXhwb3J0IGNvbnN0IHJlc29sdmVSZWdpb25Db25maWcgPSA8VD4oaW5wdXQ6IFQgJiBSZWdpb25JbnB1dENvbmZpZyAmIFByZXZpb3VzbHlSZXNvbHZlZCk6IFQgJiBSZWdpb25SZXNvbHZlZENvbmZpZyA9PiB7XG4gIGlmICghaW5wdXQucmVnaW9uKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiUmVnaW9uIGlzIG1pc3NpbmdcIik7XG4gIH1cbiAgcmV0dXJuIHtcbiAgICAuLi5pbnB1dCxcbiAgICByZWdpb246IG5vcm1hbGl6ZVJlZ2lvbihpbnB1dC5yZWdpb24hKSxcbiAgfTtcbn07XG5cbmNvbnN0IG5vcm1hbGl6ZVJlZ2lvbiA9IChyZWdpb246IHN0cmluZyB8IFByb3ZpZGVyPHN0cmluZz4pOiBQcm92aWRlcjxzdHJpbmc+ID0+IHtcbiAgaWYgKHR5cGVvZiByZWdpb24gPT09IFwic3RyaW5nXCIpIHtcbiAgICBjb25zdCBwcm9taXNpZmllZCA9IFByb21pc2UucmVzb2x2ZShyZWdpb24pO1xuICAgIHJldHVybiAoKSA9PiBwcm9taXNpZmllZDtcbiAgfVxuICByZXR1cm4gcmVnaW9uIGFzIFByb3ZpZGVyPHN0cmluZz47XG59O1xuIl19