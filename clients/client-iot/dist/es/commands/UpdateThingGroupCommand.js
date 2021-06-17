import { __extends } from "tslib";
import { UpdateThingGroupRequest, UpdateThingGroupResponse } from "../models/models_2";
import { deserializeAws_restJson1UpdateThingGroupCommand, serializeAws_restJson1UpdateThingGroupCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Update a thing group.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTClient, UpdateThingGroupCommand } from "@aws-sdk/client-iot"; // ES Modules import
 * // const { IoTClient, UpdateThingGroupCommand } = require("@aws-sdk/client-iot"); // CommonJS import
 * const client = new IoTClient(config);
 * const command = new UpdateThingGroupCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateThingGroupCommandInput} for command's `input` shape.
 * @see {@link UpdateThingGroupCommandOutput} for command's `response` shape.
 * @see {@link IoTClientResolvedConfig | config} for command's `input` shape.
 *
 */
var UpdateThingGroupCommand = /** @class */ (function (_super) {
    __extends(UpdateThingGroupCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function UpdateThingGroupCommand(input) {
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
    UpdateThingGroupCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "IoTClient";
        var commandName = "UpdateThingGroupCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: UpdateThingGroupRequest.filterSensitiveLog,
            outputFilterSensitiveLog: UpdateThingGroupResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    UpdateThingGroupCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1UpdateThingGroupCommand(input, context);
    };
    UpdateThingGroupCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1UpdateThingGroupCommand(output, context);
    };
    return UpdateThingGroupCommand;
}($Command));
export { UpdateThingGroupCommand };
//# sourceMappingURL=UpdateThingGroupCommand.js.map