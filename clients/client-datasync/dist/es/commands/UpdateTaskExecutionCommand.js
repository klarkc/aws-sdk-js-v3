import { __extends } from "tslib";
import { UpdateTaskExecutionRequest, UpdateTaskExecutionResponse } from "../models/models_0";
import { deserializeAws_json1_1UpdateTaskExecutionCommand, serializeAws_json1_1UpdateTaskExecutionCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Updates execution of a task.</p>
 *          <p>You can modify bandwidth throttling for a task execution that is running or queued.
 *       For more information, see <a href="https://docs.aws.amazon.com/datasync/latest/userguide/working-with-task-executions.html#adjust-bandwidth-throttling">Adjusting Bandwidth Throttling for a Task Execution</a>.</p>
 *
 *          <note>
 *             <p>The only <code>Option</code> that can be modified by <code>UpdateTaskExecution</code>
 *         is <code>
 *                   <a href="https://docs.aws.amazon.com/datasync/latest/userguide/API_Options.html#DataSync-Type-Options-BytesPerSecond">BytesPerSecond</a>
 *                </code>.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DataSyncClient, UpdateTaskExecutionCommand } from "@aws-sdk/client-datasync"; // ES Modules import
 * // const { DataSyncClient, UpdateTaskExecutionCommand } = require("@aws-sdk/client-datasync"); // CommonJS import
 * const client = new DataSyncClient(config);
 * const command = new UpdateTaskExecutionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateTaskExecutionCommandInput} for command's `input` shape.
 * @see {@link UpdateTaskExecutionCommandOutput} for command's `response` shape.
 * @see {@link DataSyncClientResolvedConfig | config} for command's `input` shape.
 *
 */
var UpdateTaskExecutionCommand = /** @class */ (function (_super) {
    __extends(UpdateTaskExecutionCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function UpdateTaskExecutionCommand(input) {
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
    UpdateTaskExecutionCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "DataSyncClient";
        var commandName = "UpdateTaskExecutionCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: UpdateTaskExecutionRequest.filterSensitiveLog,
            outputFilterSensitiveLog: UpdateTaskExecutionResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    UpdateTaskExecutionCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1UpdateTaskExecutionCommand(input, context);
    };
    UpdateTaskExecutionCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1UpdateTaskExecutionCommand(output, context);
    };
    return UpdateTaskExecutionCommand;
}($Command));
export { UpdateTaskExecutionCommand };
//# sourceMappingURL=UpdateTaskExecutionCommand.js.map