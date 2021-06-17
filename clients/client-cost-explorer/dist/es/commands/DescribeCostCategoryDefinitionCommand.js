import { __extends } from "tslib";
import { DescribeCostCategoryDefinitionRequest, DescribeCostCategoryDefinitionResponse } from "../models/models_0";
import { deserializeAws_json1_1DescribeCostCategoryDefinitionCommand, serializeAws_json1_1DescribeCostCategoryDefinitionCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Returns the name, ARN, rules, definition, and effective dates of a Cost Category that's defined in the account.</p>
 *          <p>You have the option to use <code>EffectiveOn</code> to return a Cost Category that is active on a specific date. If there is no <code>EffectiveOn</code> specified, you’ll see a Cost Category that is effective on the current date. If Cost Category is still effective, <code>EffectiveEnd</code> is omitted in the response. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CostExplorerClient, DescribeCostCategoryDefinitionCommand } from "@aws-sdk/client-cost-explorer"; // ES Modules import
 * // const { CostExplorerClient, DescribeCostCategoryDefinitionCommand } = require("@aws-sdk/client-cost-explorer"); // CommonJS import
 * const client = new CostExplorerClient(config);
 * const command = new DescribeCostCategoryDefinitionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeCostCategoryDefinitionCommandInput} for command's `input` shape.
 * @see {@link DescribeCostCategoryDefinitionCommandOutput} for command's `response` shape.
 * @see {@link CostExplorerClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DescribeCostCategoryDefinitionCommand = /** @class */ (function (_super) {
    __extends(DescribeCostCategoryDefinitionCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DescribeCostCategoryDefinitionCommand(input) {
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
    DescribeCostCategoryDefinitionCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "CostExplorerClient";
        var commandName = "DescribeCostCategoryDefinitionCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DescribeCostCategoryDefinitionRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DescribeCostCategoryDefinitionResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DescribeCostCategoryDefinitionCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1DescribeCostCategoryDefinitionCommand(input, context);
    };
    DescribeCostCategoryDefinitionCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1DescribeCostCategoryDefinitionCommand(output, context);
    };
    return DescribeCostCategoryDefinitionCommand;
}($Command));
export { DescribeCostCategoryDefinitionCommand };
//# sourceMappingURL=DescribeCostCategoryDefinitionCommand.js.map