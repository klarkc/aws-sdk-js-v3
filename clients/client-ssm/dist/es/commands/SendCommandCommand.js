import { __extends } from "tslib";
import { SendCommandRequest, SendCommandResult } from "../models/models_1";
import { deserializeAws_json1_1SendCommandCommand, serializeAws_json1_1SendCommandCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Runs commands on one or more managed instances.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SSMClient, SendCommandCommand } from "@aws-sdk/client-ssm"; // ES Modules import
 * // const { SSMClient, SendCommandCommand } = require("@aws-sdk/client-ssm"); // CommonJS import
 * const client = new SSMClient(config);
 * const command = new SendCommandCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link SendCommandCommandInput} for command's `input` shape.
 * @see {@link SendCommandCommandOutput} for command's `response` shape.
 * @see {@link SSMClientResolvedConfig | config} for command's `input` shape.
 *
 */
var SendCommandCommand = /** @class */ (function (_super) {
    __extends(SendCommandCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function SendCommandCommand(input) {
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
    SendCommandCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "SSMClient";
        var commandName = "SendCommandCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: SendCommandRequest.filterSensitiveLog,
            outputFilterSensitiveLog: SendCommandResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    SendCommandCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1SendCommandCommand(input, context);
    };
    SendCommandCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1SendCommandCommand(output, context);
    };
    return SendCommandCommand;
}($Command));
export { SendCommandCommand };
//# sourceMappingURL=SendCommandCommand.js.map