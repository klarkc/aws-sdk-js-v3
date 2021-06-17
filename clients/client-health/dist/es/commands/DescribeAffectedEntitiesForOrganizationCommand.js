import { __extends } from "tslib";
import { DescribeAffectedEntitiesForOrganizationRequest, DescribeAffectedEntitiesForOrganizationResponse, } from "../models/models_0";
import { deserializeAws_json1_1DescribeAffectedEntitiesForOrganizationCommand, serializeAws_json1_1DescribeAffectedEntitiesForOrganizationCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Returns a list of entities that have been affected by one or more events for one or more
 *          accounts in your organization in AWS Organizations, based on the filter criteria. Entities can refer
 *          to individual customer resources, groups of customer resources, or any other construct,
 *          depending on the AWS service.</p>
 *          <p>At least one event Amazon Resource Name (ARN) and account ID are required. Results are
 *          sorted by the <code>lastUpdatedTime</code> of the entity, starting with the most
 *          recent.</p>
 *          <p>Before you can call this operation, you must first enable AWS Health to work with
 *          AWS Organizations. To do this, call the <a href="https://docs.aws.amazon.com/health/latest/APIReference/API_EnableHealthServiceAccessForOrganization.html">EnableHealthServiceAccessForOrganization</a>
 *          operation from your organization's management account.</p>
 *          <note>
 *             <ul>
 *                <li>
 *                   <p>This API operation uses pagination. Specify the <code>nextToken</code> parameter in the next request to return more results.</p>
 *                </li>
 *                <li>
 *                   <p>This operation doesn't support resource-level permissions. You can't use this operation to allow or deny access to specific AWS Health events. For more
 *                   information, see <a href="https://docs.aws.amazon.com/health/latest/ug/security_iam_id-based-policy-examples.html#resource-action-based-conditions">Resource- and action-based conditions</a> in the <i>AWS Health User Guide</i>.</p>
 *                </li>
 *             </ul>
 *
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { HealthClient, DescribeAffectedEntitiesForOrganizationCommand } from "@aws-sdk/client-health"; // ES Modules import
 * // const { HealthClient, DescribeAffectedEntitiesForOrganizationCommand } = require("@aws-sdk/client-health"); // CommonJS import
 * const client = new HealthClient(config);
 * const command = new DescribeAffectedEntitiesForOrganizationCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeAffectedEntitiesForOrganizationCommandInput} for command's `input` shape.
 * @see {@link DescribeAffectedEntitiesForOrganizationCommandOutput} for command's `response` shape.
 * @see {@link HealthClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DescribeAffectedEntitiesForOrganizationCommand = /** @class */ (function (_super) {
    __extends(DescribeAffectedEntitiesForOrganizationCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DescribeAffectedEntitiesForOrganizationCommand(input) {
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
    DescribeAffectedEntitiesForOrganizationCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "HealthClient";
        var commandName = "DescribeAffectedEntitiesForOrganizationCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DescribeAffectedEntitiesForOrganizationRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DescribeAffectedEntitiesForOrganizationResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DescribeAffectedEntitiesForOrganizationCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1DescribeAffectedEntitiesForOrganizationCommand(input, context);
    };
    DescribeAffectedEntitiesForOrganizationCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1DescribeAffectedEntitiesForOrganizationCommand(output, context);
    };
    return DescribeAffectedEntitiesForOrganizationCommand;
}($Command));
export { DescribeAffectedEntitiesForOrganizationCommand };
//# sourceMappingURL=DescribeAffectedEntitiesForOrganizationCommand.js.map