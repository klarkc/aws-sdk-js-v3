import { __extends } from "tslib";
import { DescribeEventsForOrganizationRequest, DescribeEventsForOrganizationResponse } from "../models/models_0";
import { deserializeAws_json1_1DescribeEventsForOrganizationCommand, serializeAws_json1_1DescribeEventsForOrganizationCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Returns information about events across your organization in AWS Organizations. You can use
 *             the<code>filters</code> parameter to specify the events that you want to return. Events
 *          are returned in a summary form and don't include the affected accounts, detailed
 *          description, any additional metadata that depends on the event type, or any affected
 *          resources. To retrieve that information, use the following operations:</p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/health/latest/APIReference/API_DescribeAffectedAccountsForOrganization.html">DescribeAffectedAccountsForOrganization</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/health/latest/APIReference/API_DescribeEventDetailsForOrganization.html">DescribeEventDetailsForOrganization</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/health/latest/APIReference/API_DescribeAffectedEntitiesForOrganization.html">DescribeAffectedEntitiesForOrganization</a>
 *                </p>
 *             </li>
 *          </ul>
 *          <p>If you don't specify a <code>filter</code>, the
 *             <code>DescribeEventsForOrganizations</code> returns all events across your organization.
 *          Results are sorted by <code>lastModifiedTime</code>, starting with the most recent event. </p>
 *          <p>For more information about the different types of AWS Health events, see <a href="https://docs.aws.amazon.com/health/latest/APIReference/API_Event.html">Event</a>.</p>
 *          <p>Before you can call this operation, you must first enable AWS Health to work with
 *          AWS Organizations. To do this, call the <a href="https://docs.aws.amazon.com/health/latest/APIReference/API_EnableHealthServiceAccessForOrganization.html">EnableHealthServiceAccessForOrganization</a> operation from your organization's
 *          management account.</p>
 *          <note>
 *             <p>This API operation uses pagination. Specify the <code>nextToken</code> parameter in the next request to return more results.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { HealthClient, DescribeEventsForOrganizationCommand } from "@aws-sdk/client-health"; // ES Modules import
 * // const { HealthClient, DescribeEventsForOrganizationCommand } = require("@aws-sdk/client-health"); // CommonJS import
 * const client = new HealthClient(config);
 * const command = new DescribeEventsForOrganizationCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeEventsForOrganizationCommandInput} for command's `input` shape.
 * @see {@link DescribeEventsForOrganizationCommandOutput} for command's `response` shape.
 * @see {@link HealthClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DescribeEventsForOrganizationCommand = /** @class */ (function (_super) {
    __extends(DescribeEventsForOrganizationCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DescribeEventsForOrganizationCommand(input) {
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
    DescribeEventsForOrganizationCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "HealthClient";
        var commandName = "DescribeEventsForOrganizationCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DescribeEventsForOrganizationRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DescribeEventsForOrganizationResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DescribeEventsForOrganizationCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1DescribeEventsForOrganizationCommand(input, context);
    };
    DescribeEventsForOrganizationCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1DescribeEventsForOrganizationCommand(output, context);
    };
    return DescribeEventsForOrganizationCommand;
}($Command));
export { DescribeEventsForOrganizationCommand };
//# sourceMappingURL=DescribeEventsForOrganizationCommand.js.map