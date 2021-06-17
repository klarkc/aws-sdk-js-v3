"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetReservationPurchaseRecommendationCommand = void 0;
const models_0_1 = require("../models/models_0");
const Aws_json1_1_1 = require("../protocols/Aws_json1_1");
const middleware_serde_1 = require("@aws-sdk/middleware-serde");
const smithy_client_1 = require("@aws-sdk/smithy-client");
/**
 * <p>Gets recommendations for which reservations to purchase. These recommendations could help you reduce your costs.
 * 			Reservations provide a discounted hourly rate (up to 75%) compared to On-Demand pricing.</p>
 * 		       <p>AWS generates your recommendations by identifying your On-Demand usage during a specific time period and collecting your usage
 * 			into categories that are eligible for a reservation. After AWS has these categories, it simulates every combination of reservations
 * 			in each category of usage to identify the best number of each type of RI to purchase to maximize your estimated savings. </p>
 * 		       <p>For example, AWS automatically aggregates your Amazon EC2 Linux, shared tenancy, and c4 family usage in the US West (Oregon) Region
 * 			and recommends that you buy size-flexible regional reservations to apply to the c4 family usage. AWS recommends the smallest size instance
 * 			in an instance family. This makes it easier to purchase a size-flexible RI. AWS also shows the equal number of normalized units
 * 			so that you can purchase any instance size that you want. For this example, your RI recommendation would be for <code>c4.large</code>
 * 			because that is the smallest size instance in the c4 instance family.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CostExplorerClient, GetReservationPurchaseRecommendationCommand } from "@aws-sdk/client-cost-explorer"; // ES Modules import
 * // const { CostExplorerClient, GetReservationPurchaseRecommendationCommand } = require("@aws-sdk/client-cost-explorer"); // CommonJS import
 * const client = new CostExplorerClient(config);
 * const command = new GetReservationPurchaseRecommendationCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetReservationPurchaseRecommendationCommandInput} for command's `input` shape.
 * @see {@link GetReservationPurchaseRecommendationCommandOutput} for command's `response` shape.
 * @see {@link CostExplorerClientResolvedConfig | config} for command's `input` shape.
 *
 */
class GetReservationPurchaseRecommendationCommand extends smithy_client_1.Command {
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
        const commandName = "GetReservationPurchaseRecommendationCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: models_0_1.GetReservationPurchaseRecommendationRequest.filterSensitiveLog,
            outputFilterSensitiveLog: models_0_1.GetReservationPurchaseRecommendationResponse.filterSensitiveLog,
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return Aws_json1_1_1.serializeAws_json1_1GetReservationPurchaseRecommendationCommand(input, context);
    }
    deserialize(output, context) {
        return Aws_json1_1_1.deserializeAws_json1_1GetReservationPurchaseRecommendationCommand(output, context);
    }
}
exports.GetReservationPurchaseRecommendationCommand = GetReservationPurchaseRecommendationCommand;
//# sourceMappingURL=GetReservationPurchaseRecommendationCommand.js.map