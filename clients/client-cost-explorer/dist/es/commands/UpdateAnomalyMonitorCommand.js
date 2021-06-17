import { __extends } from "tslib";
import { UpdateAnomalyMonitorRequest, UpdateAnomalyMonitorResponse } from "../models/models_0";
import { deserializeAws_json1_1UpdateAnomalyMonitorCommand, serializeAws_json1_1UpdateAnomalyMonitorCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Updates an existing cost anomaly monitor. The changes made are applied going forward, and
 *       does not change anomalies detected in the past. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CostExplorerClient, UpdateAnomalyMonitorCommand } from "@aws-sdk/client-cost-explorer"; // ES Modules import
 * // const { CostExplorerClient, UpdateAnomalyMonitorCommand } = require("@aws-sdk/client-cost-explorer"); // CommonJS import
 * const client = new CostExplorerClient(config);
 * const command = new UpdateAnomalyMonitorCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateAnomalyMonitorCommandInput} for command's `input` shape.
 * @see {@link UpdateAnomalyMonitorCommandOutput} for command's `response` shape.
 * @see {@link CostExplorerClientResolvedConfig | config} for command's `input` shape.
 *
 */
var UpdateAnomalyMonitorCommand = /** @class */ (function (_super) {
    __extends(UpdateAnomalyMonitorCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function UpdateAnomalyMonitorCommand(input) {
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
    UpdateAnomalyMonitorCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "CostExplorerClient";
        var commandName = "UpdateAnomalyMonitorCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: UpdateAnomalyMonitorRequest.filterSensitiveLog,
            outputFilterSensitiveLog: UpdateAnomalyMonitorResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    UpdateAnomalyMonitorCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1UpdateAnomalyMonitorCommand(input, context);
    };
    UpdateAnomalyMonitorCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1UpdateAnomalyMonitorCommand(output, context);
    };
    return UpdateAnomalyMonitorCommand;
}($Command));
export { UpdateAnomalyMonitorCommand };
//# sourceMappingURL=UpdateAnomalyMonitorCommand.js.map