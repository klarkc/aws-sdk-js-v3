import { __extends } from "tslib";
import { UpdateQueueHoursOfOperationRequest } from "../models/models_0";
import { deserializeAws_restJson1UpdateQueueHoursOfOperationCommand, serializeAws_restJson1UpdateQueueHoursOfOperationCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>This API is in preview release for Amazon Connect and is subject to change.</p>
 *          <p>Updates the hours of operation for the specified queue.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConnectClient, UpdateQueueHoursOfOperationCommand } from "@aws-sdk/client-connect"; // ES Modules import
 * // const { ConnectClient, UpdateQueueHoursOfOperationCommand } = require("@aws-sdk/client-connect"); // CommonJS import
 * const client = new ConnectClient(config);
 * const command = new UpdateQueueHoursOfOperationCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateQueueHoursOfOperationCommandInput} for command's `input` shape.
 * @see {@link UpdateQueueHoursOfOperationCommandOutput} for command's `response` shape.
 * @see {@link ConnectClientResolvedConfig | config} for command's `input` shape.
 *
 */
var UpdateQueueHoursOfOperationCommand = /** @class */ (function (_super) {
    __extends(UpdateQueueHoursOfOperationCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function UpdateQueueHoursOfOperationCommand(input) {
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
    UpdateQueueHoursOfOperationCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "ConnectClient";
        var commandName = "UpdateQueueHoursOfOperationCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: UpdateQueueHoursOfOperationRequest.filterSensitiveLog,
            outputFilterSensitiveLog: function (output) { return output; },
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    UpdateQueueHoursOfOperationCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1UpdateQueueHoursOfOperationCommand(input, context);
    };
    UpdateQueueHoursOfOperationCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1UpdateQueueHoursOfOperationCommand(output, context);
    };
    return UpdateQueueHoursOfOperationCommand;
}($Command));
export { UpdateQueueHoursOfOperationCommand };
//# sourceMappingURL=UpdateQueueHoursOfOperationCommand.js.map