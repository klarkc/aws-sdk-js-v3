import { __extends } from "tslib";
import { GetCostAndUsageRequest, GetCostAndUsageResponse } from "../models/models_0";
import { deserializeAws_json1_1GetCostAndUsageCommand, serializeAws_json1_1GetCostAndUsageCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Retrieves cost and usage metrics for your account. You can specify which cost and usage-related metric, such as
 * 			<code>BlendedCosts</code> or <code>UsageQuantity</code>, that you want the request to return. You can also filter and group
 * 			your data by various dimensions, such as <code>SERVICE</code> or <code>AZ</code>, in a specific time range. For a complete list
 * 			of valid dimensions, see the
 * 			<a href="https://docs.aws.amazon.com/aws-cost-management/latest/APIReference/API_GetDimensionValues.html">GetDimensionValues</a>
 * 		  operation. Management account in an organization in AWS Organizations have access to all member accounts.</p>
 * 	        <p>For information about filter limitations, see <a href="https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/billing-limits.html">Quotas and restrictions</a> in the <i>Billing and Cost Management User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CostExplorerClient, GetCostAndUsageCommand } from "@aws-sdk/client-cost-explorer"; // ES Modules import
 * // const { CostExplorerClient, GetCostAndUsageCommand } = require("@aws-sdk/client-cost-explorer"); // CommonJS import
 * const client = new CostExplorerClient(config);
 * const command = new GetCostAndUsageCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetCostAndUsageCommandInput} for command's `input` shape.
 * @see {@link GetCostAndUsageCommandOutput} for command's `response` shape.
 * @see {@link CostExplorerClientResolvedConfig | config} for command's `input` shape.
 *
 */
var GetCostAndUsageCommand = /** @class */ (function (_super) {
    __extends(GetCostAndUsageCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function GetCostAndUsageCommand(input) {
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
    GetCostAndUsageCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "CostExplorerClient";
        var commandName = "GetCostAndUsageCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: GetCostAndUsageRequest.filterSensitiveLog,
            outputFilterSensitiveLog: GetCostAndUsageResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    GetCostAndUsageCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1GetCostAndUsageCommand(input, context);
    };
    GetCostAndUsageCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1GetCostAndUsageCommand(output, context);
    };
    return GetCostAndUsageCommand;
}($Command));
export { GetCostAndUsageCommand };
//# sourceMappingURL=GetCostAndUsageCommand.js.map