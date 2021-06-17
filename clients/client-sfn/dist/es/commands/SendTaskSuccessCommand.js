import { __extends } from "tslib";
import { SendTaskSuccessInput, SendTaskSuccessOutput } from "../models/models_0";
import { deserializeAws_json1_0SendTaskSuccessCommand, serializeAws_json1_0SendTaskSuccessCommand, } from "../protocols/Aws_json1_0";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Used by activity workers and task states using the <a href="https://docs.aws.amazon.com/step-functions/latest/dg/connect-to-resource.html#connect-wait-token">callback</a>
 *       pattern to report that the task identified by the <code>taskToken</code> completed
 *       successfully.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SFNClient, SendTaskSuccessCommand } from "@aws-sdk/client-sfn"; // ES Modules import
 * // const { SFNClient, SendTaskSuccessCommand } = require("@aws-sdk/client-sfn"); // CommonJS import
 * const client = new SFNClient(config);
 * const command = new SendTaskSuccessCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link SendTaskSuccessCommandInput} for command's `input` shape.
 * @see {@link SendTaskSuccessCommandOutput} for command's `response` shape.
 * @see {@link SFNClientResolvedConfig | config} for command's `input` shape.
 *
 */
var SendTaskSuccessCommand = /** @class */ (function (_super) {
    __extends(SendTaskSuccessCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function SendTaskSuccessCommand(input) {
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
    SendTaskSuccessCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "SFNClient";
        var commandName = "SendTaskSuccessCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: SendTaskSuccessInput.filterSensitiveLog,
            outputFilterSensitiveLog: SendTaskSuccessOutput.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    SendTaskSuccessCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_0SendTaskSuccessCommand(input, context);
    };
    SendTaskSuccessCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_0SendTaskSuccessCommand(output, context);
    };
    return SendTaskSuccessCommand;
}($Command));
export { SendTaskSuccessCommand };
//# sourceMappingURL=SendTaskSuccessCommand.js.map