"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CheckCapacityCommand = void 0;
const models_0_1 = require("../models/models_0");
const Aws_json1_1_1 = require("../protocols/Aws_json1_1");
const middleware_serde_1 = require("@aws-sdk/middleware-serde");
const smithy_client_1 = require("@aws-sdk/smithy-client");
/**
 * <p>Returns the web ACL capacity unit (WCU) requirements for a specified scope and set of rules.
 *          You can use this to check the capacity requirements for the rules you want to use in a
 *          <a>RuleGroup</a> or <a>WebACL</a>.
 *          </p>
 *          <p>AWS WAF uses WCUs to calculate and control the operating
 *          resources that are used to run your rules, rule groups, and web ACLs. AWS WAF
 *          calculates capacity differently for each rule type, to reflect the relative cost of each rule.
 *          Simple rules that cost little to run use fewer WCUs than more complex rules
 * 				that use more processing power.
 * 				Rule group capacity is fixed at creation, which helps users plan their
 *          web ACL WCU usage when they use a rule group.
 *          The WCU limit for web ACLs is 1,500.  </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WAFV2Client, CheckCapacityCommand } from "@aws-sdk/client-wafv2"; // ES Modules import
 * // const { WAFV2Client, CheckCapacityCommand } = require("@aws-sdk/client-wafv2"); // CommonJS import
 * const client = new WAFV2Client(config);
 * const command = new CheckCapacityCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CheckCapacityCommandInput} for command's `input` shape.
 * @see {@link CheckCapacityCommandOutput} for command's `response` shape.
 * @see {@link WAFV2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
class CheckCapacityCommand extends smithy_client_1.Command {
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
        const commandName = "CheckCapacityCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: models_0_1.CheckCapacityRequest.filterSensitiveLog,
            outputFilterSensitiveLog: models_0_1.CheckCapacityResponse.filterSensitiveLog,
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return Aws_json1_1_1.serializeAws_json1_1CheckCapacityCommand(input, context);
    }
    deserialize(output, context) {
        return Aws_json1_1_1.deserializeAws_json1_1CheckCapacityCommand(output, context);
    }
}
exports.CheckCapacityCommand = CheckCapacityCommand;
//# sourceMappingURL=CheckCapacityCommand.js.map