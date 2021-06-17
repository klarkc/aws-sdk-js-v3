import { __extends } from "tslib";
import { DeleteOutcomeRequest, DeleteOutcomeResult } from "../models/models_0";
import { deserializeAws_json1_1DeleteOutcomeCommand, serializeAws_json1_1DeleteOutcomeCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Deletes an outcome.</p>
 * 	        <p>You cannot delete an outcome that is used in a rule version.</p>
 * 	        <p>When you delete an outcome, Amazon Fraud Detector permanently deletes that outcome and the data is no longer stored in Amazon Fraud Detector.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { FraudDetectorClient, DeleteOutcomeCommand } from "@aws-sdk/client-frauddetector"; // ES Modules import
 * // const { FraudDetectorClient, DeleteOutcomeCommand } = require("@aws-sdk/client-frauddetector"); // CommonJS import
 * const client = new FraudDetectorClient(config);
 * const command = new DeleteOutcomeCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteOutcomeCommandInput} for command's `input` shape.
 * @see {@link DeleteOutcomeCommandOutput} for command's `response` shape.
 * @see {@link FraudDetectorClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DeleteOutcomeCommand = /** @class */ (function (_super) {
    __extends(DeleteOutcomeCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DeleteOutcomeCommand(input) {
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
    DeleteOutcomeCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "FraudDetectorClient";
        var commandName = "DeleteOutcomeCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DeleteOutcomeRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DeleteOutcomeResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DeleteOutcomeCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1DeleteOutcomeCommand(input, context);
    };
    DeleteOutcomeCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1DeleteOutcomeCommand(output, context);
    };
    return DeleteOutcomeCommand;
}($Command));
export { DeleteOutcomeCommand };
//# sourceMappingURL=DeleteOutcomeCommand.js.map