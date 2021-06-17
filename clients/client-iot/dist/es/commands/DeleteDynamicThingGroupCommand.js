import { __extends } from "tslib";
import { DeleteDynamicThingGroupRequest, DeleteDynamicThingGroupResponse } from "../models/models_0";
import { deserializeAws_restJson1DeleteDynamicThingGroupCommand, serializeAws_restJson1DeleteDynamicThingGroupCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Deletes a dynamic thing group.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTClient, DeleteDynamicThingGroupCommand } from "@aws-sdk/client-iot"; // ES Modules import
 * // const { IoTClient, DeleteDynamicThingGroupCommand } = require("@aws-sdk/client-iot"); // CommonJS import
 * const client = new IoTClient(config);
 * const command = new DeleteDynamicThingGroupCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteDynamicThingGroupCommandInput} for command's `input` shape.
 * @see {@link DeleteDynamicThingGroupCommandOutput} for command's `response` shape.
 * @see {@link IoTClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DeleteDynamicThingGroupCommand = /** @class */ (function (_super) {
    __extends(DeleteDynamicThingGroupCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DeleteDynamicThingGroupCommand(input) {
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
    DeleteDynamicThingGroupCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "IoTClient";
        var commandName = "DeleteDynamicThingGroupCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DeleteDynamicThingGroupRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DeleteDynamicThingGroupResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DeleteDynamicThingGroupCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1DeleteDynamicThingGroupCommand(input, context);
    };
    DeleteDynamicThingGroupCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1DeleteDynamicThingGroupCommand(output, context);
    };
    return DeleteDynamicThingGroupCommand;
}($Command));
export { DeleteDynamicThingGroupCommand };
//# sourceMappingURL=DeleteDynamicThingGroupCommand.js.map