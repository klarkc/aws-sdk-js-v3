import { __extends } from "tslib";
import { StartTaskExecutionRequest, StartTaskExecutionResponse } from "../models/models_0";
import { deserializeAws_json1_1StartTaskExecutionCommand, serializeAws_json1_1StartTaskExecutionCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Starts a specific invocation of a task. A <code>TaskExecution</code> value represents
 *       an individual run of a task. Each task can have at most one <code>TaskExecution</code> at a
 *       time.</p>
 *          <p>
 *             <code>TaskExecution</code> has the following transition phases: INITIALIZING |
 *       PREPARING | TRANSFERRING | VERIFYING | SUCCESS/FAILURE. </p>
 *
 *          <p>For detailed information, see the Task Execution section in the Components and
 *       Terminology topic in the <i>AWS DataSync User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DataSyncClient, StartTaskExecutionCommand } from "@aws-sdk/client-datasync"; // ES Modules import
 * // const { DataSyncClient, StartTaskExecutionCommand } = require("@aws-sdk/client-datasync"); // CommonJS import
 * const client = new DataSyncClient(config);
 * const command = new StartTaskExecutionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link StartTaskExecutionCommandInput} for command's `input` shape.
 * @see {@link StartTaskExecutionCommandOutput} for command's `response` shape.
 * @see {@link DataSyncClientResolvedConfig | config} for command's `input` shape.
 *
 */
var StartTaskExecutionCommand = /** @class */ (function (_super) {
    __extends(StartTaskExecutionCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function StartTaskExecutionCommand(input) {
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
    StartTaskExecutionCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "DataSyncClient";
        var commandName = "StartTaskExecutionCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: StartTaskExecutionRequest.filterSensitiveLog,
            outputFilterSensitiveLog: StartTaskExecutionResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    StartTaskExecutionCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1StartTaskExecutionCommand(input, context);
    };
    StartTaskExecutionCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1StartTaskExecutionCommand(output, context);
    };
    return StartTaskExecutionCommand;
}($Command));
export { StartTaskExecutionCommand };
//# sourceMappingURL=StartTaskExecutionCommand.js.map