import { __extends } from "tslib";
import { DeleteForecastRequest } from "../models/models_0";
import { deserializeAws_json1_1DeleteForecastCommand, serializeAws_json1_1DeleteForecastCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Deletes a forecast created using the <a>CreateForecast</a> operation. You can
 *       delete only forecasts that have a status of <code>ACTIVE</code> or <code>CREATE_FAILED</code>.
 *       To get the status, use the <a>DescribeForecast</a> operation.</p>
 *          <p>You can't delete a forecast while it is being exported. After a forecast is deleted, you
 *       can no longer query the forecast.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ForecastClient, DeleteForecastCommand } from "@aws-sdk/client-forecast"; // ES Modules import
 * // const { ForecastClient, DeleteForecastCommand } = require("@aws-sdk/client-forecast"); // CommonJS import
 * const client = new ForecastClient(config);
 * const command = new DeleteForecastCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteForecastCommandInput} for command's `input` shape.
 * @see {@link DeleteForecastCommandOutput} for command's `response` shape.
 * @see {@link ForecastClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DeleteForecastCommand = /** @class */ (function (_super) {
    __extends(DeleteForecastCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DeleteForecastCommand(input) {
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
    DeleteForecastCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "ForecastClient";
        var commandName = "DeleteForecastCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DeleteForecastRequest.filterSensitiveLog,
            outputFilterSensitiveLog: function (output) { return output; },
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DeleteForecastCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1DeleteForecastCommand(input, context);
    };
    DeleteForecastCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1DeleteForecastCommand(output, context);
    };
    return DeleteForecastCommand;
}($Command));
export { DeleteForecastCommand };
//# sourceMappingURL=DeleteForecastCommand.js.map