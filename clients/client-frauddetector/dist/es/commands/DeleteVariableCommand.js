import { __extends } from "tslib";
import { DeleteVariableRequest, DeleteVariableResult } from "../models/models_0";
import { deserializeAws_json1_1DeleteVariableCommand, serializeAws_json1_1DeleteVariableCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Deletes a variable.</p>
 * 	        <p>You can't delete variables that are included in an event type in Amazon Fraud Detector.</p>
 * 	        <p>Amazon Fraud Detector automatically deletes model output variables and SageMaker model output variables when you delete the model. You can't delete these variables manually.</p>
 * 	        <p>When you delete a variable, Amazon Fraud Detector permanently deletes that variable and the data is no longer stored in Amazon Fraud Detector.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { FraudDetectorClient, DeleteVariableCommand } from "@aws-sdk/client-frauddetector"; // ES Modules import
 * // const { FraudDetectorClient, DeleteVariableCommand } = require("@aws-sdk/client-frauddetector"); // CommonJS import
 * const client = new FraudDetectorClient(config);
 * const command = new DeleteVariableCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteVariableCommandInput} for command's `input` shape.
 * @see {@link DeleteVariableCommandOutput} for command's `response` shape.
 * @see {@link FraudDetectorClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DeleteVariableCommand = /** @class */ (function (_super) {
    __extends(DeleteVariableCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DeleteVariableCommand(input) {
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
    DeleteVariableCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "FraudDetectorClient";
        var commandName = "DeleteVariableCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DeleteVariableRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DeleteVariableResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DeleteVariableCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1DeleteVariableCommand(input, context);
    };
    DeleteVariableCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1DeleteVariableCommand(output, context);
    };
    return DeleteVariableCommand;
}($Command));
export { DeleteVariableCommand };
//# sourceMappingURL=DeleteVariableCommand.js.map