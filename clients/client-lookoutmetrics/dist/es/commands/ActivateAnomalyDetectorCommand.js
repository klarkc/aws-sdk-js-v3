import { __extends } from "tslib";
import { ActivateAnomalyDetectorRequest, ActivateAnomalyDetectorResponse } from "../models/models_0";
import { deserializeAws_restJson1ActivateAnomalyDetectorCommand, serializeAws_restJson1ActivateAnomalyDetectorCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Activates an anomaly detector.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LookoutMetricsClient, ActivateAnomalyDetectorCommand } from "@aws-sdk/client-lookoutmetrics"; // ES Modules import
 * // const { LookoutMetricsClient, ActivateAnomalyDetectorCommand } = require("@aws-sdk/client-lookoutmetrics"); // CommonJS import
 * const client = new LookoutMetricsClient(config);
 * const command = new ActivateAnomalyDetectorCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ActivateAnomalyDetectorCommandInput} for command's `input` shape.
 * @see {@link ActivateAnomalyDetectorCommandOutput} for command's `response` shape.
 * @see {@link LookoutMetricsClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ActivateAnomalyDetectorCommand = /** @class */ (function (_super) {
    __extends(ActivateAnomalyDetectorCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function ActivateAnomalyDetectorCommand(input) {
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
    ActivateAnomalyDetectorCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "LookoutMetricsClient";
        var commandName = "ActivateAnomalyDetectorCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: ActivateAnomalyDetectorRequest.filterSensitiveLog,
            outputFilterSensitiveLog: ActivateAnomalyDetectorResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    ActivateAnomalyDetectorCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1ActivateAnomalyDetectorCommand(input, context);
    };
    ActivateAnomalyDetectorCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1ActivateAnomalyDetectorCommand(output, context);
    };
    return ActivateAnomalyDetectorCommand;
}($Command));
export { ActivateAnomalyDetectorCommand };
//# sourceMappingURL=ActivateAnomalyDetectorCommand.js.map