import { __extends } from "tslib";
import { UpdateFlowMediaStreamRequest, UpdateFlowMediaStreamResponse } from "../models/models_0";
import { deserializeAws_restJson1UpdateFlowMediaStreamCommand, serializeAws_restJson1UpdateFlowMediaStreamCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * Updates an existing media stream.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MediaConnectClient, UpdateFlowMediaStreamCommand } from "@aws-sdk/client-mediaconnect"; // ES Modules import
 * // const { MediaConnectClient, UpdateFlowMediaStreamCommand } = require("@aws-sdk/client-mediaconnect"); // CommonJS import
 * const client = new MediaConnectClient(config);
 * const command = new UpdateFlowMediaStreamCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateFlowMediaStreamCommandInput} for command's `input` shape.
 * @see {@link UpdateFlowMediaStreamCommandOutput} for command's `response` shape.
 * @see {@link MediaConnectClientResolvedConfig | config} for command's `input` shape.
 *
 */
var UpdateFlowMediaStreamCommand = /** @class */ (function (_super) {
    __extends(UpdateFlowMediaStreamCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function UpdateFlowMediaStreamCommand(input) {
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
    UpdateFlowMediaStreamCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "MediaConnectClient";
        var commandName = "UpdateFlowMediaStreamCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: UpdateFlowMediaStreamRequest.filterSensitiveLog,
            outputFilterSensitiveLog: UpdateFlowMediaStreamResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    UpdateFlowMediaStreamCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1UpdateFlowMediaStreamCommand(input, context);
    };
    UpdateFlowMediaStreamCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1UpdateFlowMediaStreamCommand(output, context);
    };
    return UpdateFlowMediaStreamCommand;
}($Command));
export { UpdateFlowMediaStreamCommand };
//# sourceMappingURL=UpdateFlowMediaStreamCommand.js.map