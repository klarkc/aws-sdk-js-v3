import { __extends } from "tslib";
import { UpdateDynamicThingGroupRequest, UpdateDynamicThingGroupResponse } from "../models/models_2";
import { deserializeAws_restJson1UpdateDynamicThingGroupCommand, serializeAws_restJson1UpdateDynamicThingGroupCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Updates a dynamic thing group.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTClient, UpdateDynamicThingGroupCommand } from "@aws-sdk/client-iot"; // ES Modules import
 * // const { IoTClient, UpdateDynamicThingGroupCommand } = require("@aws-sdk/client-iot"); // CommonJS import
 * const client = new IoTClient(config);
 * const command = new UpdateDynamicThingGroupCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateDynamicThingGroupCommandInput} for command's `input` shape.
 * @see {@link UpdateDynamicThingGroupCommandOutput} for command's `response` shape.
 * @see {@link IoTClientResolvedConfig | config} for command's `input` shape.
 *
 */
var UpdateDynamicThingGroupCommand = /** @class */ (function (_super) {
    __extends(UpdateDynamicThingGroupCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function UpdateDynamicThingGroupCommand(input) {
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
    UpdateDynamicThingGroupCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "IoTClient";
        var commandName = "UpdateDynamicThingGroupCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: UpdateDynamicThingGroupRequest.filterSensitiveLog,
            outputFilterSensitiveLog: UpdateDynamicThingGroupResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    UpdateDynamicThingGroupCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1UpdateDynamicThingGroupCommand(input, context);
    };
    UpdateDynamicThingGroupCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1UpdateDynamicThingGroupCommand(output, context);
    };
    return UpdateDynamicThingGroupCommand;
}($Command));
export { UpdateDynamicThingGroupCommand };
//# sourceMappingURL=UpdateDynamicThingGroupCommand.js.map