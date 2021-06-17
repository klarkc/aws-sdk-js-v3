import { __extends } from "tslib";
import { CreateAppCookieStickinessPolicyInput, CreateAppCookieStickinessPolicyOutput } from "../models/models_0";
import { deserializeAws_queryCreateAppCookieStickinessPolicyCommand, serializeAws_queryCreateAppCookieStickinessPolicyCommand, } from "../protocols/Aws_query";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Generates a stickiness policy with sticky session lifetimes that follow that of an application-generated cookie. This policy can be associated only with HTTP/HTTPS listeners.</p>
 *         <p>This policy is similar to the policy created by <a>CreateLBCookieStickinessPolicy</a>,
 *             except that the lifetime of the special Elastic Load Balancing cookie, <code>AWSELB</code>,
 *             follows the lifetime of the application-generated cookie specified in the policy configuration.
 *             The load balancer only inserts a new stickiness cookie when the application response
 *             includes a new application cookie.</p>
 *         <p>If the application cookie is explicitly removed or expires, the session stops being sticky until a new application cookie is issued.</p>
 *         <p>For more information, see <a href="https://docs.aws.amazon.com/elasticloadbalancing/latest/classic/elb-sticky-sessions.html#enable-sticky-sessions-application">Application-Controlled Session Stickiness</a>
 *             in the <i>Classic Load Balancers Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ElasticLoadBalancingClient, CreateAppCookieStickinessPolicyCommand } from "@aws-sdk/client-elastic-load-balancing"; // ES Modules import
 * // const { ElasticLoadBalancingClient, CreateAppCookieStickinessPolicyCommand } = require("@aws-sdk/client-elastic-load-balancing"); // CommonJS import
 * const client = new ElasticLoadBalancingClient(config);
 * const command = new CreateAppCookieStickinessPolicyCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateAppCookieStickinessPolicyCommandInput} for command's `input` shape.
 * @see {@link CreateAppCookieStickinessPolicyCommandOutput} for command's `response` shape.
 * @see {@link ElasticLoadBalancingClientResolvedConfig | config} for command's `input` shape.
 *
 */
var CreateAppCookieStickinessPolicyCommand = /** @class */ (function (_super) {
    __extends(CreateAppCookieStickinessPolicyCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function CreateAppCookieStickinessPolicyCommand(input) {
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
    CreateAppCookieStickinessPolicyCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "ElasticLoadBalancingClient";
        var commandName = "CreateAppCookieStickinessPolicyCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: CreateAppCookieStickinessPolicyInput.filterSensitiveLog,
            outputFilterSensitiveLog: CreateAppCookieStickinessPolicyOutput.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    CreateAppCookieStickinessPolicyCommand.prototype.serialize = function (input, context) {
        return serializeAws_queryCreateAppCookieStickinessPolicyCommand(input, context);
    };
    CreateAppCookieStickinessPolicyCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_queryCreateAppCookieStickinessPolicyCommand(output, context);
    };
    return CreateAppCookieStickinessPolicyCommand;
}($Command));
export { CreateAppCookieStickinessPolicyCommand };
//# sourceMappingURL=CreateAppCookieStickinessPolicyCommand.js.map