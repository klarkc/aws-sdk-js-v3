import { __extends } from "tslib";
import { ListTargetsForPolicyRequest, ListTargetsForPolicyResponse } from "../models/models_0";
import { deserializeAws_json1_1ListTargetsForPolicyCommand, serializeAws_json1_1ListTargetsForPolicyCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Lists all the roots, organizational units (OUs), and accounts that the specified
 *             policy is attached to.</p>
 *         <note>
 *             <p>Always check the <code>NextToken</code> response parameter
 * for a <code>null</code> value when calling a <code>List*</code> operation. These operations can
 * occasionally return an empty set of results even when there are more results available. The
 * <code>NextToken</code> response parameter value is <code>null</code>
 *                <i>only</i>
 * when there are no more results to display.</p>
 *          </note>
 *         <p>This operation can be called only from the organization's
 * management account or by a member account that is a delegated administrator for an AWS service.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { OrganizationsClient, ListTargetsForPolicyCommand } from "@aws-sdk/client-organizations"; // ES Modules import
 * // const { OrganizationsClient, ListTargetsForPolicyCommand } = require("@aws-sdk/client-organizations"); // CommonJS import
 * const client = new OrganizationsClient(config);
 * const command = new ListTargetsForPolicyCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListTargetsForPolicyCommandInput} for command's `input` shape.
 * @see {@link ListTargetsForPolicyCommandOutput} for command's `response` shape.
 * @see {@link OrganizationsClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ListTargetsForPolicyCommand = /** @class */ (function (_super) {
    __extends(ListTargetsForPolicyCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function ListTargetsForPolicyCommand(input) {
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
    ListTargetsForPolicyCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "OrganizationsClient";
        var commandName = "ListTargetsForPolicyCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: ListTargetsForPolicyRequest.filterSensitiveLog,
            outputFilterSensitiveLog: ListTargetsForPolicyResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    ListTargetsForPolicyCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1ListTargetsForPolicyCommand(input, context);
    };
    ListTargetsForPolicyCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1ListTargetsForPolicyCommand(output, context);
    };
    return ListTargetsForPolicyCommand;
}($Command));
export { ListTargetsForPolicyCommand };
//# sourceMappingURL=ListTargetsForPolicyCommand.js.map