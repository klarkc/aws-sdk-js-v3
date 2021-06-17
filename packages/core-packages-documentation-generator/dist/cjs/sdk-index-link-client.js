"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SdkIndexLinkClientPlugin = void 0;
const tslib_1 = require("tslib");
const path_1 = require("path");
const typedoc_1 = require("typedoc");
const components_1 = require("typedoc/dist/lib/output/components");
const events_1 = require("typedoc/dist/lib/output/events");
const NavigationItem_1 = require("typedoc/dist/lib/output/models/NavigationItem");
const isClientModel = (model) => { var _a; return (_a = model === null || model === void 0 ? void 0 : model.sources[0]) === null || _a === void 0 ? void 0 : _a.fileName.startsWith(`clients${path_1.sep}`); };
const PROJECT_ROOT = path_1.join(__dirname, "..", "..", "..", "..");
let SdkIndexLinkClientPlugin = class SdkIndexLinkClientPlugin extends components_1.RendererComponent {
    initialize() {
        this.listenTo(this.owner, {
            [events_1.PageEvent.BEGIN]: this.onPageBegin,
        });
    }
    onPageBegin(page) {
        const out = path_1.isAbsolute(this.out) ? this.out : path_1.resolve(PROJECT_ROOT, this.out);
        const clientDocs = path_1.isAbsolute(this.clientDocs) ? this.clientDocs : path_1.resolve(PROJECT_ROOT, this.clientDocs);
        // Get relative path from core packages doc to clients' doc.
        const clientDocsPattern = path_1.relative(out, clientDocs);
        if (page.model === page.project) {
            page.navigation = this.groupNavigation(page.navigation);
            page.navigation.children.filter(this.isClient).forEach((child) => {
                // "clients/client-s3" => "client-s3"
                const clientName = child.reflection.sources[0].fileName.split(path_1.sep)[1];
                const clientDocDir = clientDocsPattern.replace(/{{CLIENT}}/g, clientName);
                child.url = path_1.join(clientDocDir, "index.html");
                // @ts-ignore attach temporary flag.
                child.reflection._skipRendering = true;
            });
        }
        // Skip rendering empty landing page for each client.
        if (page.model._skipRendering) {
            page.preventDefault();
        }
        // Update the client doc link int globals.html
        if (page.filename.endsWith("globals.html")) {
            page.model.children.filter(isClientModel).forEach((clientModel) => {
                const clientName = clientModel.sources[0].fileName.split(path_1.sep)[1];
                const clientDocDir = clientDocsPattern.replace(/{{CLIENT}}/g, clientName);
                clientModel.url = path_1.join(clientDocDir, "index.html");
            });
        }
    }
    /**
     * Group navigation in Client, Packages and Libraries sections. It will update the
     * supplied navigation object;
     */
    groupNavigation(navigation) {
        if (this.isGrouped(navigation))
            return navigation;
        const modules = navigation.children.filter((child) => { var _a; return (_a = child === null || child === void 0 ? void 0 : child.reflection) === null || _a === void 0 ? void 0 : _a.sources[0].fileName; });
        const clients = [];
        const packages = [];
        const libs = [];
        const isLib = (item) => { var _a; return (_a = item === null || item === void 0 ? void 0 : item.reflection) === null || _a === void 0 ? void 0 : _a.sources[0].fileName.startsWith(`lib${path_1.sep}`); };
        modules.forEach((item) => {
            if (this.isClient(item)) {
                clients.push(item);
            }
            else if (isLib(item)) {
                libs.push(item);
            }
            else {
                packages.push(item);
            }
        });
        navigation.children = [
            new NavigationItem_1.NavigationItem("Clients"),
            ...clients,
            new NavigationItem_1.NavigationItem("Libraries"),
            ...libs,
            new NavigationItem_1.NavigationItem("Packages"),
            ...packages,
        ];
        return navigation;
    }
    isGrouped(navigation) {
        const childrenNames = navigation.children.map((child) => child.title);
        return (childrenNames.includes("Clients") && childrenNames.includes("Packages") && childrenNames.includes("Libraries"));
    }
    isClient(item) {
        return isClientModel(item === null || item === void 0 ? void 0 : item.reflection);
    }
};
tslib_1.__decorate([
    typedoc_1.BindOption("out")
], SdkIndexLinkClientPlugin.prototype, "out", void 0);
tslib_1.__decorate([
    typedoc_1.BindOption("clientDocs")
], SdkIndexLinkClientPlugin.prototype, "clientDocs", void 0);
SdkIndexLinkClientPlugin = tslib_1.__decorate([
    components_1.Component({ name: "SdkIndexLinkClientPlugin" })
], SdkIndexLinkClientPlugin);
exports.SdkIndexLinkClientPlugin = SdkIndexLinkClientPlugin;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2RrLWluZGV4LWxpbmstY2xpZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL3Nkay1pbmRleC1saW5rLWNsaWVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsK0JBQWdFO0FBQ2hFLHFDQUFvRTtBQUNwRSxtRUFBa0Y7QUFDbEYsMkRBQTJEO0FBQzNELGtGQUErRTtBQUUvRSxNQUFNLGFBQWEsR0FBRyxDQUFDLEtBQTZCLEVBQUUsRUFBRSxXQUFDLE9BQUEsTUFBQSxLQUFLLGFBQUwsS0FBSyx1QkFBTCxLQUFLLENBQUUsT0FBTyxDQUFDLENBQUMsQ0FBQywwQ0FBRSxRQUFRLENBQUMsVUFBVSxDQUFDLFVBQVUsVUFBRyxFQUFFLENBQUMsQ0FBQSxFQUFBLENBQUM7QUFFakgsTUFBTSxZQUFZLEdBQUcsV0FBSSxDQUFDLFNBQVMsRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLENBQUMsQ0FBQztBQUU3RCxJQUFhLHdCQUF3QixHQUFyQyxNQUFhLHdCQUF5QixTQUFRLDhCQUFpQjtJQVc3RCxVQUFVO1FBQ1IsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFFO1lBQ3hCLENBQUMsa0JBQVMsQ0FBQyxLQUFLLENBQUMsRUFBRSxJQUFJLENBQUMsV0FBVztTQUNwQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBRUQsV0FBVyxDQUFDLElBQWU7UUFDekIsTUFBTSxHQUFHLEdBQUcsaUJBQVUsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLGNBQU8sQ0FBQyxZQUFZLEVBQUUsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQzlFLE1BQU0sVUFBVSxHQUFHLGlCQUFVLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxj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bEIsd0JBQXdCO0lBRHBDLHNCQUFTLENBQUMsRUFBRSxJQUFJLEVBQUUsMEJBQTBCLEVBQUUsQ0FBQztHQUNuQyx3QkFBd0IsQ0E4RnBDO0FBOUZZLDREQUF3QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGlzQWJzb2x1dGUsIGpvaW4sIHJlbGF0aXZlLCByZXNvbHZlLCBzZXAgfSBmcm9tIFwicGF0aFwiO1xuaW1wb3J0IHsgQmluZE9wdGlvbiwgUHJvamVjdFJlZmxlY3Rpb24sIFJlZmxlY3Rpb24gfSBmcm9tIFwidHlwZWRvY1wiO1xuaW1wb3J0IHsgQ29tcG9uZW50LCBSZW5kZXJlckNvbXBvbmVudCB9IGZyb20gXCJ0eXBlZG9jL2Rpc3QvbGliL291dHB1dC9jb21wb25lbnRzXCI7XG5pbXBvcnQgeyBQYWdlRXZlbnQgfSBmcm9tIFwidHlwZWRvYy9kaXN0L2xpYi9vdXRwdXQvZXZlbnRzXCI7XG5pbXBvcnQgeyBOYXZpZ2F0aW9uSXRlbSB9IGZyb20gXCJ0eXBlZG9jL2Rpc3QvbGliL291dHB1dC9tb2RlbHMvTmF2aWdhdGlvbkl0ZW1cIjtcblxuY29uc3QgaXNDbGllbnRNb2RlbCA9IChtb2RlbDogUmVmbGVjdGlvbiB8IHVuZGVmaW5lZCkgPT4gbW9kZWw/LnNvdXJjZXNbMF0/LmZpbGVOYW1lLnN0YXJ0c1dpdGgoYGNsaWVudHMke3NlcH1gKTtcblxuY29uc3QgUFJPSkVDVF9ST09UID0gam9pbihfX2Rpcm5hbWUsIFwiLi5cIiwgXCIuLlwiLCBcIi4uXCIsIFwiLi5cIik7XG5AQ29tcG9uZW50KHsgbmFtZTogXCJTZGtJbmRleExpbmtDbGllbnRQbHVnaW5cIiB9KVxuZXhwb3J0IGNsYXNzIFNka0luZGV4TGlua0NsaWVudFBsdWdpbiBleHRlbmRzIFJlbmRlcmVyQ29tcG9uZW50IHtcbiAgQEJpbmRPcHRpb24oXCJvdXRcIilcbiAgcmVhZG9ubHkgb3V0ITogc3RyaW5nO1xuICAvKipcbiAgICogVGhlIHBhdGggcGF0dGVybiBkZW5vdGVzIHRoZSBsb2NhdGlvbiBvZiBpbmRpdmlkdWFsIHNlcnZpY2UgY2xpZW50IGRvYy5cbiAgICogXCJ7e0NMSUVOVH19XCIgd2lsbCBiZSByZXBsYWNlZCB3aXRoIHRoZSBjbGllbnQgbmFtZS5cbiAgICogRm9yIGV4YW1wbGU6IGBwYXRoL3t7Q0xJRU5UfX0vZG9jc2Agd2lsbCB0YXJnZXQgczMgZG9jcyBhdCBgcGF0aC9jbGllbnQtczMvZG9jc2BcbiAgICovXG4gIEBCaW5kT3B0aW9uKFwiY2xpZW50RG9jc1wiKVxuICByZWFkb25seSBjbGllbnREb2NzITogc3RyaW5nO1xuXG4gIGluaXRpYWxpemUoKSB7XG4gICAgdGhpcy5saXN0ZW5Ubyh0aGlzLm93bmVyLCB7XG4gICAgICBbUGFnZUV2ZW50LkJFR0lOXTogdGhpcy5vblBhZ2VCZWdpbixcbiAgICB9KTtcbiAgfVxuXG4gIG9uUGFnZUJlZ2luKHBhZ2U6IFBhZ2VFdmVudCkge1xuICAgIGNvbnN0IG91dCA9IGlzQWJzb2x1dGUodGhpcy5vdXQpID8gdGhpcy5vdXQgOiByZXNvbHZlKFBST0pFQ1RfUk9PVCwgdGhpcy5vdXQpO1xuICAgIGNvbnN0IGNsaWVudERvY3MgPSBpc0Fic29sdXRlKHRoaXMuY2xpZW50RG9jcykgPyB0aGlzLmNsaWVudERvY3MgOiByZXNvbHZlKFBST0pFQ1RfUk9PVCwgdGhpcy5jbGllbnREb2NzKTtcbiAgICAvLyBHZXQgcmVsYXRpdmUgcGF0aCBmcm9tIGNvcmUgcGFja2FnZXMgZG9jIHRvIGNsaWVudHMnIGRvYy5cbiAgICBjb25zdCBjbGllbnREb2NzUGF0dGVybiA9IHJlbGF0aXZlKG91dCwgY2xpZW50RG9jcyk7XG5cbiAgICBpZiAocGFnZS5tb2RlbCA9PT0gcGFnZS5wcm9qZWN0KSB7XG4gICAgICBwYWdlLm5hdmlnYXRpb24gPSB0aGlzLmdyb3VwTmF2aWdhdGlvbihwYWdlLm5hdmlnYXRpb24pO1xuXG4gICAgICBwYWdlLm5hdmlnYXRpb24uY2hpbGRyZW4uZmlsdGVyKHRoaXMuaXNDbGllbnQpLmZvckVhY2goKGNoaWxkKSA9PiB7XG4gICAgICAgIC8vIFwiY2xpZW50cy9jbGllbnQtczNcIiA9PiBcImNsaWVudC1zM1wiXG4gICAgICAgIGNvbnN0IGNsaWVudE5hbWUgPSBjaGlsZC5yZWZsZWN0aW9uLnNvdXJjZXNbMF0uZmlsZU5hbWUuc3BsaXQoc2VwKVsxXTtcbiAgICAgICAgY29uc3QgY2xpZW50RG9jRGlyID0gY2xpZW50RG9jc1BhdHRlcm4ucmVwbGFjZSgve3tDTElFTlR9fS9nLCBjbGllbnROYW1lKTtcbiAgICAgICAgY2hpbGQudXJsID0gam9pbihjbGllbnREb2NEaXIsIFwiaW5kZXguaHRtbFwiKTtcbiAgICAgICAgLy8gQHRzLWlnbm9yZSBhdHRhY2ggdGVtcG9yYXJ5IGZsYWcuXG4gICAgICAgIGNoaWxkLnJlZmxlY3Rpb24uX3NraXBSZW5kZXJpbmcgPSB0cnVlO1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgLy8gU2tpcCByZW5kZXJpbmcgZW1wdHkgbGFuZGluZyBwYWdlIGZvciBlYWNoIGNsaWVudC5cbiAgICBpZiAocGFnZS5tb2RlbC5fc2tpcFJlbmRlcmluZykge1xuICAgICAgcGFnZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIH1cblxuICAgIC8vIFVwZGF0ZSB0aGUgY2xpZW50IGRvYyBsaW5rIGludCBnbG9iYWxzLmh0bWxcbiAgICBpZiAocGFnZS5maWxlbmFtZS5lbmRzV2l0aChcImdsb2JhbHMuaHRtbFwiKSkge1xuICAgICAgKHBhZ2UubW9kZWwgYXMgUHJvamVjdFJlZmxlY3Rpb24pLmNoaWxkcmVuLmZpbHRlcihpc0NsaWVudE1vZGVsKS5mb3JFYWNoKChjbGllbnRNb2RlbCkgPT4ge1xuICAgICAgICBjb25zdCBjbGllbnROYW1lID0gY2xpZW50TW9kZWwuc291cmNlc1swXS5maWxlTmFtZS5zcGxpdChzZXApWzFdO1xuICAgICAgICBjb25zdCBjbGllbnREb2NEaXIgPSBjbGllbnREb2NzUGF0dGVybi5yZXBsYWNlKC97e0NMSUVOVH19L2csIGNsaWVudE5hbWUpO1xuICAgICAgICBjbGllbnRNb2RlbC51cmwgPSBqb2luKGNsaWVudERvY0RpciwgXCJpbmRleC5odG1sXCIpO1xuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIEdyb3VwIG5hdmlnYXRpb24gaW4gQ2xpZW50LCBQYWNrYWdlcyBhbmQgTGlicmFyaWVzIHNlY3Rpb25zLiBJdCB3aWxsIHVwZGF0ZSB0aGVcbiAgICogc3VwcGxpZWQgbmF2aWdhdGlvbiBvYmplY3Q7XG4gICAqL1xuICBwcml2YXRlIGdyb3VwTmF2aWdhdGlvbihuYXZpZ2F0aW9uOiBOYXZpZ2F0aW9uSXRlbSk6IE5hdmlnYXRpb25JdGVtIHtcbiAgICBpZiAodGhpcy5pc0dyb3VwZWQobmF2aWdhdGlvbikpIHJldHVybiBuYXZpZ2F0aW9uO1xuXG4gICAgY29uc3QgbW9kdWxlcyA9IG5hdmlnYXRpb24uY2hpbGRyZW4uZmlsdGVyKChjaGlsZCkgPT4gY2hpbGQ/LnJlZmxlY3Rpb24/LnNvdXJjZXNbMF0uZmlsZU5hbWUpO1xuICAgIGNvbnN0IGNsaWVudHM6IE5hdmlnYXRpb25JdGVtW10gPSBbXTtcbiAgICBjb25zdCBwYWNrYWdlczogTmF2aWdhdGlvbkl0ZW1bXSA9IFtdO1xuICAgIGNvbnN0IGxpYnM6IE5hdmlnYXRpb25JdGVtW10gPSBbXTtcbiAgICBjb25zdCBpc0xpYiA9IChpdGVtOiBOYXZpZ2F0aW9uSXRlbSkgPT4gaXRlbT8ucmVmbGVjdGlvbj8uc291cmNlc1swXS5maWxlTmFtZS5zdGFydHNXaXRoKGBsaWIke3NlcH1gKTtcbiAgICBtb2R1bGVzLmZvckVhY2goKGl0ZW0pID0+IHtcbiAgICAgIGlmICh0aGlzLmlzQ2xpZW50KGl0ZW0pKSB7XG4gICAgICAgIGNsaWVudHMucHVzaChpdGVtKTtcbiAgICAgIH0gZWxzZSBpZiAoaXNMaWIoaXRlbSkpIHtcbiAgICAgICAgbGlicy5wdXNoKGl0ZW0pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcGFja2FnZXMucHVzaChpdGVtKTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIG5hdmlnYXRpb24uY2hpbGRyZW4gPSBbXG4gICAgICBuZXcgTmF2aWdhdGlvbkl0ZW0oXCJDbGllbnRzXCIpLFxuICAgICAgLi4uY2xpZW50cyxcbiAgICAgIG5ldyBOYXZpZ2F0aW9uSXRlbShcIkxpYnJhcmllc1wiKSxcbiAgICAgIC4uLmxpYnMsXG4gICAgICBuZXcgTmF2aWdhdGlvbkl0ZW0oXCJQYWNrYWdlc1wiKSxcbiAgICAgIC4uLnBhY2thZ2VzLFxuICAgIF07XG4gICAgcmV0dXJuIG5hdmlnYXRpb247XG4gIH1cblxuICBwcml2YXRlIGlzR3JvdXBlZChuYXZpZ2F0aW9uOiBOYXZpZ2F0aW9uSXRlbSk6IGJvb2xlYW4ge1xuICAgIGNvbnN0IGNoaWxkcmVuTmFtZXMgPSBuYXZpZ2F0aW9uLmNoaWxkcmVuLm1hcCgoY2hpbGQpID0+IGNoaWxkLnRpdGxlKTtcbiAgICByZXR1cm4gKFxuICAgICAgY2hpbGRyZW5OYW1lcy5pbmNsdWRlcyhcIkNsaWVudHNcIikgJiYgY2hpbGRyZW5OYW1lcy5pbmNsdWRlcyhcIlBhY2thZ2VzXCIpICYmIGNoaWxkcmVuTmFtZXMuaW5jbHVkZXMoXCJMaWJyYXJpZXNcIilcbiAgICApO1xuICB9XG5cbiAgcHJpdmF0ZSBpc0NsaWVudChpdGVtOiBOYXZpZ2F0aW9uSXRlbSk6IGJvb2xlYW4ge1xuICAgIHJldHVybiBpc0NsaWVudE1vZGVsKGl0ZW0/LnJlZmxlY3Rpb24pO1xuICB9XG59XG4iXX0=