import { __extends } from "tslib";
import { ListPoliciesForTargetRequest, ListPoliciesForTargetResponse } from "../models/models_0";
import { deserializeAws_json1_1ListPoliciesForTargetCommand, serializeAws_json1_1ListPoliciesForTargetCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Lists the policies that are directly attached to the specified target root,
 *             organizational unit (OU), or account. You must specify the policy type that you want
 *             included in the returned list.</p>
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
 * import { OrganizationsClient, ListPoliciesForTargetCommand } from "@aws-sdk/client-organizations"; // ES Modules import
 * // const { OrganizationsClient, ListPoliciesForTargetCommand } = require("@aws-sdk/client-organizations"); // CommonJS import
 * const client = new OrganizationsClient(config);
 * const command = new ListPoliciesForTargetCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListPoliciesForTargetCommandInput} for command's `input` shape.
 * @see {@link ListPoliciesForTargetCommandOutput} for command's `response` shape.
 * @see {@link OrganizationsClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ListPoliciesForTargetCommand = /** @class */ (function (_super) {
    __extends(ListPoliciesForTargetCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function ListPoliciesForTargetCommand(input) {
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
    ListPoliciesForTargetCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "OrganizationsClient";
        var commandName = "ListPoliciesForTargetCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: ListPoliciesForTargetRequest.filterSensitiveLog,
            outputFilterSensitiveLog: ListPoliciesForTargetResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    ListPoliciesForTargetCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1ListPoliciesForTargetCommand(input, context);
    };
    ListPoliciesForTargetCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1ListPoliciesForTargetCommand(output, context);
    };
    return ListPoliciesForTargetCommand;
}($Command));
export { ListPoliciesForTargetCommand };
//# sourceMappingURL=ListPoliciesForTargetCommand.js.map