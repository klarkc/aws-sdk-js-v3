import { __extends } from "tslib";
import { BatchCreateVariableRequest, BatchCreateVariableResult } from "../models/models_0";
import { deserializeAws_json1_1BatchCreateVariableCommand, serializeAws_json1_1BatchCreateVariableCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Creates a batch of variables.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { FraudDetectorClient, BatchCreateVariableCommand } from "@aws-sdk/client-frauddetector"; // ES Modules import
 * // const { FraudDetectorClient, BatchCreateVariableCommand } = require("@aws-sdk/client-frauddetector"); // CommonJS import
 * const client = new FraudDetectorClient(config);
 * const command = new BatchCreateVariableCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link BatchCreateVariableCommandInput} for command's `input` shape.
 * @see {@link BatchCreateVariableCommandOutput} for command's `response` shape.
 * @see {@link FraudDetectorClientResolvedConfig | config} for command's `input` shape.
 *
 */
var BatchCreateVariableCommand = /** @class */ (function (_super) {
    __extends(BatchCreateVariableCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function BatchCreateVariableCommand(input) {
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
    BatchCreateVariableCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "FraudDetectorClient";
        var commandName = "BatchCreateVariableCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: BatchCreateVariableRequest.filterSensitiveLog,
            outputFilterSensitiveLog: BatchCreateVariableResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    BatchCreateVariableCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1BatchCreateVariableCommand(input, context);
    };
    BatchCreateVariableCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1BatchCreateVariableCommand(output, context);
    };
    return BatchCreateVariableCommand;
}($Command));
export { BatchCreateVariableCommand };
//# sourceMappingURL=BatchCreateVariableCommand.js.map