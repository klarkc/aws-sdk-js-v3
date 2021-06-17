"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PutFirewallRuleGroupPolicyCommand = void 0;
const models_0_1 = require("../models/models_0");
const Aws_json1_1_1 = require("../protocols/Aws_json1_1");
const middleware_serde_1 = require("@aws-sdk/middleware-serde");
const smithy_client_1 = require("@aws-sdk/smithy-client");
/**
 * <p>Attaches an AWS Identity and Access Management (AWS IAM) policy for sharing the rule
 * 			group. You can use the policy to share the rule group using AWS Resource Access Manager
 * 			(AWS RAM). </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Route53ResolverClient, PutFirewallRuleGroupPolicyCommand } from "@aws-sdk/client-route53resolver"; // ES Modules import
 * // const { Route53ResolverClient, PutFirewallRuleGroupPolicyCommand } = require("@aws-sdk/client-route53resolver"); // CommonJS import
 * const client = new Route53ResolverClient(config);
 * const command = new PutFirewallRuleGroupPolicyCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link PutFirewallRuleGroupPolicyCommandInput} for command's `input` shape.
 * @see {@link PutFirewallRuleGroupPolicyCommandOutput} for command's `response` shape.
 * @see {@link Route53ResolverClientResolvedConfig | config} for command's `input` shape.
 *
 */
class PutFirewallRuleGroupPolicyCommand extends smithy_client_1.Command {
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
        const clientName = "Route53ResolverClient";
        const commandName = "PutFirewallRuleGroupPolicyCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: models_0_1.PutFirewallRuleGroupPolicyRequest.filterSensitiveLog,
            outputFilterSensitiveLog: models_0_1.PutFirewallRuleGroupPolicyResponse.filterSensitiveLog,
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return Aws_json1_1_1.serializeAws_json1_1PutFirewallRuleGroupPolicyCommand(input, context);
    }
    deserialize(output, context) {
        return Aws_json1_1_1.deserializeAws_json1_1PutFirewallRuleGroupPolicyCommand(output, context);
    }
}
exports.PutFirewallRuleGroupPolicyCommand = PutFirewallRuleGroupPolicyCommand;
//# sourceMappingURL=PutFirewallRuleGroupPolicyCommand.js.map