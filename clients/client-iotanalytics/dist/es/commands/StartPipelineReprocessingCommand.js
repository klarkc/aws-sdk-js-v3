import { __extends } from "tslib";
import { StartPipelineReprocessingRequest, StartPipelineReprocessingResponse } from "../models/models_0";
import { deserializeAws_restJson1StartPipelineReprocessingCommand, serializeAws_restJson1StartPipelineReprocessingCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Starts the reprocessing of raw message data through the pipeline.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTAnalyticsClient, StartPipelineReprocessingCommand } from "@aws-sdk/client-iotanalytics"; // ES Modules import
 * // const { IoTAnalyticsClient, StartPipelineReprocessingCommand } = require("@aws-sdk/client-iotanalytics"); // CommonJS import
 * const client = new IoTAnalyticsClient(config);
 * const command = new StartPipelineReprocessingCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link StartPipelineReprocessingCommandInput} for command's `input` shape.
 * @see {@link StartPipelineReprocessingCommandOutput} for command's `response` shape.
 * @see {@link IoTAnalyticsClientResolvedConfig | config} for command's `input` shape.
 *
 */
var StartPipelineReprocessingCommand = /** @class */ (function (_super) {
    __extends(StartPipelineReprocessingCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function StartPipelineReprocessingCommand(input) {
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
    StartPipelineReprocessingCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "IoTAnalyticsClient";
        var commandName = "StartPipelineReprocessingCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: StartPipelineReprocessingRequest.filterSensitiveLog,
            outputFilterSensitiveLog: StartPipelineReprocessingResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    StartPipelineReprocessingCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1StartPipelineReprocessingCommand(input, context);
    };
    StartPipelineReprocessingCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1StartPipelineReprocessingCommand(output, context);
    };
    return StartPipelineReprocessingCommand;
}($Command));
export { StartPipelineReprocessingCommand };
//# sourceMappingURL=StartPipelineReprocessingCommand.js.map