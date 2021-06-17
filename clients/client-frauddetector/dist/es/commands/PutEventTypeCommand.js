import { __extends } from "tslib";
import { PutEventTypeRequest, PutEventTypeResult } from "../models/models_0";
import { deserializeAws_json1_1PutEventTypeCommand, serializeAws_json1_1PutEventTypeCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Creates or updates an event type. An event is a business activity that is evaluated for fraud risk. With Amazon Fraud Detector, you generate fraud predictions for events. An event type defines the structure for an event sent to Amazon Fraud Detector. This includes the variables sent as part of the event, the entity performing the event (such as a customer), and the labels that classify the event. Example event types include online payment transactions, account registrations, and authentications.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { FraudDetectorClient, PutEventTypeCommand } from "@aws-sdk/client-frauddetector"; // ES Modules import
 * // const { FraudDetectorClient, PutEventTypeCommand } = require("@aws-sdk/client-frauddetector"); // CommonJS import
 * const client = new FraudDetectorClient(config);
 * const command = new PutEventTypeCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link PutEventTypeCommandInput} for command's `input` shape.
 * @see {@link PutEventTypeCommandOutput} for command's `response` shape.
 * @see {@link FraudDetectorClientResolvedConfig | config} for command's `input` shape.
 *
 */
var PutEventTypeCommand = /** @class */ (function (_super) {
    __extends(PutEventTypeCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function PutEventTypeCommand(input) {
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
    PutEventTypeCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "FraudDetectorClient";
        var commandName = "PutEventTypeCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: PutEventTypeRequest.filterSensitiveLog,
            outputFilterSensitiveLog: PutEventTypeResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    PutEventTypeCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1PutEventTypeCommand(input, context);
    };
    PutEventTypeCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1PutEventTypeCommand(output, context);
    };
    return PutEventTypeCommand;
}($Command));
export { PutEventTypeCommand };
//# sourceMappingURL=PutEventTypeCommand.js.map