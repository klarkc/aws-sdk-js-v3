import { __extends } from "tslib";
import { BatchGetVariableRequest, BatchGetVariableResult } from "../models/models_0";
import { deserializeAws_json1_1BatchGetVariableCommand, serializeAws_json1_1BatchGetVariableCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Gets a batch of variables.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { FraudDetectorClient, BatchGetVariableCommand } from "@aws-sdk/client-frauddetector"; // ES Modules import
 * // const { FraudDetectorClient, BatchGetVariableCommand } = require("@aws-sdk/client-frauddetector"); // CommonJS import
 * const client = new FraudDetectorClient(config);
 * const command = new BatchGetVariableCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link BatchGetVariableCommandInput} for command's `input` shape.
 * @see {@link BatchGetVariableCommandOutput} for command's `response` shape.
 * @see {@link FraudDetectorClientResolvedConfig | config} for command's `input` shape.
 *
 */
var BatchGetVariableCommand = /** @class */ (function (_super) {
    __extends(BatchGetVariableCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function BatchGetVariableCommand(input) {
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
    BatchGetVariableCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "FraudDetectorClient";
        var commandName = "BatchGetVariableCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: BatchGetVariableRequest.filterSensitiveLog,
            outputFilterSensitiveLog: BatchGetVariableResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    BatchGetVariableCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1BatchGetVariableCommand(input, context);
    };
    BatchGetVariableCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1BatchGetVariableCommand(output, context);
    };
    return BatchGetVariableCommand;
}($Command));
export { BatchGetVariableCommand };
//# sourceMappingURL=BatchGetVariableCommand.js.map