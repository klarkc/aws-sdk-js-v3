import { __extends } from "tslib";
import { DeleteAnomalyMonitorRequest, DeleteAnomalyMonitorResponse } from "../models/models_0";
import { deserializeAws_json1_1DeleteAnomalyMonitorCommand, serializeAws_json1_1DeleteAnomalyMonitorCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Deletes a cost anomaly monitor. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CostExplorerClient, DeleteAnomalyMonitorCommand } from "@aws-sdk/client-cost-explorer"; // ES Modules import
 * // const { CostExplorerClient, DeleteAnomalyMonitorCommand } = require("@aws-sdk/client-cost-explorer"); // CommonJS import
 * const client = new CostExplorerClient(config);
 * const command = new DeleteAnomalyMonitorCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteAnomalyMonitorCommandInput} for command's `input` shape.
 * @see {@link DeleteAnomalyMonitorCommandOutput} for command's `response` shape.
 * @see {@link CostExplorerClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DeleteAnomalyMonitorCommand = /** @class */ (function (_super) {
    __extends(DeleteAnomalyMonitorCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DeleteAnomalyMonitorCommand(input) {
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
    DeleteAnomalyMonitorCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "CostExplorerClient";
        var commandName = "DeleteAnomalyMonitorCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DeleteAnomalyMonitorRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DeleteAnomalyMonitorResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DeleteAnomalyMonitorCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1DeleteAnomalyMonitorCommand(input, context);
    };
    DeleteAnomalyMonitorCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1DeleteAnomalyMonitorCommand(output, context);
    };
    return DeleteAnomalyMonitorCommand;
}($Command));
export { DeleteAnomalyMonitorCommand };
//# sourceMappingURL=DeleteAnomalyMonitorCommand.js.map