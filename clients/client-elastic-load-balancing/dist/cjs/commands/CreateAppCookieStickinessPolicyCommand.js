"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateAppCookieStickinessPolicyCommand = void 0;
const models_0_1 = require("../models/models_0");
const Aws_query_1 = require("../protocols/Aws_query");
const middleware_serde_1 = require("@aws-sdk/middleware-serde");
const smithy_client_1 = require("@aws-sdk/smithy-client");
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
class CreateAppCookieStickinessPolicyCommand extends smithy_client_1.Command {
    // Start section: command_properties
    // End section: command_properties
    constructor(input) {
        // Start section: command_constructor
        super();
        this.input = input;
        // End section: command_constructor
    }
    /**
     * @internal
     */
    resolveMiddleware(clientStack, configuration, options) {
        this.middlewareStack.use(middleware_serde_1.getSerdePlugin(configuration, this.serialize, this.deserialize));
        const stack = clientStack.concat(this.middlewareStack);
        const { logger } = configuration;
        const clientName = "ElasticLoadBalancingClient";
        const commandName = "CreateAppCookieStickinessPolicyCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: models_0_1.CreateAppCookieStickinessPolicyInput.filterSensitiveLog,
            outputFilterSensitiveLog: models_0_1.CreateAppCookieStickinessPolicyOutput.filterSensitiveLog,
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return Aws_query_1.serializeAws_queryCreateAppCookieStickinessPolicyCommand(input, context);
    }
    deserialize(output, context) {
        return Aws_query_1.deserializeAws_queryCreateAppCookieStickinessPolicyCommand(output, context);
    }
}
exports.CreateAppCookieStickinessPolicyCommand = CreateAppCookieStickinessPolicyCommand;
//# sourceMappingURL=CreateAppCookieStickinessPolicyCommand.js.map