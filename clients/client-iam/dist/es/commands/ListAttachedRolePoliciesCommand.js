import { __extends } from "tslib";
import { ListAttachedRolePoliciesRequest, ListAttachedRolePoliciesResponse } from "../models/models_0";
import { deserializeAws_queryListAttachedRolePoliciesCommand, serializeAws_queryListAttachedRolePoliciesCommand, } from "../protocols/Aws_query";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Lists all managed policies that are attached to the specified IAM role.</p>
 *         <p>An IAM role can also have inline policies embedded with it. To list the inline
 *             policies for a role, use <a>ListRolePolicies</a>. For information about
 *             policies, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/policies-managed-vs-inline.html">Managed policies and inline
 *                 policies</a> in the <i>IAM User Guide</i>.</p>
 *         <p>You can paginate the results using the <code>MaxItems</code> and <code>Marker</code>
 *             parameters. You can use the <code>PathPrefix</code> parameter to limit the list of
 *             policies to only those matching the specified path prefix. If there are no policies
 *             attached to the specified role (or none that match the specified path prefix), the
 *             operation returns an empty list.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IAMClient, ListAttachedRolePoliciesCommand } from "@aws-sdk/client-iam"; // ES Modules import
 * // const { IAMClient, ListAttachedRolePoliciesCommand } = require("@aws-sdk/client-iam"); // CommonJS import
 * const client = new IAMClient(config);
 * const command = new ListAttachedRolePoliciesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListAttachedRolePoliciesCommandInput} for command's `input` shape.
 * @see {@link ListAttachedRolePoliciesCommandOutput} for command's `response` shape.
 * @see {@link IAMClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ListAttachedRolePoliciesCommand = /** @class */ (function (_super) {
    __extends(ListAttachedRolePoliciesCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function ListAttachedRolePoliciesCommand(input) {
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
    ListAttachedRolePoliciesCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "IAMClient";
        var commandName = "ListAttachedRolePoliciesCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: ListAttachedRolePoliciesRequest.filterSensitiveLog,
            outputFilterSensitiveLog: ListAttachedRolePoliciesResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    ListAttachedRolePoliciesCommand.prototype.serialize = function (input, context) {
        return serializeAws_queryListAttachedRolePoliciesCommand(input, context);
    };
    ListAttachedRolePoliciesCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_queryListAttachedRolePoliciesCommand(output, context);
    };
    return ListAttachedRolePoliciesCommand;
}($Command));
export { ListAttachedRolePoliciesCommand };
//# sourceMappingURL=ListAttachedRolePoliciesCommand.js.map