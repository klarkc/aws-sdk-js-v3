import { __extends } from "tslib";
import { GetSavingsPlansCoverageRequest, GetSavingsPlansCoverageResponse } from "../models/models_0";
import { deserializeAws_json1_1GetSavingsPlansCoverageCommand, serializeAws_json1_1GetSavingsPlansCoverageCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Retrieves the Savings Plans covered for your account. This enables you to see how much of your cost is covered by a Savings Plan. An organization’s management account can see the coverage of the associated member accounts. This supports dimensions, Cost Categories, and nested expressions. For any time period, you can filter data for Savings Plans usage with the following dimensions:</p>
 * 	        <ul>
 *             <li>
 *                <p>
 *                   <code>LINKED_ACCOUNT</code>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>REGION</code>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>SERVICE</code>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>INSTANCE_FAMILY</code>
 *                </p>
 *             </li>
 *          </ul>
 * 	        <p>To determine valid values for a dimension, use the <code>GetDimensionValues</code> operation.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CostExplorerClient, GetSavingsPlansCoverageCommand } from "@aws-sdk/client-cost-explorer"; // ES Modules import
 * // const { CostExplorerClient, GetSavingsPlansCoverageCommand } = require("@aws-sdk/client-cost-explorer"); // CommonJS import
 * const client = new CostExplorerClient(config);
 * const command = new GetSavingsPlansCoverageCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetSavingsPlansCoverageCommandInput} for command's `input` shape.
 * @see {@link GetSavingsPlansCoverageCommandOutput} for command's `response` shape.
 * @see {@link CostExplorerClientResolvedConfig | config} for command's `input` shape.
 *
 */
var GetSavingsPlansCoverageCommand = /** @class */ (function (_super) {
    __extends(GetSavingsPlansCoverageCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function GetSavingsPlansCoverageCommand(input) {
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
    GetSavingsPlansCoverageCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "CostExplorerClient";
        var commandName = "GetSavingsPlansCoverageCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: GetSavingsPlansCoverageRequest.filterSensitiveLog,
            outputFilterSensitiveLog: GetSavingsPlansCoverageResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    GetSavingsPlansCoverageCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1GetSavingsPlansCoverageCommand(input, context);
    };
    GetSavingsPlansCoverageCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1GetSavingsPlansCoverageCommand(output, context);
    };
    return GetSavingsPlansCoverageCommand;
}($Command));
export { GetSavingsPlansCoverageCommand };
//# sourceMappingURL=GetSavingsPlansCoverageCommand.js.map