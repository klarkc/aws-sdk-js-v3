"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SdkClientRenameProjectPlugin = void 0;
const tslib_1 = require("tslib");
const fs_1 = require("fs");
const components_1 = require("typedoc/dist/lib/output/components");
const events_1 = require("typedoc/dist/lib/output/events");
const utils_1 = require("./utils");
/**
 * Correct the package name in the navigator.
 */
let SdkClientRenameProjectPlugin = class SdkClientRenameProjectPlugin extends components_1.RendererComponent {
    constructor() {
        super(...arguments);
        this.projectName = undefined;
    }
    initialize() {
        this.listenTo(this.owner, {
            [events_1.RendererEvent.BEGIN]: this.onRenderedBegin,
        });
    }
    onRenderedBegin(event) {
        var _a, _b, _c, _d, _e;
        if (!this.projectName) {
            const clientDirectory = utils_1.getCurrentClientDirectory(event);
            const metadataDir = (_b = (_a = clientDirectory.files.filter((sourceFile) => sourceFile.fileName.endsWith("/package.json"))) === null || _a === void 0 ? void 0 : _a[0]) === null || _b === void 0 ? void 0 : _b.fullFileName;
            const { name } = metadataDir || JSON.parse(fs_1.readFileSync(metadataDir).toString());
            const serviceIdReflection = (_e = (_d = (_c = clientDirectory.files) === null || _c === void 0 ? void 0 : _c.filter((sourceFile) => sourceFile.fileName.endsWith("/runtimeConfig.shared.ts"))) === null || _d === void 0 ? void 0 : _d[0].reflections.filter((reflection) => reflection.name === "serviceId")) === null || _e === void 0 ? void 0 : _e[0];
            this.projectName = serviceIdReflection /* serviceIdReflection.defaultValue looks like '"S3"' */
                ? `${serviceIdReflection.defaultValue.match(/"(.*)"/)[1]} Client - AWS SDK for JavaScript v3`
                : name;
        }
        event.project.name = this.projectName;
    }
};
SdkClientRenameProjectPlugin = tslib_1.__decorate([
    components_1.Component({ name: "SdkClientRenameProject" })
], SdkClientRenameProjectPlugin);
exports.SdkClientRenameProjectPlugin = SdkClientRenameProjectPlugin;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2RrLWNsaWVudC1yZW5hbWUtcHJvamVjdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zZGstY2xpZW50LXJlbmFtZS1wcm9qZWN0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSwyQkFBa0M7QUFDbEMsbUVBQWtGO0FBQ2xGLDJEQUErRDtBQUUvRCxtQ0FBb0Q7QUFFcEQ7O0dBRUc7QUFFSCxJQUFhLDRCQUE0QixHQUF6QyxNQUFhLDRCQUE2QixTQUFRLDhCQUFpQjtJQUFuRTs7UUFDVSxnQkFBVyxHQUF1QixTQUFTLENBQUM7SUF1QnRELENBQUM7SUF0QkMsVUFBVTtRQUNSLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEtBQUssRUFBRTtZQUN4QixDQUFDLHNCQUFhLENBQUMsS0FBSyxDQUFDLEVBQUUsSUFBSSxDQUFDLGVBQWU7U0FDNUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVELGVBQWUsQ0FBQyxLQUFvQjs7UUFDbEMsSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLEVBQUU7WUFDckIsTUFBTSxlQUFlLEdBQUcsaUNBQXlCLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDekQsTUFBTSxXQUFXLEdBQUcsTUFBQSxNQUFBLGVBQWUsQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUMsVUFBVSxFQUFFLEVBQUUsQ0FDOUQsVUFBVSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsZUFBZSxDQUFDLENBQzlDLDBDQUFHLENBQUMsQ0FBQywwQ0FBRSxZQUFZLENBQUM7WUFDckIsTUFBTSxFQUFFLElBQUksRUFBRSxHQUFHLFdBQVcsSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLGlCQUFZLENBQUMsV0FBVyxDQUFDLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQztZQUNqRixNQUFNLG1CQUFtQixHQUFHLE1BQUEsTUFBQSxNQUFBLGVBQWUsQ0FBQyxLQUFLLDBDQUM3QyxNQUFNLENBQUMsQ0FBQyxVQUFVLEVBQUUsRUFBRSxDQUFDLFVBQVUsQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLDBCQUEwQixDQUFDLENBQUMsMENBQUcsQ0FBQyxFQUNyRixXQUFXLENBQUMsTUFBTSxDQUFDLENBQUMsVUFBVSxFQUFFLEVBQUUsQ0FBQyxVQUFVLENBQUMsSUFBSSxLQUFLLFdBQVcsQ0FBQywwQ0FBRyxDQUFDLENBQUMsQ0FBQztZQUM1RSxJQUFJLENBQUMsV0FBVyxHQUFHLG1CQUFtQixDQUFDLHdEQUF3RDtnQkFDN0YsQ0FBQyxDQUFDLEdBQUksbUJBQTJCLENBQUMsWUFBWSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMscUNBQXFDO2dCQUN0RyxDQUFDLENBQUMsSUFBSSxDQUFDO1NBQ1Y7UUFDRCxLQUFLLENBQUMsT0FBTyxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDO0lBQ3hDLENBQUM7Q0FDRixDQUFBO0FBeEJZLDRCQUE0QjtJQUR4QyxzQkFBUyxDQUFDLEVBQUUsSUFBSSxFQUFFLHdCQUF3QixFQUFFLENBQUM7R0FDakMsNEJBQTRCLENBd0J4QztBQXhCWSxvRUFBNEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyByZWFkRmlsZVN5bmMgfSBmcm9tIFwiZnNcIjtcbmltcG9ydCB7IENvbXBvbmVudCwgUmVuZGVyZXJDb21wb25lbnQgfSBmcm9tIFwidHlwZWRvYy9kaXN0L2xpYi9vdXRwdXQvY29tcG9uZW50c1wiO1xuaW1wb3J0IHsgUmVuZGVyZXJFdmVudCB9IGZyb20gXCJ0eXBlZG9jL2Rpc3QvbGliL291dHB1dC9ldmVudHNcIjtcblxuaW1wb3J0IHsgZ2V0Q3VycmVudENsaWVudERpcmVjdG9yeSB9IGZyb20gXCIuL3V0aWxzXCI7XG5cbi8qKlxuICogQ29ycmVjdCB0aGUgcGFja2FnZSBuYW1lIGluIHRoZSBuYXZpZ2F0b3IuXG4gKi9cbkBDb21wb25lbnQoeyBuYW1lOiBcIlNka0NsaWVudFJlbmFtZVByb2plY3RcIiB9KVxuZXhwb3J0IGNsYXNzIFNka0NsaWVudFJlbmFtZVByb2plY3RQbHVnaW4gZXh0ZW5kcyBSZW5kZXJlckNvbXBvbmVudCB7XG4gIHByaXZhdGUgcHJvamVjdE5hbWU6IHN0cmluZyB8IHVuZGVmaW5lZCA9IHVuZGVmaW5lZDtcbiAgaW5pdGlhbGl6ZSgpIHtcbiAgICB0aGlzLmxpc3RlblRvKHRoaXMub3duZXIsIHtcbiAgICAgIFtSZW5kZXJlckV2ZW50LkJFR0lOXTogdGhpcy5vblJlbmRlcmVkQmVnaW4sXG4gICAgfSk7XG4gIH1cblxuICBvblJlbmRlcmVkQmVnaW4oZXZlbnQ6IFJlbmRlcmVyRXZlbnQpIHtcbiAgICBpZiAoIXRoaXMucHJvamVjdE5hbWUpIHtcbiAgICAgIGNvbnN0IGNsaWVudERpcmVjdG9yeSA9IGdldEN1cnJlbnRDbGllbnREaXJlY3RvcnkoZXZlbnQpO1xuICAgICAgY29uc3QgbWV0YWRhdGFEaXIgPSBjbGllbnREaXJlY3RvcnkuZmlsZXMuZmlsdGVyKChzb3VyY2VGaWxlKSA9PlxuICAgICAgICBzb3VyY2VGaWxlLmZpbGVOYW1lLmVuZHNXaXRoKFwiL3BhY2thZ2UuanNvblwiKVxuICAgICAgKT8uWzBdPy5mdWxsRmlsZU5hbWU7XG4gICAgICBjb25zdCB7IG5hbWUgfSA9IG1ldGFkYXRhRGlyIHx8IEpTT04ucGFyc2UocmVhZEZpbGVTeW5jKG1ldGFkYXRhRGlyKS50b1N0cmluZygpKTtcbiAgICAgIGNvbnN0IHNlcnZpY2VJZFJlZmxlY3Rpb24gPSBjbGllbnREaXJlY3RvcnkuZmlsZXNcbiAgICAgICAgPy5maWx0ZXIoKHNvdXJjZUZpbGUpID0+IHNvdXJjZUZpbGUuZmlsZU5hbWUuZW5kc1dpdGgoXCIvcnVudGltZUNvbmZpZy5zaGFyZWQudHNcIikpPy5bMF1cbiAgICAgICAgLnJlZmxlY3Rpb25zLmZpbHRlcigocmVmbGVjdGlvbikgPT4gcmVmbGVjdGlvbi5uYW1lID09PSBcInNlcnZpY2VJZFwiKT8uWzBdO1xuICAgICAgdGhpcy5wcm9qZWN0TmFtZSA9IHNlcnZpY2VJZFJlZmxlY3Rpb24gLyogc2VydmljZUlkUmVmbGVjdGlvbi5kZWZhdWx0VmFsdWUgbG9va3MgbGlrZSAnXCJTM1wiJyAqL1xuICAgICAgICA/IGAkeyhzZXJ2aWNlSWRSZWZsZWN0aW9uIGFzIGFueSkuZGVmYXVsdFZhbHVlLm1hdGNoKC9cIiguKilcIi8pWzFdfSBDbGllbnQgLSBBV1MgU0RLIGZvciBKYXZhU2NyaXB0IHYzYFxuICAgICAgICA6IG5hbWU7XG4gICAgfVxuICAgIGV2ZW50LnByb2plY3QubmFtZSA9IHRoaXMucHJvamVjdE5hbWU7XG4gIH1cbn1cbiJdfQ==