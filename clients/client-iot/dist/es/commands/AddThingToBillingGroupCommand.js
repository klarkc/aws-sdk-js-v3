import { __extends } from "tslib";
import { AddThingToBillingGroupRequest, AddThingToBillingGroupResponse } from "../models/models_0";
import { deserializeAws_restJson1AddThingToBillingGroupCommand, serializeAws_restJson1AddThingToBillingGroupCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Adds a thing to a billing group.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTClient, AddThingToBillingGroupCommand } from "@aws-sdk/client-iot"; // ES Modules import
 * // const { IoTClient, AddThingToBillingGroupCommand } = require("@aws-sdk/client-iot"); // CommonJS import
 * const client = new IoTClient(config);
 * const command = new AddThingToBillingGroupCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link AddThingToBillingGroupCommandInput} for command's `input` shape.
 * @see {@link AddThingToBillingGroupCommandOutput} for command's `response` shape.
 * @see {@link IoTClientResolvedConfig | config} for command's `input` shape.
 *
 */
var AddThingToBillingGroupCommand = /** @class */ (function (_super) {
    __extends(AddThingToBillingGroupCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function AddThingToBillingGroupCommand(input) {
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
    AddThingToBillingGroupCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "IoTClient";
        var commandName = "AddThingToBillingGroupCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: AddThingToBillingGroupRequest.filterSensitiveLog,
            outputFilterSensitiveLog: AddThingToBillingGroupResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    AddThingToBillingGroupCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1AddThingToBillingGroupCommand(input, context);
    };
    AddThingToBillingGroupCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1AddThingToBillingGroupCommand(output, context);
    };
    return AddThingToBillingGroupCommand;
}($Command));
export { AddThingToBillingGroupCommand };
//# sourceMappingURL=AddThingToBillingGroupCommand.js.map