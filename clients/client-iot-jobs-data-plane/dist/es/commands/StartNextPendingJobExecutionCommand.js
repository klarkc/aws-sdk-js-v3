import { __extends } from "tslib";
import { StartNextPendingJobExecutionRequest, StartNextPendingJobExecutionResponse } from "../models/models_0";
import { deserializeAws_restJson1StartNextPendingJobExecutionCommand, serializeAws_restJson1StartNextPendingJobExecutionCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Gets and starts the next pending (status IN_PROGRESS or QUEUED) job execution for a thing.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTJobsDataPlaneClient, StartNextPendingJobExecutionCommand } from "@aws-sdk/client-iot-jobs-data-plane"; // ES Modules import
 * // const { IoTJobsDataPlaneClient, StartNextPendingJobExecutionCommand } = require("@aws-sdk/client-iot-jobs-data-plane"); // CommonJS import
 * const client = new IoTJobsDataPlaneClient(config);
 * const command = new StartNextPendingJobExecutionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link StartNextPendingJobExecutionCommandInput} for command's `input` shape.
 * @see {@link StartNextPendingJobExecutionCommandOutput} for command's `response` shape.
 * @see {@link IoTJobsDataPlaneClientResolvedConfig | config} for command's `input` shape.
 *
 */
var StartNextPendingJobExecutionCommand = /** @class */ (function (_super) {
    __extends(StartNextPendingJobExecutionCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function StartNextPendingJobExecutionCommand(input) {
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
    StartNextPendingJobExecutionCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "IoTJobsDataPlaneClient";
        var commandName = "StartNextPendingJobExecutionCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: StartNextPendingJobExecutionRequest.filterSensitiveLog,
            outputFilterSensitiveLog: StartNextPendingJobExecutionResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    StartNextPendingJobExecutionCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1StartNextPendingJobExecutionCommand(input, context);
    };
    StartNextPendingJobExecutionCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1StartNextPendingJobExecutionCommand(output, context);
    };
    return StartNextPendingJobExecutionCommand;
}($Command));
export { StartNextPendingJobExecutionCommand };
//# sourceMappingURL=StartNextPendingJobExecutionCommand.js.map