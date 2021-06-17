import { __extends } from "tslib";
import { UpdateAnomalyDetectorRequest, UpdateAnomalyDetectorResponse } from "../models/models_0";
import { deserializeAws_restJson1UpdateAnomalyDetectorCommand, serializeAws_restJson1UpdateAnomalyDetectorCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Updates a detector. After activation, you can only change a detector's ingestion delay and description.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LookoutMetricsClient, UpdateAnomalyDetectorCommand } from "@aws-sdk/client-lookoutmetrics"; // ES Modules import
 * // const { LookoutMetricsClient, UpdateAnomalyDetectorCommand } = require("@aws-sdk/client-lookoutmetrics"); // CommonJS import
 * const client = new LookoutMetricsClient(config);
 * const command = new UpdateAnomalyDetectorCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateAnomalyDetectorCommandInput} for command's `input` shape.
 * @see {@link UpdateAnomalyDetectorCommandOutput} for command's `response` shape.
 * @see {@link LookoutMetricsClientResolvedConfig | config} for command's `input` shape.
 *
 */
var UpdateAnomalyDetectorCommand = /** @class */ (function (_super) {
    __extends(UpdateAnomalyDetectorCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function UpdateAnomalyDetectorCommand(input) {
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
    UpdateAnomalyDetectorCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "LookoutMetricsClient";
        var commandName = "UpdateAnomalyDetectorCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: UpdateAnomalyDetectorRequest.filterSensitiveLog,
            outputFilterSensitiveLog: UpdateAnomalyDetectorResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    UpdateAnomalyDetectorCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1UpdateAnomalyDetectorCommand(input, context);
    };
    UpdateAnomalyDetectorCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1UpdateAnomalyDetectorCommand(output, context);
    };
    return UpdateAnomalyDetectorCommand;
}($Command));
export { UpdateAnomalyDetectorCommand };
//# sourceMappingURL=UpdateAnomalyDetectorCommand.js.map