"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DescribeRuleGroupCommand = void 0;
const models_0_1 = require("../models/models_0");
const Aws_json1_0_1 = require("../protocols/Aws_json1_0");
const middleware_serde_1 = require("@aws-sdk/middleware-serde");
const smithy_client_1 = require("@aws-sdk/smithy-client");
/**
 * <p>Returns the data objects for the specified rule group. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { NetworkFirewallClient, DescribeRuleGroupCommand } from "@aws-sdk/client-network-firewall"; // ES Modules import
 * // const { NetworkFirewallClient, DescribeRuleGroupCommand } = require("@aws-sdk/client-network-firewall"); // CommonJS import
 * const client = new NetworkFirewallClient(config);
 * const command = new DescribeRuleGroupCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeRuleGroupCommandInput} for command's `input` shape.
 * @see {@link DescribeRuleGroupCommandOutput} for command's `response` shape.
 * @see {@link NetworkFirewallClientResolvedConfig | config} for command's `input` shape.
 *
 */
class DescribeRuleGroupCommand extends smithy_client_1.Command {
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
        const clientName = "NetworkFirewallClient";
        const commandName = "DescribeRuleGroupCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: models_0_1.DescribeRuleGroupRequest.filterSensitiveLog,
            outputFilterSensitiveLog: models_0_1.DescribeRuleGroupResponse.filterSensitiveLog,
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return Aws_json1_0_1.serializeAws_json1_0DescribeRuleGroupCommand(input, context);
    }
    deserialize(output, context) {
        return Aws_json1_0_1.deserializeAws_json1_0DescribeRuleGroupCommand(output, context);
    }
}
exports.DescribeRuleGroupCommand = DescribeRuleGroupCommand;
//# sourceMappingURL=DescribeRuleGroupCommand.js.map