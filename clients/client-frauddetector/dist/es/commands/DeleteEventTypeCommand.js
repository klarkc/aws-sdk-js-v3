import { __extends } from "tslib";
import { DeleteEventTypeRequest, DeleteEventTypeResult } from "../models/models_0";
import { deserializeAws_json1_1DeleteEventTypeCommand, serializeAws_json1_1DeleteEventTypeCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Deletes an event type.</p>
 * 	        <p>You cannot delete an event type that is used in a detector or a model.</p>
 * 	        <p>When you delete an entity type, Amazon Fraud Detector permanently deletes that entity type and the data is no longer stored in Amazon Fraud Detector.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { FraudDetectorClient, DeleteEventTypeCommand } from "@aws-sdk/client-frauddetector"; // ES Modules import
 * // const { FraudDetectorClient, DeleteEventTypeCommand } = require("@aws-sdk/client-frauddetector"); // CommonJS import
 * const client = new FraudDetectorClient(config);
 * const command = new DeleteEventTypeCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteEventTypeCommandInput} for command's `input` shape.
 * @see {@link DeleteEventTypeCommandOutput} for command's `response` shape.
 * @see {@link FraudDetectorClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DeleteEventTypeCommand = /** @class */ (function (_super) {
    __extends(DeleteEventTypeCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DeleteEventTypeCommand(input) {
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
    DeleteEventTypeCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "FraudDetectorClient";
        var commandName = "DeleteEventTypeCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DeleteEventTypeRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DeleteEventTypeResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DeleteEventTypeCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1DeleteEventTypeCommand(input, context);
    };
    DeleteEventTypeCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1DeleteEventTypeCommand(output, context);
    };
    return DeleteEventTypeCommand;
}($Command));
export { DeleteEventTypeCommand };
//# sourceMappingURL=DeleteEventTypeCommand.js.map