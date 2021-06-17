import { __extends } from "tslib";
import { DeleteThingGroupRequest, DeleteThingGroupResponse } from "../models/models_0";
import { deserializeAws_restJson1DeleteThingGroupCommand, serializeAws_restJson1DeleteThingGroupCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Deletes a thing group.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTClient, DeleteThingGroupCommand } from "@aws-sdk/client-iot"; // ES Modules import
 * // const { IoTClient, DeleteThingGroupCommand } = require("@aws-sdk/client-iot"); // CommonJS import
 * const client = new IoTClient(config);
 * const command = new DeleteThingGroupCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteThingGroupCommandInput} for command's `input` shape.
 * @see {@link DeleteThingGroupCommandOutput} for command's `response` shape.
 * @see {@link IoTClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DeleteThingGroupCommand = /** @class */ (function (_super) {
    __extends(DeleteThingGroupCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DeleteThingGroupCommand(input) {
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
    DeleteThingGroupCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "IoTClient";
        var commandName = "DeleteThingGroupCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DeleteThingGroupRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DeleteThingGroupResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DeleteThingGroupCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1DeleteThingGroupCommand(input, context);
    };
    DeleteThingGroupCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1DeleteThingGroupCommand(output, context);
    };
    return DeleteThingGroupCommand;
}($Command));
export { DeleteThingGroupCommand };
//# sourceMappingURL=DeleteThingGroupCommand.js.map