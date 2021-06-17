import { __extends } from "tslib";
import { DescribeAffectedAccountsForOrganizationRequest, DescribeAffectedAccountsForOrganizationResponse, } from "../models/models_0";
import { deserializeAws_json1_1DescribeAffectedAccountsForOrganizationCommand, serializeAws_json1_1DescribeAffectedAccountsForOrganizationCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Returns a list of accounts in the organization from AWS Organizations that are affected by the
 *          provided event. For more information about the different types of AWS Health events, see
 *             <a href="https://docs.aws.amazon.com/health/latest/APIReference/API_Event.html">Event</a>. </p>
 *          <p>Before you can call this operation, you must first enable AWS Health to work with
 *          AWS Organizations. To do this, call the <a href="https://docs.aws.amazon.com/health/latest/APIReference/API_EnableHealthServiceAccessForOrganization.html">EnableHealthServiceAccessForOrganization</a> operation from your organization's
 *          management account.</p>
 *          <note>
 *             <p>This API operation uses pagination. Specify the <code>nextToken</code> parameter in the next request to return more results.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { HealthClient, DescribeAffectedAccountsForOrganizationCommand } from "@aws-sdk/client-health"; // ES Modules import
 * // const { HealthClient, DescribeAffectedAccountsForOrganizationCommand } = require("@aws-sdk/client-health"); // CommonJS import
 * const client = new HealthClient(config);
 * const command = new DescribeAffectedAccountsForOrganizationCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeAffectedAccountsForOrganizationCommandInput} for command's `input` shape.
 * @see {@link DescribeAffectedAccountsForOrganizationCommandOutput} for command's `response` shape.
 * @see {@link HealthClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DescribeAffectedAccountsForOrganizationCommand = /** @class */ (function (_super) {
    __extends(DescribeAffectedAccountsForOrganizationCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DescribeAffectedAccountsForOrganizationCommand(input) {
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
    DescribeAffectedAccountsForOrganizationCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "HealthClient";
        var commandName = "DescribeAffectedAccountsForOrganizationCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DescribeAffectedAccountsForOrganizationRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DescribeAffectedAccountsForOrganizationResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DescribeAffectedAccountsForOrganizationCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1DescribeAffectedAccountsForOrganizationCommand(input, context);
    };
    DescribeAffectedAccountsForOrganizationCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1DescribeAffectedAccountsForOrganizationCommand(output, context);
    };
    return DescribeAffectedAccountsForOrganizationCommand;
}($Command));
export { DescribeAffectedAccountsForOrganizationCommand };
//# sourceMappingURL=DescribeAffectedAccountsForOrganizationCommand.js.map