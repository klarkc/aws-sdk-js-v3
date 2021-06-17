import { __extends } from "tslib";
import { RunPipelineActivityRequest, RunPipelineActivityResponse } from "../models/models_0";
import { deserializeAws_restJson1RunPipelineActivityCommand, serializeAws_restJson1RunPipelineActivityCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Simulates the results of running a pipeline activity on a message payload.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTAnalyticsClient, RunPipelineActivityCommand } from "@aws-sdk/client-iotanalytics"; // ES Modules import
 * // const { IoTAnalyticsClient, RunPipelineActivityCommand } = require("@aws-sdk/client-iotanalytics"); // CommonJS import
 * const client = new IoTAnalyticsClient(config);
 * const command = new RunPipelineActivityCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link RunPipelineActivityCommandInput} for command's `input` shape.
 * @see {@link RunPipelineActivityCommandOutput} for command's `response` shape.
 * @see {@link IoTAnalyticsClientResolvedConfig | config} for command's `input` shape.
 *
 */
var RunPipelineActivityCommand = /** @class */ (function (_super) {
    __extends(RunPipelineActivityCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function RunPipelineActivityCommand(input) {
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
    RunPipelineActivityCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "IoTAnalyticsClient";
        var commandName = "RunPipelineActivityCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: RunPipelineActivityRequest.filterSensitiveLog,
            outputFilterSensitiveLog: RunPipelineActivityResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    RunPipelineActivityCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1RunPipelineActivityCommand(input, context);
    };
    RunPipelineActivityCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1RunPipelineActivityCommand(output, context);
    };
    return RunPipelineActivityCommand;
}($Command));
export { RunPipelineActivityCommand };
//# sourceMappingURL=RunPipelineActivityCommand.js.map