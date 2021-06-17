"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ApproveAssignmentCommand = void 0;
const models_0_1 = require("../models/models_0");
const Aws_json1_1_1 = require("../protocols/Aws_json1_1");
const middleware_serde_1 = require("@aws-sdk/middleware-serde");
const smithy_client_1 = require("@aws-sdk/smithy-client");
/**
 * <p>
 *             The <code>ApproveAssignment</code> operation approves the results of a completed assignment.
 *         </p>
 *         <p>
 *             Approving an assignment initiates two payments from the Requester's Amazon.com account
 *         </p>
 *         <ul>
 *             <li>
 *                 <p>
 *                     The Worker who submitted the results is paid the reward specified in the HIT.
 *                 </p>
 *             </li>
 *             <li>
 *                 <p>
 *                     Amazon Mechanical Turk fees are debited.
 *                 </p>
 *             </li>
 *          </ul>
 *         <p>
 *             If the Requester's account does not have adequate funds for these payments,
 *             the call to ApproveAssignment returns an exception, and the approval is not processed.
 *             You can include an optional feedback message with the approval,
 *             which the Worker can see in the Status section of the web site.
 *         </p>
 *         <p>
 *             You can also call this operation for assignments that were previous rejected
 *             and approve them by explicitly overriding the previous rejection.
 *             This only works on rejected assignments that were submitted within the previous 30 days
 *             and only if the assignment's related HIT has not been deleted.
 *         </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MTurkClient, ApproveAssignmentCommand } from "@aws-sdk/client-mturk"; // ES Modules import
 * // const { MTurkClient, ApproveAssignmentCommand } = require("@aws-sdk/client-mturk"); // CommonJS import
 * const client = new MTurkClient(config);
 * const command = new ApproveAssignmentCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ApproveAssignmentCommandInput} for command's `input` shape.
 * @see {@link ApproveAssignmentCommandOutput} for command's `response` shape.
 * @see {@link MTurkClientResolvedConfig | config} for command's `input` shape.
 *
 */
class ApproveAssignmentCommand extends smithy_client_1.Command {
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
        const clientName = "MTurkClient";
        const commandName = "ApproveAssignmentCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: models_0_1.ApproveAssignmentRequest.filterSensitiveLog,
            outputFilterSensitiveLog: models_0_1.ApproveAssignmentResponse.filterSensitiveLog,
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return Aws_json1_1_1.serializeAws_json1_1ApproveAssignmentCommand(input, context);
    }
    deserialize(output, context) {
        return Aws_json1_1_1.deserializeAws_json1_1ApproveAssignmentCommand(output, context);
    }
}
exports.ApproveAssignmentCommand = ApproveAssignmentCommand;
//# sourceMappingURL=ApproveAssignmentCommand.js.map