import { __extends } from "tslib";
import { ListAccountsForParentRequest, ListAccountsForParentResponse } from "../models/models_0";
import { deserializeAws_json1_1ListAccountsForParentCommand, serializeAws_json1_1ListAccountsForParentCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Lists the accounts in an organization that are contained by the specified target root
 *             or organizational unit (OU). If you specify the root, you get a list of all the accounts
 *             that aren't in any OU. If you specify an OU, you get a list of all the accounts in only
 *             that OU and not in any child OUs. To get a list of all accounts in the organization, use
 *             the <a>ListAccounts</a> operation.</p>
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
 * import { OrganizationsClient, ListAccountsForParentCommand } from "@aws-sdk/client-organizations"; // ES Modules import
 * // const { OrganizationsClient, ListAccountsForParentCommand } = require("@aws-sdk/client-organizations"); // CommonJS import
 * const client = new OrganizationsClient(config);
 * const command = new ListAccountsForParentCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListAccountsForParentCommandInput} for command's `input` shape.
 * @see {@link ListAccountsForParentCommandOutput} for command's `response` shape.
 * @see {@link OrganizationsClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ListAccountsForParentCommand = /** @class */ (function (_super) {
    __extends(ListAccountsForParentCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function ListAccountsForParentCommand(input) {
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
    ListAccountsForParentCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "OrganizationsClient";
        var commandName = "ListAccountsForParentCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: ListAccountsForParentRequest.filterSensitiveLog,
            outputFilterSensitiveLog: ListAccountsForParentResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    ListAccountsForParentCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1ListAccountsForParentCommand(input, context);
    };
    ListAccountsForParentCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1ListAccountsForParentCommand(output, context);
    };
    return ListAccountsForParentCommand;
}($Command));
export { ListAccountsForParentCommand };
//# sourceMappingURL=ListAccountsForParentCommand.js.map