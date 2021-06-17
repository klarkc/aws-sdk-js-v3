import { __extends } from "tslib";
import { GetReservationPurchaseRecommendationRequest, GetReservationPurchaseRecommendationResponse, } from "../models/models_0";
import { deserializeAws_json1_1GetReservationPurchaseRecommendationCommand, serializeAws_json1_1GetReservationPurchaseRecommendationCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
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
var GetReservationPurchaseRecommendationCommand = /** @class */ (function (_super) {
    __extends(GetReservationPurchaseRecommendationCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function GetReservationPurchaseRecommendationCommand(input) {
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
    GetReservationPurchaseRecommendationCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "CostExplorerClient";
        var commandName = "GetReservationPurchaseRecommendationCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: GetReservationPurchaseRecommendationRequest.filterSensitiveLog,
            outputFilterSensitiveLog: GetReservationPurchaseRecommendationResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    GetReservationPurchaseRecommendationCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1GetReservationPurchaseRecommendationCommand(input, context);
    };
    GetReservationPurchaseRecommendationCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1GetReservationPurchaseRecommendationCommand(output, context);
    };
    return GetReservationPurchaseRecommendationCommand;
}($Command));
export { GetReservationPurchaseRecommendationCommand };
//# sourceMappingURL=GetReservationPurchaseRecommendationCommand.js.map