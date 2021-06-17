import { __extends } from "tslib";
import { UpdateVariableRequest, UpdateVariableResult } from "../models/models_0";
import { deserializeAws_json1_1UpdateVariableCommand, serializeAws_json1_1UpdateVariableCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Updates a variable.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { FraudDetectorClient, UpdateVariableCommand } from "@aws-sdk/client-frauddetector"; // ES Modules import
 * // const { FraudDetectorClient, UpdateVariableCommand } = require("@aws-sdk/client-frauddetector"); // CommonJS import
 * const client = new FraudDetectorClient(config);
 * const command = new UpdateVariableCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateVariableCommandInput} for command's `input` shape.
 * @see {@link UpdateVariableCommandOutput} for command's `response` shape.
 * @see {@link FraudDetectorClientResolvedConfig | config} for command's `input` shape.
 *
 */
var UpdateVariableCommand = /** @class */ (function (_super) {
    __extends(UpdateVariableCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function UpdateVariableCommand(input) {
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
    UpdateVariableCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "FraudDetectorClient";
        var commandName = "UpdateVariableCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: UpdateVariableRequest.filterSensitiveLog,
            outputFilterSensitiveLog: UpdateVariableResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    UpdateVariableCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1UpdateVariableCommand(input, context);
    };
    UpdateVariableCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1UpdateVariableCommand(output, context);
    };
    return UpdateVariableCommand;
}($Command));
export { UpdateVariableCommand };
//# sourceMappingURL=UpdateVariableCommand.js.map