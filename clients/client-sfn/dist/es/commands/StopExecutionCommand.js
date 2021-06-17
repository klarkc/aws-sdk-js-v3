import { __extends } from "tslib";
import { StopExecutionInput, StopExecutionOutput } from "../models/models_0";
import { deserializeAws_json1_0StopExecutionCommand, serializeAws_json1_0StopExecutionCommand, } from "../protocols/Aws_json1_0";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Stops an execution.</p>
 *          <p>This API action is not supported by <code>EXPRESS</code> state machines.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SFNClient, StopExecutionCommand } from "@aws-sdk/client-sfn"; // ES Modules import
 * // const { SFNClient, StopExecutionCommand } = require("@aws-sdk/client-sfn"); // CommonJS import
 * const client = new SFNClient(config);
 * const command = new StopExecutionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link StopExecutionCommandInput} for command's `input` shape.
 * @see {@link StopExecutionCommandOutput} for command's `response` shape.
 * @see {@link SFNClientResolvedConfig | config} for command's `input` shape.
 *
 */
var StopExecutionCommand = /** @class */ (function (_super) {
    __extends(StopExecutionCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function StopExecutionCommand(input) {
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
    StopExecutionCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "SFNClient";
        var commandName = "StopExecutionCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: StopExecutionInput.filterSensitiveLog,
            outputFilterSensitiveLog: StopExecutionOutput.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    StopExecutionCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_0StopExecutionCommand(input, context);
    };
    StopExecutionCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_0StopExecutionCommand(output, context);
    };
    return StopExecutionCommand;
}($Command));
export { StopExecutionCommand };
//# sourceMappingURL=StopExecutionCommand.js.map