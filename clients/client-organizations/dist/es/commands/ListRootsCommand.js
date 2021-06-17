import { __extends } from "tslib";
import { ListRootsRequest, ListRootsResponse } from "../models/models_0";
import { deserializeAws_json1_1ListRootsCommand, serializeAws_json1_1ListRootsCommand } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Lists the roots that are defined in the current organization.</p>
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
 *             <p>Policy types can be enabled and disabled in roots. This is distinct from whether
 *                 they're available in the organization. When you enable all features, you make policy
 *                 types available for use in that organization. Individual policy types can then be
 *                 enabled and disabled in a root. To see the availability of a policy type in an
 *                 organization, use <a>DescribeOrganization</a>.</p>
 *         </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { OrganizationsClient, ListRootsCommand } from "@aws-sdk/client-organizations"; // ES Modules import
 * // const { OrganizationsClient, ListRootsCommand } = require("@aws-sdk/client-organizations"); // CommonJS import
 * const client = new OrganizationsClient(config);
 * const command = new ListRootsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListRootsCommandInput} for command's `input` shape.
 * @see {@link ListRootsCommandOutput} for command's `response` shape.
 * @see {@link OrganizationsClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ListRootsCommand = /** @class */ (function (_super) {
    __extends(ListRootsCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function ListRootsCommand(input) {
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
    ListRootsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "OrganizationsClient";
        var commandName = "ListRootsCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: ListRootsRequest.filterSensitiveLog,
            outputFilterSensitiveLog: ListRootsResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    ListRootsCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1ListRootsCommand(input, context);
    };
    ListRootsCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1ListRootsCommand(output, context);
    };
    return ListRootsCommand;
}($Command));
export { ListRootsCommand };
//# sourceMappingURL=ListRootsCommand.js.map