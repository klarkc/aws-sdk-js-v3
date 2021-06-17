import { __extends } from "tslib";
import { SendHeartbeatRequest } from "../models/models_0";
import { deserializeAws_restJson1SendHeartbeatCommand, serializeAws_restJson1SendHeartbeatCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Use to get the current status of devices registered on SageMaker Edge Manager.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SagemakerEdgeClient, SendHeartbeatCommand } from "@aws-sdk/client-sagemaker-edge"; // ES Modules import
 * // const { SagemakerEdgeClient, SendHeartbeatCommand } = require("@aws-sdk/client-sagemaker-edge"); // CommonJS import
 * const client = new SagemakerEdgeClient(config);
 * const command = new SendHeartbeatCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link SendHeartbeatCommandInput} for command's `input` shape.
 * @see {@link SendHeartbeatCommandOutput} for command's `response` shape.
 * @see {@link SagemakerEdgeClientResolvedConfig | config} for command's `input` shape.
 *
 */
var SendHeartbeatCommand = /** @class */ (function (_super) {
    __extends(SendHeartbeatCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function SendHeartbeatCommand(input) {
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
    SendHeartbeatCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "SagemakerEdgeClient";
        var commandName = "SendHeartbeatCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: SendHeartbeatRequest.filterSensitiveLog,
            outputFilterSensitiveLog: function (output) { return output; },
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    SendHeartbeatCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1SendHeartbeatCommand(input, context);
    };
    SendHeartbeatCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1SendHeartbeatCommand(output, context);
    };
    return SendHeartbeatCommand;
}($Command));
export { SendHeartbeatCommand };
//# sourceMappingURL=SendHeartbeatCommand.js.map