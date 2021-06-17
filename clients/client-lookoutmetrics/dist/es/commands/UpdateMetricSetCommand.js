import { __extends } from "tslib";
import { UpdateMetricSetRequest, UpdateMetricSetResponse } from "../models/models_0";
import { deserializeAws_restJson1UpdateMetricSetCommand, serializeAws_restJson1UpdateMetricSetCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Updates a dataset.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LookoutMetricsClient, UpdateMetricSetCommand } from "@aws-sdk/client-lookoutmetrics"; // ES Modules import
 * // const { LookoutMetricsClient, UpdateMetricSetCommand } = require("@aws-sdk/client-lookoutmetrics"); // CommonJS import
 * const client = new LookoutMetricsClient(config);
 * const command = new UpdateMetricSetCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateMetricSetCommandInput} for command's `input` shape.
 * @see {@link UpdateMetricSetCommandOutput} for command's `response` shape.
 * @see {@link LookoutMetricsClientResolvedConfig | config} for command's `input` shape.
 *
 */
var UpdateMetricSetCommand = /** @class */ (function (_super) {
    __extends(UpdateMetricSetCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function UpdateMetricSetCommand(input) {
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
    UpdateMetricSetCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "LookoutMetricsClient";
        var commandName = "UpdateMetricSetCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: UpdateMetricSetRequest.filterSensitiveLog,
            outputFilterSensitiveLog: UpdateMetricSetResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    UpdateMetricSetCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1UpdateMetricSetCommand(input, context);
    };
    UpdateMetricSetCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1UpdateMetricSetCommand(output, context);
    };
    return UpdateMetricSetCommand;
}($Command));
export { UpdateMetricSetCommand };
//# sourceMappingURL=UpdateMetricSetCommand.js.map