import { __extends } from "tslib";
import { DeleteAnomalyDetectorRequest, DeleteAnomalyDetectorResponse } from "../models/models_0";
import { deserializeAws_restJson1DeleteAnomalyDetectorCommand, serializeAws_restJson1DeleteAnomalyDetectorCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Deletes a detector. Deleting an anomaly detector will delete all of its corresponding resources including any
 *       configured datasets and alerts.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LookoutMetricsClient, DeleteAnomalyDetectorCommand } from "@aws-sdk/client-lookoutmetrics"; // ES Modules import
 * // const { LookoutMetricsClient, DeleteAnomalyDetectorCommand } = require("@aws-sdk/client-lookoutmetrics"); // CommonJS import
 * const client = new LookoutMetricsClient(config);
 * const command = new DeleteAnomalyDetectorCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteAnomalyDetectorCommandInput} for command's `input` shape.
 * @see {@link DeleteAnomalyDetectorCommandOutput} for command's `response` shape.
 * @see {@link LookoutMetricsClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DeleteAnomalyDetectorCommand = /** @class */ (function (_super) {
    __extends(DeleteAnomalyDetectorCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DeleteAnomalyDetectorCommand(input) {
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
    DeleteAnomalyDetectorCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "LookoutMetricsClient";
        var commandName = "DeleteAnomalyDetectorCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DeleteAnomalyDetectorRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DeleteAnomalyDetectorResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DeleteAnomalyDetectorCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1DeleteAnomalyDetectorCommand(input, context);
    };
    DeleteAnomalyDetectorCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1DeleteAnomalyDetectorCommand(output, context);
    };
    return DeleteAnomalyDetectorCommand;
}($Command));
export { DeleteAnomalyDetectorCommand };
//# sourceMappingURL=DeleteAnomalyDetectorCommand.js.map