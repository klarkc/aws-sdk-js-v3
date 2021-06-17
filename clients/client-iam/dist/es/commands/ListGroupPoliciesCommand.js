import { __extends } from "tslib";
import { ListGroupPoliciesRequest, ListGroupPoliciesResponse } from "../models/models_0";
import { deserializeAws_queryListGroupPoliciesCommand, serializeAws_queryListGroupPoliciesCommand, } from "../protocols/Aws_query";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Lists the names of the inline policies that are embedded in the specified IAM
 *             group.</p>
 *         <p>An IAM group can also have managed policies attached to it. To list the managed
 *             policies that are attached to a group, use <a>ListAttachedGroupPolicies</a>.
 *             For more information about policies, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/policies-managed-vs-inline.html">Managed policies and inline
 *                 policies</a> in the <i>IAM User Guide</i>.</p>
 *         <p>You can paginate the results using the <code>MaxItems</code> and <code>Marker</code>
 *             parameters. If there are no inline policies embedded with the specified group, the
 *             operation returns an empty list.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IAMClient, ListGroupPoliciesCommand } from "@aws-sdk/client-iam"; // ES Modules import
 * // const { IAMClient, ListGroupPoliciesCommand } = require("@aws-sdk/client-iam"); // CommonJS import
 * const client = new IAMClient(config);
 * const command = new ListGroupPoliciesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListGroupPoliciesCommandInput} for command's `input` shape.
 * @see {@link ListGroupPoliciesCommandOutput} for command's `response` shape.
 * @see {@link IAMClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ListGroupPoliciesCommand = /** @class */ (function (_super) {
    __extends(ListGroupPoliciesCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function ListGroupPoliciesCommand(input) {
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
    ListGroupPoliciesCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "IAMClient";
        var commandName = "ListGroupPoliciesCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: ListGroupPoliciesRequest.filterSensitiveLog,
            outputFilterSensitiveLog: ListGroupPoliciesResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    ListGroupPoliciesCommand.prototype.serialize = function (input, context) {
        return serializeAws_queryListGroupPoliciesCommand(input, context);
    };
    ListGroupPoliciesCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_queryListGroupPoliciesCommand(output, context);
    };
    return ListGroupPoliciesCommand;
}($Command));
export { ListGroupPoliciesCommand };
//# sourceMappingURL=ListGroupPoliciesCommand.js.map