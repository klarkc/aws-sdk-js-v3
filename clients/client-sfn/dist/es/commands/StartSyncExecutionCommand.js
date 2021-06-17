import { __extends } from "tslib";
import { StartSyncExecutionInput, StartSyncExecutionOutput } from "../models/models_0";
import { deserializeAws_json1_0StartSyncExecutionCommand, serializeAws_json1_0StartSyncExecutionCommand, } from "../protocols/Aws_json1_0";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Starts a Synchronous Express state machine execution.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SFNClient, StartSyncExecutionCommand } from "@aws-sdk/client-sfn"; // ES Modules import
 * // const { SFNClient, StartSyncExecutionCommand } = require("@aws-sdk/client-sfn"); // CommonJS import
 * const client = new SFNClient(config);
 * const command = new StartSyncExecutionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link StartSyncExecutionCommandInput} for command's `input` shape.
 * @see {@link StartSyncExecutionCommandOutput} for command's `response` shape.
 * @see {@link SFNClientResolvedConfig | config} for command's `input` shape.
 *
 */
var StartSyncExecutionCommand = /** @class */ (function (_super) {
    __extends(StartSyncExecutionCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function StartSyncExecutionCommand(input) {
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
    StartSyncExecutionCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "SFNClient";
        var commandName = "StartSyncExecutionCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: StartSyncExecutionInput.filterSensitiveLog,
            outputFilterSensitiveLog: StartSyncExecutionOutput.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    StartSyncExecutionCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_0StartSyncExecutionCommand(input, context);
    };
    StartSyncExecutionCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_0StartSyncExecutionCommand(output, context);
    };
    return StartSyncExecutionCommand;
}($Command));
export { StartSyncExecutionCommand };
//# sourceMappingURL=StartSyncExecutionCommand.js.map