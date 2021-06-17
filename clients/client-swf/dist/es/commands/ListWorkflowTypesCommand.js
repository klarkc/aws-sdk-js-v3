import { __extends } from "tslib";
import { ListWorkflowTypesInput, WorkflowTypeInfos } from "../models/models_0";
import { deserializeAws_json1_0ListWorkflowTypesCommand, serializeAws_json1_0ListWorkflowTypesCommand, } from "../protocols/Aws_json1_0";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Returns information about workflow types in the specified domain. The results may be
 *       split into multiple pages that can be retrieved by making the call repeatedly.</p>
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
 *                <p>You cannot use an IAM policy to constrain this action's parameters.</p>
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
 * import { SWFClient, ListWorkflowTypesCommand } from "@aws-sdk/client-swf"; // ES Modules import
 * // const { SWFClient, ListWorkflowTypesCommand } = require("@aws-sdk/client-swf"); // CommonJS import
 * const client = new SWFClient(config);
 * const command = new ListWorkflowTypesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListWorkflowTypesCommandInput} for command's `input` shape.
 * @see {@link ListWorkflowTypesCommandOutput} for command's `response` shape.
 * @see {@link SWFClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ListWorkflowTypesCommand = /** @class */ (function (_super) {
    __extends(ListWorkflowTypesCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function ListWorkflowTypesCommand(input) {
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
    ListWorkflowTypesCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "SWFClient";
        var commandName = "ListWorkflowTypesCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: ListWorkflowTypesInput.filterSensitiveLog,
            outputFilterSensitiveLog: WorkflowTypeInfos.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    ListWorkflowTypesCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_0ListWorkflowTypesCommand(input, context);
    };
    ListWorkflowTypesCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_0ListWorkflowTypesCommand(output, context);
    };
    return ListWorkflowTypesCommand;
}($Command));
export { ListWorkflowTypesCommand };
//# sourceMappingURL=ListWorkflowTypesCommand.js.map