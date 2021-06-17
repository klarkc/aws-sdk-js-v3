import { __extends } from "tslib";
import { GetReservationUtilizationRequest, GetReservationUtilizationResponse } from "../models/models_0";
import { deserializeAws_json1_1GetReservationUtilizationCommand, serializeAws_json1_1GetReservationUtilizationCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Retrieves the reservation utilization for your account. Management account in an organization have access to member accounts.
 * 			You can filter data by dimensions in a time period. You can use <code>GetDimensionValues</code> to determine the possible
 * 			dimension values. Currently, you can group only by <code>SUBSCRIPTION_ID</code>. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CostExplorerClient, GetReservationUtilizationCommand } from "@aws-sdk/client-cost-explorer"; // ES Modules import
 * // const { CostExplorerClient, GetReservationUtilizationCommand } = require("@aws-sdk/client-cost-explorer"); // CommonJS import
 * const client = new CostExplorerClient(config);
 * const command = new GetReservationUtilizationCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetReservationUtilizationCommandInput} for command's `input` shape.
 * @see {@link GetReservationUtilizationCommandOutput} for command's `response` shape.
 * @see {@link CostExplorerClientResolvedConfig | config} for command's `input` shape.
 *
 */
var GetReservationUtilizationCommand = /** @class */ (function (_super) {
    __extends(GetReservationUtilizationCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function GetReservationUtilizationCommand(input) {
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
    GetReservationUtilizationCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "CostExplorerClient";
        var commandName = "GetReservationUtilizationCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: GetReservationUtilizationRequest.filterSensitiveLog,
            outputFilterSensitiveLog: GetReservationUtilizationResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    GetReservationUtilizationCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1GetReservationUtilizationCommand(input, context);
    };
    GetReservationUtilizationCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1GetReservationUtilizationCommand(output, context);
    };
    return GetReservationUtilizationCommand;
}($Command));
export { GetReservationUtilizationCommand };
//# sourceMappingURL=GetReservationUtilizationCommand.js.map