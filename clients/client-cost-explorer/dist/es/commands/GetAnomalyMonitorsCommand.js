import { __extends } from "tslib";
import { GetAnomalyMonitorsRequest, GetAnomalyMonitorsResponse } from "../models/models_0";
import { deserializeAws_json1_1GetAnomalyMonitorsCommand, serializeAws_json1_1GetAnomalyMonitorsCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Retrieves the cost anomaly monitor definitions for your account. You can filter using a
 *       list of cost anomaly monitor Amazon Resource Names (ARNs). </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CostExplorerClient, GetAnomalyMonitorsCommand } from "@aws-sdk/client-cost-explorer"; // ES Modules import
 * // const { CostExplorerClient, GetAnomalyMonitorsCommand } = require("@aws-sdk/client-cost-explorer"); // CommonJS import
 * const client = new CostExplorerClient(config);
 * const command = new GetAnomalyMonitorsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetAnomalyMonitorsCommandInput} for command's `input` shape.
 * @see {@link GetAnomalyMonitorsCommandOutput} for command's `response` shape.
 * @see {@link CostExplorerClientResolvedConfig | config} for command's `input` shape.
 *
 */
var GetAnomalyMonitorsCommand = /** @class */ (function (_super) {
    __extends(GetAnomalyMonitorsCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function GetAnomalyMonitorsCommand(input) {
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
    GetAnomalyMonitorsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "CostExplorerClient";
        var commandName = "GetAnomalyMonitorsCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: GetAnomalyMonitorsRequest.filterSensitiveLog,
            outputFilterSensitiveLog: GetAnomalyMonitorsResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    GetAnomalyMonitorsCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1GetAnomalyMonitorsCommand(input, context);
    };
    GetAnomalyMonitorsCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1GetAnomalyMonitorsCommand(output, context);
    };
    return GetAnomalyMonitorsCommand;
}($Command));
export { GetAnomalyMonitorsCommand };
//# sourceMappingURL=GetAnomalyMonitorsCommand.js.map