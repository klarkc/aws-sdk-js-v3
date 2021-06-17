import { __extends } from "tslib";
import { UpdateHITReviewStatusRequest, UpdateHITReviewStatusResponse } from "../models/models_0";
import { deserializeAws_json1_1UpdateHITReviewStatusCommand, serializeAws_json1_1UpdateHITReviewStatusCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>
 *             The <code>UpdateHITReviewStatus</code> operation updates the status of a HIT.
 *             If the status is Reviewable, this operation can update the status to Reviewing,
 *             or it can revert a Reviewing HIT back to the Reviewable status.
 *         </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MTurkClient, UpdateHITReviewStatusCommand } from "@aws-sdk/client-mturk"; // ES Modules import
 * // const { MTurkClient, UpdateHITReviewStatusCommand } = require("@aws-sdk/client-mturk"); // CommonJS import
 * const client = new MTurkClient(config);
 * const command = new UpdateHITReviewStatusCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateHITReviewStatusCommandInput} for command's `input` shape.
 * @see {@link UpdateHITReviewStatusCommandOutput} for command's `response` shape.
 * @see {@link MTurkClientResolvedConfig | config} for command's `input` shape.
 *
 */
var UpdateHITReviewStatusCommand = /** @class */ (function (_super) {
    __extends(UpdateHITReviewStatusCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function UpdateHITReviewStatusCommand(input) {
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
    UpdateHITReviewStatusCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "MTurkClient";
        var commandName = "UpdateHITReviewStatusCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: UpdateHITReviewStatusRequest.filterSensitiveLog,
            outputFilterSensitiveLog: UpdateHITReviewStatusResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    UpdateHITReviewStatusCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1UpdateHITReviewStatusCommand(input, context);
    };
    UpdateHITReviewStatusCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1UpdateHITReviewStatusCommand(output, context);
    };
    return UpdateHITReviewStatusCommand;
}($Command));
export { UpdateHITReviewStatusCommand };
//# sourceMappingURL=UpdateHITReviewStatusCommand.js.map