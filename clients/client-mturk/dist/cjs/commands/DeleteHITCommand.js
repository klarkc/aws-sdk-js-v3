"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteHITCommand = void 0;
const models_0_1 = require("../models/models_0");
const Aws_json1_1_1 = require("../protocols/Aws_json1_1");
const middleware_serde_1 = require("@aws-sdk/middleware-serde");
const smithy_client_1 = require("@aws-sdk/smithy-client");
/**
 * <p>
 *             The <code>DeleteHIT</code> operation is used to delete HIT that is no longer needed.
 *             Only the Requester who created the HIT can delete it.
 *         </p>
 *         <p>
 *             You can only dispose of HITs that are in the <code>Reviewable</code> state,
 *             with all of their submitted assignments already either approved or rejected.
 *             If you call the DeleteHIT operation on a HIT that is not in the <code>Reviewable</code> state
 *             (for example, that has not expired, or still has active assignments),
 *             or on a HIT that is Reviewable but without all of its submitted assignments
 *             already approved or rejected, the service will return an error.
 *         </p>
 *         <note>
 *             <ul>
 *                <li>
 *                     <p>
 *                         HITs are automatically disposed of after 120 days.
 *                     </p>
 *                 </li>
 *                <li>
 *                     <p>
 *                         After you dispose of a HIT, you can no longer approve the HIT's rejected assignments.
 *                     </p>
 *                 </li>
 *                <li>
 *                     <p>
 *                         Disposed HITs are not returned in results for the ListHITs operation.
 *                     </p>
 *                 </li>
 *                <li>
 *                     <p>
 *                         Disposing HITs can improve the performance of operations such as ListReviewableHITs and ListHITs.
 *                     </p>
 *                 </li>
 *             </ul>
 *         </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MTurkClient, DeleteHITCommand } from "@aws-sdk/client-mturk"; // ES Modules import
 * // const { MTurkClient, DeleteHITCommand } = require("@aws-sdk/client-mturk"); // CommonJS import
 * const client = new MTurkClient(config);
 * const command = new DeleteHITCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteHITCommandInput} for command's `input` shape.
 * @see {@link DeleteHITCommandOutput} for command's `response` shape.
 * @see {@link MTurkClientResolvedConfig | config} for command's `input` shape.
 *
 */
class DeleteHITCommand extends smithy_client_1.Command {
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
        const commandName = "DeleteHITCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: models_0_1.DeleteHITRequest.filterSensitiveLog,
            outputFilterSensitiveLog: models_0_1.DeleteHITResponse.filterSensitiveLog,
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return Aws_json1_1_1.serializeAws_json1_1DeleteHITCommand(input, context);
    }
    deserialize(output, context) {
        return Aws_json1_1_1.deserializeAws_json1_1DeleteHITCommand(output, context);
    }
}
exports.DeleteHITCommand = DeleteHITCommand;
//# sourceMappingURL=DeleteHITCommand.js.map