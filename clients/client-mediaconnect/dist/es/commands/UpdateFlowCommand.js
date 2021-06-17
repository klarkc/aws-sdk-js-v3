import { __extends } from "tslib";
import { UpdateFlowRequest, UpdateFlowResponse } from "../models/models_0";
import { deserializeAws_restJson1UpdateFlowCommand, serializeAws_restJson1UpdateFlowCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * Updates flow
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MediaConnectClient, UpdateFlowCommand } from "@aws-sdk/client-mediaconnect"; // ES Modules import
 * // const { MediaConnectClient, UpdateFlowCommand } = require("@aws-sdk/client-mediaconnect"); // CommonJS import
 * const client = new MediaConnectClient(config);
 * const command = new UpdateFlowCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateFlowCommandInput} for command's `input` shape.
 * @see {@link UpdateFlowCommandOutput} for command's `response` shape.
 * @see {@link MediaConnectClientResolvedConfig | config} for command's `input` shape.
 *
 */
var UpdateFlowCommand = /** @class */ (function (_super) {
    __extends(UpdateFlowCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function UpdateFlowCommand(input) {
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
    UpdateFlowCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "MediaConnectClient";
        var commandName = "UpdateFlowCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: UpdateFlowRequest.filterSensitiveLog,
            outputFilterSensitiveLog: UpdateFlowResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    UpdateFlowCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1UpdateFlowCommand(input, context);
    };
    UpdateFlowCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1UpdateFlowCommand(output, context);
    };
    return UpdateFlowCommand;
}($Command));
export { UpdateFlowCommand };
//# sourceMappingURL=UpdateFlowCommand.js.map