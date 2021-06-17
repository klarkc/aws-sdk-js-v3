import { __extends } from "tslib";
import { DeprecateWorkflowTypeInput } from "../models/models_0";
import { deserializeAws_json1_0DeprecateWorkflowTypeCommand, serializeAws_json1_0DeprecateWorkflowTypeCommand, } from "../protocols/Aws_json1_0";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Deprecates the specified <i>workflow type</i>. After a workflow type has
 *       been deprecated, you cannot create new executions of that type. Executions that were started
 *       before the type was deprecated continues to run. A deprecated workflow type may still be used
 *       when calling visibility actions.</p>
 *          <note>
 *             <p>This operation is eventually consistent. The results are best effort and may not
 *         exactly reflect recent updates and changes.</p>
 *          </note>
 *          <p>
 *             <b>Access Control</b>
 *          </p>
 *          <p>You can use IAM policies to control this action's access to Amazon SWF resources as
 *       follows:</p>
 *          <ul>
 *             <li>
 *                <p>Use a <code>Resource</code> element with the domain name to limit the action to
 *           only specified domains.</p>
 *             </li>
 *             <li>
 *                <p>Use an <code>Action</code> element to allow or deny permission to call this
 *           action.</p>
 *             </li>
 *             <li>
 *                <p>Constrain the following parameters by using a <code>Condition</code> element with
 *           the appropriate keys.</p>
 *                <ul>
 *                   <li>
 *                      <p>
 *                         <code>workflowType.name</code>: String constraint. The key is
 *                 <code>swf:workflowType.name</code>.</p>
 *                   </li>
 *                   <li>
 *                      <p>
 *                         <code>workflowType.version</code>: String constraint. The key is
 *                 <code>swf:workflowType.version</code>.</p>
 *                   </li>
 *                </ul>
 *             </li>
 *          </ul>
 *          <p>If the caller doesn't have sufficient permissions to invoke the action, or the
 *       parameter values fall outside the specified constraints, the action fails. The associated
 *       event attribute's <code>cause</code> parameter is set to <code>OPERATION_NOT_PERMITTED</code>.
 *       For details and example IAM policies, see <a href="https://docs.aws.amazon.com/amazonswf/latest/developerguide/swf-dev-iam.html">Using IAM to Manage Access to Amazon SWF
 *         Workflows</a> in the <i>Amazon SWF Developer Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SWFClient, DeprecateWorkflowTypeCommand } from "@aws-sdk/client-swf"; // ES Modules import
 * // const { SWFClient, DeprecateWorkflowTypeCommand } = require("@aws-sdk/client-swf"); // CommonJS import
 * const client = new SWFClient(config);
 * const command = new DeprecateWorkflowTypeCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeprecateWorkflowTypeCommandInput} for command's `input` shape.
 * @see {@link DeprecateWorkflowTypeCommandOutput} for command's `response` shape.
 * @see {@link SWFClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DeprecateWorkflowTypeCommand = /** @class */ (function (_super) {
    __extends(DeprecateWorkflowTypeCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DeprecateWorkflowTypeCommand(input) {
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
    DeprecateWorkflowTypeCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "SWFClient";
        var commandName = "DeprecateWorkflowTypeCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DeprecateWorkflowTypeInput.filterSensitiveLog,
            outputFilterSensitiveLog: function (output) { return output; },
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DeprecateWorkflowTypeCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_0DeprecateWorkflowTypeCommand(input, context);
    };
    DeprecateWorkflowTypeCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_0DeprecateWorkflowTypeCommand(output, context);
    };
    return DeprecateWorkflowTypeCommand;
}($Command));
export { DeprecateWorkflowTypeCommand };
//# sourceMappingURL=DeprecateWorkflowTypeCommand.js.map