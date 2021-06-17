import { __extends } from "tslib";
import { GetReusableDelegationSetLimitRequest, GetReusableDelegationSetLimitResponse } from "../models/models_0";
import { deserializeAws_restXmlGetReusableDelegationSetLimitCommand, serializeAws_restXmlGetReusableDelegationSetLimitCommand, } from "../protocols/Aws_restXml";
import { getIdNormalizerPlugin } from "@aws-sdk/middleware-sdk-route53";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Gets the maximum number of hosted zones that you can associate with the specified reusable delegation set.</p>
 * 		       <p>For the default limit, see <a href="https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/DNSLimitations.html">Limits</a>
 * 			in the <i>Amazon Route 53 Developer Guide</i>. To request a higher limit,
 * 			<a href="https://console.aws.amazon.com/support/home#/case/create?issueType=service-limit-increase&limitType=service-code-route53">open a case</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Route53Client, GetReusableDelegationSetLimitCommand } from "@aws-sdk/client-route-53"; // ES Modules import
 * // const { Route53Client, GetReusableDelegationSetLimitCommand } = require("@aws-sdk/client-route-53"); // CommonJS import
 * const client = new Route53Client(config);
 * const command = new GetReusableDelegationSetLimitCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetReusableDelegationSetLimitCommandInput} for command's `input` shape.
 * @see {@link GetReusableDelegationSetLimitCommandOutput} for command's `response` shape.
 * @see {@link Route53ClientResolvedConfig | config} for command's `input` shape.
 *
 */
var GetReusableDelegationSetLimitCommand = /** @class */ (function (_super) {
    __extends(GetReusableDelegationSetLimitCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function GetReusableDelegationSetLimitCommand(input) {
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
    GetReusableDelegationSetLimitCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        this.middlewareStack.use(getIdNormalizerPlugin(configuration));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "Route53Client";
        var commandName = "GetReusableDelegationSetLimitCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: GetReusableDelegationSetLimitRequest.filterSensitiveLog,
            outputFilterSensitiveLog: GetReusableDelegationSetLimitResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    GetReusableDelegationSetLimitCommand.prototype.serialize = function (input, context) {
        return serializeAws_restXmlGetReusableDelegationSetLimitCommand(input, context);
    };
    GetReusableDelegationSetLimitCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restXmlGetReusableDelegationSetLimitCommand(output, context);
    };
    return GetReusableDelegationSetLimitCommand;
}($Command));
export { GetReusableDelegationSetLimitCommand };
//# sourceMappingURL=GetReusableDelegationSetLimitCommand.js.map