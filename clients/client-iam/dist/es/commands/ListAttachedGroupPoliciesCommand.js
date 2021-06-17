import { __extends } from "tslib";
import { ListAttachedGroupPoliciesRequest, ListAttachedGroupPoliciesResponse } from "../models/models_0";
import { deserializeAws_queryListAttachedGroupPoliciesCommand, serializeAws_queryListAttachedGroupPoliciesCommand, } from "../protocols/Aws_query";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Lists all managed policies that are attached to the specified IAM group.</p>
 *         <p>An IAM group can also have inline policies embedded with it. To list the inline
 *             policies for a group, use <a>ListGroupPolicies</a>. For information about
 *             policies, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/policies-managed-vs-inline.html">Managed policies and inline
 *                 policies</a> in the <i>IAM User Guide</i>.</p>
 *         <p>You can paginate the results using the <code>MaxItems</code> and <code>Marker</code>
 *             parameters. You can use the <code>PathPrefix</code> parameter to limit the list of
 *             policies to only those matching the specified path prefix. If there are no policies
 *             attached to the specified group (or none that match the specified path prefix), the
 *             operation returns an empty list.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IAMClient, ListAttachedGroupPoliciesCommand } from "@aws-sdk/client-iam"; // ES Modules import
 * // const { IAMClient, ListAttachedGroupPoliciesCommand } = require("@aws-sdk/client-iam"); // CommonJS import
 * const client = new IAMClient(config);
 * const command = new ListAttachedGroupPoliciesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListAttachedGroupPoliciesCommandInput} for command's `input` shape.
 * @see {@link ListAttachedGroupPoliciesCommandOutput} for command's `response` shape.
 * @see {@link IAMClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ListAttachedGroupPoliciesCommand = /** @class */ (function (_super) {
    __extends(ListAttachedGroupPoliciesCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function ListAttachedGroupPoliciesCommand(input) {
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
    ListAttachedGroupPoliciesCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "IAMClient";
        var commandName = "ListAttachedGroupPoliciesCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: ListAttachedGroupPoliciesRequest.filterSensitiveLog,
            outputFilterSensitiveLog: ListAttachedGroupPoliciesResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    ListAttachedGroupPoliciesCommand.prototype.serialize = function (input, context) {
        return serializeAws_queryListAttachedGroupPoliciesCommand(input, context);
    };
    ListAttachedGroupPoliciesCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_queryListAttachedGroupPoliciesCommand(output, context);
    };
    return ListAttachedGroupPoliciesCommand;
}($Command));
export { ListAttachedGroupPoliciesCommand };
//# sourceMappingURL=ListAttachedGroupPoliciesCommand.js.map