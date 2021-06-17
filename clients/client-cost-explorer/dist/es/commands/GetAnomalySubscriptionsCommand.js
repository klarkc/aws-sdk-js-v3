import { __extends } from "tslib";
import { GetAnomalySubscriptionsRequest, GetAnomalySubscriptionsResponse } from "../models/models_0";
import { deserializeAws_json1_1GetAnomalySubscriptionsCommand, serializeAws_json1_1GetAnomalySubscriptionsCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Retrieves the cost anomaly subscription objects for your account. You can filter using a
 *       list of cost anomaly monitor Amazon Resource Names (ARNs). </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CostExplorerClient, GetAnomalySubscriptionsCommand } from "@aws-sdk/client-cost-explorer"; // ES Modules import
 * // const { CostExplorerClient, GetAnomalySubscriptionsCommand } = require("@aws-sdk/client-cost-explorer"); // CommonJS import
 * const client = new CostExplorerClient(config);
 * const command = new GetAnomalySubscriptionsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetAnomalySubscriptionsCommandInput} for command's `input` shape.
 * @see {@link GetAnomalySubscriptionsCommandOutput} for command's `response` shape.
 * @see {@link CostExplorerClientResolvedConfig | config} for command's `input` shape.
 *
 */
var GetAnomalySubscriptionsCommand = /** @class */ (function (_super) {
    __extends(GetAnomalySubscriptionsCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function GetAnomalySubscriptionsCommand(input) {
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
    GetAnomalySubscriptionsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "CostExplorerClient";
        var commandName = "GetAnomalySubscriptionsCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: GetAnomalySubscriptionsRequest.filterSensitiveLog,
            outputFilterSensitiveLog: GetAnomalySubscriptionsResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    GetAnomalySubscriptionsCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1GetAnomalySubscriptionsCommand(input, context);
    };
    GetAnomalySubscriptionsCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1GetAnomalySubscriptionsCommand(output, context);
    };
    return GetAnomalySubscriptionsCommand;
}($Command));
export { GetAnomalySubscriptionsCommand };
//# sourceMappingURL=GetAnomalySubscriptionsCommand.js.map