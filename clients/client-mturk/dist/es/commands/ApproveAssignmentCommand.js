import { __extends } from "tslib";
import { ApproveAssignmentRequest, ApproveAssignmentResponse } from "../models/models_0";
import { deserializeAws_json1_1ApproveAssignmentCommand, serializeAws_json1_1ApproveAssignmentCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
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
var ApproveAssignmentCommand = /** @class */ (function (_super) {
    __extends(ApproveAssignmentCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function ApproveAssignmentCommand(input) {
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
    ApproveAssignmentCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "MTurkClient";
        var commandName = "ApproveAssignmentCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: ApproveAssignmentRequest.filterSensitiveLog,
            outputFilterSensitiveLog: ApproveAssignmentResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    ApproveAssignmentCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1ApproveAssignmentCommand(input, context);
    };
    ApproveAssignmentCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1ApproveAssignmentCommand(output, context);
    };
    return ApproveAssignmentCommand;
}($Command));
export { ApproveAssignmentCommand };
//# sourceMappingURL=ApproveAssignmentCommand.js.map