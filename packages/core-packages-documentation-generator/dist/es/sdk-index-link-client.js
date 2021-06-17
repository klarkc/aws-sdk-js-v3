import { __decorate, __extends, __read, __spreadArray } from "tslib";
import { isAbsolute, join, relative, resolve, sep } from "path";
import { BindOption } from "typedoc";
import { Component, RendererComponent } from "typedoc/dist/lib/output/components";
import { PageEvent } from "typedoc/dist/lib/output/events";
import { NavigationItem } from "typedoc/dist/lib/output/models/NavigationItem";
var isClientModel = function (model) { var _a; return (_a = model === null || model === void 0 ? void 0 : model.sources[0]) === null || _a === void 0 ? void 0 : _a.fileName.startsWith("clients" + sep); };
var PROJECT_ROOT = join(__dirname, "..", "..", "..", "..");
var SdkIndexLinkClientPlugin = /** @class */ (function (_super) {
    __extends(SdkIndexLinkClientPlugin, _super);
    function SdkIndexLinkClientPlugin() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SdkIndexLinkClientPlugin.prototype.initialize = function () {
        var _a;
        this.listenTo(this.owner, (_a = {},
            _a[PageEvent.BEGIN] = this.onPageBegin,
            _a));
    };
    SdkIndexLinkClientPlugin.prototype.onPageBegin = function (page) {
        var out = isAbsolute(this.out) ? this.out : resolve(PROJECT_ROOT, this.out);
        var clientDocs = isAbsolute(this.clientDocs) ? this.clientDocs : resolve(PROJECT_ROOT, this.clientDocs);
        // Get relative path from core packages doc to clients' doc.
        var clientDocsPattern = relative(out, clientDocs);
        if (page.model === page.project) {
            page.navigation = this.groupNavigation(page.navigation);
            page.navigation.children.filter(this.isClient).forEach(function (child) {
                // "clients/client-s3" => "client-s3"
                var clientName = child.reflection.sources[0].fileName.split(sep)[1];
                var clientDocDir = clientDocsPattern.replace(/{{CLIENT}}/g, clientName);
                child.url = join(clientDocDir, "index.html");
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
            page.model.children.filter(isClientModel).forEach(function (clientModel) {
                var clientName = clientModel.sources[0].fileName.split(sep)[1];
                var clientDocDir = clientDocsPattern.replace(/{{CLIENT}}/g, clientName);
                clientModel.url = join(clientDocDir, "index.html");
            });
        }
    };
    /**
     * Group navigation in Client, Packages and Libraries sections. It will update the
     * supplied navigation object;
     */
    SdkIndexLinkClientPlugin.prototype.groupNavigation = function (navigation) {
        var _this = this;
        if (this.isGrouped(navigation))
            return navigation;
        var modules = navigation.children.filter(function (child) { var _a; return (_a = child === null || child === void 0 ? void 0 : child.reflection) === null || _a === void 0 ? void 0 : _a.sources[0].fileName; });
        var clients = [];
        var packages = [];
        var libs = [];
        var isLib = function (item) { var _a; return (_a = item === null || item === void 0 ? void 0 : item.reflection) === null || _a === void 0 ? void 0 : _a.sources[0].fileName.startsWith("lib" + sep); };
        modules.forEach(function (item) {
            if (_this.isClient(item)) {
                clients.push(item);
            }
            else if (isLib(item)) {
                libs.push(item);
            }
            else {
                packages.push(item);
            }
        });
        navigation.children = __spreadArray(__spreadArray(__spreadArray(__spreadArray(__spreadArray([
            new NavigationItem("Clients")
        ], __read(clients)), [
            new NavigationItem("Libraries")
        ]), __read(libs)), [
            new NavigationItem("Packages")
        ]), __read(packages));
        return navigation;
    };
    SdkIndexLinkClientPlugin.prototype.isGrouped = function (navigation) {
        var childrenNames = navigation.children.map(function (child) { return child.title; });
        return (childrenNames.includes("Clients") && childrenNames.includes("Packages") && childrenNames.includes("Libraries"));
    };
    SdkIndexLinkClientPlugin.prototype.isClient = function (item) {
        return isClientModel(item === null || item === void 0 ? void 0 : item.reflection);
    };
    __decorate([
        BindOption("out")
    ], SdkIndexLinkClientPlugin.prototype, "out", void 0);
    __decorate([
        BindOption("clientDocs")
    ], SdkIndexLinkClientPlugin.prototype, "clientDocs", void 0);
    SdkIndexLinkClientPlugin = __decorate([
        Component({ name: "SdkIndexLinkClientPlugin" })
    ], SdkIndexLinkClientPlugin);
    return SdkIndexLinkClientPlugin;
}(RendererComponent));
export { SdkIndexLinkClientPlugin };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2RrLWluZGV4LWxpbmstY2xpZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL3Nkay1pbmRleC1saW5rLWNsaWVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxJQUFJLEVBQUUsUUFBUSxFQUFFLE9BQU8sRUFBRSxHQUFHLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDaEUsT0FBTyxFQUFFLFVBQVUsRUFBaUMsTUFBTSxTQUFTLENBQUM7QUFDcEUsT0FBTyxFQUFFLFNBQVMsRUFBRSxpQkFBaUIsRUFBRSxNQUFNLG9DQUFvQyxDQUFDO0FBQ2xGLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxnQ0FBZ0MsQ0FBQztBQUMzRCxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sK0NBQStDLENBQUM7QUFFL0UsSUFBTSxhQUFhLEdBQUcsVUFBQyxLQUE2QixZQUFLLE9BQUEsTUFBQSxLQUFLLGFBQUwsS0FBSyx1QkFBTCxLQUFLLENBQUUsT0FBTyxDQUFDLENBQUMsQ0FBQywwQ0FBRSxRQUFRLENBQUMsVUFBVSxDQUFDLFlBQVUsR0FBSyxDQUFDLENBQUEsRUFBQSxDQUFDO0FBRWpILElBQU0sWUFBWSxHQUFHLElBQUksQ0FBQyxTQUFTLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxDQUFDLENBQUM7QUFFN0Q7SUFBOEMsNENBQWlCO0lBQS9EOztJQThGQSxDQUFDO0lBbkZDLDZDQUFVLEdBQVY7O1FBQ0UsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsS0FBSztZQUN0QixHQUFDLFNBQVMsQ0FBQyxLQUFLLElBQUcsSUFBSSxDQUFDLFdBQVc7Z0JBQ25DLENBQUM7SUFDTCxDQUFDO0lBRUQsOENBQVcsR0FBWCxVQUFZLElBQWU7UUFDekIsSUFBTSxHQUFHLEdBQUcsVUFBVSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxD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SSx1QkFBSixJQUFJLENBQUUsVUFBVSxDQUFDLENBQUM7SUFDekMsQ0FBQztJQTNGRDtRQURDLFVBQVUsQ0FBQyxLQUFLLENBQUM7eURBQ0k7SUFPdEI7UUFEQyxVQUFVLENBQUMsWUFBWSxDQUFDO2dFQUNJO0lBVGxCLHdCQUF3QjtRQURwQyxTQUFTLENBQUMsRUFBRSxJQUFJLEVBQUUsMEJBQTBCLEVBQUUsQ0FBQztPQUNuQyx3QkFBd0IsQ0E4RnBDO0lBQUQsK0JBQUM7Q0FBQSxBQTlGRCxDQUE4QyxpQkFBaUIsR0E4RjlEO1NBOUZZLHdCQUF3QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGlzQWJzb2x1dGUsIGpvaW4sIHJlbGF0aXZlLCByZXNvbHZlLCBzZXAgfSBmcm9tIFwicGF0aFwiO1xuaW1wb3J0IHsgQmluZE9wdGlvbiwgUHJvamVjdFJlZmxlY3Rpb24sIFJlZmxlY3Rpb24gfSBmcm9tIFwidHlwZWRvY1wiO1xuaW1wb3J0IHsgQ29tcG9uZW50LCBSZW5kZXJlckNvbXBvbmVudCB9IGZyb20gXCJ0eXBlZG9jL2Rpc3QvbGliL291dHB1dC9jb21wb25lbnRzXCI7XG5pbXBvcnQgeyBQYWdlRXZlbnQgfSBmcm9tIFwidHlwZWRvYy9kaXN0L2xpYi9vdXRwdXQvZXZlbnRzXCI7XG5pbXBvcnQgeyBOYXZpZ2F0aW9uSXRlbSB9IGZyb20gXCJ0eXBlZG9jL2Rpc3QvbGliL291dHB1dC9tb2RlbHMvTmF2aWdhdGlvbkl0ZW1cIjtcblxuY29uc3QgaXNDbGllbnRNb2RlbCA9IChtb2RlbDogUmVmbGVjdGlvbiB8IHVuZGVmaW5lZCkgPT4gbW9kZWw/LnNvdXJjZXNbMF0/LmZpbGVOYW1lLnN0YXJ0c1dpdGgoYGNsaWVudHMke3NlcH1gKTtcblxuY29uc3QgUFJPSkVDVF9ST09UID0gam9pbihfX2Rpcm5hbWUsIFwiLi5cIiwgXCIuLlwiLCBcIi4uXCIsIFwiLi5cIik7XG5AQ29tcG9uZW50KHsgbmFtZTogXCJTZGtJbmRleExpbmtDbGllbnRQbHVnaW5cIiB9KVxuZXhwb3J0IGNsYXNzIFNka0luZGV4TGlua0NsaWVudFBsdWdpbiBleHRlbmRzIFJlbmRlcmVyQ29tcG9uZW50IHtcbiAgQEJpbmRPcHRpb24oXCJvdXRcIilcbiAgcmVhZG9ubHkgb3V0ITogc3RyaW5nO1xuICAvKipcbiAgICogVGhlIHBhdGggcGF0dGVybiBkZW5vdGVzIHRoZSBsb2NhdGlvbiBvZiBpbmRpdmlkdWFsIHNlcnZpY2UgY2xpZW50IGRvYy5cbiAgICogXCJ7e0NMSUVOVH19XCIgd2lsbCBiZSByZXBsYWNlZCB3aXRoIHRoZSBjbGllbnQgbmFtZS5cbiAgICogRm9yIGV4YW1wbGU6IGBwYXRoL3t7Q0xJRU5UfX0vZG9jc2Agd2lsbCB0YXJnZXQgczMgZG9jcyBhdCBgcGF0aC9jbGllbnQtczMvZG9jc2BcbiAgICovXG4gIEBCaW5kT3B0aW9uKFwiY2xpZW50RG9jc1wiKVxuICByZWFkb25seSBjbGllbnREb2NzITogc3RyaW5nO1xuXG4gIGluaXRpYWxpemUoKSB7XG4gICAgdGhpcy5saXN0ZW5Ubyh0aGlzLm93bmVyLCB7XG4gICAgICBbUGFnZUV2ZW50LkJFR0lOXTogdGhpcy5vblBhZ2VCZWdpbixcbiAgICB9KTtcbiAgfVxuXG4gIG9uUGFnZUJlZ2luKHBhZ2U6IFBhZ2VFdmVudCkge1xuICAgIGNvbnN0IG91dCA9IGlzQWJzb2x1dGUodGhpcy5vdXQpID8gdGhpcy5vdXQgOiByZXNvbHZlKFBST0pFQ1RfUk9PVCwgdGhpcy5vdXQpO1xuICAgIGNvbnN0IGNsaWVudERvY3MgPSBpc0Fic29sdXRlKHRoaXMuY2xpZW50RG9jcykgPyB0aGlzLmNsaWVudERvY3MgOiByZXNvbHZlKFBST0pFQ1RfUk9PVCwgdGhpcy5jbGllbnREb2NzKTtcbiAgICAvLyBHZXQgcmVsYXRpdmUgcGF0aCBmcm9tIGNvcmUgcGFja2FnZXMgZG9jIHRvIGNsaWVudHMnIGRvYy5cbiAgICBjb25zdCBjbGllbnREb2NzUGF0dGVybiA9IHJlbGF0aXZlKG91dCwgY2xpZW50RG9jcyk7XG5cbiAgICBpZiAocGFnZS5tb2RlbCA9PT0gcGFnZS5wcm9qZWN0KSB7XG4gICAgICBwYWdlLm5hdmlnYXRpb24gPSB0aGlzLmdyb3VwTmF2aWdhdGlvbihwYWdlLm5hdmlnYXRpb24pO1xuXG4gICAgICBwYWdlLm5hdmlnYXRpb24uY2hpbGRyZW4uZmlsdGVyKHRoaXMuaXNDbGllbnQpLmZvckVhY2goKGNoaWxkKSA9PiB7XG4gICAgICAgIC8vIFwiY2xpZW50cy9jbGllbnQtczNcIiA9PiBcImNsaWVudC1zM1wiXG4gICAgICAgIGNvbnN0IGNsaWVudE5hbWUgPSBjaGlsZC5yZWZsZWN0aW9uLnNvdXJjZXNbMF0uZmlsZU5hbWUuc3BsaXQoc2VwKVsxXTtcbiAgICAgICAgY29uc3QgY2xpZW50RG9jRGlyID0gY2xpZW50RG9jc1BhdHRlcm4ucmVwbGFjZSgve3tDTElFTlR9fS9nLCBjbGllbnROYW1lKTtcbiAgICAgICAgY2hpbGQudXJsID0gam9pbihjbGllbnREb2NEaXIsIFwiaW5kZXguaHRtbFwiKTtcbiAgICAgICAgLy8gQHRzLWlnbm9yZSBhdHRhY2ggdGVtcG9yYXJ5IGZsYWcuXG4gICAgICAgIGNoaWxkLnJlZmxlY3Rpb24uX3NraXBSZW5kZXJpbmcgPSB0cnVlO1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgLy8gU2tpcCByZW5kZXJpbmcgZW1wdHkgbGFuZGluZyBwYWdlIGZvciBlYWNoIGNsaWVudC5cbiAgICBpZiAocGFnZS5tb2RlbC5fc2tpcFJlbmRlcmluZykge1xuICAgICAgcGFnZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIH1cblxuICAgIC8vIFVwZGF0ZSB0aGUgY2xpZW50IGRvYyBsaW5rIGludCBnbG9iYWxzLmh0bWxcbiAgICBpZiAocGFnZS5maWxlbmFtZS5lbmRzV2l0aChcImdsb2JhbHMuaHRtbFwiKSkge1xuICAgICAgKHBhZ2UubW9kZWwgYXMgUHJvamVjdFJlZmxlY3Rpb24pLmNoaWxkcmVuLmZpbHRlcihpc0NsaWVudE1vZGVsKS5mb3JFYWNoKChjbGllbnRNb2RlbCkgPT4ge1xuICAgICAgICBjb25zdCBjbGllbnROYW1lID0gY2xpZW50TW9kZWwuc291cmNlc1swXS5maWxlTmFtZS5zcGxpdChzZXApWzFdO1xuICAgICAgICBjb25zdCBjbGllbnREb2NEaXIgPSBjbGllbnREb2NzUGF0dGVybi5yZXBsYWNlKC97e0NMSUVOVH19L2csIGNsaWVudE5hbWUpO1xuICAgICAgICBjbGllbnRNb2RlbC51cmwgPSBqb2luKGNsaWVudERvY0RpciwgXCJpbmRleC5odG1sXCIpO1xuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIEdyb3VwIG5hdmlnYXRpb24gaW4gQ2xpZW50LCBQYWNrYWdlcyBhbmQgTGlicmFyaWVzIHNlY3Rpb25zLiBJdCB3aWxsIHVwZGF0ZSB0aGVcbiAgICogc3VwcGxpZWQgbmF2aWdhdGlvbiBvYmplY3Q7XG4gICAqL1xuICBwcml2YXRlIGdyb3VwTmF2aWdhdGlvbihuYXZpZ2F0aW9uOiBOYXZpZ2F0aW9uSXRlbSk6IE5hdmlnYXRpb25JdGVtIHtcbiAgICBpZiAodGhpcy5pc0dyb3VwZWQobmF2aWdhdGlvbikpIHJldHVybiBuYXZpZ2F0aW9uO1xuXG4gICAgY29uc3QgbW9kdWxlcyA9IG5hdmlnYXRpb24uY2hpbGRyZW4uZmlsdGVyKChjaGlsZCkgPT4gY2hpbGQ/LnJlZmxlY3Rpb24/LnNvdXJjZXNbMF0uZmlsZU5hbWUpO1xuICAgIGNvbnN0IGNsaWVudHM6IE5hdmlnYXRpb25JdGVtW10gPSBbXTtcbiAgICBjb25zdCBwYWNrYWdlczogTmF2aWdhdGlvbkl0ZW1bXSA9IFtdO1xuICAgIGNvbnN0IGxpYnM6IE5hdmlnYXRpb25JdGVtW10gPSBbXTtcbiAgICBjb25zdCBpc0xpYiA9IChpdGVtOiBOYXZpZ2F0aW9uSXRlbSkgPT4gaXRlbT8ucmVmbGVjdGlvbj8uc291cmNlc1swXS5maWxlTmFtZS5zdGFydHNXaXRoKGBsaWIke3NlcH1gKTtcbiAgICBtb2R1bGVzLmZvckVhY2goKGl0ZW0pID0+IHtcbiAgICAgIGlmICh0aGlzLmlzQ2xpZW50KGl0ZW0pKSB7XG4gICAgICAgIGNsaWVudHMucHVzaChpdGVtKTtcbiAgICAgIH0gZWxzZSBpZiAoaXNMaWIoaXRlbSkpIHtcbiAgICAgICAgbGlicy5wdXNoKGl0ZW0pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcGFja2FnZXMucHVzaChpdGVtKTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIG5hdmlnYXRpb24uY2hpbGRyZW4gPSBbXG4gICAgICBuZXcgTmF2aWdhdGlvbkl0ZW0oXCJDbGllbnRzXCIpLFxuICAgICAgLi4uY2xpZW50cyxcbiAgICAgIG5ldyBOYXZpZ2F0aW9uSXRlbShcIkxpYnJhcmllc1wiKSxcbiAgICAgIC4uLmxpYnMsXG4gICAgICBuZXcgTmF2aWdhdGlvbkl0ZW0oXCJQYWNrYWdlc1wiKSxcbiAgICAgIC4uLnBhY2thZ2VzLFxuICAgIF07XG4gICAgcmV0dXJuIG5hdmlnYXRpb247XG4gIH1cblxuICBwcml2YXRlIGlzR3JvdXBlZChuYXZpZ2F0aW9uOiBOYXZpZ2F0aW9uSXRlbSk6IGJvb2xlYW4ge1xuICAgIGNvbnN0IGNoaWxkcmVuTmFtZXMgPSBuYXZpZ2F0aW9uLmNoaWxkcmVuLm1hcCgoY2hpbGQpID0+IGNoaWxkLnRpdGxlKTtcbiAgICByZXR1cm4gKFxuICAgICAgY2hpbGRyZW5OYW1lcy5pbmNsdWRlcyhcIkNsaWVudHNcIikgJiYgY2hpbGRyZW5OYW1lcy5pbmNsdWRlcyhcIlBhY2thZ2VzXCIpICYmIGNoaWxkcmVuTmFtZXMuaW5jbHVkZXMoXCJMaWJyYXJpZXNcIilcbiAgICApO1xuICB9XG5cbiAgcHJpdmF0ZSBpc0NsaWVudChpdGVtOiBOYXZpZ2F0aW9uSXRlbSk6IGJvb2xlYW4ge1xuICAgIHJldHVybiBpc0NsaWVudE1vZGVsKGl0ZW0/LnJlZmxlY3Rpb24pO1xuICB9XG59XG4iXX0=