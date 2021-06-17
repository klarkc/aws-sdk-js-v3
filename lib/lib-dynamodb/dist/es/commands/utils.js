import { __assign, __read } from "tslib";
import { marshall, unmarshall } from "@aws-sdk/util-dynamodb";
var processObj = function (obj, processFunc, children) {
    if (obj) {
        if (!children || (Array.isArray(children) && children.length === 0)) {
            // Leaf of KeyNode, process the object.
            return processFunc(obj);
        }
        else {
            // Not leaf node, process the children.
            if (Array.isArray(children)) {
                // Specific keys of children need to be processed.
                return processKeysInObj(obj, processFunc, children);
            }
            else {
                // All children require processing.
                return processAllKeysInObj(obj, processFunc, children.children);
            }
        }
    }
    return undefined;
};
var processKeyInObj = function (obj, processFunc, children) {
    if (Array.isArray(obj)) {
        return obj.map(function (item) { return processObj(item, processFunc, children); });
    }
    return processObj(obj, processFunc, children);
};
var processKeysInObj = function (obj, processFunc, keyNodes) {
    return keyNodes.reduce(function (acc, _a) {
        var _b;
        var key = _a.key, children = _a.children;
        return (__assign(__assign({}, acc), (_b = {}, _b[key] = processKeyInObj(acc[key], processFunc, children), _b)));
    }, obj);
};
var processAllKeysInObj = function (obj, processFunc, children) {
    return Object.entries(obj).reduce(function (acc, _a) {
        var _b;
        var _c = __read(_a, 2), key = _c[0], value = _c[1];
        return (__assign(__assign({}, acc), (_b = {}, _b[key] = processKeyInObj(value, processFunc, children), _b)));
    }, {});
};
export var marshallInput = function (obj, keyNodes, options) {
    var marshallFunc = function (toMarshall) { return marshall(toMarshall, options); };
    return processKeysInObj(obj, marshallFunc, keyNodes);
};
export var unmarshallOutput = function (obj, keyNodes, options) {
    var unmarshallFunc = function (toMarshall) { return unmarshall(toMarshall, options); };
    return processKeysInObj(obj, unmarshallFunc, keyNodes);
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXRpbHMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvY29tbWFuZHMvdXRpbHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQW1CLFVBQVUsRUFBcUIsTUFBTSx3QkFBd0IsQ0FBQztBQVdsRyxJQUFNLFVBQVUsR0FBRyxVQUFDLEdBQVEsRUFBRSxXQUFxQixFQUFFLFFBQStCO0lBQ2xGLElBQUksR0FBRyxFQUFFO1FBQ1AsSUFBSSxDQUFDLFFBQVEsSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLElBQUksUUFBUSxDQUFDLE1BQU0sS0FBSyxDQUFDLENBQUMsRUFBRTtZQUNuRSx1Q0FBdUM7WUFDdkMsT0FBTyxXQUFXLENBQUMsR0FBRyxDQUFDLENBQUM7U0FDekI7YUFBTTtZQUNMLHVDQUF1QztZQUN2QyxJQUFJLEtBQUssQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLEVBQUU7Z0JBQzNCLGtEQUFrRDtnQkFDbEQsT0FBTyxnQkFBZ0IsQ0FBQyxHQUFHLEVBQUUsV0FBVyxFQUFFLFFBQVEsQ0FBQyxDQUFDO2FBQ3JEO2lCQUFNO2dCQUNMLG1DQUFtQztnQkFDbkMsT0FBTyxtQkFBbUIsQ0FBQyxHQUFHLEVBQUUsV0FBVyxFQUFFLFFBQVEsQ0FBQyxRQUFRLENBQUMsQ0FBQzthQUNqRTtTQUNGO0tBQ0Y7SUFDRCxPQUFPLFNBQVMsQ0FBQztBQUNuQixDQUFDLENBQUM7QUFFRixJQUFNLGVBQWUsR0FBRyxVQUFDLEdBQVEsRUFBRSxXQUFxQixFQUFFLFFBQStCO0lBQ3ZGLElBQUksS0FBSyxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsRUFBRTtRQUN0QixPQUFPLEdBQUcsQ0FBQyxHQUFHLENBQUMsVUFBQyxJQUFTLElBQUssT0FBQSxVQUFVLENBQUMsSUFBSSxFQUFFLFdBQVcsRUFBRSxRQUFRLENBQUMsRUFBdkMsQ0FBdUMsQ0FBQyxDQUFDO0tBQ3hFO0lBQ0QsT0FBTyxVQUFVLENBQUMsR0FBRyxFQUFFLFdBQVcsRUFBRSxRQUFRLENBQUMsQ0FBQztBQUNoRCxDQUFDLENBQUM7QUFFRixJQUFNLGdCQUFnQixHQUFHLFVBQUMsR0FBUSxFQUFFLFdBQXFCLEVBQUUsUUFBbUI7SUFDNUUsT0FBQSxRQUFRLENBQUMsTUFBTSxDQUNiLFVBQUMsR0FBRyxFQUFFLEVBQWlCOztZQUFmLEdBQUcsU0FBQSxFQUFFLFFBQVEsY0FBQTtRQUFPLE9BQUEsdUJBQ3ZCLEdBQUcsZ0JBQ0wsR0FBRyxJQUFHLGVBQWUsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLEVBQUUsV0FBVyxFQUFFLFFBQVEsQ0FBQyxPQUN2RDtJQUgwQixDQUcxQixFQUNGLEdBQUcsQ0FDSjtBQU5ELENBTUMsQ0FBQztBQUVKLElBQU0sbUJBQW1CLEdBQUcsVUFBQyxHQUFRLEVBQUUsV0FBcUIsRUFBRSxRQUErQjtJQUMzRixPQUFBLE1BQU0sQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUMsTUFBTSxDQUN4QixVQUFDLEdBQUcsRUFBRSxFQUFZOztZQUFaLEtBQUEsYUFBWSxFQUFYLEdBQUcsUUFBQSxFQUFFLEtBQUssUUFBQTtRQUFNLE9BQUEsdUJBQ2xCLEdBQUcsZ0JBQ0wsR0FBRyxJQUFHLGVBQWUsQ0FBQyxLQUFLLEVBQUUsV0FBVyxFQUFFLFFBQVEsQ0FBQyxPQUNwRDtJQUhxQixDQUdyQixFQUNGLEVBQUUsQ0FDSDtBQU5ELENBTUMsQ0FBQztBQUVKLE1BQU0sQ0FBQyxJQUFNLGFBQWEsR0FBRyxVQUFDLEdBQVEsRUFBRSxRQUFtQixFQUFFLE9BQXlCO0lBQ3BGLElBQU0sWUFBWSxHQUFHLFVBQUMsVUFBZSxJQUFLLE9BQUEsUUFBUSxDQUFDLFVBQVUsRUFBRSxPQUFPLENBQUMsRUFBN0IsQ0FBNkIsQ0FBQztJQUN4RSxPQUFPLGdCQUFnQixDQUFDLEdBQUcsRUFBRSxZQUFZLEVBQUUsUUFBUSxDQUFDLENBQUM7QUFDdkQsQ0FBQyxDQUFDO0FBRUYsTUFBTSxDQUFDLElBQU0sZ0JBQWdCLEdBQUcsVUFBQyxHQUFRLEVBQUUsUUFBbUIsRUFBRSxPQUEyQjtJQUN6RixJQUFNLGNBQWMsR0FBRyxVQUFDLFVBQWUsSUFBSyxPQUFBLFVBQVUsQ0FBQyxVQUFVLEVBQUUsT0FBTyxDQUFDLEVBQS9CLENBQStCLENBQUM7SUFDNUUsT0FBTyxnQkFBZ0IsQ0FBQyxHQUFHLEVBQUUsY0FBYyxFQUFFLFFBQVEsQ0FBQyxDQUFDO0FBQ3pELENBQUMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IG1hcnNoYWxsLCBtYXJzaGFsbE9wdGlvbnMsIHVubWFyc2hhbGwsIHVubWFyc2hhbGxPcHRpb25zIH0gZnJvbSBcIkBhd3Mtc2RrL3V0aWwtZHluYW1vZGJcIjtcblxuZXhwb3J0IHR5cGUgS2V5Tm9kZSA9IHtcbiAga2V5OiBzdHJpbmc7XG4gIGNoaWxkcmVuPzogS2V5Tm9kZVtdIHwgQWxsTm9kZXM7XG59O1xuXG5leHBvcnQgdHlwZSBBbGxOb2RlcyA9IHtcbiAgY2hpbGRyZW4/OiBLZXlOb2RlW10gfCBBbGxOb2Rlcztcbn07XG5cbmNvbnN0IHByb2Nlc3NPYmogPSAob2JqOiBhbnksIHByb2Nlc3NGdW5jOiBGdW5jdGlvbiwgY2hpbGRyZW4/OiBLZXlOb2RlW10gfCBBbGxOb2Rlcyk6IGFueSA9PiB7XG4gIGlmIChvYmopIHtcbiAgICBpZiAoIWNoaWxkcmVuIHx8IChBcnJheS5pc0FycmF5KGNoaWxkcmVuKSAmJiBjaGlsZHJlbi5sZW5ndGggPT09IDApKSB7XG4gICAgICAvLyBMZWFmIG9mIEtleU5vZGUsIHByb2Nlc3MgdGhlIG9iamVjdC5cbiAgICAgIHJldHVybiBwcm9jZXNzRnVuYyhvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICAvLyBOb3QgbGVhZiBub2RlLCBwcm9jZXNzIHRoZSBjaGlsZHJlbi5cbiAgICAgIGlmIChBcnJheS5pc0FycmF5KGNoaWxkcmVuKSkge1xuICAgICAgICAvLyBTcGVjaWZpYyBrZXlzIG9mIGNoaWxkcmVuIG5lZWQgdG8gYmUgcHJvY2Vzc2VkLlxuICAgICAgICByZXR1cm4gcHJvY2Vzc0tleXNJbk9iaihvYmosIHByb2Nlc3NGdW5jLCBjaGlsZHJlbik7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBBbGwgY2hpbGRyZW4gcmVxdWlyZSBwcm9jZXNzaW5nLlxuICAgICAgICByZXR1cm4gcHJvY2Vzc0FsbEtleXNJbk9iaihvYmosIHByb2Nlc3NGdW5jLCBjaGlsZHJlbi5jaGlsZHJlbik7XG4gICAgICB9XG4gICAgfVxuICB9XG4gIHJldHVybiB1bmRlZmluZWQ7XG59O1xuXG5jb25zdCBwcm9jZXNzS2V5SW5PYmogPSAob2JqOiBhbnksIHByb2Nlc3NGdW5jOiBGdW5jdGlvbiwgY2hpbGRyZW4/OiBLZXlOb2RlW10gfCBBbGxOb2Rlcyk6IGFueSA9PiB7XG4gIGlmIChBcnJheS5pc0FycmF5KG9iaikpIHtcbiAgICByZXR1cm4gb2JqLm1hcCgoaXRlbTogYW55KSA9PiBwcm9jZXNzT2JqKGl0ZW0sIHByb2Nlc3NGdW5jLCBjaGlsZHJlbikpO1xuICB9XG4gIHJldHVybiBwcm9jZXNzT2JqKG9iaiwgcHJvY2Vzc0Z1bmMsIGNoaWxkcmVuKTtcbn07XG5cbmNvbnN0IHByb2Nlc3NLZXlzSW5PYmogPSAob2JqOiBhbnksIHByb2Nlc3NGdW5jOiBGdW5jdGlvbiwga2V5Tm9kZXM6IEtleU5vZGVbXSkgPT5cbiAga2V5Tm9kZXMucmVkdWNlKFxuICAgIChhY2MsIHsga2V5LCBjaGlsZHJlbiB9KSA9PiAoe1xuICAgICAgLi4uYWNjLFxuICAgICAgW2tleV06IHByb2Nlc3NLZXlJbk9iaihhY2Nba2V5XSwgcHJvY2Vzc0Z1bmMsIGNoaWxkcmVuKSxcbiAgICB9KSxcbiAgICBvYmpcbiAgKTtcblxuY29uc3QgcHJvY2Vzc0FsbEtleXNJbk9iaiA9IChvYmo6IGFueSwgcHJvY2Vzc0Z1bmM6IEZ1bmN0aW9uLCBjaGlsZHJlbj86IEtleU5vZGVbXSB8IEFsbE5vZGVzKTogYW55ID0+XG4gIE9iamVjdC5lbnRyaWVzKG9iaikucmVkdWNlKFxuICAgIChhY2MsIFtrZXksIHZhbHVlXSkgPT4gKHtcbiAgICAgIC4uLmFjYyxcbiAgICAgIFtrZXldOiBwcm9jZXNzS2V5SW5PYmoodmFsdWUsIHByb2Nlc3NGdW5jLCBjaGlsZHJlbiksXG4gICAgfSksXG4gICAge31cbiAgKTtcblxuZXhwb3J0IGNvbnN0IG1hcnNoYWxsSW5wdXQgPSAob2JqOiBhbnksIGtleU5vZGVzOiBLZXlOb2RlW10sIG9wdGlvbnM/OiBtYXJzaGFsbE9wdGlvbnMpID0+IHtcbiAgY29uc3QgbWFyc2hhbGxGdW5jID0gKHRvTWFyc2hhbGw6IGFueSkgPT4gbWFyc2hhbGwodG9NYXJzaGFsbCwgb3B0aW9ucyk7XG4gIHJldHVybiBwcm9jZXNzS2V5c0luT2JqKG9iaiwgbWFyc2hhbGxGdW5jLCBrZXlOb2Rlcyk7XG59O1xuXG5leHBvcnQgY29uc3QgdW5tYXJzaGFsbE91dHB1dCA9IChvYmo6IGFueSwga2V5Tm9kZXM6IEtleU5vZGVbXSwgb3B0aW9ucz86IHVubWFyc2hhbGxPcHRpb25zKSA9PiB7XG4gIGNvbnN0IHVubWFyc2hhbGxGdW5jID0gKHRvTWFyc2hhbGw6IGFueSkgPT4gdW5tYXJzaGFsbCh0b01hcnNoYWxsLCBvcHRpb25zKTtcbiAgcmV0dXJuIHByb2Nlc3NLZXlzSW5PYmoob2JqLCB1bm1hcnNoYWxsRnVuYywga2V5Tm9kZXMpO1xufTtcbiJdfQ==