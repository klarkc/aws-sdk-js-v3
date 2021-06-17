import { __extends } from "tslib";
import { DeleteBillingGroupRequest, DeleteBillingGroupResponse } from "../models/models_0";
import { deserializeAws_restJson1DeleteBillingGroupCommand, serializeAws_restJson1DeleteBillingGroupCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Deletes the billing group.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTClient, DeleteBillingGroupCommand } from "@aws-sdk/client-iot"; // ES Modules import
 * // const { IoTClient, DeleteBillingGroupCommand } = require("@aws-sdk/client-iot"); // CommonJS import
 * const client = new IoTClient(config);
 * const command = new DeleteBillingGroupCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteBillingGroupCommandInput} for command's `input` shape.
 * @see {@link DeleteBillingGroupCommandOutput} for command's `response` shape.
 * @see {@link IoTClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DeleteBillingGroupCommand = /** @class */ (function (_super) {
    __extends(DeleteBillingGroupCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DeleteBillingGroupCommand(input) {
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
    DeleteBillingGroupCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "IoTClient";
        var commandName = "DeleteBillingGroupCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DeleteBillingGroupRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DeleteBillingGroupResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DeleteBillingGroupCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1DeleteBillingGroupCommand(input, context);
    };
    DeleteBillingGroupCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1DeleteBillingGroupCommand(output, context);
    };
    return DeleteBillingGroupCommand;
}($Command));
export { DeleteBillingGroupCommand };
//# sourceMappingURL=DeleteBillingGroupCommand.js.map