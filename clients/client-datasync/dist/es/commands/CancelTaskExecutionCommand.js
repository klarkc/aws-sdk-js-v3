import { __extends } from "tslib";
import { CancelTaskExecutionRequest, CancelTaskExecutionResponse } from "../models/models_0";
import { deserializeAws_json1_1CancelTaskExecutionCommand, serializeAws_json1_1CancelTaskExecutionCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Cancels execution of a task. </p>
 *          <p>When you cancel a task execution, the transfer of some files is abruptly interrupted.
 *       The contents of files that are transferred to the destination might be incomplete or
 *       inconsistent with the source files. However, if you start a new task execution on the same
 *       task and you allow the task execution to complete, file content on the destination is complete
 *       and consistent. This applies to other unexpected failures that interrupt a task execution. In
 *       all of these cases, AWS DataSync successfully complete the transfer when you start the next
 *       task execution.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DataSyncClient, CancelTaskExecutionCommand } from "@aws-sdk/client-datasync"; // ES Modules import
 * // const { DataSyncClient, CancelTaskExecutionCommand } = require("@aws-sdk/client-datasync"); // CommonJS import
 * const client = new DataSyncClient(config);
 * const command = new CancelTaskExecutionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CancelTaskExecutionCommandInput} for command's `input` shape.
 * @see {@link CancelTaskExecutionCommandOutput} for command's `response` shape.
 * @see {@link DataSyncClientResolvedConfig | config} for command's `input` shape.
 *
 */
var CancelTaskExecutionCommand = /** @class */ (function (_super) {
    __extends(CancelTaskExecutionCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function CancelTaskExecutionCommand(input) {
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
    CancelTaskExecutionCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "DataSyncClient";
        var commandName = "CancelTaskExecutionCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: CancelTaskExecutionRequest.filterSensitiveLog,
            outputFilterSensitiveLog: CancelTaskExecutionResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    CancelTaskExecutionCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1CancelTaskExecutionCommand(input, context);
    };
    CancelTaskExecutionCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1CancelTaskExecutionCommand(output, context);
    };
    return CancelTaskExecutionCommand;
}($Command));
export { CancelTaskExecutionCommand };
//# sourceMappingURL=CancelTaskExecutionCommand.js.map