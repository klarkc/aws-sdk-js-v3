import { __extends } from "tslib";
import { DeleteJobRequest } from "../models/models_0";
import { deserializeAws_restJson1DeleteJobCommand, serializeAws_restJson1DeleteJobCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Deletes a job and its related job executions.</p>
 *          <p>Deleting a job may take time, depending on the number of job
 *         executions created for the job and various other factors. While the job
 *         is being deleted, the status of the job will be shown as
 *         "DELETION_IN_PROGRESS". Attempting to delete or cancel a job whose status
 *         is already "DELETION_IN_PROGRESS" will result in an error.</p>
 *          <p>Only 10 jobs may have status "DELETION_IN_PROGRESS" at the same time, or
 *         a LimitExceededException will occur.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTClient, DeleteJobCommand } from "@aws-sdk/client-iot"; // ES Modules import
 * // const { IoTClient, DeleteJobCommand } = require("@aws-sdk/client-iot"); // CommonJS import
 * const client = new IoTClient(config);
 * const command = new DeleteJobCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteJobCommandInput} for command's `input` shape.
 * @see {@link DeleteJobCommandOutput} for command's `response` shape.
 * @see {@link IoTClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DeleteJobCommand = /** @class */ (function (_super) {
    __extends(DeleteJobCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DeleteJobCommand(input) {
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
    DeleteJobCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "IoTClient";
        var commandName = "DeleteJobCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DeleteJobRequest.filterSensitiveLog,
            outputFilterSensitiveLog: function (output) { return output; },
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DeleteJobCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1DeleteJobCommand(input, context);
    };
    DeleteJobCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1DeleteJobCommand(output, context);
    };
    return DeleteJobCommand;
}($Command));
export { DeleteJobCommand };
//# sourceMappingURL=DeleteJobCommand.js.map