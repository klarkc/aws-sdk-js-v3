import { __extends } from "tslib";
import { TagResourceRequest, TagResourceResponse } from "../models/models_1";
import { deserializeAws_restJson1TagResourceCommand, serializeAws_restJson1TagResourceCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Assigns one or more tags (key-value pairs) to the specified QuickSight resource. </p>
 * 		       <p>Tags can help you organize and categorize your resources. You can also use them to
 * 			scope user permissions, by granting a user permission to access or change only resources
 * 			with certain tag values. You can use the <code>TagResource</code> operation with a
 * 			resource that already has tags. If you specify a new tag key for the resource, this tag
 * 			is appended to the list of tags associated with the resource. If you specify a tag key
 * 			that is already associated with the resource, the new tag value that you specify
 * 			replaces the previous value for that tag.</p>
 * 		       <p>You can associate as many as 50 tags with a resource. QuickSight supports tagging on data
 * 			set, data source, dashboard, and template. </p>
 * 		       <p>Tagging for QuickSight works in a similar way to tagging for other AWS services, except for
 * 			the following:</p>
 * 		       <ul>
 *             <li>
 *                <p>You can't use tags to track AWS costs for QuickSight. This restriction is because QuickSight
 * 					costs are based on users and SPICE capacity, which aren't taggable
 * 					resources.</p>
 *             </li>
 *             <li>
 *                <p>QuickSight doesn't currently support the Tag Editor for AWS Resource Groups.</p>
 *             </li>
 *          </ul>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { QuickSightClient, TagResourceCommand } from "@aws-sdk/client-quicksight"; // ES Modules import
 * // const { QuickSightClient, TagResourceCommand } = require("@aws-sdk/client-quicksight"); // CommonJS import
 * const client = new QuickSightClient(config);
 * const command = new TagResourceCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link TagResourceCommandInput} for command's `input` shape.
 * @see {@link TagResourceCommandOutput} for command's `response` shape.
 * @see {@link QuickSightClientResolvedConfig | config} for command's `input` shape.
 *
 */
var TagResourceCommand = /** @class */ (function (_super) {
    __extends(TagResourceCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function TagResourceCommand(input) {
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
    TagResourceCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "QuickSightClient";
        var commandName = "TagResourceCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: TagResourceRequest.filterSensitiveLog,
            outputFilterSensitiveLog: TagResourceResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    TagResourceCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1TagResourceCommand(input, context);
    };
    TagResourceCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1TagResourceCommand(output, context);
    };
    return TagResourceCommand;
}($Command));
export { TagResourceCommand };
//# sourceMappingURL=TagResourceCommand.js.map