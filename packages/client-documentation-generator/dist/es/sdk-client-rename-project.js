import { __decorate, __extends } from "tslib";
import { readFileSync } from "fs";
import { Component, RendererComponent } from "typedoc/dist/lib/output/components";
import { RendererEvent } from "typedoc/dist/lib/output/events";
import { getCurrentClientDirectory } from "./utils";
/**
 * Correct the package name in the navigator.
 */
var SdkClientRenameProjectPlugin = /** @class */ (function (_super) {
    __extends(SdkClientRenameProjectPlugin, _super);
    function SdkClientRenameProjectPlugin() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.projectName = undefined;
        return _this;
    }
    SdkClientRenameProjectPlugin.prototype.initialize = function () {
        var _a;
        this.listenTo(this.owner, (_a = {},
            _a[RendererEvent.BEGIN] = this.onRenderedBegin,
            _a));
    };
    SdkClientRenameProjectPlugin.prototype.onRenderedBegin = function (event) {
        var _a, _b, _c, _d, _e;
        if (!this.projectName) {
            var clientDirectory = getCurrentClientDirectory(event);
            var metadataDir = (_b = (_a = clientDirectory.files.filter(function (sourceFile) {
                return sourceFile.fileName.endsWith("/package.json");
            })) === null || _a === void 0 ? void 0 : _a[0]) === null || _b === void 0 ? void 0 : _b.fullFileName;
            var name = (metadataDir || JSON.parse(readFileSync(metadataDir).toString())).name;
            var serviceIdReflection = (_e = (_d = (_c = clientDirectory.files) === null || _c === void 0 ? void 0 : _c.filter(function (sourceFile) { return sourceFile.fileName.endsWith("/runtimeConfig.shared.ts"); })) === null || _d === void 0 ? void 0 : _d[0].reflections.filter(function (reflection) { return reflection.name === "serviceId"; })) === null || _e === void 0 ? void 0 : _e[0];
            this.projectName = serviceIdReflection /* serviceIdReflection.defaultValue looks like '"S3"' */
                ? serviceIdReflection.defaultValue.match(/"(.*)"/)[1] + " Client - AWS SDK for JavaScript v3"
                : name;
        }
        event.project.name = this.projectName;
    };
    SdkClientRenameProjectPlugin = __decorate([
        Component({ name: "SdkClientRenameProject" })
    ], SdkClientRenameProjectPlugin);
    return SdkClientRenameProjectPlugin;
}(RendererComponent));
export { SdkClientRenameProjectPlugin };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2RrLWNsaWVudC1yZW5hbWUtcHJvamVjdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zZGstY2xpZW50LXJlbmFtZS1wcm9qZWN0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sSUFBSSxDQUFDO0FBQ2xDLE9BQU8sRUFBRSxTQUFTLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxvQ0FBb0MsQ0FBQztBQUNsRixPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sZ0NBQWdDLENBQUM7QUFFL0QsT0FBTyxFQUFFLHlCQUF5QixFQUFFLE1BQU0sU0FBUyxDQUFDO0FBRXBEOztHQUVHO0FBRUg7SUFBa0QsZ0RBQWlCO0lBQW5FO1FBQUEscUVBd0JDO1FBdkJTLGlCQUFXLEdBQXVCLFNBQVMsQ0FBQzs7SUF1QnRELENBQUM7SUF0QkMsaURBQVUsR0FBVjs7UUFDRSxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxLQUFLO1lBQ3RCLEdBQUMsYUFBYSxDQUFDLEtBQUssSUFBRyxJQUFJLENBQUMsZUFBZTtnQkFDM0MsQ0FBQztJQUNMLENBQUM7SUFFRCxzREFBZSxHQUFmLFVBQWdCLEtBQW9COztRQUNsQyxJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsRUFBRTtZQUNyQixJQUFNLGVBQWUsR0FBRyx5QkFBeUIsQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUN6RCxJQUFNLFdBQVcsR0FBRyxNQUFBLE1BQUEsZUFBZSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsVUFBQyxVQUFVO2dCQUMxRCxPQUFBLFVBQVUsQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLGVBQWUsQ0FBQztZQUE3QyxDQUE2QyxDQUM5QywwQ0FBRyxDQUFDLENBQUMsMENBQUUsWUFBWSxDQUFDO1lBQ2IsSUFBQSxJQUFJLEdBQUssQ0FBQSxXQUFXLElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxZQUFZLENBQUMsV0FBVyxDQUFDLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQSxLQUFwRSxDQUFxRTtZQUNqRixJQUFNLG1CQUFtQixHQUFHLE1BQUEsTUFBQSxNQUFBLGVBQWUsQ0FBQyxLQUFLLDBDQUM3QyxNQUFNLENBQUMsVUFBQyxVQUFVLElBQUssT0FBQSxVQUFVLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQywwQkFBMEIsQ0FBQyxFQUF4RCxDQUF3RCxDQUFDLDBDQUFHLENBQUMsRUFDckYsV0FBVyxDQUFDLE1BQU0sQ0FBQyxVQUFDLFVBQVUsSUFBSyxPQUFBLFVBQVUsQ0FBQyxJQUFJLEtBQUssV0FBVyxFQUEvQixDQUErQixDQUFDLDBDQUFHLENBQUMsQ0FBQyxDQUFDO1lBQzVFLElBQUksQ0FBQyxXQUFXLEdBQUcsbUJBQW1CLENBQUMsd0RBQXdEO2dCQUM3RixDQUFDLENBQUssbUJBQTJCLENBQUMsWUFBWSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsd0NBQXFDO2dCQUN0RyxDQUFDLENBQUMsSUFBSSxDQUFDO1NBQ1Y7UUFDRCxLQUFLLENBQUMsT0FBTyxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDO0lBQ3hDLENBQUM7SUF2QlUsNEJBQTRCO1FBRHhDLFNBQVMsQ0FBQyxFQUFFLElBQUksRUFBRSx3QkFBd0IsRUFBRSxDQUFDO09BQ2pDLDRCQUE0QixDQXdCeEM7SUFBRCxtQ0FBQztDQUFBLEFBeEJELENBQWtELGlCQUFpQixHQXdCbEU7U0F4QlksNEJBQTRCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgcmVhZEZpbGVTeW5jIH0gZnJvbSBcImZzXCI7XG5pbXBvcnQgeyBDb21wb25lbnQsIFJlbmRlcmVyQ29tcG9uZW50IH0gZnJvbSBcInR5cGVkb2MvZGlzdC9saWIvb3V0cHV0L2NvbXBvbmVudHNcIjtcbmltcG9ydCB7IFJlbmRlcmVyRXZlbnQgfSBmcm9tIFwidHlwZWRvYy9kaXN0L2xpYi9vdXRwdXQvZXZlbnRzXCI7XG5cbmltcG9ydCB7IGdldEN1cnJlbnRDbGllbnREaXJlY3RvcnkgfSBmcm9tIFwiLi91dGlsc1wiO1xuXG4vKipcbiAqIENvcnJlY3QgdGhlIHBhY2thZ2UgbmFtZSBpbiB0aGUgbmF2aWdhdG9yLlxuICovXG5AQ29tcG9uZW50KHsgbmFtZTogXCJTZGtDbGllbnRSZW5hbWVQcm9qZWN0XCIgfSlcbmV4cG9ydCBjbGFzcyBTZGtDbGllbnRSZW5hbWVQcm9qZWN0UGx1Z2luIGV4dGVuZHMgUmVuZGVyZXJDb21wb25lbnQge1xuICBwcml2YXRlIHByb2plY3ROYW1lOiBzdHJpbmcgfCB1bmRlZmluZWQgPSB1bmRlZmluZWQ7XG4gIGluaXRpYWxpemUoKSB7XG4gICAgdGhpcy5saXN0ZW5Ubyh0aGlzLm93bmVyLCB7XG4gICAgICBbUmVuZGVyZXJFdmVudC5CRUdJTl06IHRoaXMub25SZW5kZXJlZEJlZ2luLFxuICAgIH0pO1xuICB9XG5cbiAgb25SZW5kZXJlZEJlZ2luKGV2ZW50OiBSZW5kZXJlckV2ZW50KSB7XG4gICAgaWYgKCF0aGlzLnByb2plY3ROYW1lKSB7XG4gICAgICBjb25zdCBjbGllbnREaXJlY3RvcnkgPSBnZXRDdXJyZW50Q2xpZW50RGlyZWN0b3J5KGV2ZW50KTtcbiAgICAgIGNvbnN0IG1ldGFkYXRhRGlyID0gY2xpZW50RGlyZWN0b3J5LmZpbGVzLmZpbHRlcigoc291cmNlRmlsZSkgPT5cbiAgICAgICAgc291cmNlRmlsZS5maWxlTmFtZS5lbmRzV2l0aChcIi9wYWNrYWdlLmpzb25cIilcbiAgICAgICk/LlswXT8uZnVsbEZpbGVOYW1lO1xuICAgICAgY29uc3QgeyBuYW1lIH0gPSBtZXRhZGF0YURpciB8fCBKU09OLnBhcnNlKHJlYWRGaWxlU3luYyhtZXRhZGF0YURpcikudG9TdHJpbmcoKSk7XG4gICAgICBjb25zdCBzZXJ2aWNlSWRSZWZsZWN0aW9uID0gY2xpZW50RGlyZWN0b3J5LmZpbGVzXG4gICAgICAgID8uZmlsdGVyKChzb3VyY2VGaWxlKSA9PiBzb3VyY2VGaWxlLmZpbGVOYW1lLmVuZHNXaXRoKFwiL3J1bnRpbWVDb25maWcuc2hhcmVkLnRzXCIpKT8uWzBdXG4gICAgICAgIC5yZWZsZWN0aW9ucy5maWx0ZXIoKHJlZmxlY3Rpb24pID0+IHJlZmxlY3Rpb24ubmFtZSA9PT0gXCJzZXJ2aWNlSWRcIik/LlswXTtcbiAgICAgIHRoaXMucHJvamVjdE5hbWUgPSBzZXJ2aWNlSWRSZWZsZWN0aW9uIC8qIHNlcnZpY2VJZFJlZmxlY3Rpb24uZGVmYXVsdFZhbHVlIGxvb2tzIGxpa2UgJ1wiUzNcIicgKi9cbiAgICAgICAgPyBgJHsoc2VydmljZUlkUmVmbGVjdGlvbiBhcyBhbnkpLmRlZmF1bHRWYWx1ZS5tYXRjaCgvXCIoLiopXCIvKVsxXX0gQ2xpZW50IC0gQVdTIFNESyBmb3IgSmF2YVNjcmlwdCB2M2BcbiAgICAgICAgOiBuYW1lO1xuICAgIH1cbiAgICBldmVudC5wcm9qZWN0Lm5hbWUgPSB0aGlzLnByb2plY3ROYW1lO1xuICB9XG59XG4iXX0=