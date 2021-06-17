import { __extends } from "tslib";
import { UntagResourcesInput, UntagResourcesOutput } from "../models/models_0";
import { deserializeAws_json1_1UntagResourcesCommand, serializeAws_json1_1UntagResourcesCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Removes the specified tags from the specified resources. When you specify a tag key,
 *             the action removes both that key and its associated value. The operation succeeds even
 *             if you attempt to remove tags from a resource that were already removed. Note the
 *             following:</p>
 *         <ul>
 *             <li>
 *                 <p>To remove tags from a resource, you need the necessary permissions for the
 *                     service that the resource belongs to as well as permissions for removing tags.
 *                     For more information, see the documentation for the service whose resource you
 *                     want to untag.</p>
 *             </li>
 *             <li>
 *                 <p>You can only tag resources that are located in the specified AWS Region for
 *                     the calling AWS account.</p>
 *             </li>
 *          </ul>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ResourceGroupsTaggingAPIClient, UntagResourcesCommand } from "@aws-sdk/client-resource-groups-tagging-api"; // ES Modules import
 * // const { ResourceGroupsTaggingAPIClient, UntagResourcesCommand } = require("@aws-sdk/client-resource-groups-tagging-api"); // CommonJS import
 * const client = new ResourceGroupsTaggingAPIClient(config);
 * const command = new UntagResourcesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UntagResourcesCommandInput} for command's `input` shape.
 * @see {@link UntagResourcesCommandOutput} for command's `response` shape.
 * @see {@link ResourceGroupsTaggingAPIClientResolvedConfig | config} for command's `input` shape.
 *
 */
var UntagResourcesCommand = /** @class */ (function (_super) {
    __extends(UntagResourcesCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function UntagResourcesCommand(input) {
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
    UntagResourcesCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "ResourceGroupsTaggingAPIClient";
        var commandName = "UntagResourcesCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: UntagResourcesInput.filterSensitiveLog,
            outputFilterSensitiveLog: UntagResourcesOutput.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    UntagResourcesCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1UntagResourcesCommand(input, context);
    };
    UntagResourcesCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1UntagResourcesCommand(output, context);
    };
    return UntagResourcesCommand;
}($Command));
export { UntagResourcesCommand };
//# sourceMappingURL=UntagResourcesCommand.js.map