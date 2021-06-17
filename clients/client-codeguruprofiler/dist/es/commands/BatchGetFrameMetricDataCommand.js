import { __extends } from "tslib";
import { BatchGetFrameMetricDataRequest, BatchGetFrameMetricDataResponse } from "../models/models_0";
import { deserializeAws_restJson1BatchGetFrameMetricDataCommand, serializeAws_restJson1BatchGetFrameMetricDataCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>
 *          Returns the time series of values for a requested list
 *          of frame metrics from a time period.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodeGuruProfilerClient, BatchGetFrameMetricDataCommand } from "@aws-sdk/client-codeguruprofiler"; // ES Modules import
 * // const { CodeGuruProfilerClient, BatchGetFrameMetricDataCommand } = require("@aws-sdk/client-codeguruprofiler"); // CommonJS import
 * const client = new CodeGuruProfilerClient(config);
 * const command = new BatchGetFrameMetricDataCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link BatchGetFrameMetricDataCommandInput} for command's `input` shape.
 * @see {@link BatchGetFrameMetricDataCommandOutput} for command's `response` shape.
 * @see {@link CodeGuruProfilerClientResolvedConfig | config} for command's `input` shape.
 *
 */
var BatchGetFrameMetricDataCommand = /** @class */ (function (_super) {
    __extends(BatchGetFrameMetricDataCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function BatchGetFrameMetricDataCommand(input) {
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
    BatchGetFrameMetricDataCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "CodeGuruProfilerClient";
        var commandName = "BatchGetFrameMetricDataCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: BatchGetFrameMetricDataRequest.filterSensitiveLog,
            outputFilterSensitiveLog: BatchGetFrameMetricDataResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    BatchGetFrameMetricDataCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1BatchGetFrameMetricDataCommand(input, context);
    };
    BatchGetFrameMetricDataCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1BatchGetFrameMetricDataCommand(output, context);
    };
    return BatchGetFrameMetricDataCommand;
}($Command));
export { BatchGetFrameMetricDataCommand };
//# sourceMappingURL=BatchGetFrameMetricDataCommand.js.map