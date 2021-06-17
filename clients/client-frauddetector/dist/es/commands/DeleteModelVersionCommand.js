import { __extends } from "tslib";
import { DeleteModelVersionRequest, DeleteModelVersionResult } from "../models/models_0";
import { deserializeAws_json1_1DeleteModelVersionCommand, serializeAws_json1_1DeleteModelVersionCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Deletes a model version.</p>
 * 	        <p>You can delete models and model versions in Amazon Fraud Detector, provided that they are not associated with a detector version.</p>
 * 	        <p> When you delete a model version, Amazon Fraud Detector permanently deletes that model version and the data is no longer stored in Amazon Fraud Detector.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { FraudDetectorClient, DeleteModelVersionCommand } from "@aws-sdk/client-frauddetector"; // ES Modules import
 * // const { FraudDetectorClient, DeleteModelVersionCommand } = require("@aws-sdk/client-frauddetector"); // CommonJS import
 * const client = new FraudDetectorClient(config);
 * const command = new DeleteModelVersionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteModelVersionCommandInput} for command's `input` shape.
 * @see {@link DeleteModelVersionCommandOutput} for command's `response` shape.
 * @see {@link FraudDetectorClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DeleteModelVersionCommand = /** @class */ (function (_super) {
    __extends(DeleteModelVersionCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DeleteModelVersionCommand(input) {
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
    DeleteModelVersionCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "FraudDetectorClient";
        var commandName = "DeleteModelVersionCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DeleteModelVersionRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DeleteModelVersionResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DeleteModelVersionCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1DeleteModelVersionCommand(input, context);
    };
    DeleteModelVersionCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1DeleteModelVersionCommand(output, context);
    };
    return DeleteModelVersionCommand;
}($Command));
export { DeleteModelVersionCommand };
//# sourceMappingURL=DeleteModelVersionCommand.js.map