"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PollForActivityTaskCommand = void 0;
const models_0_1 = require("../models/models_0");
const Aws_json1_0_1 = require("../protocols/Aws_json1_0");
const middleware_serde_1 = require("@aws-sdk/middleware-serde");
const smithy_client_1 = require("@aws-sdk/smithy-client");
/**
 * <p>Used by workers to get an <a>ActivityTask</a> from the specified activity
 *         <code>taskList</code>. This initiates a long poll, where the service holds the HTTP
 *       connection open and responds as soon as a task becomes available. The maximum time the service
 *       holds on to the request before responding is 60 seconds. If no task is available within 60
 *       seconds, the poll returns an empty result. An empty result, in this context, means that an
 *       ActivityTask is returned, but that the value of taskToken is an empty string. If a task is
 *       returned, the worker should use its type to identify and process it correctly.</p>
 *          <important>
 *             <p>Workers should set their client side socket timeout to at least 70 seconds (10
 *         seconds higher than the maximum time service may hold the poll request).</p>
 *          </important>
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
 *                <p>Constrain the <code>taskList.name</code> parameter by using a
 *             <code>Condition</code> element with the <code>swf:taskList.name</code> key to allow the
 *           action to access only certain task lists.</p>
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
 * import { SWFClient, PollForActivityTaskCommand } from "@aws-sdk/client-swf"; // ES Modules import
 * // const { SWFClient, PollForActivityTaskCommand } = require("@aws-sdk/client-swf"); // CommonJS import
 * const client = new SWFClient(config);
 * const command = new PollForActivityTaskCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link PollForActivityTaskCommandInput} for command's `input` shape.
 * @see {@link PollForActivityTaskCommandOutput} for command's `response` shape.
 * @see {@link SWFClientResolvedConfig | config} for command's `input` shape.
 *
 */
class PollForActivityTaskCommand extends smithy_client_1.Command {
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
        const commandName = "PollForActivityTaskCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: models_0_1.PollForActivityTaskInput.filterSensitiveLog,
            outputFilterSensitiveLog: models_0_1.ActivityTask.filterSensitiveLog,
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return Aws_json1_0_1.serializeAws_json1_0PollForActivityTaskCommand(input, context);
    }
    deserialize(output, context) {
        return Aws_json1_0_1.deserializeAws_json1_0PollForActivityTaskCommand(output, context);
    }
}
exports.PollForActivityTaskCommand = PollForActivityTaskCommand;
//# sourceMappingURL=PollForActivityTaskCommand.js.map