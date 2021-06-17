import { __extends } from "tslib";
import { DeleteAnomalySubscriptionRequest, DeleteAnomalySubscriptionResponse } from "../models/models_0";
import { deserializeAws_json1_1DeleteAnomalySubscriptionCommand, serializeAws_json1_1DeleteAnomalySubscriptionCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Deletes a cost anomaly subscription. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CostExplorerClient, DeleteAnomalySubscriptionCommand } from "@aws-sdk/client-cost-explorer"; // ES Modules import
 * // const { CostExplorerClient, DeleteAnomalySubscriptionCommand } = require("@aws-sdk/client-cost-explorer"); // CommonJS import
 * const client = new CostExplorerClient(config);
 * const command = new DeleteAnomalySubscriptionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteAnomalySubscriptionCommandInput} for command's `input` shape.
 * @see {@link DeleteAnomalySubscriptionCommandOutput} for command's `response` shape.
 * @see {@link CostExplorerClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DeleteAnomalySubscriptionCommand = /** @class */ (function (_super) {
    __extends(DeleteAnomalySubscriptionCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DeleteAnomalySubscriptionCommand(input) {
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
    DeleteAnomalySubscriptionCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "CostExplorerClient";
        var commandName = "DeleteAnomalySubscriptionCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DeleteAnomalySubscriptionRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DeleteAnomalySubscriptionResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DeleteAnomalySubscriptionCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1DeleteAnomalySubscriptionCommand(input, context);
    };
    DeleteAnomalySubscriptionCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1DeleteAnomalySubscriptionCommand(output, context);
    };
    return DeleteAnomalySubscriptionCommand;
}($Command));
export { DeleteAnomalySubscriptionCommand };
//# sourceMappingURL=DeleteAnomalySubscriptionCommand.js.map