import { __extends } from "tslib";
import { PutLabelRequest, PutLabelResult } from "../models/models_0";
import { deserializeAws_json1_1PutLabelCommand, serializeAws_json1_1PutLabelCommand } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Creates or updates label. A label classifies an event as fraudulent or legitimate. Labels are associated with event types and used to train supervised machine learning models in Amazon Fraud Detector. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { FraudDetectorClient, PutLabelCommand } from "@aws-sdk/client-frauddetector"; // ES Modules import
 * // const { FraudDetectorClient, PutLabelCommand } = require("@aws-sdk/client-frauddetector"); // CommonJS import
 * const client = new FraudDetectorClient(config);
 * const command = new PutLabelCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link PutLabelCommandInput} for command's `input` shape.
 * @see {@link PutLabelCommandOutput} for command's `response` shape.
 * @see {@link FraudDetectorClientResolvedConfig | config} for command's `input` shape.
 *
 */
var PutLabelCommand = /** @class */ (function (_super) {
    __extends(PutLabelCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function PutLabelCommand(input) {
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
    PutLabelCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "FraudDetectorClient";
        var commandName = "PutLabelCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: PutLabelRequest.filterSensitiveLog,
            outputFilterSensitiveLog: PutLabelResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    PutLabelCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1PutLabelCommand(input, context);
    };
    PutLabelCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1PutLabelCommand(output, context);
    };
    return PutLabelCommand;
}($Command));
export { PutLabelCommand };
//# sourceMappingURL=PutLabelCommand.js.map