import { __extends } from "tslib";
import { DeleteExternalModelRequest, DeleteExternalModelResult } from "../models/models_0";
import { deserializeAws_json1_1DeleteExternalModelCommand, serializeAws_json1_1DeleteExternalModelCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Removes a SageMaker model from Amazon Fraud Detector.</p>
 * 	        <p>You can remove an Amazon SageMaker model if it is not associated with a detector version. Removing a SageMaker model disconnects it from Amazon Fraud Detector, but the model remains available in SageMaker.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { FraudDetectorClient, DeleteExternalModelCommand } from "@aws-sdk/client-frauddetector"; // ES Modules import
 * // const { FraudDetectorClient, DeleteExternalModelCommand } = require("@aws-sdk/client-frauddetector"); // CommonJS import
 * const client = new FraudDetectorClient(config);
 * const command = new DeleteExternalModelCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteExternalModelCommandInput} for command's `input` shape.
 * @see {@link DeleteExternalModelCommandOutput} for command's `response` shape.
 * @see {@link FraudDetectorClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DeleteExternalModelCommand = /** @class */ (function (_super) {
    __extends(DeleteExternalModelCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DeleteExternalModelCommand(input) {
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
    DeleteExternalModelCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "FraudDetectorClient";
        var commandName = "DeleteExternalModelCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DeleteExternalModelRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DeleteExternalModelResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DeleteExternalModelCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1DeleteExternalModelCommand(input, context);
    };
    DeleteExternalModelCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1DeleteExternalModelCommand(output, context);
    };
    return DeleteExternalModelCommand;
}($Command));
export { DeleteExternalModelCommand };
//# sourceMappingURL=DeleteExternalModelCommand.js.map