import { __extends } from "tslib";
import { DeleteForecastExportJobRequest } from "../models/models_0";
import { deserializeAws_json1_1DeleteForecastExportJobCommand, serializeAws_json1_1DeleteForecastExportJobCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Deletes a forecast export job created using the <a>CreateForecastExportJob</a>
 *       operation. You can delete only export jobs that have a status of <code>ACTIVE</code> or
 *         <code>CREATE_FAILED</code>. To get the status, use the <a>DescribeForecastExportJob</a> operation.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ForecastClient, DeleteForecastExportJobCommand } from "@aws-sdk/client-forecast"; // ES Modules import
 * // const { ForecastClient, DeleteForecastExportJobCommand } = require("@aws-sdk/client-forecast"); // CommonJS import
 * const client = new ForecastClient(config);
 * const command = new DeleteForecastExportJobCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteForecastExportJobCommandInput} for command's `input` shape.
 * @see {@link DeleteForecastExportJobCommandOutput} for command's `response` shape.
 * @see {@link ForecastClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DeleteForecastExportJobCommand = /** @class */ (function (_super) {
    __extends(DeleteForecastExportJobCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DeleteForecastExportJobCommand(input) {
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
    DeleteForecastExportJobCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "ForecastClient";
        var commandName = "DeleteForecastExportJobCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DeleteForecastExportJobRequest.filterSensitiveLog,
            outputFilterSensitiveLog: function (output) { return output; },
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DeleteForecastExportJobCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1DeleteForecastExportJobCommand(input, context);
    };
    DeleteForecastExportJobCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1DeleteForecastExportJobCommand(output, context);
    };
    return DeleteForecastExportJobCommand;
}($Command));
export { DeleteForecastExportJobCommand };
//# sourceMappingURL=DeleteForecastExportJobCommand.js.map