import { __decorate, __extends } from "tslib";
import { Component, RendererComponent } from "typedoc/dist/lib/output/components";
import { RendererEvent } from "typedoc/dist/lib/output/events";
var SdkClientRemoveNavigatorPlugin = /** @class */ (function (_super) {
    __extends(SdkClientRemoveNavigatorPlugin, _super);
    function SdkClientRemoveNavigatorPlugin() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SdkClientRemoveNavigatorPlugin.prototype.initialize = function () {
        var _a;
        this.navigationPlugin = this.owner.application.renderer.getComponent("navigation");
        this.listenTo(this.owner, (_a = {},
            _a[RendererEvent.BEGIN] = this.onRenderedBegin,
            _a));
    };
    SdkClientRemoveNavigatorPlugin.prototype.onRenderedBegin = function (event) {
        var navigationItem = this.navigationPlugin.navigation;
        if (!navigationItem) {
            return;
        }
        navigationItem.children = [];
    };
    SdkClientRemoveNavigatorPlugin = __decorate([
        Component({ name: "SdkClientRemoveNavigator" })
    ], SdkClientRemoveNavigatorPlugin);
    return SdkClientRemoveNavigatorPlugin;
}(RendererComponent));
export { SdkClientRemoveNavigatorPlugin };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2RrLWNsaWVudC1yZW1vdmUtbmF2aWdhdG9yLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL3Nkay1jbGllbnQtcmVtb3ZlLW5hdmlnYXRvci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxpQkFBaUIsRUFBRSxNQUFNLG9DQUFvQyxDQUFDO0FBQ2xGLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxnQ0FBZ0MsQ0FBQztBQUkvRDtJQUFvRCxrREFBaUI7SUFBckU7O0lBaUJBLENBQUM7SUFkQyxtREFBVSxHQUFWOztRQUNFLElBQUksQ0FBQyxnQkFBZ0IsR0FBUSxJQUFJLENBQUMsS0FBSyxDQUFDLFdBQVcsQ0FBQyxRQUFRLENBQUMsWUFBWSxDQUFDLFlBQVksQ0FBQyxDQUFDO1FBQ3hGLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEtBQUs7WUFDdEIsR0FBQyxhQUFhLENBQUMsS0FBSyxJQUFHLElBQUksQ0FBQyxlQUFlO2dCQUMzQyxDQUFDO0lBQ0wsQ0FBQztJQUVELHdEQUFlLEdBQWYsVUFBZ0IsS0FBb0I7UUFDbEMsSUFBTSxjQUFjLEdBQUcsSUFBSSxDQUFDLGdCQUFnQixDQUFDLFVBQVUsQ0FBQztRQUN4RCxJQUFJLENBQUMsY0FBYyxFQUFFO1lBQ25CLE9BQU87U0FDUjtRQUNELGNBQWMsQ0FBQyxRQUFRLEdBQUcsRUFBRSxDQUFDO0lBQy9CLENBQUM7SUFoQlUsOEJBQThCO1FBRDFDLFNBQVMsQ0FBQyxFQUFFLElBQUksRUFBRSwwQkFBMEIsRUFBRSxDQUFDO09BQ25DLDhCQUE4QixDQWlCMUM7SUFBRCxxQ0FBQztDQUFBLEFBakJELENBQW9ELGlCQUFpQixHQWlCcEU7U0FqQlksOEJBQThCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBSZW5kZXJlckNvbXBvbmVudCB9IGZyb20gXCJ0eXBlZG9jL2Rpc3QvbGliL291dHB1dC9jb21wb25lbnRzXCI7XG5pbXBvcnQgeyBSZW5kZXJlckV2ZW50IH0gZnJvbSBcInR5cGVkb2MvZGlzdC9saWIvb3V0cHV0L2V2ZW50c1wiO1xuaW1wb3J0IHsgTmF2aWdhdGlvblBsdWdpbiB9IGZyb20gXCJ0eXBlZG9jL2Rpc3QvbGliL291dHB1dC9wbHVnaW5zXCI7XG5cbkBDb21wb25lbnQoeyBuYW1lOiBcIlNka0NsaWVudFJlbW92ZU5hdmlnYXRvclwiIH0pXG5leHBvcnQgY2xhc3MgU2RrQ2xpZW50UmVtb3ZlTmF2aWdhdG9yUGx1Z2luIGV4dGVuZHMgUmVuZGVyZXJDb21wb25lbnQge1xuICBwcml2YXRlIG5hdmlnYXRpb25QbHVnaW46IE5hdmlnYXRpb25QbHVnaW47XG5cbiAgaW5pdGlhbGl6ZSgpIHtcbiAgICB0aGlzLm5hdmlnYXRpb25QbHVnaW4gPSA8YW55PnRoaXMub3duZXIuYXBwbGljYXRpb24ucmVuZGVyZXIuZ2V0Q29tcG9uZW50KFwibmF2aWdhdGlvblwiKTtcbiAgICB0aGlzLmxpc3RlblRvKHRoaXMub3duZXIsIHtcbiAgICAgIFtSZW5kZXJlckV2ZW50LkJFR0lOXTogdGhpcy5vblJlbmRlcmVkQmVnaW4sXG4gICAgfSk7XG4gIH1cblxuICBvblJlbmRlcmVkQmVnaW4oZXZlbnQ6IFJlbmRlcmVyRXZlbnQpIHtcbiAgICBjb25zdCBuYXZpZ2F0aW9uSXRlbSA9IHRoaXMubmF2aWdhdGlvblBsdWdpbi5uYXZpZ2F0aW9uO1xuICAgIGlmICghbmF2aWdhdGlvbkl0ZW0pIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgbmF2aWdhdGlvbkl0ZW0uY2hpbGRyZW4gPSBbXTtcbiAgfVxufVxuIl19