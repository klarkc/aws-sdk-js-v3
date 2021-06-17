"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SdkClientCommentUpdatePlugin = void 0;
const tslib_1 = require("tslib");
const converter_1 = require("typedoc/dist/lib/converter");
const components_1 = require("typedoc/dist/lib/converter/components");
const comment_1 = require("typedoc/dist/lib/converter/factories/comment");
/**
 * Best effort make the service docs markdown looks better.
 */
let SdkClientCommentUpdatePlugin = class SdkClientCommentUpdatePlugin extends components_1.ConverterComponent {
    initialize() {
        this.listenTo(this.owner, {
            [converter_1.Converter.EVENT_CREATE_DECLARATION]: this.onDeclaration,
        });
    }
    onDeclaration(context, reflection, node) {
        if (!node)
            return;
        const rawComment = comment_1.getRawComment(node);
        if (!rawComment)
            return;
        const comment = comment_1.parseComment(this.cleanEmptyCommentLines(rawComment));
        reflection.comment = comment;
    }
    /**
     * Update documentation block to exclude empty lines.
     */
    cleanEmptyCommentLines(comment) {
        return comment.startsWith("/*") && comment.endsWith("*/")
            ? comment
                .split("\n")
                .filter((line) => line.substr(line.indexOf("*") + 1).trim().length !== 0)
                .join("\n")
            : comment;
    }
};
SdkClientCommentUpdatePlugin = tslib_1.__decorate([
    components_1.Component({ name: "SdkClientCommentUpdatePlugin" })
], SdkClientCommentUpdatePlugin);
exports.SdkClientCommentUpdatePlugin = SdkClientCommentUpdatePlugin;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2RrLWNsaWVudC1jb21tZW50LXVwZGF0ZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zZGstY2xpZW50LWNvbW1lbnQtdXBkYXRlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSwwREFBdUQ7QUFDdkQsc0VBQXNGO0FBRXRGLDBFQUEyRjtBQUkzRjs7R0FFRztBQUVILElBQWEsNEJBQTRCLEdBQXpDLE1BQWEsNEJBQTZCLFNBQVEsK0JBQWtCO0lBQ2xFLFVBQVU7UUFDUixJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUU7WUFDeEIsQ0FBQyxxQkFBUyxDQUFDLHdCQUF3QixDQUFDLEVBQUUsSUFBSSxDQUFDLGFBQWE7U0FDekQsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVPLGFBQWEsQ0FBQyxPQUFnQixFQUFFLFVBQXNCLEVBQUUsSUFBYztRQUM1RSxJQUFJLENBQUMsSUFBSTtZQUFFLE9BQU87UUFDbEIsTUFBTSxVQUFVLEdBQUcsdUJBQWEsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUN2QyxJQUFJLENBQUMsVUFBVTtZQUFFLE9BQU87UUFDeEIsTUFBTSxPQUFPLEdBQUcsc0JBQVksQ0FBQyxJQUFJLENBQUMsc0JBQXNCLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQztRQUN0RSxVQUFVLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQztJQUMvQixDQUFDO0lBRUQ7O09BRUc7SUFDSyxzQkFBc0IsQ0FBQyxPQUFlO1FBQzVDLE9BQU8sT0FBTyxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsSUFBSSxPQUFPLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQztZQUN2RCxDQUFDLENBQUMsT0FBTztpQkFDSixLQUFLLENBQUMsSUFBSSxDQUFDO2lCQUNYLE1BQU0sQ0FBQyxDQUFDLElBQUksRUFBRSxFQUFFLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFDLE1BQU0sS0FBSyxDQUFDLENBQUM7aUJBQ3hFLElBQUksQ0FBQyxJQUFJLENBQUM7WUFDZixDQUFDLENBQUMsT0FBTyxDQUFDO0lBQ2QsQ0FBQztDQUNGLENBQUE7QUExQlksNEJBQTRCO0lBRHhDLHNCQUFTLENBQUMsRUFBRSxJQUFJLEVBQUUsOEJBQThCLEVBQUUsQ0FBQztHQUN2Qyw0QkFBNEIsQ0EwQnhDO0FBMUJZLG9FQUE0QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbnZlcnRlciB9IGZyb20gXCJ0eXBlZG9jL2Rpc3QvbGliL2NvbnZlcnRlclwiO1xuaW1wb3J0IHsgQ29tcG9uZW50LCBDb252ZXJ0ZXJDb21wb25lbnQgfSBmcm9tIFwidHlwZWRvYy9kaXN0L2xpYi9jb252ZXJ0ZXIvY29tcG9uZW50c1wiO1xuaW1wb3J0IHsgQ29udGV4dCB9IGZyb20gXCJ0eXBlZG9jL2Rpc3QvbGliL2NvbnZlcnRlci9jb250ZXh0XCI7XG5pbXBvcnQgeyBnZXRSYXdDb21tZW50LCBwYXJzZUNvbW1lbnQgfSBmcm9tIFwidHlwZWRvYy9kaXN0L2xpYi9jb252ZXJ0ZXIvZmFjdG9yaWVzL2NvbW1lbnRcIjtcbmltcG9ydCB7IFJlZmxlY3Rpb24gfSBmcm9tIFwidHlwZWRvYy9kaXN0L2xpYi9tb2RlbHMvcmVmbGVjdGlvbnNcIjtcbmltcG9ydCB0cyBmcm9tIFwidHlwZXNjcmlwdFwiO1xuXG4vKipcbiAqIEJlc3QgZWZmb3J0IG1ha2UgdGhlIHNlcnZpY2UgZG9jcyBtYXJrZG93biBsb29rcyBiZXR0ZXIuXG4gKi9cbkBDb21wb25lbnQoeyBuYW1lOiBcIlNka0NsaWVudENvbW1lbnRVcGRhdGVQbHVnaW5cIiB9KVxuZXhwb3J0IGNsYXNzIFNka0NsaWVudENvbW1lbnRVcGRhdGVQbHVnaW4gZXh0ZW5kcyBDb252ZXJ0ZXJDb21wb25lbnQge1xuICBpbml0aWFsaXplKCkge1xuICAgIHRoaXMubGlzdGVuVG8odGhpcy5vd25lciwge1xuICAgICAgW0NvbnZlcnRlci5FVkVOVF9DUkVBVEVfREVDTEFSQVRJT05dOiB0aGlzLm9uRGVjbGFyYXRpb24sXG4gICAgfSk7XG4gIH1cblxuICBwcml2YXRlIG9uRGVjbGFyYXRpb24oY29udGV4dDogQ29udGV4dCwgcmVmbGVjdGlvbjogUmVmbGVjdGlvbiwgbm9kZT86IHRzLk5vZGUpIHtcbiAgICBpZiAoIW5vZGUpIHJldHVybjtcbiAgICBjb25zdCByYXdDb21tZW50ID0gZ2V0UmF3Q29tbWVudChub2RlKTtcbiAgICBpZiAoIXJhd0NvbW1lbnQpIHJldHVybjtcbiAgICBjb25zdCBjb21tZW50ID0gcGFyc2VDb21tZW50KHRoaXMuY2xlYW5FbXB0eUNvbW1lbnRMaW5lcyhyYXdDb21tZW50KSk7XG4gICAgcmVmbGVjdGlvbi5jb21tZW50ID0gY29tbWVudDtcbiAgfVxuXG4gIC8qKlxuICAgKiBVcGRhdGUgZG9jdW1lbnRhdGlvbiBibG9jayB0byBleGNsdWRlIGVtcHR5IGxpbmVzLlxuICAgKi9cbiAgcHJpdmF0ZSBjbGVhbkVtcHR5Q29tbWVudExpbmVzKGNvbW1lbnQ6IHN0cmluZyk6IHN0cmluZyB7XG4gICAgcmV0dXJuIGNvbW1lbnQuc3RhcnRzV2l0aChcIi8qXCIpICYmIGNvbW1lbnQuZW5kc1dpdGgoXCIqL1wiKVxuICAgICAgPyBjb21tZW50XG4gICAgICAgICAgLnNwbGl0KFwiXFxuXCIpXG4gICAgICAgICAgLmZpbHRlcigobGluZSkgPT4gbGluZS5zdWJzdHIobGluZS5pbmRleE9mKFwiKlwiKSArIDEpLnRyaW0oKS5sZW5ndGggIT09IDApXG4gICAgICAgICAgLmpvaW4oXCJcXG5cIilcbiAgICAgIDogY29tbWVudDtcbiAgfVxufVxuIl19