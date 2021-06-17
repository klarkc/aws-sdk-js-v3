import { __extends } from "tslib";
import { UpdateJobExecutionRequest, UpdateJobExecutionResponse } from "../models/models_0";
import { deserializeAws_restJson1UpdateJobExecutionCommand, serializeAws_restJson1UpdateJobExecutionCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Updates the status of a job execution.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTJobsDataPlaneClient, UpdateJobExecutionCommand } from "@aws-sdk/client-iot-jobs-data-plane"; // ES Modules import
 * // const { IoTJobsDataPlaneClient, UpdateJobExecutionCommand } = require("@aws-sdk/client-iot-jobs-data-plane"); // CommonJS import
 * const client = new IoTJobsDataPlaneClient(config);
 * const command = new UpdateJobExecutionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateJobExecutionCommandInput} for command's `input` shape.
 * @see {@link UpdateJobExecutionCommandOutput} for command's `response` shape.
 * @see {@link IoTJobsDataPlaneClientResolvedConfig | config} for command's `input` shape.
 *
 */
var UpdateJobExecutionCommand = /** @class */ (function (_super) {
    __extends(UpdateJobExecutionCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function UpdateJobExecutionCommand(input) {
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
    UpdateJobExecutionCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "IoTJobsDataPlaneClient";
        var commandName = "UpdateJobExecutionCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: UpdateJobExecutionRequest.filterSensitiveLog,
            outputFilterSensitiveLog: UpdateJobExecutionResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    UpdateJobExecutionCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1UpdateJobExecutionCommand(input, context);
    };
    UpdateJobExecutionCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1UpdateJobExecutionCommand(output, context);
    };
    return UpdateJobExecutionCommand;
}($Command));
export { UpdateJobExecutionCommand };
//# sourceMappingURL=UpdateJobExecutionCommand.js.map