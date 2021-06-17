import { __extends } from "tslib";
import { CancelReplayRequest, CancelReplayResponse } from "../models/models_0";
import { deserializeAws_json1_1CancelReplayCommand, serializeAws_json1_1CancelReplayCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Cancels the specified replay.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EventBridgeClient, CancelReplayCommand } from "@aws-sdk/client-eventbridge"; // ES Modules import
 * // const { EventBridgeClient, CancelReplayCommand } = require("@aws-sdk/client-eventbridge"); // CommonJS import
 * const client = new EventBridgeClient(config);
 * const command = new CancelReplayCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CancelReplayCommandInput} for command's `input` shape.
 * @see {@link CancelReplayCommandOutput} for command's `response` shape.
 * @see {@link EventBridgeClientResolvedConfig | config} for command's `input` shape.
 *
 */
var CancelReplayCommand = /** @class */ (function (_super) {
    __extends(CancelReplayCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function CancelReplayCommand(input) {
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
    CancelReplayCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "EventBridgeClient";
        var commandName = "CancelReplayCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: CancelReplayRequest.filterSensitiveLog,
            outputFilterSensitiveLog: CancelReplayResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    CancelReplayCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1CancelReplayCommand(input, context);
    };
    CancelReplayCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1CancelReplayCommand(output, context);
    };
    return CancelReplayCommand;
}($Command));
export { CancelReplayCommand };
//# sourceMappingURL=CancelReplayCommand.js.map