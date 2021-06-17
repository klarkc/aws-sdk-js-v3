import { __extends } from "tslib";
import { ListChildrenRequest, ListChildrenResponse } from "../models/models_0";
import { deserializeAws_json1_1ListChildrenCommand, serializeAws_json1_1ListChildrenCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Lists all of the organizational units (OUs) or accounts that are contained in the
 *             specified parent OU or root. This operation, along with <a>ListParents</a>
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
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { OrganizationsClient, ListChildrenCommand } from "@aws-sdk/client-organizations"; // ES Modules import
 * // const { OrganizationsClient, ListChildrenCommand } = require("@aws-sdk/client-organizations"); // CommonJS import
 * const client = new OrganizationsClient(config);
 * const command = new ListChildrenCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListChildrenCommandInput} for command's `input` shape.
 * @see {@link ListChildrenCommandOutput} for command's `response` shape.
 * @see {@link OrganizationsClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ListChildrenCommand = /** @class */ (function (_super) {
    __extends(ListChildrenCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function ListChildrenCommand(input) {
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
    ListChildrenCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "OrganizationsClient";
        var commandName = "ListChildrenCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: ListChildrenRequest.filterSensitiveLog,
            outputFilterSensitiveLog: ListChildrenResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    ListChildrenCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1ListChildrenCommand(input, context);
    };
    ListChildrenCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1ListChildrenCommand(output, context);
    };
    return ListChildrenCommand;
}($Command));
export { ListChildrenCommand };
//# sourceMappingURL=ListChildrenCommand.js.map