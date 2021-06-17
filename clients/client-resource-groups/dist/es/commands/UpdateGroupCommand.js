import { __extends } from "tslib";
import { UpdateGroupInput, UpdateGroupOutput } from "../models/models_0";
import { deserializeAws_restJson1UpdateGroupCommand, serializeAws_restJson1UpdateGroupCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Updates the description for an existing group. You cannot update the name of a
 *             resource group.</p>
 *         <p>
 *             <b>Minimum permissions</b>
 *          </p>
 *          <p>To run this command, you must have the following permissions:</p>
 *         <ul>
 *             <li>
 *                 <p>
 *                   <code>resource-groups:UpdateGroup</code>
 *                </p>
 *             </li>
 *          </ul>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ResourceGroupsClient, UpdateGroupCommand } from "@aws-sdk/client-resource-groups"; // ES Modules import
 * // const { ResourceGroupsClient, UpdateGroupCommand } = require("@aws-sdk/client-resource-groups"); // CommonJS import
 * const client = new ResourceGroupsClient(config);
 * const command = new UpdateGroupCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateGroupCommandInput} for command's `input` shape.
 * @see {@link UpdateGroupCommandOutput} for command's `response` shape.
 * @see {@link ResourceGroupsClientResolvedConfig | config} for command's `input` shape.
 *
 */
var UpdateGroupCommand = /** @class */ (function (_super) {
    __extends(UpdateGroupCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function UpdateGroupCommand(input) {
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
    UpdateGroupCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "ResourceGroupsClient";
        var commandName = "UpdateGroupCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: UpdateGroupInput.filterSensitiveLog,
            outputFilterSensitiveLog: UpdateGroupOutput.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    UpdateGroupCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1UpdateGroupCommand(input, context);
    };
    UpdateGroupCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1UpdateGroupCommand(output, context);
    };
    return UpdateGroupCommand;
}($Command));
export { UpdateGroupCommand };
//# sourceMappingURL=UpdateGroupCommand.js.map