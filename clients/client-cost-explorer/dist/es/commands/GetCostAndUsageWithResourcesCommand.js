import { __extends } from "tslib";
import { GetCostAndUsageWithResourcesRequest, GetCostAndUsageWithResourcesResponse } from "../models/models_0";
import { deserializeAws_json1_1GetCostAndUsageWithResourcesCommand, serializeAws_json1_1GetCostAndUsageWithResourcesCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Retrieves cost and usage metrics with resources for your account. You can specify which cost and
 * 	    usage-related metric, such as <code>BlendedCosts</code> or <code>UsageQuantity</code>, that
 * 	    you want the request to return. You can also filter and group your data by various dimensions,
 * 	    such as <code>SERVICE</code> or <code>AZ</code>, in a specific time range. For a complete list
 * 	    of valid dimensions, see the <a href="https://docs.aws.amazon.com/aws-cost-management/latest/APIReference/API_GetDimensionValues.html">GetDimensionValues</a> operation. Management account in an organization in AWS
 * 	    Organizations have access to all member accounts. This API is currently available for the Amazon Elastic Compute Cloud – Compute service only.</p>
 * 	        <note>
 *             <p>This is an opt-in only feature. You can enable this feature from the Cost Explorer Settings page. For information on how to access the Settings page, see <a href="https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/ce-access.html">Controlling Access for Cost Explorer</a> in the <i>AWS Billing and Cost Management User Guide</i>.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CostExplorerClient, GetCostAndUsageWithResourcesCommand } from "@aws-sdk/client-cost-explorer"; // ES Modules import
 * // const { CostExplorerClient, GetCostAndUsageWithResourcesCommand } = require("@aws-sdk/client-cost-explorer"); // CommonJS import
 * const client = new CostExplorerClient(config);
 * const command = new GetCostAndUsageWithResourcesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetCostAndUsageWithResourcesCommandInput} for command's `input` shape.
 * @see {@link GetCostAndUsageWithResourcesCommandOutput} for command's `response` shape.
 * @see {@link CostExplorerClientResolvedConfig | config} for command's `input` shape.
 *
 */
var GetCostAndUsageWithResourcesCommand = /** @class */ (function (_super) {
    __extends(GetCostAndUsageWithResourcesCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function GetCostAndUsageWithResourcesCommand(input) {
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
    GetCostAndUsageWithResourcesCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "CostExplorerClient";
        var commandName = "GetCostAndUsageWithResourcesCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: GetCostAndUsageWithResourcesRequest.filterSensitiveLog,
            outputFilterSensitiveLog: GetCostAndUsageWithResourcesResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    GetCostAndUsageWithResourcesCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1GetCostAndUsageWithResourcesCommand(input, context);
    };
    GetCostAndUsageWithResourcesCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1GetCostAndUsageWithResourcesCommand(output, context);
    };
    return GetCostAndUsageWithResourcesCommand;
}($Command));
export { GetCostAndUsageWithResourcesCommand };
//# sourceMappingURL=GetCostAndUsageWithResourcesCommand.js.map