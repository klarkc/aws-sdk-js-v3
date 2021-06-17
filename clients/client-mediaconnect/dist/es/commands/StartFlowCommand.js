import { __extends } from "tslib";
import { StartFlowRequest, StartFlowResponse } from "../models/models_0";
import { deserializeAws_restJson1StartFlowCommand, serializeAws_restJson1StartFlowCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * Starts a flow.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MediaConnectClient, StartFlowCommand } from "@aws-sdk/client-mediaconnect"; // ES Modules import
 * // const { MediaConnectClient, StartFlowCommand } = require("@aws-sdk/client-mediaconnect"); // CommonJS import
 * const client = new MediaConnectClient(config);
 * const command = new StartFlowCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link StartFlowCommandInput} for command's `input` shape.
 * @see {@link StartFlowCommandOutput} for command's `response` shape.
 * @see {@link MediaConnectClientResolvedConfig | config} for command's `input` shape.
 *
 */
var StartFlowCommand = /** @class */ (function (_super) {
    __extends(StartFlowCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function StartFlowCommand(input) {
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
    StartFlowCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "MediaConnectClient";
        var commandName = "StartFlowCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: StartFlowRequest.filterSensitiveLog,
            outputFilterSensitiveLog: StartFlowResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    StartFlowCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1StartFlowCommand(input, context);
    };
    StartFlowCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1StartFlowCommand(output, context);
    };
    return StartFlowCommand;
}($Command));
export { StartFlowCommand };
//# sourceMappingURL=StartFlowCommand.js.map