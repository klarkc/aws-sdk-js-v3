import { __extends } from "tslib";
import { GroupResourcesInput, GroupResourcesOutput } from "../models/models_0";
import { deserializeAws_restJson1GroupResourcesCommand, serializeAws_restJson1GroupResourcesCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Adds the specified resources to the specified group.</p>
 *         <p>
 *             <b>Minimum permissions</b>
 *          </p>
 *          <p>To run this command, you must have the following permissions:</p>
 *         <ul>
 *             <li>
 *                 <p>
 *                   <code>resource-groups:GroupResources</code>
 *                </p>
 *             </li>
 *          </ul>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ResourceGroupsClient, GroupResourcesCommand } from "@aws-sdk/client-resource-groups"; // ES Modules import
 * // const { ResourceGroupsClient, GroupResourcesCommand } = require("@aws-sdk/client-resource-groups"); // CommonJS import
 * const client = new ResourceGroupsClient(config);
 * const command = new GroupResourcesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GroupResourcesCommandInput} for command's `input` shape.
 * @see {@link GroupResourcesCommandOutput} for command's `response` shape.
 * @see {@link ResourceGroupsClientResolvedConfig | config} for command's `input` shape.
 *
 */
var GroupResourcesCommand = /** @class */ (function (_super) {
    __extends(GroupResourcesCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function GroupResourcesCommand(input) {
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
    GroupResourcesCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "ResourceGroupsClient";
        var commandName = "GroupResourcesCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: GroupResourcesInput.filterSensitiveLog,
            outputFilterSensitiveLog: GroupResourcesOutput.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    GroupResourcesCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1GroupResourcesCommand(input, context);
    };
    GroupResourcesCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1GroupResourcesCommand(output, context);
    };
    return GroupResourcesCommand;
}($Command));
export { GroupResourcesCommand };
//# sourceMappingURL=GroupResourcesCommand.js.map