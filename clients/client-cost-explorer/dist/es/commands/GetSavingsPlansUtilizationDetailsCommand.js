import { __extends } from "tslib";
import { GetSavingsPlansUtilizationDetailsRequest, GetSavingsPlansUtilizationDetailsResponse, } from "../models/models_0";
import { deserializeAws_json1_1GetSavingsPlansUtilizationDetailsCommand, serializeAws_json1_1GetSavingsPlansUtilizationDetailsCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Retrieves attribute data along with aggregate utilization and savings data for a given time period. This doesn't support granular or grouped data (daily/monthly) in response. You can't retrieve data by dates in a single response similar to <code>GetSavingsPlanUtilization</code>, but you have the option to make multiple calls to <code>GetSavingsPlanUtilizationDetails</code> by providing individual dates. You can use <code>GetDimensionValues</code> in <code>SAVINGS_PLANS</code> to determine the possible dimension values.</p>
 * 	        <note>
 *             <p>
 *                <code>GetSavingsPlanUtilizationDetails</code> internally groups data by <code>SavingsPlansArn</code>.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CostExplorerClient, GetSavingsPlansUtilizationDetailsCommand } from "@aws-sdk/client-cost-explorer"; // ES Modules import
 * // const { CostExplorerClient, GetSavingsPlansUtilizationDetailsCommand } = require("@aws-sdk/client-cost-explorer"); // CommonJS import
 * const client = new CostExplorerClient(config);
 * const command = new GetSavingsPlansUtilizationDetailsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetSavingsPlansUtilizationDetailsCommandInput} for command's `input` shape.
 * @see {@link GetSavingsPlansUtilizationDetailsCommandOutput} for command's `response` shape.
 * @see {@link CostExplorerClientResolvedConfig | config} for command's `input` shape.
 *
 */
var GetSavingsPlansUtilizationDetailsCommand = /** @class */ (function (_super) {
    __extends(GetSavingsPlansUtilizationDetailsCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function GetSavingsPlansUtilizationDetailsCommand(input) {
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
    GetSavingsPlansUtilizationDetailsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "CostExplorerClient";
        var commandName = "GetSavingsPlansUtilizationDetailsCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: GetSavingsPlansUtilizationDetailsRequest.filterSensitiveLog,
            outputFilterSensitiveLog: GetSavingsPlansUtilizationDetailsResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    GetSavingsPlansUtilizationDetailsCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1GetSavingsPlansUtilizationDetailsCommand(input, context);
    };
    GetSavingsPlansUtilizationDetailsCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1GetSavingsPlansUtilizationDetailsCommand(output, context);
    };
    return GetSavingsPlansUtilizationDetailsCommand;
}($Command));
export { GetSavingsPlansUtilizationDetailsCommand };
//# sourceMappingURL=GetSavingsPlansUtilizationDetailsCommand.js.map