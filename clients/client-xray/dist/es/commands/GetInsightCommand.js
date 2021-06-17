import { __extends } from "tslib";
import { GetInsightRequest, GetInsightResult } from "../models/models_0";
import { deserializeAws_restJson1GetInsightCommand, serializeAws_restJson1GetInsightCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Retrieves the summary information of an insight. This includes impact to clients and
 *          root cause services, the top anomalous services, the category, the state of the insight,
 *          and the start and end time of the insight.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { XRayClient, GetInsightCommand } from "@aws-sdk/client-xray"; // ES Modules import
 * // const { XRayClient, GetInsightCommand } = require("@aws-sdk/client-xray"); // CommonJS import
 * const client = new XRayClient(config);
 * const command = new GetInsightCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetInsightCommandInput} for command's `input` shape.
 * @see {@link GetInsightCommandOutput} for command's `response` shape.
 * @see {@link XRayClientResolvedConfig | config} for command's `input` shape.
 *
 */
var GetInsightCommand = /** @class */ (function (_super) {
    __extends(GetInsightCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function GetInsightCommand(input) {
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
    GetInsightCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "XRayClient";
        var commandName = "GetInsightCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: GetInsightRequest.filterSensitiveLog,
            outputFilterSensitiveLog: GetInsightResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    GetInsightCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1GetInsightCommand(input, context);
    };
    GetInsightCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1GetInsightCommand(output, context);
    };
    return GetInsightCommand;
}($Command));
export { GetInsightCommand };
//# sourceMappingURL=GetInsightCommand.js.map