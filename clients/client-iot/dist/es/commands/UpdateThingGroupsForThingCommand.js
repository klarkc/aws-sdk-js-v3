import { __extends } from "tslib";
import { UpdateThingGroupsForThingRequest, UpdateThingGroupsForThingResponse } from "../models/models_2";
import { deserializeAws_restJson1UpdateThingGroupsForThingCommand, serializeAws_restJson1UpdateThingGroupsForThingCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Updates the groups to which the thing belongs.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTClient, UpdateThingGroupsForThingCommand } from "@aws-sdk/client-iot"; // ES Modules import
 * // const { IoTClient, UpdateThingGroupsForThingCommand } = require("@aws-sdk/client-iot"); // CommonJS import
 * const client = new IoTClient(config);
 * const command = new UpdateThingGroupsForThingCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateThingGroupsForThingCommandInput} for command's `input` shape.
 * @see {@link UpdateThingGroupsForThingCommandOutput} for command's `response` shape.
 * @see {@link IoTClientResolvedConfig | config} for command's `input` shape.
 *
 */
var UpdateThingGroupsForThingCommand = /** @class */ (function (_super) {
    __extends(UpdateThingGroupsForThingCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function UpdateThingGroupsForThingCommand(input) {
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
    UpdateThingGroupsForThingCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "IoTClient";
        var commandName = "UpdateThingGroupsForThingCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: UpdateThingGroupsForThingRequest.filterSensitiveLog,
            outputFilterSensitiveLog: UpdateThingGroupsForThingResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    UpdateThingGroupsForThingCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1UpdateThingGroupsForThingCommand(input, context);
    };
    UpdateThingGroupsForThingCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1UpdateThingGroupsForThingCommand(output, context);
    };
    return UpdateThingGroupsForThingCommand;
}($Command));
export { UpdateThingGroupsForThingCommand };
//# sourceMappingURL=UpdateThingGroupsForThingCommand.js.map