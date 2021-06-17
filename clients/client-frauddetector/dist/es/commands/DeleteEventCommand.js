import { __extends } from "tslib";
import { DeleteEventRequest, DeleteEventResult } from "../models/models_0";
import { deserializeAws_json1_1DeleteEventCommand, serializeAws_json1_1DeleteEventCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Deletes the specified event.</p>
 * 	        <p>When you delete an event, Amazon Fraud Detector permanently deletes that event and the event data is no longer stored in Amazon Fraud Detector.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { FraudDetectorClient, DeleteEventCommand } from "@aws-sdk/client-frauddetector"; // ES Modules import
 * // const { FraudDetectorClient, DeleteEventCommand } = require("@aws-sdk/client-frauddetector"); // CommonJS import
 * const client = new FraudDetectorClient(config);
 * const command = new DeleteEventCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteEventCommandInput} for command's `input` shape.
 * @see {@link DeleteEventCommandOutput} for command's `response` shape.
 * @see {@link FraudDetectorClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DeleteEventCommand = /** @class */ (function (_super) {
    __extends(DeleteEventCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DeleteEventCommand(input) {
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
    DeleteEventCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "FraudDetectorClient";
        var commandName = "DeleteEventCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DeleteEventRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DeleteEventResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DeleteEventCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1DeleteEventCommand(input, context);
    };
    DeleteEventCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1DeleteEventCommand(output, context);
    };
    return DeleteEventCommand;
}($Command));
export { DeleteEventCommand };
//# sourceMappingURL=DeleteEventCommand.js.map