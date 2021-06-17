import { __extends } from "tslib";
import { ListParentsRequest, ListParentsResponse } from "../models/models_0";
import { deserializeAws_json1_1ListParentsCommand, serializeAws_json1_1ListParentsCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Lists the root or organizational units (OUs) that serve as the immediate parent of the
 *             specified child OU or account. This operation, along with <a>ListChildren</a>
 *             enables you to traverse the tree structure that makes up this root.</p>
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
 *         <note>
 *             <p>In the current release, a child can have only a single parent.</p>
 *         </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { OrganizationsClient, ListParentsCommand } from "@aws-sdk/client-organizations"; // ES Modules import
 * // const { OrganizationsClient, ListParentsCommand } = require("@aws-sdk/client-organizations"); // CommonJS import
 * const client = new OrganizationsClient(config);
 * const command = new ListParentsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListParentsCommandInput} for command's `input` shape.
 * @see {@link ListParentsCommandOutput} for command's `response` shape.
 * @see {@link OrganizationsClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ListParentsCommand = /** @class */ (function (_super) {
    __extends(ListParentsCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function ListParentsCommand(input) {
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
    ListParentsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "OrganizationsClient";
        var commandName = "ListParentsCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: ListParentsRequest.filterSensitiveLog,
            outputFilterSensitiveLog: ListParentsResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    ListParentsCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1ListParentsCommand(input, context);
    };
    ListParentsCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1ListParentsCommand(output, context);
    };
    return ListParentsCommand;
}($Command));
export { ListParentsCommand };
//# sourceMappingURL=ListParentsCommand.js.map