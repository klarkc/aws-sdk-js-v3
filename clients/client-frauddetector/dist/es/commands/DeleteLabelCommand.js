import { __extends } from "tslib";
import { DeleteLabelRequest, DeleteLabelResult } from "../models/models_0";
import { deserializeAws_json1_1DeleteLabelCommand, serializeAws_json1_1DeleteLabelCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Deletes a label.</p>
 * 	        <p>You cannot delete labels that are included in an event type in Amazon Fraud Detector.</p>
 *          <p>You cannot delete a label assigned to an event ID. You must first delete the relevant event ID.</p>
 *
 *          <p>When you delete a label, Amazon Fraud Detector permanently deletes that label and the data is no longer stored in Amazon Fraud Detector.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { FraudDetectorClient, DeleteLabelCommand } from "@aws-sdk/client-frauddetector"; // ES Modules import
 * // const { FraudDetectorClient, DeleteLabelCommand } = require("@aws-sdk/client-frauddetector"); // CommonJS import
 * const client = new FraudDetectorClient(config);
 * const command = new DeleteLabelCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteLabelCommandInput} for command's `input` shape.
 * @see {@link DeleteLabelCommandOutput} for command's `response` shape.
 * @see {@link FraudDetectorClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DeleteLabelCommand = /** @class */ (function (_super) {
    __extends(DeleteLabelCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DeleteLabelCommand(input) {
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
    DeleteLabelCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "FraudDetectorClient";
        var commandName = "DeleteLabelCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DeleteLabelRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DeleteLabelResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DeleteLabelCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1DeleteLabelCommand(input, context);
    };
    DeleteLabelCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1DeleteLabelCommand(output, context);
    };
    return DeleteLabelCommand;
}($Command));
export { DeleteLabelCommand };
//# sourceMappingURL=DeleteLabelCommand.js.map