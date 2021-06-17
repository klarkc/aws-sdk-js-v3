import { __extends } from "tslib";
import { RemoveFlowMediaStreamRequest, RemoveFlowMediaStreamResponse } from "../models/models_0";
import { deserializeAws_restJson1RemoveFlowMediaStreamCommand, serializeAws_restJson1RemoveFlowMediaStreamCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * Removes a media stream from a flow. This action is only available if the media stream is not associated with a source or output.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MediaConnectClient, RemoveFlowMediaStreamCommand } from "@aws-sdk/client-mediaconnect"; // ES Modules import
 * // const { MediaConnectClient, RemoveFlowMediaStreamCommand } = require("@aws-sdk/client-mediaconnect"); // CommonJS import
 * const client = new MediaConnectClient(config);
 * const command = new RemoveFlowMediaStreamCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link RemoveFlowMediaStreamCommandInput} for command's `input` shape.
 * @see {@link RemoveFlowMediaStreamCommandOutput} for command's `response` shape.
 * @see {@link MediaConnectClientResolvedConfig | config} for command's `input` shape.
 *
 */
var RemoveFlowMediaStreamCommand = /** @class */ (function (_super) {
    __extends(RemoveFlowMediaStreamCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function RemoveFlowMediaStreamCommand(input) {
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
    RemoveFlowMediaStreamCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "MediaConnectClient";
        var commandName = "RemoveFlowMediaStreamCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: RemoveFlowMediaStreamRequest.filterSensitiveLog,
            outputFilterSensitiveLog: RemoveFlowMediaStreamResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    RemoveFlowMediaStreamCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1RemoveFlowMediaStreamCommand(input, context);
    };
    RemoveFlowMediaStreamCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1RemoveFlowMediaStreamCommand(output, context);
    };
    return RemoveFlowMediaStreamCommand;
}($Command));
export { RemoveFlowMediaStreamCommand };
//# sourceMappingURL=RemoveFlowMediaStreamCommand.js.map