import { __extends } from "tslib";
import { GetPendingJobExecutionsRequest, GetPendingJobExecutionsResponse } from "../models/models_0";
import { deserializeAws_restJson1GetPendingJobExecutionsCommand, serializeAws_restJson1GetPendingJobExecutionsCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Gets the list of all jobs for a thing that are not in a terminal status.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTJobsDataPlaneClient, GetPendingJobExecutionsCommand } from "@aws-sdk/client-iot-jobs-data-plane"; // ES Modules import
 * // const { IoTJobsDataPlaneClient, GetPendingJobExecutionsCommand } = require("@aws-sdk/client-iot-jobs-data-plane"); // CommonJS import
 * const client = new IoTJobsDataPlaneClient(config);
 * const command = new GetPendingJobExecutionsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetPendingJobExecutionsCommandInput} for command's `input` shape.
 * @see {@link GetPendingJobExecutionsCommandOutput} for command's `response` shape.
 * @see {@link IoTJobsDataPlaneClientResolvedConfig | config} for command's `input` shape.
 *
 */
var GetPendingJobExecutionsCommand = /** @class */ (function (_super) {
    __extends(GetPendingJobExecutionsCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function GetPendingJobExecutionsCommand(input) {
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
    GetPendingJobExecutionsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "IoTJobsDataPlaneClient";
        var commandName = "GetPendingJobExecutionsCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: GetPendingJobExecutionsRequest.filterSensitiveLog,
            outputFilterSensitiveLog: GetPendingJobExecutionsResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    GetPendingJobExecutionsCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1GetPendingJobExecutionsCommand(input, context);
    };
    GetPendingJobExecutionsCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1GetPendingJobExecutionsCommand(output, context);
    };
    return GetPendingJobExecutionsCommand;
}($Command));
export { GetPendingJobExecutionsCommand };
//# sourceMappingURL=GetPendingJobExecutionsCommand.js.map