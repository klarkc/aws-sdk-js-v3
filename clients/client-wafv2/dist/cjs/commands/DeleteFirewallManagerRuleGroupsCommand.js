"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteFirewallManagerRuleGroupsCommand = void 0;
const models_0_1 = require("../models/models_0");
const Aws_json1_1_1 = require("../protocols/Aws_json1_1");
const middleware_serde_1 = require("@aws-sdk/middleware-serde");
const smithy_client_1 = require("@aws-sdk/smithy-client");
/**
 * <p>Deletes all rule groups that are managed by AWS Firewall Manager for the specified web ACL. </p>
 *          <p>You can only use this if <code>ManagedByFirewallManager</code> is false in the specified <a>WebACL</a>.  </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WAFV2Client, DeleteFirewallManagerRuleGroupsCommand } from "@aws-sdk/client-wafv2"; // ES Modules import
 * // const { WAFV2Client, DeleteFirewallManagerRuleGroupsCommand } = require("@aws-sdk/client-wafv2"); // CommonJS import
 * const client = new WAFV2Client(config);
 * const command = new DeleteFirewallManagerRuleGroupsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteFirewallManagerRuleGroupsCommandInput} for command's `input` shape.
 * @see {@link DeleteFirewallManagerRuleGroupsCommandOutput} for command's `response` shape.
 * @see {@link WAFV2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
class DeleteFirewallManagerRuleGroupsCommand extends smithy_client_1.Command {
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
        const clientName = "WAFV2Client";
        const commandName = "DeleteFirewallManagerRuleGroupsCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: models_0_1.DeleteFirewallManagerRuleGroupsRequest.filterSensitiveLog,
            outputFilterSensitiveLog: models_0_1.DeleteFirewallManagerRuleGroupsResponse.filterSensitiveLog,
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return Aws_json1_1_1.serializeAws_json1_1DeleteFirewallManagerRuleGroupsCommand(input, context);
    }
    deserialize(output, context) {
        return Aws_json1_1_1.deserializeAws_json1_1DeleteFirewallManagerRuleGroupsCommand(output, context);
    }
}
exports.DeleteFirewallManagerRuleGroupsCommand = DeleteFirewallManagerRuleGroupsCommand;
//# sourceMappingURL=DeleteFirewallManagerRuleGroupsCommand.js.map