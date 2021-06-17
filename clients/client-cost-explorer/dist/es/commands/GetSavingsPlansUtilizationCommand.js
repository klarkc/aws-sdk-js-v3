import { __extends } from "tslib";
import { GetSavingsPlansUtilizationRequest, GetSavingsPlansUtilizationResponse } from "../models/models_0";
import { deserializeAws_json1_1GetSavingsPlansUtilizationCommand, serializeAws_json1_1GetSavingsPlansUtilizationCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Retrieves the Savings Plans utilization for your account across date ranges with daily or monthly granularity. Management account in an organization have access to member accounts. You can use <code>GetDimensionValues</code> in <code>SAVINGS_PLANS</code> to determine the possible dimension values.</p>
 * 	        <note>
 *             <p>You cannot group by any dimension values for <code>GetSavingsPlansUtilization</code>.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CostExplorerClient, GetSavingsPlansUtilizationCommand } from "@aws-sdk/client-cost-explorer"; // ES Modules import
 * // const { CostExplorerClient, GetSavingsPlansUtilizationCommand } = require("@aws-sdk/client-cost-explorer"); // CommonJS import
 * const client = new CostExplorerClient(config);
 * const command = new GetSavingsPlansUtilizationCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetSavingsPlansUtilizationCommandInput} for command's `input` shape.
 * @see {@link GetSavingsPlansUtilizationCommandOutput} for command's `response` shape.
 * @see {@link CostExplorerClientResolvedConfig | config} for command's `input` shape.
 *
 */
var GetSavingsPlansUtilizationCommand = /** @class */ (function (_super) {
    __extends(GetSavingsPlansUtilizationCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function GetSavingsPlansUtilizationCommand(input) {
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
    GetSavingsPlansUtilizationCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "CostExplorerClient";
        var commandName = "GetSavingsPlansUtilizationCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: GetSavingsPlansUtilizationRequest.filterSensitiveLog,
            outputFilterSensitiveLog: GetSavingsPlansUtilizationResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    GetSavingsPlansUtilizationCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1GetSavingsPlansUtilizationCommand(input, context);
    };
    GetSavingsPlansUtilizationCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1GetSavingsPlansUtilizationCommand(output, context);
    };
    return GetSavingsPlansUtilizationCommand;
}($Command));
export { GetSavingsPlansUtilizationCommand };
//# sourceMappingURL=GetSavingsPlansUtilizationCommand.js.map