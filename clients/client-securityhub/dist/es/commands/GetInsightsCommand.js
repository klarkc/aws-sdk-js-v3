import { __extends } from "tslib";
import { GetInsightsRequest, GetInsightsResponse } from "../models/models_1";
import { deserializeAws_restJson1GetInsightsCommand, serializeAws_restJson1GetInsightsCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Lists and describes insights for the specified insight ARNs.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SecurityHubClient, GetInsightsCommand } from "@aws-sdk/client-securityhub"; // ES Modules import
 * // const { SecurityHubClient, GetInsightsCommand } = require("@aws-sdk/client-securityhub"); // CommonJS import
 * const client = new SecurityHubClient(config);
 * const command = new GetInsightsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetInsightsCommandInput} for command's `input` shape.
 * @see {@link GetInsightsCommandOutput} for command's `response` shape.
 * @see {@link SecurityHubClientResolvedConfig | config} for command's `input` shape.
 *
 */
var GetInsightsCommand = /** @class */ (function (_super) {
    __extends(GetInsightsCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function GetInsightsCommand(input) {
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
    GetInsightsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "SecurityHubClient";
        var commandName = "GetInsightsCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: GetInsightsRequest.filterSensitiveLog,
            outputFilterSensitiveLog: GetInsightsResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    GetInsightsCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1GetInsightsCommand(input, context);
    };
    GetInsightsCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1GetInsightsCommand(output, context);
    };
    return GetInsightsCommand;
}($Command));
export { GetInsightsCommand };
//# sourceMappingURL=GetInsightsCommand.js.map