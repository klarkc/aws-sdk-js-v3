import { __decorate, __extends } from "tslib";
import { dirname } from "path";
import { ReflectionKind, } from "typedoc/dist/lib/models/reflections";
import { Component, RendererComponent } from "typedoc/dist/lib/output/components";
import { PageEvent } from "typedoc/dist/lib/output/events";
import { NavigationItem } from "typedoc/dist/lib/output/models/NavigationItem";
import { getCurrentClientDirectory } from "./utils";
/**
 * Group the ToC for easier observability.
 */
var SdkClientTocPlugin = /** @class */ (function (_super) {
    __extends(SdkClientTocPlugin, _super);
    function SdkClientTocPlugin() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SdkClientTocPlugin.prototype.initialize = function () {
        var _a;
        // disable existing toc plugin
        var tocPlugin = this.owner.application.renderer.getComponent("toc");
        this.owner.off(PageEvent.BEGIN, tocPlugin.onRendererBeginPage);
        this.listenTo(this.owner, (_a = {},
            _a[PageEvent.BEGIN] = this.onRendererBeginPage,
            _a));
    };
    /**
     * Generates a table of contents for a page.
     * @param page Contains project details and contextual data about the page being rendered.
     */
    SdkClientTocPlugin.prototype.onRendererBeginPage = function (page) {
        var model = page.model;
        if (!model.constructor.name.endsWith("Reflection")) {
            return;
        }
        var trail = [];
        while (model.constructor.name !== "ProjectReflection" && !model.kindOf(ReflectionKind.SomeModule)) {
            trail.unshift(model);
            model = model.parent;
        }
        var tocRestriction = this.owner.toc;
        page.toc = new NavigationItem(model.name);
        if (!model.parent && !trail.length) {
            this.clientsNavigationItem = new NavigationItem("Clients", void 0, page.toc);
            this.commandsNavigationItem = new NavigationItem("Commands", void 0, page.toc);
            this.paginatorsNavigationItem = new NavigationItem("Paginators", void 0, page.toc);
            this.waitersNavigationItem = new NavigationItem("Waiters", void 0, page.toc);
        }
        this.buildToc(model, trail, page.toc, tocRestriction);
    };
    // Confirm declaration comes from the same folder as the client class
    SdkClientTocPlugin.prototype.belongsToClientPackage = function (model) {
        var _a, _b;
        return this.clientDir && ((_b = (_a = model.sources) === null || _a === void 0 ? void 0 : _a[0].file) === null || _b === void 0 ? void 0 : _b.fullFileName.indexOf(this.clientDir)) === 0;
    };
    SdkClientTocPlugin.prototype.isClient = function (model) {
        var _a = model.extendedTypes, extendedTypes = _a === void 0 ? [] : _a;
        return (model.kindOf(ReflectionKind.Class) &&
            model.getFullName() !== "Client" && // Exclude the Smithy Client class.
            (model.name.endsWith("Client") /* Modular client like S3Client */ ||
                extendedTypes.filter(function (reference) { return reference.name === model.name + "Client"; }).length > 0) &&
            /* Filter out other client classes that not sourced from the same directory as current client. e.g. STS, SSO */
            this.belongsToClientPackage(model));
    };
    SdkClientTocPlugin.prototype.isCommand = function (model) {
        return (model.kindOf(ReflectionKind.Class) &&
            model.name.endsWith("Command") &&
            // model.children?.some((child) => child.name === "resolveMiddleware") &&
            this.belongsToClientPackage(model));
    };
    SdkClientTocPlugin.prototype.isPaginator = function (model) {
        return (model.name.startsWith("paginate") && model.kindOf(ReflectionKind.Function) && this.belongsToClientPackage(model));
    };
    SdkClientTocPlugin.prototype.isInputOrOutput = function (model) {
        return (model.kindOf(ReflectionKind.Interface) &&
            (model.name.endsWith("CommandInput") || model.name.endsWith("CommandOutput")) &&
            this.belongsToClientPackage(model));
    };
    SdkClientTocPlugin.prototype.isWaiter = function (model) {
        return (model.name.startsWith("waitFor") && model.kindOf(ReflectionKind.Function) && this.belongsToClientPackage(model));
    };
    /**
     * Create a toc navigation item structure.
     *
     * @param model   The models whose children should be written to the toc.
     * @param trail   Defines the active trail of expanded toc entries.
     * @param parent  The parent [[NavigationItem]] the toc should be appended to.
     * @param restriction  The restricted table of contents.
     */
    SdkClientTocPlugin.prototype.buildToc = function (model, trail, parent, restriction) {
        var _this = this;
        var _a;
        var index = trail.indexOf(model);
        var children = model["children"] || [];
        if (!this.clientDir)
            this.clientDir = this.loadClientDir(model);
        if (index < trail.length - 1 && children.length > 40) {
            var child = trail[index + 1];
            var item = NavigationItem.create(child, parent, true);
            item.isInPath = true;
            item.isCurrent = false;
            this.buildToc(child, trail, item);
        }
        else {
            children.forEach(function (child) {
                if (restriction && restriction.length > 0 && !restriction.includes(child.name)) {
                    return;
                }
                if (child.kindOf(ReflectionKind.SomeModule)) {
                    return;
                }
                if (_this.isClient(child)) {
                    NavigationItem.create(child, _this.clientsNavigationItem, true);
                }
                else if (_this.isCommand(child)) {
                    NavigationItem.create(child, _this.commandsNavigationItem, true);
                }
                else if (_this.isPaginator(child)) {
                    NavigationItem.create(child, _this.paginatorsNavigationItem, true);
                }
                else if (_this.isInputOrOutput(child)) {
                    NavigationItem.create(child, _this.commandsNavigationItem, true);
                }
                else if (_this.isWaiter(child)) {
                    NavigationItem.create(child, _this.waitersNavigationItem, true);
                }
                else {
                    var item = NavigationItem.create(child, parent, true);
                    if (trail.includes(child)) {
                        item.isInPath = true;
                        item.isCurrent = trail[trail.length - 1] === child;
                        _this.buildToc(child, trail, item);
                    }
                }
            });
            // Group commands and input/output interface of each command.
            (_a = this.commandsNavigationItem) === null || _a === void 0 ? void 0 : _a.children.sort(function (childA, childB) { return childA.title.localeCompare(childB.title); });
        }
    };
    SdkClientTocPlugin.prototype.loadClientDir = function (model) {
        var projectModel = model;
        while (projectModel.constructor.name !== "ProjectReflection" && !projectModel.kindOf(ReflectionKind.SomeModule)) {
            projectModel = projectModel.parent;
        }
        var clientsDirectory = getCurrentClientDirectory({ project: projectModel });
        return dirname(clientsDirectory === null || clientsDirectory === void 0 ? void 0 : clientsDirectory.files.find(function (file) { return file.name.endsWith("Client.ts"); }).fullFileName);
    };
    SdkClientTocPlugin = __decorate([
        Component({ name: "SdkClientTocPlugin" })
    ], SdkClientTocPlugin);
    return SdkClientTocPlugin;
}(RendererComponent));
export { SdkClientTocPlugin };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2RrLWNsaWVudC10b2MtcGx1Z2luLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL3Nkay1jbGllbnQtdG9jLXBsdWdpbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUUvQixPQUFPLEVBSUwsY0FBYyxHQUNmLE1BQU0scUNBQXFDLENBQUM7QUFDN0MsT0FBTyxFQUFFLFNBQVMsRUFBRSxpQkFBaUIsRUFBRSxNQUFNLG9DQUFvQyxDQUFDO0FBQ2xGLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxnQ0FBZ0MsQ0FBQztBQUMzRCxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sK0NBQStDLENBQUM7QUFFL0UsT0FBTyxFQUFFLHlCQUF5QixFQUFFLE1BQU0sU0FBUyxDQUFDO0FBRXBEOztHQUVHO0FBRUg7SUFBd0Msc0NBQWlCO0lBQXpEOztJQXlKQSxDQUFDO0lBbEpDLHVDQUFVLEdBQVY7O1FBQ0UsOEJBQThCO1FBQzlCLElBQU0sU0FBUyxHQUFRLElBQUksQ0FBQyxLQUFLLENBQUMsV0FBVyxDQUFDLFFBQVEsQ0FBQyxZQUFZLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDM0UsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsU0FBUyxDQUFDLEtBQUssRUFBRSxTQUFTLENBQUMsbUJBQW1CLENBQUMsQ0FBQztRQUUvRCxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxLQUFLO1lBQ3RCLEdBQUMsU0FBUyxDQUFDLEtBQUssSUFBRyxJQUFJLENBQUMsbUJBQW1CO2dCQUMzQyxDQUFDO0lBQ0wsQ0FBQztJQUVEOzs7T0FHRztJQUNLLGdEQUFtQixHQUEzQixVQUE0QixJQUFlO1FBQ3pDLElBQUksS0FBSyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUM7UUFDdkIsSUFBSSxDQUFDLEtBQUssQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxZ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LENBQUMsSUFBSSxLQUFLLG1CQUFtQixJQUFJLENBQUMsWUFBWSxDQUFDLE1BQU0sQ0FBQyxjQUFjLENBQUMsVUFBVSxDQUFDLEVBQUU7WUFDL0csWUFBWSxHQUFHLFlBQVksQ0FBQyxNQUEyQixDQUFDO1NBQ3pEO1FBQ0QsSUFBTSxnQkFBZ0IsR0FBRyx5QkFBeUIsQ0FBQyxFQUFFLE9BQU8sRUFBRSxZQUFpQyxFQUFFLENBQUMsQ0FBQztRQUNuRyxPQUFPLE9BQU8sQ0FBQyxnQkFBZ0IsYUFBaEIsZ0JBQWdCLHVCQUFoQixnQkFBZ0IsQ0FBRSxLQUFLLENBQUMsSUFBSSxDQUFDLFVBQUMsSUFBSSxJQUFLLE9BQUEsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFDLEVBQS9CLENBQStCLEVBQUUsWUFBWSxDQUFDLENBQUM7SUFDdkcsQ0FBQztJQXhKVSxrQkFBa0I7UUFEOUIsU0FBUyxDQUFDLEVBQUUsSUFBSSxFQUFFLG9CQUFvQixFQUFFLENBQUM7T0FDN0Isa0JBQWtCLENBeUo5QjtJQUFELHlCQUFDO0NBQUEsQUF6SkQsQ0FBd0MsaUJBQWlCLEdBeUp4RDtTQXpKWSxrQkFBa0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBkaXJuYW1lIH0gZnJvbSBcInBhdGhcIjtcbmltcG9ydCB7IFJlZmVyZW5jZVR5cGUgfSBmcm9tIFwidHlwZWRvYy9kaXN0L2xpYi9tb2RlbHNcIjtcbmltcG9ydCB7XG4gIERlY2xhcmF0aW9uUmVmbGVjdGlvbixcbiAgUHJvamVjdFJlZmxlY3Rpb24sXG4gIFJlZmxlY3Rpb24sXG4gIFJlZmxlY3Rpb25LaW5kLFxufSBmcm9tIFwidHlwZWRvYy9kaXN0L2xpYi9tb2RlbHMvcmVmbGVjdGlvbnNcIjtcbmltcG9ydCB7IENvbXBvbmVudCwgUmVuZGVyZXJDb21wb25lbnQgfSBmcm9tIFwidHlwZWRvYy9kaXN0L2xpYi9vdXRwdXQvY29tcG9uZW50c1wiO1xuaW1wb3J0IHsgUGFnZUV2ZW50IH0gZnJvbSBcInR5cGVkb2MvZGlzdC9saWIvb3V0cHV0L2V2ZW50c1wiO1xuaW1wb3J0IHsgTmF2aWdhdGlvbkl0ZW0gfSBmcm9tIFwidHlwZWRvYy9kaXN0L2xpYi9vdXRwdXQvbW9kZWxzL05hdmlnYXRpb25JdGVtXCI7XG5cbmltcG9ydCB7IGdldEN1cnJlbnRDbGllbnREaXJlY3RvcnkgfSBmcm9tIFwiLi91dGlsc1wiO1xuXG4vKipcbiAqIEdyb3VwIHRoZSBUb0MgZm9yIGVhc2llciBvYnNlcnZhYmlsaXR5LlxuICovXG5AQ29tcG9uZW50KHsgbmFtZTogXCJTZGtDbGllbnRUb2NQbHVnaW5cIiB9KVxuZXhwb3J0IGNsYXNzIFNka0NsaWVudFRvY1BsdWdpbiBleHRlbmRzIFJlbmRlcmVyQ29tcG9uZW50IHtcbiAgcHJpdmF0ZSBjb21tYW5kc05hdmlnYXRpb25JdGVtPzogTmF2aWdhdGlvbkl0ZW07XG4gIHByaXZhdGUgY2xpZW50c05hdmlnYXRpb25JdGVtPzogTmF2aWdhdGlvbkl0ZW07XG4gIHByaXZhdGUgcGFnaW5hdG9yc05hdmlnYXRpb25JdGVtPzogTmF2aWdhdGlvbkl0ZW07XG4gIHByaXZhdGUgd2FpdGVyc05hdmlnYXRpb25JdGVtPzogTmF2aWdhdGlvbkl0ZW07XG4gIHByaXZhdGUgY2xpZW50RGlyPzogc3RyaW5nO1xuXG4gIGluaXRpYWxpemUoKSB7XG4gICAgLy8gZGlzYWJsZSBleGlzdGluZyB0b2MgcGx1Z2luXG4gICAgY29uc3QgdG9jUGx1Z2luID0gPGFueT50aGlzLm93bmVyLmFwcGxpY2F0aW9uLnJlbmRlcmVyLmdldENvbXBvbmVudChcInRvY1wiKTtcbiAgICB0aGlzLm93bmVyLm9mZihQYWdlRXZlbnQuQkVHSU4sIHRvY1BsdWdpbi5vblJlbmRlcmVyQmVnaW5QYWdlKTtcblxuICAgIHRoaXMubGlzdGVuVG8odGhpcy5vd25lciwge1xuICAgICAgW1BhZ2VFdmVudC5CRUdJTl06IHRoaXMub25SZW5kZXJlckJlZ2luUGFnZSxcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZW5lcmF0ZXMgYSB0YWJsZSBvZiBjb250ZW50cyBmb3IgYSBwYWdlLlxuICAgKiBAcGFyYW0gcGFnZSBDb250YWlucyBwcm9qZWN0IGRldGFpbHMgYW5kIGNvbnRleHR1YWwgZGF0YSBhYm91dCB0aGUgcGFnZSBiZWluZyByZW5kZXJlZC5cbiAgICovXG4gIHByaXZhdGUgb25SZW5kZXJlckJlZ2luUGFnZShwYWdlOiBQYWdlRXZlbnQpIHtcbiAgICBsZXQgbW9kZWwgPSBwYWdlLm1vZGVsO1xuICAgIGlmICghbW9kZWwuY29uc3RydWN0b3IubmFtZS5lbmRzV2l0aChcIlJlZmxlY3Rpb25cIikpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCB0cmFpbDogUmVmbGVjdGlvbltdID0gW107XG4gICAgd2hpbGUgKG1vZGVsLmNvbnN0cnVjdG9yLm5hbWUgIT09IFwiUHJvamVjdFJlZmxlY3Rpb25cIiAmJiAhbW9kZWwua2luZE9mKFJlZmxlY3Rpb25LaW5kLlNvbWVNb2R1bGUpKSB7XG4gICAgICB0cmFpbC51bnNoaWZ0KG1vZGVsKTtcbiAgICAgIG1vZGVsID0gbW9kZWwucGFyZW50O1xuICAgIH1cblxuICAgIGNvbnN0IHRvY1Jlc3RyaWN0aW9uID0gdGhpcy5vd25lci50b2M7XG4gICAgcGFnZS50b2MgPSBuZXcgTmF2aWdhdGlvbkl0ZW0obW9kZWwubmFtZSk7XG5cbiAgICBpZiAoIW1vZGVsLnBhcmVudCAmJiAhdHJhaWwubGVuZ3RoKSB7XG4gICAgICB0aGlzLmNsaWVudHNOYXZpZ2F0aW9uSXRlbSA9IG5ldyBOYXZpZ2F0aW9uSXRlbShcIkNsaWVudHNcIiwgdm9pZCAwLCBwYWdlLnRvYyk7XG4gICAgICB0aGlzLmNvbW1hbmRzTmF2aWdhdGlvbkl0ZW0gPSBuZXcgTmF2aWdhdGlvbkl0ZW0oXCJDb21tYW5kc1wiLCB2b2lkIDAsIHBhZ2UudG9jKTtcbiAgICAgIHRoaXMucGFnaW5hdG9yc05hdmlnYXRpb25JdGVtID0gbmV3IE5hdmlnYXRpb25JdGVtKFwiUGFnaW5hdG9yc1wiLCB2b2lkIDAsIHBhZ2UudG9jKTtcbiAgICAgIHRoaXMud2FpdGVyc05hdmlnYXRpb25JdGVtID0gbmV3IE5hdmlnYXRpb25JdGVtKFwiV2FpdGVyc1wiLCB2b2lkIDAsIHBhZ2UudG9jKTtcbiAgICB9XG5cbiAgICB0aGlzLmJ1aWxkVG9jKG1vZGVsLCB0cmFpbCwgcGFnZS50b2MsIHRvY1Jlc3RyaWN0aW9uKTtcbiAgfVxuXG4gIC8vIENvbmZpcm0gZGVjbGFyYXRpb24gY29tZXMgZnJvbSB0aGUgc2FtZSBmb2xkZXIgYXMgdGhlIGNsaWVudCBjbGFzc1xuICBwcml2YXRlIGJlbG9uZ3NUb0NsaWVudFBhY2thZ2UobW9kZWw6IERlY2xhcmF0aW9uUmVmbGVjdGlvbik6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLmNsaWVudERpciAmJiBtb2RlbC5zb3VyY2VzPy5bMF0uZmlsZT8uZnVsbEZpbGVOYW1lLmluZGV4T2YodGhpcy5jbGllbnREaXIpID09PSAwO1xuICB9XG5cbiAgcHJpdmF0ZSBpc0NsaWVudChtb2RlbDogRGVjbGFyYXRpb25SZWZsZWN0aW9uKTogYm9vbGVhbiB7XG4gICAgY29uc3QgeyBleHRlbmRlZFR5cGVzID0gW10gfSA9IG1vZGVsO1xuICAgIHJldHVybiAoXG4gICAgICBtb2RlbC5raW5kT2YoUmVmbGVjdGlvbktpbmQuQ2xhc3MpICYmXG4gICAgICBtb2RlbC5nZXRGdWxsTmFtZSgpICE9PSBcIkNsaWVudFwiICYmIC8vIEV4Y2x1ZGUgdGhlIFNtaXRoeSBDbGllbnQgY2xhc3MuXG4gICAgICAobW9kZWwubmFtZS5lbmRzV2l0aChcIkNsaWVudFwiKSAvKiBNb2R1bGFyIGNsaWVudCBsaWtlIFMzQ2xpZW50ICovIHx8XG4gICAgICAgIGV4dGVuZGVkVHlwZXMuZmlsdGVyKChyZWZlcmVuY2UpID0+IChyZWZlcmVuY2UgYXMgUmVmZXJlbmNlVHlwZSkubmFtZSA9PT0gYCR7bW9kZWwubmFtZX1DbGllbnRgKS5sZW5ndGggPiAwKSAmJlxuICAgICAgLyogRmlsdGVyIG91dCBvdGhlciBjbGllbnQgY2xhc3NlcyB0aGF0IG5vdCBzb3VyY2VkIGZyb20gdGhlIHNhbWUgZGlyZWN0b3J5IGFzIGN1cnJlbnQgY2xpZW50LiBlLmcuIFNUUywgU1NPICovXG4gICAgICB0aGlzLmJlbG9uZ3NUb0NsaWVudFBhY2thZ2UobW9kZWwpXG4gICAgKTtcbiAgfVxuXG4gIHByaXZhdGUgaXNDb21tYW5kKG1vZGVsOiBEZWNsYXJhdGlvblJlZmxlY3Rpb24pOiBib29sZWFuIHtcbiAgICByZXR1cm4gKFxuICAgICAgbW9kZWwua2luZE9mKFJlZmxlY3Rpb25LaW5kLkNsYXNzKSAmJlxuICAgICAgbW9kZWwubmFtZS5lbmRzV2l0aChcIkNvbW1hbmRcIikgJiZcbiAgICAgIC8vIG1vZGVsLmNoaWxkcmVuPy5zb21lKChjaGlsZCkgPT4gY2hpbGQubmFtZSA9PT0gXCJyZXNvbHZlTWlkZGxld2FyZVwiKSAmJlxuICAgICAgdGhpcy5iZWxvbmdzVG9DbGllbnRQYWNrYWdlKG1vZGVsKVxuICAgICk7XG4gIH1cblxuICBwcml2YXRlIGlzUGFnaW5hdG9yKG1vZGVsOiBEZWNsYXJhdGlvblJlZmxlY3Rpb24pOiBib29sZWFuIHtcbiAgICByZXR1cm4gKFxuICAgICAgbW9kZWwubmFtZS5zdGFydHNXaXRoKFwicGFnaW5hdGVcIikgJiYgbW9kZWwua2luZE9mKFJlZmxlY3Rpb25LaW5kLkZ1bmN0aW9uKSAmJiB0aGlzLmJlbG9uZ3NUb0NsaWVudFBhY2thZ2UobW9kZWwpXG4gICAgKTtcbiAgfVxuXG4gIHByaXZhdGUgaXNJbnB1dE9yT3V0cHV0KG1vZGVsOiBEZWNsYXJhdGlvblJlZmxlY3Rpb24pOiBib29sZWFuIHtcbiAgICByZXR1cm4gKFxuICAgICAgbW9kZWwua2luZE9mKFJlZmxlY3Rpb25LaW5kLkludGVyZmFjZSkgJiZcbiAgICAgIChtb2RlbC5uYW1lLmVuZHNXaXRoKFwiQ29tbWFuZElucHV0XCIpIHx8IG1vZGVsLm5hbWUuZW5kc1dpdGgoXCJDb21tYW5kT3V0cHV0XCIpKSAmJlxuICAgICAgdGhpcy5iZWxvbmdzVG9DbGllbnRQYWNrYWdlKG1vZGVsKVxuICAgICk7XG4gIH1cblxuICBwcml2YXRlIGlzV2FpdGVyKG1vZGVsOiBEZWNsYXJhdGlvblJlZmxlY3Rpb24pOiBib29sZWFuIHtcbiAgICByZXR1cm4gKFxuICAgICAgbW9kZWwubmFtZS5zdGFydHNXaXRoKFwid2FpdEZvclwiKSAmJiBtb2RlbC5raW5kT2YoUmVmbGVjdGlvbktpbmQuRnVuY3Rpb24pICYmIHRoaXMuYmVsb25nc1RvQ2xpZW50UGFja2FnZShtb2RlbClcbiAgICApO1xuICB9XG5cbiAgLyoqXG4gICAqIENyZWF0ZSBhIHRvYyBuYXZpZ2F0aW9uIGl0ZW0gc3RydWN0dXJlLlxuICAgKlxuICAgKiBAcGFyYW0gbW9kZWwgICBUaGUgbW9kZWxzIHdob3NlIGNoaWxkcmVuIHNob3VsZCBiZSB3cml0dGVuIHRvIHRoZSB0b2MuXG4gICAqIEBwYXJhbSB0cmFpbCAgIERlZmluZXMgdGhlIGFjdGl2ZSB0cmFpbCBvZiBleHBhbmRlZCB0b2MgZW50cmllcy5cbiAgICogQHBhcmFtIHBhcmVudCAgVGhlIHBhcmVudCBbW05hdmlnYXRpb25JdGVtXV0gdGhlIHRvYyBzaG91bGQgYmUgYXBwZW5kZWQgdG8uXG4gICAqIEBwYXJhbSByZXN0cmljdGlvbiAgVGhlIHJlc3RyaWN0ZWQgdGFibGUgb2YgY29udGVudHMuXG4gICAqL1xuICBidWlsZFRvYyhtb2RlbDogUmVmbGVjdGlvbiwgdHJhaWw6IFJlZmxlY3Rpb25bXSwgcGFyZW50OiBOYXZpZ2F0aW9uSXRlbSwgcmVzdHJpY3Rpb24/OiBzdHJpbmdbXSkge1xuICAgIGNvbnN0IGluZGV4ID0gdHJhaWwuaW5kZXhPZihtb2RlbCk7XG4gICAgY29uc3QgY2hpbGRyZW4gPSBtb2RlbFtcImNoaWxkcmVuXCJdIHx8IFtdO1xuICAgIGlmICghdGhpcy5jbGllbnREaXIpIHRoaXMuY2xpZW50RGlyID0gdGhpcy5sb2FkQ2xpZW50RGlyKG1vZGVsKTtcblxuICAgIGlmIChpbmRleCA8IHRyYWlsLmxlbmd0aCAtIDEgJiYgY2hpbGRyZW4ubGVuZ3RoID4gNDApIHtcbiAgICAgIGNvbnN0IGNoaWxkID0gdHJhaWxbaW5kZXggKyAxXTtcbiAgICAgIGNvbnN0IGl0ZW0gPSBOYXZpZ2F0aW9uSXRlbS5jcmVhdGUoY2hpbGQsIHBhcmVudCwgdHJ1ZSk7XG4gICAgICBpdGVtLmlzSW5QYXRoID0gdHJ1ZTtcbiAgICAgIGl0ZW0uaXNDdXJyZW50ID0gZmFsc2U7XG4gICAgICB0aGlzLmJ1aWxkVG9jKGNoaWxkLCB0cmFpbCwgaXRlbSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNoaWxkcmVuLmZvckVhY2goKGNoaWxkOiBEZWNsYXJhdGlvblJlZmxlY3Rpb24pID0+IHtcbiAgICAgICAgaWYgKHJlc3RyaWN0aW9uICYmIHJlc3RyaWN0aW9uLmxlbmd0aCA+IDAgJiYgIXJlc3RyaWN0aW9uLmluY2x1ZGVzKGNoaWxkLm5hbWUpKSB7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGNoaWxkLmtpbmRPZihSZWZsZWN0aW9uS2luZC5Tb21lTW9kdWxlKSkge1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLmlzQ2xpZW50KGNoaWxkKSkge1xuICAgICAgICAgIE5hdmlnYXRpb25JdGVtLmNyZWF0ZShjaGlsZCwgdGhpcy5jbGllbnRzTmF2aWdhdGlvbkl0ZW0sIHRydWUpO1xuICAgICAgICB9IGVsc2UgaWYgKHRoaXMuaXNDb21tYW5kKGNoaWxkKSkge1xuICAgICAgICAgIE5hdmlnYXRpb25JdGVtLmNyZWF0ZShjaGlsZCwgdGhpcy5jb21tYW5kc05hdmlnYXRpb25JdGVtLCB0cnVlKTtcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLmlzUGFnaW5hdG9yKGNoaWxkKSkge1xuICAgICAgICAgIE5hdmlnYXRpb25JdGVtLmNyZWF0ZShjaGlsZCwgdGhpcy5wYWdpbmF0b3JzTmF2aWdhdGlvbkl0ZW0sIHRydWUpO1xuICAgICAgICB9IGVsc2UgaWYgKHRoaXMuaXNJbnB1dE9yT3V0cHV0KGNoaWxkKSkge1xuICAgICAgICAgIE5hdmlnYXRpb25JdGVtLmNyZWF0ZShjaGlsZCwgdGhpcy5jb21tYW5kc05hdmlnYXRpb25JdGVtLCB0cnVlKTtcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLmlzV2FpdGVyKGNoaWxkKSkge1xuICAgICAgICAgIE5hdmlnYXRpb25JdGVtLmNyZWF0ZShjaGlsZCwgdGhpcy53YWl0ZXJzTmF2aWdhdGlvbkl0ZW0sIHRydWUpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGNvbnN0IGl0ZW0gPSBOYXZpZ2F0aW9uSXRlbS5jcmVhdGUoY2hpbGQsIHBhcmVudCwgdHJ1ZSk7XG4gICAgICAgICAgaWYgKHRyYWlsLmluY2x1ZGVzKGNoaWxkKSkge1xuICAgICAgICAgICAgaXRlbS5pc0luUGF0aCA9IHRydWU7XG4gICAgICAgICAgICBpdGVtLmlzQ3VycmVudCA9IHRyYWlsW3RyYWlsLmxlbmd0aCAtIDFdID09PSBjaGlsZDtcbiAgICAgICAgICAgIHRoaXMuYnVpbGRUb2MoY2hpbGQsIHRyYWlsLCBpdGVtKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgICAgLy8gR3JvdXAgY29tbWFuZHMgYW5kIGlucHV0L291dHB1dCBpbnRlcmZhY2Ugb2YgZWFjaCBjb21tYW5kLlxuICAgICAgdGhpcy5jb21tYW5kc05hdmlnYXRpb25JdGVtPy5jaGlsZHJlbi5zb3J0KChjaGlsZEEsIGNoaWxkQikgPT4gY2hpbGRBLnRpdGxlLmxvY2FsZUNvbXBhcmUoY2hpbGRCLnRpdGxlKSk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBsb2FkQ2xpZW50RGlyKG1vZGVsOiBSZWZsZWN0aW9uKSB7XG4gICAgbGV0IHByb2plY3RNb2RlbCA9IG1vZGVsIGFzIGFueSBhcyBQcm9qZWN0UmVmbGVjdGlvbjtcbiAgICB3aGlsZSAocHJvamVjdE1vZGVsLmNvbnN0cnVjdG9yLm5hbWUgIT09IFwiUHJvamVjdFJlZmxlY3Rpb25cIiAmJiAhcHJvamVjdE1vZGVsLmtpbmRPZihSZWZsZWN0aW9uS2luZC5Tb21lTW9kdWxlKSkge1xuICAgICAgcHJvamVjdE1vZGVsID0gcHJvamVjdE1vZGVsLnBhcmVudCBhcyBQcm9qZWN0UmVmbGVjdGlvbjtcbiAgICB9XG4gICAgY29uc3QgY2xpZW50c0RpcmVjdG9yeSA9IGdldEN1cnJlbnRDbGllbnREaXJlY3RvcnkoeyBwcm9qZWN0OiBwcm9qZWN0TW9kZWwgYXMgUHJvamVjdFJlZmxlY3Rpb24gfSk7XG4gICAgcmV0dXJuIGRpcm5hbWUoY2xpZW50c0RpcmVjdG9yeT8uZmlsZXMuZmluZCgoZmlsZSkgPT4gZmlsZS5uYW1lLmVuZHNXaXRoKFwiQ2xpZW50LnRzXCIpKS5mdWxsRmlsZU5hbWUpO1xuICB9XG59XG4iXX0=