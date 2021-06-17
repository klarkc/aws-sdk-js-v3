import { __decorate, __extends } from "tslib";
import { Converter } from "typedoc/dist/lib/converter";
import { Component, ConverterComponent } from "typedoc/dist/lib/converter/components";
import { getRawComment, parseComment } from "typedoc/dist/lib/converter/factories/comment";
/**
 * Best effort make the service docs markdown looks better.
 */
var SdkClientCommentUpdatePlugin = /** @class */ (function (_super) {
    __extends(SdkClientCommentUpdatePlugin, _super);
    function SdkClientCommentUpdatePlugin() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SdkClientCommentUpdatePlugin.prototype.initialize = function () {
        var _a;
        this.listenTo(this.owner, (_a = {},
            _a[Converter.EVENT_CREATE_DECLARATION] = this.onDeclaration,
            _a));
    };
    SdkClientCommentUpdatePlugin.prototype.onDeclaration = function (context, reflection, node) {
        if (!node)
            return;
        var rawComment = getRawComment(node);
        if (!rawComment)
            return;
        var comment = parseComment(this.cleanEmptyCommentLines(rawComment));
        reflection.comment = comment;
    };
    /**
     * Update documentation block to exclude empty lines.
     */
    SdkClientCommentUpdatePlugin.prototype.cleanEmptyCommentLines = function (comment) {
        return comment.startsWith("/*") && comment.endsWith("*/")
            ? comment
                .split("\n")
                .filter(function (line) { return line.substr(line.indexOf("*") + 1).trim().length !== 0; })
                .join("\n")
            : comment;
    };
    SdkClientCommentUpdatePlugin = __decorate([
        Component({ name: "SdkClientCommentUpdatePlugin" })
    ], SdkClientCommentUpdatePlugin);
    return SdkClientCommentUpdatePlugin;
}(ConverterComponent));
export { SdkClientCommentUpdatePlugin };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2RrLWNsaWVudC1jb21tZW50LXVwZGF0ZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zZGstY2xpZW50LWNvbW1lbnQtdXBkYXRlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sNEJBQTRCLENBQUM7QUFDdkQsT0FBTyxFQUFFLFNBQVMsRUFBRSxrQkFBa0IsRUFBRSxNQUFNLHVDQUF1QyxDQUFDO0FBRXRGLE9BQU8sRUFBRSxhQUFhLEVBQUUsWUFBWSxFQUFFLE1BQU0sOENBQThDLENBQUM7QUFJM0Y7O0dBRUc7QUFFSDtJQUFrRCxnREFBa0I7SUFBcEU7O0lBMEJBLENBQUM7SUF6QkMsaURBQVUsR0FBVjs7UUFDRSxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxLQUFLO1lBQ3RCLEdBQUMsU0FBUyxDQUFDLHdCQUF3QixJQUFHLElBQUksQ0FBQyxhQUFhO2dCQUN4RCxDQUFDO0lBQ0wsQ0FBQztJQUVPLG9EQUFhLEdBQXJCLFVBQXNCLE9BQWdCLEVBQUUsVUFBc0IsRUFBRSxJQUFjO1FBQzVFLElBQUksQ0FBQyxJQUFJO1lBQUUsT0FBTztRQUNsQixJQUFNLFVBQVUsR0FBRyxhQUFhLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDdkMsSUFBSSxDQUFDLFVBQVU7WUFBRSxPQUFPO1FBQ3hCLElBQU0sT0FBTyxHQUFHLFlBQVksQ0FBQyxJQUFJLENBQUMsc0JBQXNCLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQztRQUN0RSxVQUFVLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQztJQUMvQixDQUFDO0lBRUQ7O09BRUc7SUFDSyw2REFBc0IsR0FBOUIsVUFBK0IsT0FBZTtRQUM1QyxPQUFPLE9BQU8sQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLElBQUksT0FBTyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUM7WUFDdkQsQ0FBQyxDQUFDLE9BQU87aUJBQ0osS0FBSyxDQUFDLElBQUksQ0FBQztpQkFDWCxNQUFNLENBQUMsVUFBQyxJQUFJLElBQUssT0FBQSxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUMsTUFBTSxLQUFLLENBQUMsRUFBdEQsQ0FBc0QsQ0FBQztpQkFDeEUsSUFBSSxDQUFDLElBQUksQ0FBQztZQUNmLENBQUMsQ0FBQyxPQUFPLENBQUM7SUFDZCxDQUFDO0lBekJVLDRCQUE0QjtRQUR4QyxTQUFTLENBQUMsRUFBRSxJQUFJLEVBQUUsOEJBQThCLEVBQUUsQ0FBQztPQUN2Qyw0QkFBNEIsQ0EwQnhDO0lBQUQsbUNBQUM7Q0FBQSxBQTFCRCxDQUFrRCxrQkFBa0IsR0EwQm5FO1NBMUJZLDRCQUE0QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbnZlcnRlciB9IGZyb20gXCJ0eXBlZG9jL2Rpc3QvbGliL2NvbnZlcnRlclwiO1xuaW1wb3J0IHsgQ29tcG9uZW50LCBDb252ZXJ0ZXJDb21wb25lbnQgfSBmcm9tIFwidHlwZWRvYy9kaXN0L2xpYi9jb252ZXJ0ZXIvY29tcG9uZW50c1wiO1xuaW1wb3J0IHsgQ29udGV4dCB9IGZyb20gXCJ0eXBlZG9jL2Rpc3QvbGliL2NvbnZlcnRlci9jb250ZXh0XCI7XG5pbXBvcnQgeyBnZXRSYXdDb21tZW50LCBwYXJzZUNvbW1lbnQgfSBmcm9tIFwidHlwZWRvYy9kaXN0L2xpYi9jb252ZXJ0ZXIvZmFjdG9yaWVzL2NvbW1lbnRcIjtcbmltcG9ydCB7IFJlZmxlY3Rpb24gfSBmcm9tIFwidHlwZWRvYy9kaXN0L2xpYi9tb2RlbHMvcmVmbGVjdGlvbnNcIjtcbmltcG9ydCB0cyBmcm9tIFwidHlwZXNjcmlwdFwiO1xuXG4vKipcbiAqIEJlc3QgZWZmb3J0IG1ha2UgdGhlIHNlcnZpY2UgZG9jcyBtYXJrZG93biBsb29rcyBiZXR0ZXIuXG4gKi9cbkBDb21wb25lbnQoeyBuYW1lOiBcIlNka0NsaWVudENvbW1lbnRVcGRhdGVQbHVnaW5cIiB9KVxuZXhwb3J0IGNsYXNzIFNka0NsaWVudENvbW1lbnRVcGRhdGVQbHVnaW4gZXh0ZW5kcyBDb252ZXJ0ZXJDb21wb25lbnQge1xuICBpbml0aWFsaXplKCkge1xuICAgIHRoaXMubGlzdGVuVG8odGhpcy5vd25lciwge1xuICAgICAgW0NvbnZlcnRlci5FVkVOVF9DUkVBVEVfREVDTEFSQVRJT05dOiB0aGlzLm9uRGVjbGFyYXRpb24sXG4gICAgfSk7XG4gIH1cblxuICBwcml2YXRlIG9uRGVjbGFyYXRpb24oY29udGV4dDogQ29udGV4dCwgcmVmbGVjdGlvbjogUmVmbGVjdGlvbiwgbm9kZT86IHRzLk5vZGUpIHtcbiAgICBpZiAoIW5vZGUpIHJldHVybjtcbiAgICBjb25zdCByYXdDb21tZW50ID0gZ2V0UmF3Q29tbWVudChub2RlKTtcbiAgICBpZiAoIXJhd0NvbW1lbnQpIHJldHVybjtcbiAgICBjb25zdCBjb21tZW50ID0gcGFyc2VDb21tZW50KHRoaXMuY2xlYW5FbXB0eUNvbW1lbnRMaW5lcyhyYXdDb21tZW50KSk7XG4gICAgcmVmbGVjdGlvbi5jb21tZW50ID0gY29tbWVudDtcbiAgfVxuXG4gIC8qKlxuICAgKiBVcGRhdGUgZG9jdW1lbnRhdGlvbiBibG9jayB0byBleGNsdWRlIGVtcHR5IGxpbmVzLlxuICAgKi9cbiAgcHJpdmF0ZSBjbGVhbkVtcHR5Q29tbWVudExpbmVzKGNvbW1lbnQ6IHN0cmluZyk6IHN0cmluZyB7XG4gICAgcmV0dXJuIGNvbW1lbnQuc3RhcnRzV2l0aChcIi8qXCIpICYmIGNvbW1lbnQuZW5kc1dpdGgoXCIqL1wiKVxuICAgICAgPyBjb21tZW50XG4gICAgICAgICAgLnNwbGl0KFwiXFxuXCIpXG4gICAgICAgICAgLmZpbHRlcigobGluZSkgPT4gbGluZS5zdWJzdHIobGluZS5pbmRleE9mKFwiKlwiKSArIDEpLnRyaW0oKS5sZW5ndGggIT09IDApXG4gICAgICAgICAgLmpvaW4oXCJcXG5cIilcbiAgICAgIDogY29tbWVudDtcbiAgfVxufVxuIl19