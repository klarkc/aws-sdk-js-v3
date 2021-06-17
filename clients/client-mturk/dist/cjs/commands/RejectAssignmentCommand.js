"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RejectAssignmentCommand = void 0;
const models_0_1 = require("../models/models_0");
const Aws_json1_1_1 = require("../protocols/Aws_json1_1");
const middleware_serde_1 = require("@aws-sdk/middleware-serde");
const smithy_client_1 = require("@aws-sdk/smithy-client");
/**
 * <p>
 *             The <code>RejectAssignment</code> operation rejects the results of a completed assignment.
 *         </p>
 *         <p>
 *             You can include an optional feedback message with the rejection,
 *             which the Worker can see in the Status section of the web site.
 *             When you include a feedback message with the rejection,
 *             it helps the Worker understand why the assignment was rejected,
 *             and can improve the quality of the results the Worker submits in the future.
 *         </p>
 *         <p>
 *             Only the Requester who created the HIT can reject an assignment for the HIT.
 *         </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MTurkClient, RejectAssignmentCommand } from "@aws-sdk/client-mturk"; // ES Modules import
 * // const { MTurkClient, RejectAssignmentCommand } = require("@aws-sdk/client-mturk"); // CommonJS import
 * const client = new MTurkClient(config);
 * const command = new RejectAssignmentCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link RejectAssignmentCommandInput} for command's `input` shape.
 * @see {@link RejectAssignmentCommandOutput} for command's `response` shape.
 * @see {@link MTurkClientResolvedConfig | config} for command's `input` shape.
 *
 */
class RejectAssignmentCommand extends smithy_client_1.Command {
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
        const commandName = "RejectAssignmentCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: models_0_1.RejectAssignmentRequest.filterSensitiveLog,
            outputFilterSensitiveLog: models_0_1.RejectAssignmentResponse.filterSensitiveLog,
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return Aws_json1_1_1.serializeAws_json1_1RejectAssignmentCommand(input, context);
    }
    deserialize(output, context) {
        return Aws_json1_1_1.deserializeAws_json1_1RejectAssignmentCommand(output, context);
    }
}
exports.RejectAssignmentCommand = RejectAssignmentCommand;
//# sourceMappingURL=RejectAssignmentCommand.js.map