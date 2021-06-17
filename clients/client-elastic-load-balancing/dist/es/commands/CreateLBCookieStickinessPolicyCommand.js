import { __extends } from "tslib";
import { CreateLBCookieStickinessPolicyInput, CreateLBCookieStickinessPolicyOutput } from "../models/models_0";
import { deserializeAws_queryCreateLBCookieStickinessPolicyCommand, serializeAws_queryCreateLBCookieStickinessPolicyCommand, } from "../protocols/Aws_query";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Generates a stickiness policy with sticky session lifetimes controlled by the lifetime of the browser (user-agent) or a specified expiration period. This policy can be associated only with HTTP/HTTPS listeners.</p>
 *         <p>When a load balancer implements this policy, the load balancer uses a special cookie to track the instance for each request. When the load balancer receives a request, it first checks to see if this cookie is present in the request.
 *             If so, the load balancer sends the request to the application server specified in the cookie. If not, the load balancer sends the request to a server that is chosen based on the existing load-balancing algorithm.</p>
 *         <p>A cookie is inserted into the response for binding subsequent requests from the same user to that server. The validity of the cookie is based on the cookie expiration time, which is specified in the policy configuration.</p>
 *
 *         <p>For more information, see <a href="https://docs.aws.amazon.com/elasticloadbalancing/latest/classic/elb-sticky-sessions.html#enable-sticky-sessions-duration">Duration-Based Session Stickiness</a>
 *             in the <i>Classic Load Balancers Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ElasticLoadBalancingClient, CreateLBCookieStickinessPolicyCommand } from "@aws-sdk/client-elastic-load-balancing"; // ES Modules import
 * // const { ElasticLoadBalancingClient, CreateLBCookieStickinessPolicyCommand } = require("@aws-sdk/client-elastic-load-balancing"); // CommonJS import
 * const client = new ElasticLoadBalancingClient(config);
 * const command = new CreateLBCookieStickinessPolicyCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateLBCookieStickinessPolicyCommandInput} for command's `input` shape.
 * @see {@link CreateLBCookieStickinessPolicyCommandOutput} for command's `response` shape.
 * @see {@link ElasticLoadBalancingClientResolvedConfig | config} for command's `input` shape.
 *
 */
var CreateLBCookieStickinessPolicyCommand = /** @class */ (function (_super) {
    __extends(CreateLBCookieStickinessPolicyCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function CreateLBCookieStickinessPolicyCommand(input) {
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
    CreateLBCookieStickinessPolicyCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "ElasticLoadBalancingClient";
        var commandName = "CreateLBCookieStickinessPolicyCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: CreateLBCookieStickinessPolicyInput.filterSensitiveLog,
            outputFilterSensitiveLog: CreateLBCookieStickinessPolicyOutput.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    CreateLBCookieStickinessPolicyCommand.prototype.serialize = function (input, context) {
        return serializeAws_queryCreateLBCookieStickinessPolicyCommand(input, context);
    };
    CreateLBCookieStickinessPolicyCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_queryCreateLBCookieStickinessPolicyCommand(output, context);
    };
    return CreateLBCookieStickinessPolicyCommand;
}($Command));
export { CreateLBCookieStickinessPolicyCommand };
//# sourceMappingURL=CreateLBCookieStickinessPolicyCommand.js.map