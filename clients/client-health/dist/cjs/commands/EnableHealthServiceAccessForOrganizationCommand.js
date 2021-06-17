"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EnableHealthServiceAccessForOrganizationCommand = void 0;
const Aws_json1_1_1 = require("../protocols/Aws_json1_1");
const middleware_serde_1 = require("@aws-sdk/middleware-serde");
const smithy_client_1 = require("@aws-sdk/smithy-client");
/**
 * <p>Enables AWS Health to work with AWS Organizations. You can use the organizational view feature
 *          to aggregate events from all AWS accounts in your organization in a centralized location. </p>
 *          <p>This operation also creates a service-linked role for the management account in the
 *          organization. </p>
 *          <note>
 *             <p>To call this operation, you must meet the following requirements:</p>
 *             <ul>
 *                <li>
 *                   <p>You must have a Business or Enterprise Support plan from <a href="http://aws.amazon.com/premiumsupport/">AWS Support</a> to use the AWS Health
 *                   API. If you call the AWS Health API from an AWS account that doesn't have a
 *                   Business or Enterprise Support plan, you receive a
 *                      <code>SubscriptionRequiredException</code> error.</p>
 *                </li>
 *                <li>
 *                   <p>You must have permission to call this operation from the organization's
 *                   management account. For example IAM policies, see <a href="https://docs.aws.amazon.com/health/latest/ug/security_iam_id-based-policy-examples.html">AWS Health
 *                      identity-based policy examples</a>.</p>
 *                </li>
 *             </ul>
 *          </note>
 *          <p>If you don't have the required support plan, you can instead use the AWS Health console
 *          to enable the organizational view feature. For more information, see <a href="https://docs.aws.amazon.com/health/latest/ug/aggregate-events.html">Aggregating
 *             AWS Health events</a> in the <i>AWS Health User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { HealthClient, EnableHealthServiceAccessForOrganizationCommand } from "@aws-sdk/client-health"; // ES Modules import
 * // const { HealthClient, EnableHealthServiceAccessForOrganizationCommand } = require("@aws-sdk/client-health"); // CommonJS import
 * const client = new HealthClient(config);
 * const command = new EnableHealthServiceAccessForOrganizationCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link EnableHealthServiceAccessForOrganizationCommandInput} for command's `input` shape.
 * @see {@link EnableHealthServiceAccessForOrganizationCommandOutput} for command's `response` shape.
 * @see {@link HealthClientResolvedConfig | config} for command's `input` shape.
 *
 */
class EnableHealthServiceAccessForOrganizationCommand extends smithy_client_1.Command {
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
        const clientName = "HealthClient";
        const commandName = "EnableHealthServiceAccessForOrganizationCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: (input) => input,
            outputFilterSensitiveLog: (output) => output,
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return Aws_json1_1_1.serializeAws_json1_1EnableHealthServiceAccessForOrganizationCommand(input, context);
    }
    deserialize(output, context) {
        return Aws_json1_1_1.deserializeAws_json1_1EnableHealthServiceAccessForOrganizationCommand(output, context);
    }
}
exports.EnableHealthServiceAccessForOrganizationCommand = EnableHealthServiceAccessForOrganizationCommand;
//# sourceMappingURL=EnableHealthServiceAccessForOrganizationCommand.js.map