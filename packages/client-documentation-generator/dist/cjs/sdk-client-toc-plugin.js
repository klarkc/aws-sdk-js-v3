"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SdkClientTocPlugin = void 0;
const tslib_1 = require("tslib");
const path_1 = require("path");
const reflections_1 = require("typedoc/dist/lib/models/reflections");
const components_1 = require("typedoc/dist/lib/output/components");
const events_1 = require("typedoc/dist/lib/output/events");
const NavigationItem_1 = require("typedoc/dist/lib/output/models/NavigationItem");
const utils_1 = require("./utils");
/**
 * Group the ToC for easier observability.
 */
let SdkClientTocPlugin = class SdkClientTocPlugin extends components_1.RendererComponent {
    initialize() {
        // disable existing toc plugin
        const tocPlugin = this.owner.application.renderer.getComponent("toc");
        this.owner.off(events_1.PageEvent.BEGIN, tocPlugin.onRendererBeginPage);
        this.listenTo(this.owner, {
            [events_1.PageEvent.BEGIN]: this.onRendererBeginPage,
        });
    }
    /**
     * Generates a table of contents for a page.
     * @param page Contains project details and contextual data about the page being rendered.
     */
    onRendererBeginPage(page) {
        let model = page.model;
        if (!model.constructor.name.endsWith("Reflection")) {
            return;
        }
        const trail = [];
        while (model.constructor.name !== "ProjectReflection" && !model.kindOf(reflections_1.ReflectionKind.SomeModule)) {
            trail.unshift(model);
            model = model.parent;
        }
        const tocRestriction = this.owner.toc;
        page.toc = new NavigationItem_1.NavigationItem(model.name);
        if (!model.parent && !trail.length) {
            this.clientsNavigationItem = new NavigationItem_1.NavigationItem("Clients", void 0, page.toc);
            this.commandsNavigationItem = new NavigationItem_1.NavigationItem("Commands", void 0, page.toc);
            this.paginatorsNavigationItem = new NavigationItem_1.NavigationItem("Paginators", void 0, page.toc);
            this.waitersNavigationItem = new NavigationItem_1.NavigationItem("Waiters", void 0, page.toc);
        }
        this.buildToc(model, trail, page.toc, tocRestriction);
    }
    // Confirm declaration comes from the same folder as the client class
    belongsToClientPackage(model) {
        var _a, _b;
        return this.clientDir && ((_b = (_a = model.sources) === null || _a === void 0 ? void 0 : _a[0].file) === null || _b === void 0 ? void 0 : _b.fullFileName.indexOf(this.clientDir)) === 0;
    }
    isClient(model) {
        const { extendedTypes = [] } = model;
        return (model.kindOf(reflections_1.ReflectionKind.Class) &&
            model.getFullName() !== "Client" && // Exclude the Smithy Client class.
            (model.name.endsWith("Client") /* Modular client like S3Client */ ||
                extendedTypes.filter((reference) => reference.name === `${model.name}Client`).length > 0) &&
            /* Filter out other client classes that not sourced from the same directory as current client. e.g. STS, SSO */
            this.belongsToClientPackage(model));
    }
    isCommand(model) {
        return (model.kindOf(reflections_1.ReflectionKind.Class) &&
            model.name.endsWith("Command") &&
            // model.children?.some((child) => child.name === "resolveMiddleware") &&
            this.belongsToClientPackage(model));
    }
    isPaginator(model) {
        return (model.name.startsWith("paginate") && model.kindOf(reflections_1.ReflectionKind.Function) && this.belongsToClientPackage(model));
    }
    isInputOrOutput(model) {
        return (model.kindOf(reflections_1.ReflectionKind.Interface) &&
            (model.name.endsWith("CommandInput") || model.name.endsWith("CommandOutput")) &&
            this.belongsToClientPackage(model));
    }
    isWaiter(model) {
        return (model.name.startsWith("waitFor") && model.kindOf(reflections_1.ReflectionKind.Function) && this.belongsToClientPackage(model));
    }
    /**
     * Create a toc navigation item structure.
     *
     * @param model   The models whose children should be written to the toc.
     * @param trail   Defines the active trail of expanded toc entries.
     * @param parent  The parent [[NavigationItem]] the toc should be appended to.
     * @param restriction  The restricted table of contents.
     */
    buildToc(model, trail, parent, restriction) {
        var _a;
        const index = trail.indexOf(model);
        const children = model["children"] || [];
        if (!this.clientDir)
            this.clientDir = this.loadClientDir(model);
        if (index < trail.length - 1 && children.length > 40) {
            const child = trail[index + 1];
            const item = NavigationItem_1.NavigationItem.create(child, parent, true);
            item.isInPath = true;
            item.isCurrent = false;
            this.buildToc(child, trail, item);
        }
        else {
            children.forEach((child) => {
                if (restriction && restriction.length > 0 && !restriction.includes(child.name)) {
                    return;
                }
                if (child.kindOf(reflections_1.ReflectionKind.SomeModule)) {
                    return;
                }
                if (this.isClient(child)) {
                    NavigationItem_1.NavigationItem.create(child, this.clientsNavigationItem, true);
                }
                else if (this.isCommand(child)) {
                    NavigationItem_1.NavigationItem.create(child, this.commandsNavigationItem, true);
                }
                else if (this.isPaginator(child)) {
                    NavigationItem_1.NavigationItem.create(child, this.paginatorsNavigationItem, true);
                }
                else if (this.isInputOrOutput(child)) {
                    NavigationItem_1.NavigationItem.create(child, this.commandsNavigationItem, true);
                }
                else if (this.isWaiter(child)) {
                    NavigationItem_1.NavigationItem.create(child, this.waitersNavigationItem, true);
                }
                else {
                    const item = NavigationItem_1.NavigationItem.create(child, parent, true);
                    if (trail.includes(child)) {
                        item.isInPath = true;
                        item.isCurrent = trail[trail.length - 1] === child;
                        this.buildToc(child, trail, item);
                    }
                }
            });
            // Group commands and input/output interface of each command.
            (_a = this.commandsNavigationItem) === null || _a === void 0 ? void 0 : _a.children.sort((childA, childB) => childA.title.localeCompare(childB.title));
        }
    }
    loadClientDir(model) {
        let projectModel = model;
        while (projectModel.constructor.name !== "ProjectReflection" && !projectModel.kindOf(reflections_1.ReflectionKind.SomeModule)) {
            projectModel = projectModel.parent;
        }
        const clientsDirectory = utils_1.getCurrentClientDirectory({ project: projectModel });
        return path_1.dirname(clientsDirectory === null || clientsDirectory === void 0 ? void 0 : clientsDirectory.files.find((file) => file.name.endsWith("Client.ts")).fullFileName);
    }
};
SdkClientTocPlugin = tslib_1.__decorate([
    components_1.Component({ name: "SdkClientTocPlugin" })
], SdkClientTocPlugin);
exports.SdkClientTocPlugin = SdkClientTocPlugin;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2RrLWNsaWVudC10b2MtcGx1Z2luLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL3Nkay1jbGllbnQtdG9jLXBsdWdpbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsK0JBQStCO0FBRS9CLHFFQUs2QztBQUM3QyxtRUFBa0Y7QUFDbEYsMkRBQTJEO0FBQzNELGtGQUErRTtBQUUvRSxtQ0FBb0Q7QUFFcEQ7O0dBRUc7QUFFSCxJQUFhLGtCQUFrQixHQUEvQixNQUFhLGtCQUFtQixTQUFRLDhCQUFpQjtJQU92RCxVQUFVO1FBQ1IsOEJBQThCO1FBQzlCLE1BQU0sU0FBUyxHQUFRLElBQUksQ0FBQyxLQUFLLENBQUMsV0FBVyxDQUFDLFFBQVEsQ0FBQyxZQUFZLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDM0UsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsa0JBQVMsQ0FBQyxLQUFLLEVBQUUsU0FBUyxDQUFDLG1CQUFtQixDQUFDLENBQUM7UUFFL0QsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFFO1lBQ3hCLENBQUMsa0JBQVMsQ0FBQyxLQUFLLENBQUMsRUFBRSxJQUFJLENBQUMsbUJBQW1CO1NBQzVDLENBQUMsQ0FBQztJQUNMLENBQUM7SUFFRDs7O09BR0c7SUFDSyxtQkFBbUIsQ0FBQyxJQUFlO1FBQ3pDLElBQUksS0FBSyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUM7UUFDdkIsSUFBSSxDQUFDLEtBQUssQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxZQUFZLENBQUMsRUFBRTtZQUNsRCxPQUFPO1NBQ1I7UUFFRCxNQUFNLEtBQUssR0FBaUIsRUFBRSxDQUFDO1FBQy9CLE9BQU8sS0FBSyxDQUFDLFdBQVcsQ0FBQyxJQUFJLEtBQUssbUJBQW1CLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLDRCQUFjLENBQUMsVUFBVSxDQUFDLEVBQUU7WUFDakcsS0FB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QWhCLGdCQUFnQixDQUFFLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQyxJQUFJLEVBQUUsRUFBRSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQyxFQUFFLFlBQVksQ0FBQyxDQUFDO0lBQ3ZHLENBQUM7Q0FDRixDQUFBO0FBekpZLGtCQUFrQjtJQUQ5QixzQkFBUyxDQUFDLEVBQUUsSUFBSSxFQUFFLG9CQUFvQixFQUFFLENBQUM7R0FDN0Isa0JBQWtCLENBeUo5QjtBQXpKWSxnREFBa0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBkaXJuYW1lIH0gZnJvbSBcInBhdGhcIjtcbmltcG9ydCB7IFJlZmVyZW5jZVR5cGUgfSBmcm9tIFwidHlwZWRvYy9kaXN0L2xpYi9tb2RlbHNcIjtcbmltcG9ydCB7XG4gIERlY2xhcmF0aW9uUmVmbGVjdGlvbixcbiAgUHJvamVjdFJlZmxlY3Rpb24sXG4gIFJlZmxlY3Rpb24sXG4gIFJlZmxlY3Rpb25LaW5kLFxufSBmcm9tIFwidHlwZWRvYy9kaXN0L2xpYi9tb2RlbHMvcmVmbGVjdGlvbnNcIjtcbmltcG9ydCB7IENvbXBvbmVudCwgUmVuZGVyZXJDb21wb25lbnQgfSBmcm9tIFwidHlwZWRvYy9kaXN0L2xpYi9vdXRwdXQvY29tcG9uZW50c1wiO1xuaW1wb3J0IHsgUGFnZUV2ZW50IH0gZnJvbSBcInR5cGVkb2MvZGlzdC9saWIvb3V0cHV0L2V2ZW50c1wiO1xuaW1wb3J0IHsgTmF2aWdhdGlvbkl0ZW0gfSBmcm9tIFwidHlwZWRvYy9kaXN0L2xpYi9vdXRwdXQvbW9kZWxzL05hdmlnYXRpb25JdGVtXCI7XG5cbmltcG9ydCB7IGdldEN1cnJlbnRDbGllbnREaXJlY3RvcnkgfSBmcm9tIFwiLi91dGlsc1wiO1xuXG4vKipcbiAqIEdyb3VwIHRoZSBUb0MgZm9yIGVhc2llciBvYnNlcnZhYmlsaXR5LlxuICovXG5AQ29tcG9uZW50KHsgbmFtZTogXCJTZGtDbGllbnRUb2NQbHVnaW5cIiB9KVxuZXhwb3J0IGNsYXNzIFNka0NsaWVudFRvY1BsdWdpbiBleHRlbmRzIFJlbmRlcmVyQ29tcG9uZW50IHtcbiAgcHJpdmF0ZSBjb21tYW5kc05hdmlnYXRpb25JdGVtPzogTmF2aWdhdGlvbkl0ZW07XG4gIHByaXZhdGUgY2xpZW50c05hdmlnYXRpb25JdGVtPzogTmF2aWdhdGlvbkl0ZW07XG4gIHByaXZhdGUgcGFnaW5hdG9yc05hdmlnYXRpb25JdGVtPzogTmF2aWdhdGlvbkl0ZW07XG4gIHByaXZhdGUgd2FpdGVyc05hdmlnYXRpb25JdGVtPzogTmF2aWdhdGlvbkl0ZW07XG4gIHByaXZhdGUgY2xpZW50RGlyPzogc3RyaW5nO1xuXG4gIGluaXRpYWxpemUoKSB7XG4gICAgLy8gZGlzYWJsZSBleGlzdGluZyB0b2MgcGx1Z2luXG4gICAgY29uc3QgdG9jUGx1Z2luID0gPGFueT50aGlzLm93bmVyLmFwcGxpY2F0aW9uLnJlbmRlcmVyLmdldENvbXBvbmVudChcInRvY1wiKTtcbiAgICB0aGlzLm93bmVyLm9mZihQYWdlRXZlbnQuQkVHSU4sIHRvY1BsdWdpbi5vblJlbmRlcmVyQmVnaW5QYWdlKTtcblxuICAgIHRoaXMubGlzdGVuVG8odGhpcy5vd25lciwge1xuICAgICAgW1BhZ2VFdmVudC5CRUdJTl06IHRoaXMub25SZW5kZXJlckJlZ2luUGFnZSxcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZW5lcmF0ZXMgYSB0YWJsZSBvZiBjb250ZW50cyBmb3IgYSBwYWdlLlxuICAgKiBAcGFyYW0gcGFnZSBDb250YWlucyBwcm9qZWN0IGRldGFpbHMgYW5kIGNvbnRleHR1YWwgZGF0YSBhYm91dCB0aGUgcGFnZSBiZWluZyByZW5kZXJlZC5cbiAgICovXG4gIHByaXZhdGUgb25SZW5kZXJlckJlZ2luUGFnZShwYWdlOiBQYWdlRXZlbnQpIHtcbiAgICBsZXQgbW9kZWwgPSBwYWdlLm1vZGVsO1xuICAgIGlmICghbW9kZWwuY29uc3RydWN0b3IubmFtZS5lbmRzV2l0aChcIlJlZmxlY3Rpb25cIikpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCB0cmFpbDogUmVmbGVjdGlvbltdID0gW107XG4gICAgd2hpbGUgKG1vZGVsLmNvbnN0cnVjdG9yLm5hbWUgIT09IFwiUHJvamVjdFJlZmxlY3Rpb25cIiAmJiAhbW9kZWwua2luZE9mKFJlZmxlY3Rpb25LaW5kLlNvbWVNb2R1bGUpKSB7XG4gICAgICB0cmFpbC51bnNoaWZ0KG1vZGVsKTtcbiAgICAgIG1vZGVsID0gbW9kZWwucGFyZW50O1xuICAgIH1cblxuICAgIGNvbnN0IHRvY1Jlc3RyaWN0aW9uID0gdGhpcy5vd25lci50b2M7XG4gICAgcGFnZS50b2MgPSBuZXcgTmF2aWdhdGlvbkl0ZW0obW9kZWwubmFtZSk7XG5cbiAgICBpZiAoIW1vZGVsLnBhcmVudCAmJiAhdHJhaWwubGVuZ3RoKSB7XG4gICAgICB0aGlzLmNsaWVudHNOYXZpZ2F0aW9uSXRlbSA9IG5ldyBOYXZpZ2F0aW9uSXRlbShcIkNsaWVudHNcIiwgdm9pZCAwLCBwYWdlLnRvYyk7XG4gICAgICB0aGlzLmNvbW1hbmRzTmF2aWdhdGlvbkl0ZW0gPSBuZXcgTmF2aWdhdGlvbkl0ZW0oXCJDb21tYW5kc1wiLCB2b2lkIDAsIHBhZ2UudG9jKTtcbiAgICAgIHRoaXMucGFnaW5hdG9yc05hdmlnYXRpb25JdGVtID0gbmV3IE5hdmlnYXRpb25JdGVtKFwiUGFnaW5hdG9yc1wiLCB2b2lkIDAsIHBhZ2UudG9jKTtcbiAgICAgIHRoaXMud2FpdGVyc05hdmlnYXRpb25JdGVtID0gbmV3IE5hdmlnYXRpb25JdGVtKFwiV2FpdGVyc1wiLCB2b2lkIDAsIHBhZ2UudG9jKTtcbiAgICB9XG5cbiAgICB0aGlzLmJ1aWxkVG9jKG1vZGVsLCB0cmFpbCwgcGFnZS50b2MsIHRvY1Jlc3RyaWN0aW9uKTtcbiAgfVxuXG4gIC8vIENvbmZpcm0gZGVjbGFyYXRpb24gY29tZXMgZnJvbSB0aGUgc2FtZSBmb2xkZXIgYXMgdGhlIGNsaWVudCBjbGFzc1xuICBwcml2YXRlIGJlbG9uZ3NUb0NsaWVudFBhY2thZ2UobW9kZWw6IERlY2xhcmF0aW9uUmVmbGVjdGlvbik6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLmNsaWVudERpciAmJiBtb2RlbC5zb3VyY2VzPy5bMF0uZmlsZT8uZnVsbEZpbGVOYW1lLmluZGV4T2YodGhpcy5jbGllbnREaXIpID09PSAwO1xuICB9XG5cbiAgcHJpdmF0ZSBpc0NsaWVudChtb2RlbDogRGVjbGFyYXRpb25SZWZsZWN0aW9uKTogYm9vbGVhbiB7XG4gICAgY29uc3QgeyBleHRlbmRlZFR5cGVzID0gW10gfSA9IG1vZGVsO1xuICAgIHJldHVybiAoXG4gICAgICBtb2RlbC5raW5kT2YoUmVmbGVjdGlvbktpbmQuQ2xhc3MpICYmXG4gICAgICBtb2RlbC5nZXRGdWxsTmFtZSgpICE9PSBcIkNsaWVudFwiICYmIC8vIEV4Y2x1ZGUgdGhlIFNtaXRoeSBDbGllbnQgY2xhc3MuXG4gICAgICAobW9kZWwubmFtZS5lbmRzV2l0aChcIkNsaWVudFwiKSAvKiBNb2R1bGFyIGNsaWVudCBsaWtlIFMzQ2xpZW50ICovIHx8XG4gICAgICAgIGV4dGVuZGVkVHlwZXMuZmlsdGVyKChyZWZlcmVuY2UpID0+IChyZWZlcmVuY2UgYXMgUmVmZXJlbmNlVHlwZSkubmFtZSA9PT0gYCR7bW9kZWwubmFtZX1DbGllbnRgKS5sZW5ndGggPiAwKSAmJlxuICAgICAgLyogRmlsdGVyIG91dCBvdGhlciBjbGllbnQgY2xhc3NlcyB0aGF0IG5vdCBzb3VyY2VkIGZyb20gdGhlIHNhbWUgZGlyZWN0b3J5IGFzIGN1cnJlbnQgY2xpZW50LiBlLmcuIFNUUywgU1NPICovXG4gICAgICB0aGlzLmJlbG9uZ3NUb0NsaWVudFBhY2thZ2UobW9kZWwpXG4gICAgKTtcbiAgfVxuXG4gIHByaXZhdGUgaXNDb21tYW5kKG1vZGVsOiBEZWNsYXJhdGlvblJlZmxlY3Rpb24pOiBib29sZWFuIHtcbiAgICByZXR1cm4gKFxuICAgICAgbW9kZWwua2luZE9mKFJlZmxlY3Rpb25LaW5kLkNsYXNzKSAmJlxuICAgICAgbW9kZWwubmFtZS5lbmRzV2l0aChcIkNvbW1hbmRcIikgJiZcbiAgICAgIC8vIG1vZGVsLmNoaWxkcmVuPy5zb21lKChjaGlsZCkgPT4gY2hpbGQubmFtZSA9PT0gXCJyZXNvbHZlTWlkZGxld2FyZVwiKSAmJlxuICAgICAgdGhpcy5iZWxvbmdzVG9DbGllbnRQYWNrYWdlKG1vZGVsKVxuICAgICk7XG4gIH1cblxuICBwcml2YXRlIGlzUGFnaW5hdG9yKG1vZGVsOiBEZWNsYXJhdGlvblJlZmxlY3Rpb24pOiBib29sZWFuIHtcbiAgICByZXR1cm4gKFxuICAgICAgbW9kZWwubmFtZS5zdGFydHNXaXRoKFwicGFnaW5hdGVcIikgJiYgbW9kZWwua2luZE9mKFJlZmxlY3Rpb25LaW5kLkZ1bmN0aW9uKSAmJiB0aGlzLmJlbG9uZ3NUb0NsaWVudFBhY2thZ2UobW9kZWwpXG4gICAgKTtcbiAgfVxuXG4gIHByaXZhdGUgaXNJbnB1dE9yT3V0cHV0KG1vZGVsOiBEZWNsYXJhdGlvblJlZmxlY3Rpb24pOiBib29sZWFuIHtcbiAgICByZXR1cm4gKFxuICAgICAgbW9kZWwua2luZE9mKFJlZmxlY3Rpb25LaW5kLkludGVyZmFjZSkgJiZcbiAgICAgIChtb2RlbC5uYW1lLmVuZHNXaXRoKFwiQ29tbWFuZElucHV0XCIpIHx8IG1vZGVsLm5hbWUuZW5kc1dpdGgoXCJDb21tYW5kT3V0cHV0XCIpKSAmJlxuICAgICAgdGhpcy5iZWxvbmdzVG9DbGllbnRQYWNrYWdlKG1vZGVsKVxuICAgICk7XG4gIH1cblxuICBwcml2YXRlIGlzV2FpdGVyKG1vZGVsOiBEZWNsYXJhdGlvblJlZmxlY3Rpb24pOiBib29sZWFuIHtcbiAgICByZXR1cm4gKFxuICAgICAgbW9kZWwubmFtZS5zdGFydHNXaXRoKFwid2FpdEZvclwiKSAmJiBtb2RlbC5raW5kT2YoUmVmbGVjdGlvbktpbmQuRnVuY3Rpb24pICYmIHRoaXMuYmVsb25nc1RvQ2xpZW50UGFja2FnZShtb2RlbClcbiAgICApO1xuICB9XG5cbiAgLyoqXG4gICAqIENyZWF0ZSBhIHRvYyBuYXZpZ2F0aW9uIGl0ZW0gc3RydWN0dXJlLlxuICAgKlxuICAgKiBAcGFyYW0gbW9kZWwgICBUaGUgbW9kZWxzIHdob3NlIGNoaWxkcmVuIHNob3VsZCBiZSB3cml0dGVuIHRvIHRoZSB0b2MuXG4gICAqIEBwYXJhbSB0cmFpbCAgIERlZmluZXMgdGhlIGFjdGl2ZSB0cmFpbCBvZiBleHBhbmRlZCB0b2MgZW50cmllcy5cbiAgICogQHBhcmFtIHBhcmVudCAgVGhlIHBhcmVudCBbW05hdmlnYXRpb25JdGVtXV0gdGhlIHRvYyBzaG91bGQgYmUgYXBwZW5kZWQgdG8uXG4gICAqIEBwYXJhbSByZXN0cmljdGlvbiAgVGhlIHJlc3RyaWN0ZWQgdGFibGUgb2YgY29udGVudHMuXG4gICAqL1xuICBidWlsZFRvYyhtb2RlbDogUmVmbGVjdGlvbiwgdHJhaWw6IFJlZmxlY3Rpb25bXSwgcGFyZW50OiBOYXZpZ2F0aW9uSXRlbSwgcmVzdHJpY3Rpb24/OiBzdHJpbmdbXSkge1xuICAgIGNvbnN0IGluZGV4ID0gdHJhaWwuaW5kZXhPZihtb2RlbCk7XG4gICAgY29uc3QgY2hpbGRyZW4gPSBtb2RlbFtcImNoaWxkcmVuXCJdIHx8IFtdO1xuICAgIGlmICghdGhpcy5jbGllbnREaXIpIHRoaXMuY2xpZW50RGlyID0gdGhpcy5sb2FkQ2xpZW50RGlyKG1vZGVsKTtcblxuICAgIGlmIChpbmRleCA8IHRyYWlsLmxlbmd0aCAtIDEgJiYgY2hpbGRyZW4ubGVuZ3RoID4gNDApIHtcbiAgICAgIGNvbnN0IGNoaWxkID0gdHJhaWxbaW5kZXggKyAxXTtcbiAgICAgIGNvbnN0IGl0ZW0gPSBOYXZpZ2F0aW9uSXRlbS5jcmVhdGUoY2hpbGQsIHBhcmVudCwgdHJ1ZSk7XG4gICAgICBpdGVtLmlzSW5QYXRoID0gdHJ1ZTtcbiAgICAgIGl0ZW0uaXNDdXJyZW50ID0gZmFsc2U7XG4gICAgICB0aGlzLmJ1aWxkVG9jKGNoaWxkLCB0cmFpbCwgaXRlbSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNoaWxkcmVuLmZvckVhY2goKGNoaWxkOiBEZWNsYXJhdGlvblJlZmxlY3Rpb24pID0+IHtcbiAgICAgICAgaWYgKHJlc3RyaWN0aW9uICYmIHJlc3RyaWN0aW9uLmxlbmd0aCA+IDAgJiYgIXJlc3RyaWN0aW9uLmluY2x1ZGVzKGNoaWxkLm5hbWUpKSB7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGNoaWxkLmtpbmRPZihSZWZsZWN0aW9uS2luZC5Tb21lTW9kdWxlKSkge1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLmlzQ2xpZW50KGNoaWxkKSkge1xuICAgICAgICAgIE5hdmlnYXRpb25JdGVtLmNyZWF0ZShjaGlsZCwgdGhpcy5jbGllbnRzTmF2aWdhdGlvbkl0ZW0sIHRydWUpO1xuICAgICAgICB9IGVsc2UgaWYgKHRoaXMuaXNDb21tYW5kKGNoaWxkKSkge1xuICAgICAgICAgIE5hdmlnYXRpb25JdGVtLmNyZWF0ZShjaGlsZCwgdGhpcy5jb21tYW5kc05hdmlnYXRpb25JdGVtLCB0cnVlKTtcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLmlzUGFnaW5hdG9yKGNoaWxkKSkge1xuICAgICAgICAgIE5hdmlnYXRpb25JdGVtLmNyZWF0ZShjaGlsZCwgdGhpcy5wYWdpbmF0b3JzTmF2aWdhdGlvbkl0ZW0sIHRydWUpO1xuICAgICAgICB9IGVsc2UgaWYgKHRoaXMuaXNJbnB1dE9yT3V0cHV0KGNoaWxkKSkge1xuICAgICAgICAgIE5hdmlnYXRpb25JdGVtLmNyZWF0ZShjaGlsZCwgdGhpcy5jb21tYW5kc05hdmlnYXRpb25JdGVtLCB0cnVlKTtcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLmlzV2FpdGVyKGNoaWxkKSkge1xuICAgICAgICAgIE5hdmlnYXRpb25JdGVtLmNyZWF0ZShjaGlsZCwgdGhpcy53YWl0ZXJzTmF2aWdhdGlvbkl0ZW0sIHRydWUpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGNvbnN0IGl0ZW0gPSBOYXZpZ2F0aW9uSXRlbS5jcmVhdGUoY2hpbGQsIHBhcmVudCwgdHJ1ZSk7XG4gICAgICAgICAgaWYgKHRyYWlsLmluY2x1ZGVzKGNoaWxkKSkge1xuICAgICAgICAgICAgaXRlbS5pc0luUGF0aCA9IHRydWU7XG4gICAgICAgICAgICBpdGVtLmlzQ3VycmVudCA9IHRyYWlsW3RyYWlsLmxlbmd0aCAtIDFdID09PSBjaGlsZDtcbiAgICAgICAgICAgIHRoaXMuYnVpbGRUb2MoY2hpbGQsIHRyYWlsLCBpdGVtKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgICAgLy8gR3JvdXAgY29tbWFuZHMgYW5kIGlucHV0L291dHB1dCBpbnRlcmZhY2Ugb2YgZWFjaCBjb21tYW5kLlxuICAgICAgdGhpcy5jb21tYW5kc05hdmlnYXRpb25JdGVtPy5jaGlsZHJlbi5zb3J0KChjaGlsZEEsIGNoaWxkQikgPT4gY2hpbGRBLnRpdGxlLmxvY2FsZUNvbXBhcmUoY2hpbGRCLnRpdGxlKSk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBsb2FkQ2xpZW50RGlyKG1vZGVsOiBSZWZsZWN0aW9uKSB7XG4gICAgbGV0IHByb2plY3RNb2RlbCA9IG1vZGVsIGFzIGFueSBhcyBQcm9qZWN0UmVmbGVjdGlvbjtcbiAgICB3aGlsZSAocHJvamVjdE1vZGVsLmNvbnN0cnVjdG9yLm5hbWUgIT09IFwiUHJvamVjdFJlZmxlY3Rpb25cIiAmJiAhcHJvamVjdE1vZGVsLmtpbmRPZihSZWZsZWN0aW9uS2luZC5Tb21lTW9kdWxlKSkge1xuICAgICAgcHJvamVjdE1vZGVsID0gcHJvamVjdE1vZGVsLnBhcmVudCBhcyBQcm9qZWN0UmVmbGVjdGlvbjtcbiAgICB9XG4gICAgY29uc3QgY2xpZW50c0RpcmVjdG9yeSA9IGdldEN1cnJlbnRDbGllbnREaXJlY3RvcnkoeyBwcm9qZWN0OiBwcm9qZWN0TW9kZWwgYXMgUHJvamVjdFJlZmxlY3Rpb24gfSk7XG4gICAgcmV0dXJuIGRpcm5hbWUoY2xpZW50c0RpcmVjdG9yeT8uZmlsZXMuZmluZCgoZmlsZSkgPT4gZmlsZS5uYW1lLmVuZHNXaXRoKFwiQ2xpZW50LnRzXCIpKS5mdWxsRmlsZU5hbWUpO1xuICB9XG59XG4iXX0=