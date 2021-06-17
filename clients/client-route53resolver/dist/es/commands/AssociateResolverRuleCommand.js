import { __extends } from "tslib";
import { AssociateResolverRuleRequest, AssociateResolverRuleResponse } from "../models/models_0";
import { deserializeAws_json1_1AssociateResolverRuleCommand, serializeAws_json1_1AssociateResolverRuleCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Associates a Resolver rule with a VPC. When you associate a rule with a VPC, Resolver forwards all DNS queries
 * 			for the domain name that is specified in the rule and that originate in the VPC. The queries are forwarded to the
 * 			IP addresses for the DNS resolvers that are specified in the rule. For more information about rules, see
 * 			<a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_CreateResolverRule.html">CreateResolverRule</a>. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Route53ResolverClient, AssociateResolverRuleCommand } from "@aws-sdk/client-route53resolver"; // ES Modules import
 * // const { Route53ResolverClient, AssociateResolverRuleCommand } = require("@aws-sdk/client-route53resolver"); // CommonJS import
 * const client = new Route53ResolverClient(config);
 * const command = new AssociateResolverRuleCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link AssociateResolverRuleCommandInput} for command's `input` shape.
 * @see {@link AssociateResolverRuleCommandOutput} for command's `response` shape.
 * @see {@link Route53ResolverClientResolvedConfig | config} for command's `input` shape.
 *
 */
var AssociateResolverRuleCommand = /** @class */ (function (_super) {
    __extends(AssociateResolverRuleCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function AssociateResolverRuleCommand(input) {
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
    AssociateResolverRuleCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "Route53ResolverClient";
        var commandName = "AssociateResolverRuleCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: AssociateResolverRuleRequest.filterSensitiveLog,
            outputFilterSensitiveLog: AssociateResolverRuleResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    AssociateResolverRuleCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1AssociateResolverRuleCommand(input, context);
    };
    AssociateResolverRuleCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1AssociateResolverRuleCommand(output, context);
    };
    return AssociateResolverRuleCommand;
}($Command));
export { AssociateResolverRuleCommand };
//# sourceMappingURL=AssociateResolverRuleCommand.js.map