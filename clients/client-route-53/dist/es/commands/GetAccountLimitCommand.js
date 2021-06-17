import { __extends } from "tslib";
import { GetAccountLimitRequest, GetAccountLimitResponse } from "../models/models_0";
import { deserializeAws_restXmlGetAccountLimitCommand, serializeAws_restXmlGetAccountLimitCommand, } from "../protocols/Aws_restXml";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Gets the specified limit for the current account, for example, the maximum number of health checks that you
 * 			can create using the account.</p>
 * 		       <p>For the default limit, see <a href="https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/DNSLimitations.html">Limits</a>
 * 			in the <i>Amazon Route 53 Developer Guide</i>. To request a higher limit,
 * 			<a href="https://console.aws.amazon.com/support/home#/case/create?issueType=service-limit-increase&limitType=service-code-route53">open a case</a>.</p>
 * 		       <note>
 *             <p>You can also view account limits in AWS Trusted Advisor. Sign in to the AWS Management Console and open the Trusted Advisor console at
 * 			<a href="https://console.aws.amazon.com/trustedadvisor">https://console.aws.amazon.com/trustedadvisor/</a>. Then choose
 * 			<b>Service limits</b> in the navigation pane.</p>
 * 		       </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Route53Client, GetAccountLimitCommand } from "@aws-sdk/client-route-53"; // ES Modules import
 * // const { Route53Client, GetAccountLimitCommand } = require("@aws-sdk/client-route-53"); // CommonJS import
 * const client = new Route53Client(config);
 * const command = new GetAccountLimitCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetAccountLimitCommandInput} for command's `input` shape.
 * @see {@link GetAccountLimitCommandOutput} for command's `response` shape.
 * @see {@link Route53ClientResolvedConfig | config} for command's `input` shape.
 *
 */
var GetAccountLimitCommand = /** @class */ (function (_super) {
    __extends(GetAccountLimitCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function GetAccountLimitCommand(input) {
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
    GetAccountLimitCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "Route53Client";
        var commandName = "GetAccountLimitCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: GetAccountLimitRequest.filterSensitiveLog,
            outputFilterSensitiveLog: GetAccountLimitResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    GetAccountLimitCommand.prototype.serialize = function (input, context) {
        return serializeAws_restXmlGetAccountLimitCommand(input, context);
    };
    GetAccountLimitCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restXmlGetAccountLimitCommand(output, context);
    };
    return GetAccountLimitCommand;
}($Command));
export { GetAccountLimitCommand };
//# sourceMappingURL=GetAccountLimitCommand.js.map