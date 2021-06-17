"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetCostAndUsageWithResourcesCommand = void 0;
const models_0_1 = require("../models/models_0");
const Aws_json1_1_1 = require("../protocols/Aws_json1_1");
const middleware_serde_1 = require("@aws-sdk/middleware-serde");
const smithy_client_1 = require("@aws-sdk/smithy-client");
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
class GetCostAndUsageWithResourcesCommand extends smithy_client_1.Command {
    // Start section: command_properties
    // End section: command_properties
    constructor(input) {
        // Start section: command_constructor
        super();
        this.input = input;
        // End section: command_constructor
    }
    /**
     * @internal
     */
    resolveMiddleware(clientStack, configuration, options) {
        this.middlewareStack.use(middleware_serde_1.getSerdePlugin(configuration, this.serialize, this.deserialize));
        const stack = clientStack.concat(this.middlewareStack);
        const { logger } = configuration;
        const clientName = "CostExplorerClient";
        const commandName = "GetCostAndUsageWithResourcesCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: models_0_1.GetCostAndUsageWithResourcesRequest.filterSensitiveLog,
            outputFilterSensitiveLog: models_0_1.GetCostAndUsageWithResourcesResponse.filterSensitiveLog,
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return Aws_json1_1_1.serializeAws_json1_1GetCostAndUsageWithResourcesCommand(input, context);
    }
    deserialize(output, context) {
        return Aws_json1_1_1.deserializeAws_json1_1GetCostAndUsageWithResourcesCommand(output, context);
    }
}
exports.GetCostAndUsageWithResourcesCommand = GetCostAndUsageWithResourcesCommand;
//# sourceMappingURL=GetCostAndUsageWithResourcesCommand.js.map