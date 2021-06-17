import { __extends } from "tslib";
import { GetHostedZoneLimitRequest, GetHostedZoneLimitResponse } from "../models/models_0";
import { deserializeAws_restXmlGetHostedZoneLimitCommand, serializeAws_restXmlGetHostedZoneLimitCommand, } from "../protocols/Aws_restXml";
import { getIdNormalizerPlugin } from "@aws-sdk/middleware-sdk-route53";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Gets the specified limit for a specified hosted zone, for example, the maximum number of records that you
 * 			can create in the hosted zone. </p>
 * 		       <p>For the default limit, see <a href="https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/DNSLimitations.html">Limits</a>
 * 			in the <i>Amazon Route 53 Developer Guide</i>. To request a higher limit,
 * 			<a href="https://console.aws.amazon.com/support/home#/case/create?issueType=service-limit-increase&limitType=service-code-route53">open a case</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Route53Client, GetHostedZoneLimitCommand } from "@aws-sdk/client-route-53"; // ES Modules import
 * // const { Route53Client, GetHostedZoneLimitCommand } = require("@aws-sdk/client-route-53"); // CommonJS import
 * const client = new Route53Client(config);
 * const command = new GetHostedZoneLimitCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetHostedZoneLimitCommandInput} for command's `input` shape.
 * @see {@link GetHostedZoneLimitCommandOutput} for command's `response` shape.
 * @see {@link Route53ClientResolvedConfig | config} for command's `input` shape.
 *
 */
var GetHostedZoneLimitCommand = /** @class */ (function (_super) {
    __extends(GetHostedZoneLimitCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function GetHostedZoneLimitCommand(input) {
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
    GetHostedZoneLimitCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        this.middlewareStack.use(getIdNormalizerPlugin(configuration));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "Route53Client";
        var commandName = "GetHostedZoneLimitCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: GetHostedZoneLimitRequest.filterSensitiveLog,
            outputFilterSensitiveLog: GetHostedZoneLimitResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    GetHostedZoneLimitCommand.prototype.serialize = function (input, context) {
        return serializeAws_restXmlGetHostedZoneLimitCommand(input, context);
    };
    GetHostedZoneLimitCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restXmlGetHostedZoneLimitCommand(output, context);
    };
    return GetHostedZoneLimitCommand;
}($Command));
export { GetHostedZoneLimitCommand };
//# sourceMappingURL=GetHostedZoneLimitCommand.js.map