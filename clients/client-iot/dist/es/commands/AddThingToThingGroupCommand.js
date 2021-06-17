import { __extends } from "tslib";
import { AddThingToThingGroupRequest, AddThingToThingGroupResponse } from "../models/models_0";
import { deserializeAws_restJson1AddThingToThingGroupCommand, serializeAws_restJson1AddThingToThingGroupCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Adds a thing to a thing group.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTClient, AddThingToThingGroupCommand } from "@aws-sdk/client-iot"; // ES Modules import
 * // const { IoTClient, AddThingToThingGroupCommand } = require("@aws-sdk/client-iot"); // CommonJS import
 * const client = new IoTClient(config);
 * const command = new AddThingToThingGroupCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link AddThingToThingGroupCommandInput} for command's `input` shape.
 * @see {@link AddThingToThingGroupCommandOutput} for command's `response` shape.
 * @see {@link IoTClientResolvedConfig | config} for command's `input` shape.
 *
 */
var AddThingToThingGroupCommand = /** @class */ (function (_super) {
    __extends(AddThingToThingGroupCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function AddThingToThingGroupCommand(input) {
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
    AddThingToThingGroupCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "IoTClient";
        var commandName = "AddThingToThingGroupCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: AddThingToThingGroupRequest.filterSensitiveLog,
            outputFilterSensitiveLog: AddThingToThingGroupResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    AddThingToThingGroupCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1AddThingToThingGroupCommand(input, context);
    };
    AddThingToThingGroupCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1AddThingToThingGroupCommand(output, context);
    };
    return AddThingToThingGroupCommand;
}($Command));
export { AddThingToThingGroupCommand };
//# sourceMappingURL=AddThingToThingGroupCommand.js.map