import { __extends } from "tslib";
import { AddTagsToResourceMessage, TagListMessage } from "../models/models_0";
import { deserializeAws_queryAddTagsToResourceCommand, serializeAws_queryAddTagsToResourceCommand, } from "../protocols/Aws_query";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>A  tag is a key-value pair where the key and value are case-sensitive.
 *             You can use tags to categorize and track all your ElastiCache resources, with the exception of global replication group. When you add or remove tags on replication groups, those actions will be replicated to all nodes in the replication group.
 *           For more information, see <a href="http://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/IAM.ResourceLevelPermissions.html">Resource-level permissions</a>.</p>
 *         <p>
 *             For example, you can use cost-allocation tags to your ElastiCache resources,
 *             AWS generates a cost allocation report as a comma-separated value (CSV) file
 *             with your usage and costs aggregated by your tags.
 *             You can apply tags that represent business categories (such as cost centers, application names, or owners)
 *             to organize your costs across multiple services.</p>
 *             <p>For more information,
 *             see <a href="https://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/Tagging.html">Using Cost Allocation Tags in Amazon ElastiCache</a>
 *             in the <i>ElastiCache User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ElastiCacheClient, AddTagsToResourceCommand } from "@aws-sdk/client-elasticache"; // ES Modules import
 * // const { ElastiCacheClient, AddTagsToResourceCommand } = require("@aws-sdk/client-elasticache"); // CommonJS import
 * const client = new ElastiCacheClient(config);
 * const command = new AddTagsToResourceCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link AddTagsToResourceCommandInput} for command's `input` shape.
 * @see {@link AddTagsToResourceCommandOutput} for command's `response` shape.
 * @see {@link ElastiCacheClientResolvedConfig | config} for command's `input` shape.
 *
 */
var AddTagsToResourceCommand = /** @class */ (function (_super) {
    __extends(AddTagsToResourceCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function AddTagsToResourceCommand(input) {
        var _this = 
        // Start section: command_constructor
        _super.call(this) || this;
        _this.input = input;
        return _this;
        // End section: command_constructor
    }
    /**
     * @internal
     */
    AddTagsToResourceCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "ElastiCacheClient";
        var commandName = "AddTagsToResourceCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: AddTagsToResourceMessage.filterSensitiveLog,
            outputFilterSensitiveLog: TagListMessage.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    AddTagsToResourceCommand.prototype.serialize = function (input, context) {
        return serializeAws_queryAddTagsToResourceCommand(input, context);
    };
    AddTagsToResourceCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_queryAddTagsToResourceCommand(output, context);
    };
    return AddTagsToResourceCommand;
}($Command));
export { AddTagsToResourceCommand };
//# sourceMappingURL=AddTagsToResourceCommand.js.map