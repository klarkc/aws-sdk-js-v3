import { __extends } from "tslib";
import { ListPoliciesRequest, ListPoliciesResponse } from "../models/models_0";
import { deserializeAws_queryListPoliciesCommand, serializeAws_queryListPoliciesCommand } from "../protocols/Aws_query";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Lists all the managed policies that are available in your AWS account, including
 *             your own customer-defined managed policies and all AWS managed policies.</p>
 *         <p>You can filter the list of policies that is returned using the optional
 *                 <code>OnlyAttached</code>, <code>Scope</code>, and <code>PathPrefix</code>
 *             parameters. For example, to list only the customer managed policies in your AWS
 *             account, set <code>Scope</code> to <code>Local</code>. To list only AWS managed
 *             policies, set <code>Scope</code> to <code>AWS</code>.</p>
 *         <p>You can paginate the results using the <code>MaxItems</code> and <code>Marker</code>
 *             parameters.</p>
 *         <p>For more information about managed policies, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/policies-managed-vs-inline.html">Managed policies and inline
 *                 policies</a> in the <i>IAM User Guide</i>.</p>
 *         <note>
 *             <p>IAM resource-listing operations return a subset of the available
 *    attributes for the resource. For example, this operation does not return tags, even though they are an attribute of the returned object. To view all of the information for a customer manged policy, see
 *                     <a>GetPolicy</a>.</p>
 *         </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IAMClient, ListPoliciesCommand } from "@aws-sdk/client-iam"; // ES Modules import
 * // const { IAMClient, ListPoliciesCommand } = require("@aws-sdk/client-iam"); // CommonJS import
 * const client = new IAMClient(config);
 * const command = new ListPoliciesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListPoliciesCommandInput} for command's `input` shape.
 * @see {@link ListPoliciesCommandOutput} for command's `response` shape.
 * @see {@link IAMClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ListPoliciesCommand = /** @class */ (function (_super) {
    __extends(ListPoliciesCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function ListPoliciesCommand(input) {
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
    ListPoliciesCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "IAMClient";
        var commandName = "ListPoliciesCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: ListPoliciesRequest.filterSensitiveLog,
            outputFilterSensitiveLog: ListPoliciesResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    ListPoliciesCommand.prototype.serialize = function (input, context) {
        return serializeAws_queryListPoliciesCommand(input, context);
    };
    ListPoliciesCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_queryListPoliciesCommand(output, context);
    };
    return ListPoliciesCommand;
}($Command));
export { ListPoliciesCommand };
//# sourceMappingURL=ListPoliciesCommand.js.map