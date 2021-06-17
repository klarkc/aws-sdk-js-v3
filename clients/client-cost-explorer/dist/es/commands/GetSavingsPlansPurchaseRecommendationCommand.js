import { __extends } from "tslib";
import { GetSavingsPlansPurchaseRecommendationRequest, GetSavingsPlansPurchaseRecommendationResponse, } from "../models/models_0";
import { deserializeAws_json1_1GetSavingsPlansPurchaseRecommendationCommand, serializeAws_json1_1GetSavingsPlansPurchaseRecommendationCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
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
var GetSavingsPlansPurchaseRecommendationCommand = /** @class */ (function (_super) {
    __extends(GetSavingsPlansPurchaseRecommendationCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function GetSavingsPlansPurchaseRecommendationCommand(input) {
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
    GetSavingsPlansPurchaseRecommendationCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "CostExplorerClient";
        var commandName = "GetSavingsPlansPurchaseRecommendationCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: GetSavingsPlansPurchaseRecommendationRequest.filterSensitiveLog,
            outputFilterSensitiveLog: GetSavingsPlansPurchaseRecommendationResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    GetSavingsPlansPurchaseRecommendationCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1GetSavingsPlansPurchaseRecommendationCommand(input, context);
    };
    GetSavingsPlansPurchaseRecommendationCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1GetSavingsPlansPurchaseRecommendationCommand(output, context);
    };
    return GetSavingsPlansPurchaseRecommendationCommand;
}($Command));
export { GetSavingsPlansPurchaseRecommendationCommand };
//# sourceMappingURL=GetSavingsPlansPurchaseRecommendationCommand.js.map