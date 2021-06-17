import { __extends } from "tslib";
import { BackTestAnomalyDetectorRequest, BackTestAnomalyDetectorResponse } from "../models/models_0";
import { deserializeAws_restJson1BackTestAnomalyDetectorCommand, serializeAws_restJson1BackTestAnomalyDetectorCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Runs a backtest for anomaly detection for the specified resource.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LookoutMetricsClient, BackTestAnomalyDetectorCommand } from "@aws-sdk/client-lookoutmetrics"; // ES Modules import
 * // const { LookoutMetricsClient, BackTestAnomalyDetectorCommand } = require("@aws-sdk/client-lookoutmetrics"); // CommonJS import
 * const client = new LookoutMetricsClient(config);
 * const command = new BackTestAnomalyDetectorCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link BackTestAnomalyDetectorCommandInput} for command's `input` shape.
 * @see {@link BackTestAnomalyDetectorCommandOutput} for command's `response` shape.
 * @see {@link LookoutMetricsClientResolvedConfig | config} for command's `input` shape.
 *
 */
var BackTestAnomalyDetectorCommand = /** @class */ (function (_super) {
    __extends(BackTestAnomalyDetectorCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function BackTestAnomalyDetectorCommand(input) {
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
    BackTestAnomalyDetectorCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "LookoutMetricsClient";
        var commandName = "BackTestAnomalyDetectorCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: BackTestAnomalyDetectorRequest.filterSensitiveLog,
            outputFilterSensitiveLog: BackTestAnomalyDetectorResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    BackTestAnomalyDetectorCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1BackTestAnomalyDetectorCommand(input, context);
    };
    BackTestAnomalyDetectorCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1BackTestAnomalyDetectorCommand(output, context);
    };
    return BackTestAnomalyDetectorCommand;
}($Command));
export { BackTestAnomalyDetectorCommand };
//# sourceMappingURL=BackTestAnomalyDetectorCommand.js.map