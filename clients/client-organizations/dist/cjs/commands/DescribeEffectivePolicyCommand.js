"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DescribeEffectivePolicyCommand = void 0;
const models_0_1 = require("../models/models_0");
const Aws_json1_1_1 = require("../protocols/Aws_json1_1");
const middleware_serde_1 = require("@aws-sdk/middleware-serde");
const smithy_client_1 = require("@aws-sdk/smithy-client");
/**
 * <p>Returns the contents of the effective policy for specified policy type and account.
 *             The effective policy is the aggregation of any policies of the specified type that the
 *             account inherits, plus any policy of that type that is directly attached to the
 *             account.</p>
 *         <p>This operation applies only to policy types <i>other</i> than service
 *             control policies (SCPs).</p>
 *         <p>For more information about policy inheritance, see <a href="http://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_policies-inheritance.html">How Policy Inheritance
 *                 Works</a> in the <i>AWS Organizations User Guide</i>.</p>
 *         <p>This operation can be called only from the organization's
 * management account or by a member account that is a delegated administrator for an AWS service.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { OrganizationsClient, DescribeEffectivePolicyCommand } from "@aws-sdk/client-organizations"; // ES Modules import
 * // const { OrganizationsClient, DescribeEffectivePolicyCommand } = require("@aws-sdk/client-organizations"); // CommonJS import
 * const client = new OrganizationsClient(config);
 * const command = new DescribeEffectivePolicyCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeEffectivePolicyCommandInput} for command's `input` shape.
 * @see {@link DescribeEffectivePolicyCommandOutput} for command's `response` shape.
 * @see {@link OrganizationsClientResolvedConfig | config} for command's `input` shape.
 *
 */
class DescribeEffectivePolicyCommand extends smithy_client_1.Command {
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
        const clientName = "OrganizationsClient";
        const commandName = "DescribeEffectivePolicyCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: models_0_1.DescribeEffectivePolicyRequest.filterSensitiveLog,
            outputFilterSensitiveLog: models_0_1.DescribeEffectivePolicyResponse.filterSensitiveLog,
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return Aws_json1_1_1.serializeAws_json1_1DescribeEffectivePolicyCommand(input, context);
    }
    deserialize(output, context) {
        return Aws_json1_1_1.deserializeAws_json1_1DescribeEffectivePolicyCommand(output, context);
    }
}
exports.DescribeEffectivePolicyCommand = DescribeEffectivePolicyCommand;
//# sourceMappingURL=DescribeEffectivePolicyCommand.js.map