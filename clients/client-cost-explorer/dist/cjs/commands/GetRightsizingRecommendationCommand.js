"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetRightsizingRecommendationCommand = void 0;
const models_0_1 = require("../models/models_0");
const Aws_json1_1_1 = require("../protocols/Aws_json1_1");
const middleware_serde_1 = require("@aws-sdk/middleware-serde");
const smithy_client_1 = require("@aws-sdk/smithy-client");
/**
 * <p>Creates recommendations that
 *       help you save cost
 *       by identifying idle and underutilized Amazon EC2 instances.</p>
 *          <p>Recommendations are generated to either downsize or terminate instances, along with
 *       providing savings detail and metrics. For details on calculation and function, see
 *         <a href="https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/ce-rightsizing.html">Optimizing
 *         Your Cost with Rightsizing
 *       Recommendations</a>
 *       in the <i>AWS Billing and Cost Management User
 *       Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CostExplorerClient, GetRightsizingRecommendationCommand } from "@aws-sdk/client-cost-explorer"; // ES Modules import
 * // const { CostExplorerClient, GetRightsizingRecommendationCommand } = require("@aws-sdk/client-cost-explorer"); // CommonJS import
 * const client = new CostExplorerClient(config);
 * const command = new GetRightsizingRecommendationCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetRightsizingRecommendationCommandInput} for command's `input` shape.
 * @see {@link GetRightsizingRecommendationCommandOutput} for command's `response` shape.
 * @see {@link CostExplorerClientResolvedConfig | config} for command's `input` shape.
 *
 */
class GetRightsizingRecommendationCommand extends smithy_client_1.Command {
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
        const commandName = "GetRightsizingRecommendationCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: models_0_1.GetRightsizingRecommendationRequest.filterSensitiveLog,
            outputFilterSensitiveLog: models_0_1.GetRightsizingRecommendationResponse.filterSensitiveLog,
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return Aws_json1_1_1.serializeAws_json1_1GetRightsizingRecommendationCommand(input, context);
    }
    deserialize(output, context) {
        return Aws_json1_1_1.deserializeAws_json1_1GetRightsizingRecommendationCommand(output, context);
    }
}
exports.GetRightsizingRecommendationCommand = GetRightsizingRecommendationCommand;
//# sourceMappingURL=GetRightsizingRecommendationCommand.js.map