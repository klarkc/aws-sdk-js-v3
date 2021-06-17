import { __extends } from "tslib";
import { StartExecutionInput, StartExecutionOutput } from "../models/models_0";
import { deserializeAws_json1_0StartExecutionCommand, serializeAws_json1_0StartExecutionCommand, } from "../protocols/Aws_json1_0";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Starts a state machine execution.</p>
 *          <note>
 *             <p>
 *                <code>StartExecution</code> is idempotent. If <code>StartExecution</code> is called with
 *         the same name and input as a running execution, the call will succeed and return the same
 *         response as the original request. If the execution is closed or if the input is different,
 *         it will return a 400 <code>ExecutionAlreadyExists</code> error. Names can be reused after 90
 *         days. </p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SFNClient, StartExecutionCommand } from "@aws-sdk/client-sfn"; // ES Modules import
 * // const { SFNClient, StartExecutionCommand } = require("@aws-sdk/client-sfn"); // CommonJS import
 * const client = new SFNClient(config);
 * const command = new StartExecutionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link StartExecutionCommandInput} for command's `input` shape.
 * @see {@link StartExecutionCommandOutput} for command's `response` shape.
 * @see {@link SFNClientResolvedConfig | config} for command's `input` shape.
 *
 */
var StartExecutionCommand = /** @class */ (function (_super) {
    __extends(StartExecutionCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function StartExecutionCommand(input) {
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
    StartExecutionCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "SFNClient";
        var commandName = "StartExecutionCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: StartExecutionInput.filterSensitiveLog,
            outputFilterSensitiveLog: StartExecutionOutput.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    StartExecutionCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_0StartExecutionCommand(input, context);
    };
    StartExecutionCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_0StartExecutionCommand(output, context);
    };
    return StartExecutionCommand;
}($Command));
export { StartExecutionCommand };
//# sourceMappingURL=StartExecutionCommand.js.map