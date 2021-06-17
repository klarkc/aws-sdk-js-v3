import { __extends } from "tslib";
import { GetResourceMetricsRequest, GetResourceMetricsResponse } from "../models/models_0";
import { deserializeAws_json1_1GetResourceMetricsCommand, serializeAws_json1_1GetResourceMetricsCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Retrieve Performance Insights metrics for a set of data sources, over a time period. You can provide
 *       specific dimension groups and dimensions, and provide aggregation and filtering criteria for
 *       each group.</p>
 *          <note>
 *             <p>Each response element returns a maximum of 500 bytes. For larger elements, such as SQL statements,
 *                only the first 500 bytes are returned.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PIClient, GetResourceMetricsCommand } from "@aws-sdk/client-pi"; // ES Modules import
 * // const { PIClient, GetResourceMetricsCommand } = require("@aws-sdk/client-pi"); // CommonJS import
 * const client = new PIClient(config);
 * const command = new GetResourceMetricsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetResourceMetricsCommandInput} for command's `input` shape.
 * @see {@link GetResourceMetricsCommandOutput} for command's `response` shape.
 * @see {@link PIClientResolvedConfig | config} for command's `input` shape.
 *
 */
var GetResourceMetricsCommand = /** @class */ (function (_super) {
    __extends(GetResourceMetricsCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function GetResourceMetricsCommand(input) {
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
    GetResourceMetricsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "PIClient";
        var commandName = "GetResourceMetricsCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: GetResourceMetricsRequest.filterSensitiveLog,
            outputFilterSensitiveLog: GetResourceMetricsResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    GetResourceMetricsCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1GetResourceMetricsCommand(input, context);
    };
    GetResourceMetricsCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1GetResourceMetricsCommand(output, context);
    };
    return GetResourceMetricsCommand;
}($Command));
export { GetResourceMetricsCommand };
//# sourceMappingURL=GetResourceMetricsCommand.js.map