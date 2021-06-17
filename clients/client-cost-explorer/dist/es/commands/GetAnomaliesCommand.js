import { __extends } from "tslib";
import { GetAnomaliesRequest, GetAnomaliesResponse } from "../models/models_0";
import { deserializeAws_json1_1GetAnomaliesCommand, serializeAws_json1_1GetAnomaliesCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Retrieves all of the cost anomalies detected on your account, during the time period
 *       specified by the <code>DateInterval</code> object. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CostExplorerClient, GetAnomaliesCommand } from "@aws-sdk/client-cost-explorer"; // ES Modules import
 * // const { CostExplorerClient, GetAnomaliesCommand } = require("@aws-sdk/client-cost-explorer"); // CommonJS import
 * const client = new CostExplorerClient(config);
 * const command = new GetAnomaliesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetAnomaliesCommandInput} for command's `input` shape.
 * @see {@link GetAnomaliesCommandOutput} for command's `response` shape.
 * @see {@link CostExplorerClientResolvedConfig | config} for command's `input` shape.
 *
 */
var GetAnomaliesCommand = /** @class */ (function (_super) {
    __extends(GetAnomaliesCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function GetAnomaliesCommand(input) {
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
    GetAnomaliesCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "CostExplorerClient";
        var commandName = "GetAnomaliesCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: GetAnomaliesRequest.filterSensitiveLog,
            outputFilterSensitiveLog: GetAnomaliesResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    GetAnomaliesCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1GetAnomaliesCommand(input, context);
    };
    GetAnomaliesCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1GetAnomaliesCommand(output, context);
    };
    return GetAnomaliesCommand;
}($Command));
export { GetAnomaliesCommand };
//# sourceMappingURL=GetAnomaliesCommand.js.map