import { __extends } from "tslib";
import { StartCanaryRequest, StartCanaryResponse } from "../models/models_0";
import { deserializeAws_restJson1StartCanaryCommand, serializeAws_restJson1StartCanaryCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Use this operation to run a canary that has already been created.
 *          The frequency of the canary runs is determined by the value of the canary's <code>Schedule</code>. To see a canary's schedule,
 *          use <a href="https://docs.aws.amazon.com/AmazonSynthetics/latest/APIReference/API_GetCanary.html">GetCanary</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SyntheticsClient, StartCanaryCommand } from "@aws-sdk/client-synthetics"; // ES Modules import
 * // const { SyntheticsClient, StartCanaryCommand } = require("@aws-sdk/client-synthetics"); // CommonJS import
 * const client = new SyntheticsClient(config);
 * const command = new StartCanaryCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link StartCanaryCommandInput} for command's `input` shape.
 * @see {@link StartCanaryCommandOutput} for command's `response` shape.
 * @see {@link SyntheticsClientResolvedConfig | config} for command's `input` shape.
 *
 */
var StartCanaryCommand = /** @class */ (function (_super) {
    __extends(StartCanaryCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function StartCanaryCommand(input) {
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
    StartCanaryCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "SyntheticsClient";
        var commandName = "StartCanaryCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: StartCanaryRequest.filterSensitiveLog,
            outputFilterSensitiveLog: StartCanaryResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    StartCanaryCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1StartCanaryCommand(input, context);
    };
    StartCanaryCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1StartCanaryCommand(output, context);
    };
    return StartCanaryCommand;
}($Command));
export { StartCanaryCommand };
//# sourceMappingURL=StartCanaryCommand.js.map