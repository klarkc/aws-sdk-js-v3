import { __extends } from "tslib";
import { RemoveThingFromBillingGroupRequest, RemoveThingFromBillingGroupResponse } from "../models/models_2";
import { deserializeAws_restJson1RemoveThingFromBillingGroupCommand, serializeAws_restJson1RemoveThingFromBillingGroupCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Removes the given thing from the billing group.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTClient, RemoveThingFromBillingGroupCommand } from "@aws-sdk/client-iot"; // ES Modules import
 * // const { IoTClient, RemoveThingFromBillingGroupCommand } = require("@aws-sdk/client-iot"); // CommonJS import
 * const client = new IoTClient(config);
 * const command = new RemoveThingFromBillingGroupCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link RemoveThingFromBillingGroupCommandInput} for command's `input` shape.
 * @see {@link RemoveThingFromBillingGroupCommandOutput} for command's `response` shape.
 * @see {@link IoTClientResolvedConfig | config} for command's `input` shape.
 *
 */
var RemoveThingFromBillingGroupCommand = /** @class */ (function (_super) {
    __extends(RemoveThingFromBillingGroupCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function RemoveThingFromBillingGroupCommand(input) {
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
    RemoveThingFromBillingGroupCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "IoTClient";
        var commandName = "RemoveThingFromBillingGroupCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: RemoveThingFromBillingGroupRequest.filterSensitiveLog,
            outputFilterSensitiveLog: RemoveThingFromBillingGroupResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    RemoveThingFromBillingGroupCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1RemoveThingFromBillingGroupCommand(input, context);
    };
    RemoveThingFromBillingGroupCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1RemoveThingFromBillingGroupCommand(output, context);
    };
    return RemoveThingFromBillingGroupCommand;
}($Command));
export { RemoveThingFromBillingGroupCommand };
//# sourceMappingURL=RemoveThingFromBillingGroupCommand.js.map