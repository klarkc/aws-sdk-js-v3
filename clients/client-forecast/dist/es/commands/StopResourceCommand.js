import { __extends } from "tslib";
import { StopResourceRequest } from "../models/models_0";
import { deserializeAws_json1_1StopResourceCommand, serializeAws_json1_1StopResourceCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Stops a resource.</p>
 *          <p>The resource undergoes the following states:
 *          <code>CREATE_STOPPING</code> and <code>CREATE_STOPPED</code>. You cannot resume
 *          a resource once it has been stopped.</p>
 *          <p>This operation can be applied to the following resources (and their corresponding child
 *          resources):</p>
 *          <ul>
 *             <li>
 *                <p>Dataset Import Job</p>
 *             </li>
 *             <li>
 *                <p>Predictor Job</p>
 *             </li>
 *             <li>
 *                <p>Forecast Job</p>
 *             </li>
 *             <li>
 *                <p>Forecast Export Job</p>
 *             </li>
 *             <li>
 *                <p>Predictor Backtest Export Job</p>
 *             </li>
 *          </ul>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ForecastClient, StopResourceCommand } from "@aws-sdk/client-forecast"; // ES Modules import
 * // const { ForecastClient, StopResourceCommand } = require("@aws-sdk/client-forecast"); // CommonJS import
 * const client = new ForecastClient(config);
 * const command = new StopResourceCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link StopResourceCommandInput} for command's `input` shape.
 * @see {@link StopResourceCommandOutput} for command's `response` shape.
 * @see {@link ForecastClientResolvedConfig | config} for command's `input` shape.
 *
 */
var StopResourceCommand = /** @class */ (function (_super) {
    __extends(StopResourceCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function StopResourceCommand(input) {
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
    StopResourceCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "ForecastClient";
        var commandName = "StopResourceCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: StopResourceRequest.filterSensitiveLog,
            outputFilterSensitiveLog: function (output) { return output; },
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    StopResourceCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1StopResourceCommand(input, context);
    };
    StopResourceCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1StopResourceCommand(output, context);
    };
    return StopResourceCommand;
}($Command));
export { StopResourceCommand };
//# sourceMappingURL=StopResourceCommand.js.map