"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PutPolicyCommand = void 0;
const models_0_1 = require("../models/models_0");
const Aws_json1_1_1 = require("../protocols/Aws_json1_1");
const middleware_serde_1 = require("@aws-sdk/middleware-serde");
const smithy_client_1 = require("@aws-sdk/smithy-client");
/**
 * <p>Creates an AWS Firewall Manager policy.</p>
 *          <p>Firewall Manager provides the following types of policies: </p>
 *          <ul>
 *             <li>
 *                <p>An AWS WAF policy (type WAFV2), which defines rule groups to run first in the
 *               corresponding AWS WAF web ACL and rule groups to run last in the web ACL.</p>
 *             </li>
 *             <li>
 *                <p>An AWS WAF Classic policy (type WAF), which defines a rule group. </p>
 *             </li>
 *             <li>
 *                <p>A Shield Advanced policy, which applies Shield Advanced protection to specified
 *           accounts and resources.</p>
 *             </li>
 *             <li>
 *                <p>A security group policy, which manages VPC security groups across your AWS
 *           organization. </p>
 *             </li>
 *             <li>
 *                <p>An AWS Network Firewall policy, which provides firewall rules to filter network traffic in specified
 *           Amazon VPCs.</p>
 *             </li>
 *          </ul>
 *          <p>Each policy is specific to one of the types. If you want to enforce more than one
 *       policy type across accounts, create multiple policies. You can create multiple
 *       policies for each type.</p>
 *          <p>You must be subscribed to Shield Advanced to create a Shield Advanced policy. For more
 *         information about subscribing to Shield Advanced, see
 *     <a href="https://docs.aws.amazon.com/waf/latest/DDOSAPIReference/API_CreateSubscription.html">CreateSubscription</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { FMSClient, PutPolicyCommand } from "@aws-sdk/client-fms"; // ES Modules import
 * // const { FMSClient, PutPolicyCommand } = require("@aws-sdk/client-fms"); // CommonJS import
 * const client = new FMSClient(config);
 * const command = new PutPolicyCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link PutPolicyCommandInput} for command's `input` shape.
 * @see {@link PutPolicyCommandOutput} for command's `response` shape.
 * @see {@link FMSClientResolvedConfig | config} for command's `input` shape.
 *
 */
class PutPolicyCommand extends smithy_client_1.Command {
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
        const clientName = "FMSClient";
        const commandName = "PutPolicyCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: models_0_1.PutPolicyRequest.filterSensitiveLog,
            outputFilterSensitiveLog: models_0_1.PutPolicyResponse.filterSensitiveLog,
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return Aws_json1_1_1.serializeAws_json1_1PutPolicyCommand(input, context);
    }
    deserialize(output, context) {
        return Aws_json1_1_1.deserializeAws_json1_1PutPolicyCommand(output, context);
    }
}
exports.PutPolicyCommand = PutPolicyCommand;
//# sourceMappingURL=PutPolicyCommand.js.map