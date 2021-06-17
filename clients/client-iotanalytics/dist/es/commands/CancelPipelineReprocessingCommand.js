import { __extends } from "tslib";
import { CancelPipelineReprocessingRequest, CancelPipelineReprocessingResponse } from "../models/models_0";
import { deserializeAws_restJson1CancelPipelineReprocessingCommand, serializeAws_restJson1CancelPipelineReprocessingCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Cancels the reprocessing of data through the pipeline.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTAnalyticsClient, CancelPipelineReprocessingCommand } from "@aws-sdk/client-iotanalytics"; // ES Modules import
 * // const { IoTAnalyticsClient, CancelPipelineReprocessingCommand } = require("@aws-sdk/client-iotanalytics"); // CommonJS import
 * const client = new IoTAnalyticsClient(config);
 * const command = new CancelPipelineReprocessingCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CancelPipelineReprocessingCommandInput} for command's `input` shape.
 * @see {@link CancelPipelineReprocessingCommandOutput} for command's `response` shape.
 * @see {@link IoTAnalyticsClientResolvedConfig | config} for command's `input` shape.
 *
 */
var CancelPipelineReprocessingCommand = /** @class */ (function (_super) {
    __extends(CancelPipelineReprocessingCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function CancelPipelineReprocessingCommand(input) {
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
    CancelPipelineReprocessingCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "IoTAnalyticsClient";
        var commandName = "CancelPipelineReprocessingCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: CancelPipelineReprocessingRequest.filterSensitiveLog,
            outputFilterSensitiveLog: CancelPipelineReprocessingResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    CancelPipelineReprocessingCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1CancelPipelineReprocessingCommand(input, context);
    };
    CancelPipelineReprocessingCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1CancelPipelineReprocessingCommand(output, context);
    };
    return CancelPipelineReprocessingCommand;
}($Command));
export { CancelPipelineReprocessingCommand };
//# sourceMappingURL=CancelPipelineReprocessingCommand.js.map