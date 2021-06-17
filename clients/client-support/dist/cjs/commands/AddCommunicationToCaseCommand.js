"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddCommunicationToCaseCommand = void 0;
const models_0_1 = require("../models/models_0");
const Aws_json1_1_1 = require("../protocols/Aws_json1_1");
const middleware_serde_1 = require("@aws-sdk/middleware-serde");
const smithy_client_1 = require("@aws-sdk/smithy-client");
/**
 * <p>Adds additional customer communication to an AWS Support case. Use the <code>caseId</code>
 *             parameter to identify the case to which to add communication. You can list a set of
 *             email addresses to copy on the communication by using the <code>ccEmailAddresses</code>
 *             parameter. The <code>communicationBody</code> value contains the text of the
 *             communication.</p>
 *
 *         <note>
 *             <ul>
 *                <li>
 *                     <p>You must have a Business or Enterprise Support plan to use the AWS Support
 *                         API. </p>
 *                 </li>
 *                <li>
 *                     <p>If you call the AWS Support API from an account that does not have a
 *                         Business or Enterprise Support plan, the
 *                             <code>SubscriptionRequiredException</code> error message appears. For
 *                         information about changing your support plan, see <a href="http://aws.amazon.com/premiumsupport/">AWS Support</a>.</p>
 *                 </li>
 *             </ul>
 *         </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SupportClient, AddCommunicationToCaseCommand } from "@aws-sdk/client-support"; // ES Modules import
 * // const { SupportClient, AddCommunicationToCaseCommand } = require("@aws-sdk/client-support"); // CommonJS import
 * const client = new SupportClient(config);
 * const command = new AddCommunicationToCaseCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link AddCommunicationToCaseCommandInput} for command's `input` shape.
 * @see {@link AddCommunicationToCaseCommandOutput} for command's `response` shape.
 * @see {@link SupportClientResolvedConfig | config} for command's `input` shape.
 *
 */
class AddCommunicationToCaseCommand extends smithy_client_1.Command {
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
        const clientName = "SupportClient";
        const commandName = "AddCommunicationToCaseCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: models_0_1.AddCommunicationToCaseRequest.filterSensitiveLog,
            outputFilterSensitiveLog: models_0_1.AddCommunicationToCaseResponse.filterSensitiveLog,
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return Aws_json1_1_1.serializeAws_json1_1AddCommunicationToCaseCommand(input, context);
    }
    deserialize(output, context) {
        return Aws_json1_1_1.deserializeAws_json1_1AddCommunicationToCaseCommand(output, context);
    }
}
exports.AddCommunicationToCaseCommand = AddCommunicationToCaseCommand;
//# sourceMappingURL=AddCommunicationToCaseCommand.js.map