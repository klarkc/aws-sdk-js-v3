import { __extends } from "tslib";
import { ListUserPoliciesRequest, ListUserPoliciesResponse } from "../models/models_0";
import { deserializeAws_queryListUserPoliciesCommand, serializeAws_queryListUserPoliciesCommand, } from "../protocols/Aws_query";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Lists the names of the inline policies embedded in the specified IAM user.</p>
 *         <p>An IAM user can also have managed policies attached to it. To list the managed
 *             policies that are attached to a user, use <a>ListAttachedUserPolicies</a>.
 *             For more information about policies, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/policies-managed-vs-inline.html">Managed policies and inline
 *                 policies</a> in the <i>IAM User Guide</i>.</p>
 *         <p>You can paginate the results using the <code>MaxItems</code> and <code>Marker</code>
 *             parameters. If there are no inline policies embedded with the specified user, the
 *             operation returns an empty list.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IAMClient, ListUserPoliciesCommand } from "@aws-sdk/client-iam"; // ES Modules import
 * // const { IAMClient, ListUserPoliciesCommand } = require("@aws-sdk/client-iam"); // CommonJS import
 * const client = new IAMClient(config);
 * const command = new ListUserPoliciesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListUserPoliciesCommandInput} for command's `input` shape.
 * @see {@link ListUserPoliciesCommandOutput} for command's `response` shape.
 * @see {@link IAMClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ListUserPoliciesCommand = /** @class */ (function (_super) {
    __extends(ListUserPoliciesCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function ListUserPoliciesCommand(input) {
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
    ListUserPoliciesCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "IAMClient";
        var commandName = "ListUserPoliciesCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: ListUserPoliciesRequest.filterSensitiveLog,
            outputFilterSensitiveLog: ListUserPoliciesResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    ListUserPoliciesCommand.prototype.serialize = function (input, context) {
        return serializeAws_queryListUserPoliciesCommand(input, context);
    };
    ListUserPoliciesCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_queryListUserPoliciesCommand(output, context);
    };
    return ListUserPoliciesCommand;
}($Command));
export { ListUserPoliciesCommand };
//# sourceMappingURL=ListUserPoliciesCommand.js.map