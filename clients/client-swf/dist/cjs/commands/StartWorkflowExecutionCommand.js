"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StartWorkflowExecutionCommand = void 0;
const models_0_1 = require("../models/models_0");
const Aws_json1_0_1 = require("../protocols/Aws_json1_0");
const middleware_serde_1 = require("@aws-sdk/middleware-serde");
const smithy_client_1 = require("@aws-sdk/smithy-client");
/**
 * <p>Starts an execution of the workflow type in the specified domain using the provided
 *         <code>workflowId</code> and input data.</p>
 *
 *          <p>This action returns the newly started workflow execution.</p>
 *
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
 *                         <code>tagList.member.0</code>: The key is <code>swf:tagList.member.0</code>.</p>
 *                   </li>
 *                   <li>
 *                      <p>
 *                         <code>tagList.member.1</code>: The key is <code>swf:tagList.member.1</code>.</p>
 *                   </li>
 *                   <li>
 *                      <p>
 *                         <code>tagList.member.2</code>: The key is <code>swf:tagList.member.2</code>.</p>
 *                   </li>
 *                   <li>
 *                      <p>
 *                         <code>tagList.member.3</code>: The key is <code>swf:tagList.member.3</code>.</p>
 *                   </li>
 *                   <li>
 *                      <p>
 *                         <code>tagList.member.4</code>: The key is <code>swf:tagList.member.4</code>.</p>
 *                   </li>
 *                   <li>
 *                      <p>
 *                         <code>taskList</code>: String constraint. The key is
 *               <code>swf:taskList.name</code>.</p>
 *                   </li>
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
 * import { SWFClient, StartWorkflowExecutionCommand } from "@aws-sdk/client-swf"; // ES Modules import
 * // const { SWFClient, StartWorkflowExecutionCommand } = require("@aws-sdk/client-swf"); // CommonJS import
 * const client = new SWFClient(config);
 * const command = new StartWorkflowExecutionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link StartWorkflowExecutionCommandInput} for command's `input` shape.
 * @see {@link StartWorkflowExecutionCommandOutput} for command's `response` shape.
 * @see {@link SWFClientResolvedConfig | config} for command's `input` shape.
 *
 */
class StartWorkflowExecutionCommand extends smithy_client_1.Command {
    // Start section: command_properties
    // End section: command_properties
    constructor(input) {
        // Start section: command_constructor
        super();
        this.input = input;
        // End section: command_constructor
    }
    /**
     * @internal
     */
    resolveMiddleware(clientStack, configuration, options) {
        this.middlewareStack.use(middleware_serde_1.getSerdePlugin(configuration, this.serialize, this.deserialize));
        const stack = clientStack.concat(this.middlewareStack);
        const { logger } = configuration;
        const clientName = "SWFClient";
        const commandName = "StartWorkflowExecutionCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: models_0_1.StartWorkflowExecutionInput.filterSensitiveLog,
            outputFilterSensitiveLog: models_0_1.Run.filterSensitiveLog,
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return Aws_json1_0_1.serializeAws_json1_0StartWorkflowExecutionCommand(input, context);
    }
    deserialize(output, context) {
        return Aws_json1_0_1.deserializeAws_json1_0StartWorkflowExecutionCommand(output, context);
    }
}
exports.StartWorkflowExecutionCommand = StartWorkflowExecutionCommand;
//# sourceMappingURL=StartWorkflowExecutionCommand.js.map