import { __extends } from "tslib";
import { GetQueryLoggingConfigRequest, GetQueryLoggingConfigResponse } from "../models/models_0";
import { deserializeAws_restXmlGetQueryLoggingConfigCommand, serializeAws_restXmlGetQueryLoggingConfigCommand, } from "../protocols/Aws_restXml";
import { getIdNormalizerPlugin } from "@aws-sdk/middleware-sdk-route53";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Gets information about a specified configuration for DNS query logging.</p>
 *
 * 		       <p>For more information about DNS query logs, see
 * 			<a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_CreateQueryLoggingConfig.html">CreateQueryLoggingConfig</a>
 * 			and
 * 			<a href="https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/query-logs.html">Logging DNS Queries</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Route53Client, GetQueryLoggingConfigCommand } from "@aws-sdk/client-route-53"; // ES Modules import
 * // const { Route53Client, GetQueryLoggingConfigCommand } = require("@aws-sdk/client-route-53"); // CommonJS import
 * const client = new Route53Client(config);
 * const command = new GetQueryLoggingConfigCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetQueryLoggingConfigCommandInput} for command's `input` shape.
 * @see {@link GetQueryLoggingConfigCommandOutput} for command's `response` shape.
 * @see {@link Route53ClientResolvedConfig | config} for command's `input` shape.
 *
 */
var GetQueryLoggingConfigCommand = /** @class */ (function (_super) {
    __extends(GetQueryLoggingConfigCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function GetQueryLoggingConfigCommand(input) {
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
    GetQueryLoggingConfigCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        this.middlewareStack.use(getIdNormalizerPlugin(configuration));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "Route53Client";
        var commandName = "GetQueryLoggingConfigCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: GetQueryLoggingConfigRequest.filterSensitiveLog,
            outputFilterSensitiveLog: GetQueryLoggingConfigResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    GetQueryLoggingConfigCommand.prototype.serialize = function (input, context) {
        return serializeAws_restXmlGetQueryLoggingConfigCommand(input, context);
    };
    GetQueryLoggingConfigCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restXmlGetQueryLoggingConfigCommand(output, context);
    };
    return GetQueryLoggingConfigCommand;
}($Command));
export { GetQueryLoggingConfigCommand };
//# sourceMappingURL=GetQueryLoggingConfigCommand.js.map