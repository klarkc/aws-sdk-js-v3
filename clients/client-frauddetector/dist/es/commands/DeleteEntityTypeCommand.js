import { __extends } from "tslib";
import { DeleteEntityTypeRequest, DeleteEntityTypeResult } from "../models/models_0";
import { deserializeAws_json1_1DeleteEntityTypeCommand, serializeAws_json1_1DeleteEntityTypeCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Deletes an entity type.</p>
 * 	        <p>You cannot delete an entity type that is included in an event type.</p>
 * 	        <p>When you delete an entity type, Amazon Fraud Detector permanently deletes that entity type and the data is no longer stored in Amazon Fraud Detector.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { FraudDetectorClient, DeleteEntityTypeCommand } from "@aws-sdk/client-frauddetector"; // ES Modules import
 * // const { FraudDetectorClient, DeleteEntityTypeCommand } = require("@aws-sdk/client-frauddetector"); // CommonJS import
 * const client = new FraudDetectorClient(config);
 * const command = new DeleteEntityTypeCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteEntityTypeCommandInput} for command's `input` shape.
 * @see {@link DeleteEntityTypeCommandOutput} for command's `response` shape.
 * @see {@link FraudDetectorClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DeleteEntityTypeCommand = /** @class */ (function (_super) {
    __extends(DeleteEntityTypeCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DeleteEntityTypeCommand(input) {
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
    DeleteEntityTypeCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "FraudDetectorClient";
        var commandName = "DeleteEntityTypeCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DeleteEntityTypeRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DeleteEntityTypeResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DeleteEntityTypeCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1DeleteEntityTypeCommand(input, context);
    };
    DeleteEntityTypeCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1DeleteEntityTypeCommand(output, context);
    };
    return DeleteEntityTypeCommand;
}($Command));
export { DeleteEntityTypeCommand };
//# sourceMappingURL=DeleteEntityTypeCommand.js.map