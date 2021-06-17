import { __extends } from "tslib";
import { DeleteHITRequest, DeleteHITResponse } from "../models/models_0";
import { deserializeAws_json1_1DeleteHITCommand, serializeAws_json1_1DeleteHITCommand } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
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
var DeleteHITCommand = /** @class */ (function (_super) {
    __extends(DeleteHITCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DeleteHITCommand(input) {
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
    DeleteHITCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "MTurkClient";
        var commandName = "DeleteHITCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DeleteHITRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DeleteHITResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DeleteHITCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1DeleteHITCommand(input, context);
    };
    DeleteHITCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1DeleteHITCommand(output, context);
    };
    return DeleteHITCommand;
}($Command));
export { DeleteHITCommand };
//# sourceMappingURL=DeleteHITCommand.js.map