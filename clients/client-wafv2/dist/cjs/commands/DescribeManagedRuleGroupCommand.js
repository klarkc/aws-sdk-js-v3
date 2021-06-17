"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DescribeManagedRuleGroupCommand = void 0;
const models_0_1 = require("../models/models_0");
const Aws_json1_1_1 = require("../protocols/Aws_json1_1");
const middleware_serde_1 = require("@aws-sdk/middleware-serde");
const smithy_client_1 = require("@aws-sdk/smithy-client");
/**
 * <p>Provides high-level information for a managed rule group, including descriptions of the rules. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WAFV2Client, DescribeManagedRuleGroupCommand } from "@aws-sdk/client-wafv2"; // ES Modules import
 * // const { WAFV2Client, DescribeManagedRuleGroupCommand } = require("@aws-sdk/client-wafv2"); // CommonJS import
 * const client = new WAFV2Client(config);
 * const command = new DescribeManagedRuleGroupCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeManagedRuleGroupCommandInput} for command's `input` shape.
 * @see {@link DescribeManagedRuleGroupCommandOutput} for command's `response` shape.
 * @see {@link WAFV2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
class DescribeManagedRuleGroupCommand extends smithy_client_1.Command {
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
        const commandName = "DescribeManagedRuleGroupCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: models_0_1.DescribeManagedRuleGroupRequest.filterSensitiveLog,
            outputFilterSensitiveLog: models_0_1.DescribeManagedRuleGroupResponse.filterSensitiveLog,
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return Aws_json1_1_1.serializeAws_json1_1DescribeManagedRuleGroupCommand(input, context);
    }
    deserialize(output, context) {
        return Aws_json1_1_1.deserializeAws_json1_1DescribeManagedRuleGroupCommand(output, context);
    }
}
exports.DescribeManagedRuleGroupCommand = DescribeManagedRuleGroupCommand;
//# sourceMappingURL=DescribeManagedRuleGroupCommand.js.map