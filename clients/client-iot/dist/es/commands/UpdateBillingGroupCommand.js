import { __extends } from "tslib";
import { UpdateBillingGroupRequest, UpdateBillingGroupResponse } from "../models/models_2";
import { deserializeAws_restJson1UpdateBillingGroupCommand, serializeAws_restJson1UpdateBillingGroupCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Updates information about the billing group.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTClient, UpdateBillingGroupCommand } from "@aws-sdk/client-iot"; // ES Modules import
 * // const { IoTClient, UpdateBillingGroupCommand } = require("@aws-sdk/client-iot"); // CommonJS import
 * const client = new IoTClient(config);
 * const command = new UpdateBillingGroupCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateBillingGroupCommandInput} for command's `input` shape.
 * @see {@link UpdateBillingGroupCommandOutput} for command's `response` shape.
 * @see {@link IoTClientResolvedConfig | config} for command's `input` shape.
 *
 */
var UpdateBillingGroupCommand = /** @class */ (function (_super) {
    __extends(UpdateBillingGroupCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function UpdateBillingGroupCommand(input) {
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
    UpdateBillingGroupCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "IoTClient";
        var commandName = "UpdateBillingGroupCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: UpdateBillingGroupRequest.filterSensitiveLog,
            outputFilterSensitiveLog: UpdateBillingGroupResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    UpdateBillingGroupCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1UpdateBillingGroupCommand(input, context);
    };
    UpdateBillingGroupCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1UpdateBillingGroupCommand(output, context);
    };
    return UpdateBillingGroupCommand;
}($Command));
export { UpdateBillingGroupCommand };
//# sourceMappingURL=UpdateBillingGroupCommand.js.map