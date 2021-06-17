import { __extends } from "tslib";
import { RejectAssignmentRequest, RejectAssignmentResponse } from "../models/models_0";
import { deserializeAws_json1_1RejectAssignmentCommand, serializeAws_json1_1RejectAssignmentCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
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
var RejectAssignmentCommand = /** @class */ (function (_super) {
    __extends(RejectAssignmentCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function RejectAssignmentCommand(input) {
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
    RejectAssignmentCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "MTurkClient";
        var commandName = "RejectAssignmentCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: RejectAssignmentRequest.filterSensitiveLog,
            outputFilterSensitiveLog: RejectAssignmentResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    RejectAssignmentCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1RejectAssignmentCommand(input, context);
    };
    RejectAssignmentCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1RejectAssignmentCommand(output, context);
    };
    return RejectAssignmentCommand;
}($Command));
export { RejectAssignmentCommand };
//# sourceMappingURL=RejectAssignmentCommand.js.map