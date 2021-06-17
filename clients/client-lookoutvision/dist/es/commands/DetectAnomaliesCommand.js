import { __extends } from "tslib";
import { DetectAnomaliesRequest, DetectAnomaliesResponse } from "../models/models_0";
import { deserializeAws_restJson1DetectAnomaliesCommand, serializeAws_restJson1DetectAnomaliesCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Detects anomalies in an image that you supply. </p>
 *          <p>The response from <code>DetectAnomalies</code> includes a boolean prediction
 *          that the image contains one or more anomalies and a confidence value for the prediction.</p>
 *          <note>
 *             <p>Before calling <code>DetectAnomalies</code>, you must first start your model with the <a>StartModel</a> operation.
 *          You are charged for the amount of time, in minutes, that a model runs and for the number of anomaly detection units that your
 *          model uses. If you are not using a model, use the <a>StopModel</a> operation to stop your model. </p>
 *          </note>
 *          <p>This operation requires permissions to perform the
 *          <code>lookoutvision:DetectAnomalies</code> operation.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LookoutVisionClient, DetectAnomaliesCommand } from "@aws-sdk/client-lookoutvision"; // ES Modules import
 * // const { LookoutVisionClient, DetectAnomaliesCommand } = require("@aws-sdk/client-lookoutvision"); // CommonJS import
 * const client = new LookoutVisionClient(config);
 * const command = new DetectAnomaliesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DetectAnomaliesCommandInput} for command's `input` shape.
 * @see {@link DetectAnomaliesCommandOutput} for command's `response` shape.
 * @see {@link LookoutVisionClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DetectAnomaliesCommand = /** @class */ (function (_super) {
    __extends(DetectAnomaliesCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DetectAnomaliesCommand(input) {
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
    DetectAnomaliesCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "LookoutVisionClient";
        var commandName = "DetectAnomaliesCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DetectAnomaliesRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DetectAnomaliesResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DetectAnomaliesCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1DetectAnomaliesCommand(input, context);
    };
    DetectAnomaliesCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1DetectAnomaliesCommand(output, context);
    };
    return DetectAnomaliesCommand;
}($Command));
export { DetectAnomaliesCommand };
//# sourceMappingURL=DetectAnomaliesCommand.js.map