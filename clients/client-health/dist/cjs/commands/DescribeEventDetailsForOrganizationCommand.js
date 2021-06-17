"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DescribeEventDetailsForOrganizationCommand = void 0;
const models_0_1 = require("../models/models_0");
const Aws_json1_1_1 = require("../protocols/Aws_json1_1");
const middleware_serde_1 = require("@aws-sdk/middleware-serde");
const smithy_client_1 = require("@aws-sdk/smithy-client");
/**
 * <p>Returns detailed information about one or more specified events for one or more AWS
 *          accounts in your organization. This information includes standard event data (such as the
 *          AWS Region and service), an event description, and (depending on the event) possible
 *          metadata. This operation doesn't return affected entities, such as the resources related to
 *          the event. To return affected entities, use the <a href="https://docs.aws.amazon.com/health/latest/APIReference/API_DescribeAffectedEntitiesForOrganization.html">DescribeAffectedEntitiesForOrganization</a> operation.</p>
 *          <note>
 *             <p>Before you can call this operation, you must first enable AWS Health to work with
 *             AWS Organizations. To do this, call the <a href="https://docs.aws.amazon.com/health/latest/APIReference/API_EnableHealthServiceAccessForOrganization.html">EnableHealthServiceAccessForOrganization</a> operation from your organization's
 *             management account.</p>
 *          </note>
 *          <p>When you call the <code>DescribeEventDetailsForOrganization</code> operation, specify
 *          the <code>organizationEventDetailFilters</code> object in the request. Depending on the
 *          AWS Health event type, note the following differences:</p>
 *          <ul>
 *             <li>
 *                <p>To return event details for a public event, you must specify a null value for the
 *                   <code>awsAccountId</code> parameter. If you specify an account ID for a public
 *                event, AWS Health returns an error message because public events aren't specific to
 *                an account.</p>
 *             </li>
 *             <li>
 *                <p>To return event details for an event that is specific to an account in your
 *                organization,  you must specify the <code>awsAccountId</code> parameter in the
 *                request. If you don't specify an account ID, AWS Health returns an error message
 *                because the event is specific to an account in your organization. </p>
 *             </li>
 *          </ul>
 *          <p>For more information, see <a href="https://docs.aws.amazon.com/health/latest/APIReference/API_Event.html">Event</a>.</p>
 *
 *          <note>
 *             <p>This operation doesn't support resource-level permissions. You can't use this operation to allow or deny access to specific AWS Health events. For more
 *                   information, see <a href="https://docs.aws.amazon.com/health/latest/ug/security_iam_id-based-policy-examples.html#resource-action-based-conditions">Resource- and action-based conditions</a> in the <i>AWS Health User Guide</i>.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { HealthClient, DescribeEventDetailsForOrganizationCommand } from "@aws-sdk/client-health"; // ES Modules import
 * // const { HealthClient, DescribeEventDetailsForOrganizationCommand } = require("@aws-sdk/client-health"); // CommonJS import
 * const client = new HealthClient(config);
 * const command = new DescribeEventDetailsForOrganizationCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeEventDetailsForOrganizationCommandInput} for command's `input` shape.
 * @see {@link DescribeEventDetailsForOrganizationCommandOutput} for command's `response` shape.
 * @see {@link HealthClientResolvedConfig | config} for command's `input` shape.
 *
 */
class DescribeEventDetailsForOrganizationCommand extends smithy_client_1.Command {
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
        const commandName = "DescribeEventDetailsForOrganizationCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: models_0_1.DescribeEventDetailsForOrganizationRequest.filterSensitiveLog,
            outputFilterSensitiveLog: models_0_1.DescribeEventDetailsForOrganizationResponse.filterSensitiveLog,
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return Aws_json1_1_1.serializeAws_json1_1DescribeEventDetailsForOrganizationCommand(input, context);
    }
    deserialize(output, context) {
        return Aws_json1_1_1.deserializeAws_json1_1DescribeEventDetailsForOrganizationCommand(output, context);
    }
}
exports.DescribeEventDetailsForOrganizationCommand = DescribeEventDetailsForOrganizationCommand;
//# sourceMappingURL=DescribeEventDetailsForOrganizationCommand.js.map