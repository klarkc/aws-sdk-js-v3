"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetSavingsPlansPurchaseRecommendationCommand = void 0;
const models_0_1 = require("../models/models_0");
const Aws_json1_1_1 = require("../protocols/Aws_json1_1");
const middleware_serde_1 = require("@aws-sdk/middleware-serde");
const smithy_client_1 = require("@aws-sdk/smithy-client");
/**
 * <p>Retrieves your request parameters, Savings Plan Recommendations Summary and Details. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CostExplorerClient, GetSavingsPlansPurchaseRecommendationCommand } from "@aws-sdk/client-cost-explorer"; // ES Modules import
 * // const { CostExplorerClient, GetSavingsPlansPurchaseRecommendationCommand } = require("@aws-sdk/client-cost-explorer"); // CommonJS import
 * const client = new CostExplorerClient(config);
 * const command = new GetSavingsPlansPurchaseRecommendationCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetSavingsPlansPurchaseRecommendationCommandInput} for command's `input` shape.
 * @see {@link GetSavingsPlansPurchaseRecommendationCommandOutput} for command's `response` shape.
 * @see {@link CostExplorerClientResolvedConfig | config} for command's `input` shape.
 *
 */
class GetSavingsPlansPurchaseRecommendationCommand extends smithy_client_1.Command {
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
        const commandName = "GetSavingsPlansPurchaseRecommendationCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: models_0_1.GetSavingsPlansPurchaseRecommendationRequest.filterSensitiveLog,
            outputFilterSensitiveLog: models_0_1.GetSavingsPlansPurchaseRecommendationResponse.filterSensitiveLog,
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return Aws_json1_1_1.serializeAws_json1_1GetSavingsPlansPurchaseRecommendationCommand(input, context);
    }
    deserialize(output, context) {
        return Aws_json1_1_1.deserializeAws_json1_1GetSavingsPlansPurchaseRecommendationCommand(output, context);
    }
}
exports.GetSavingsPlansPurchaseRecommendationCommand = GetSavingsPlansPurchaseRecommendationCommand;
//# sourceMappingURL=GetSavingsPlansPurchaseRecommendationCommand.js.map