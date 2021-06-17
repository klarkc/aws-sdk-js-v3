import { __extends } from "tslib";
import { GetSignalingChannelEndpointInput, GetSignalingChannelEndpointOutput } from "../models/models_0";
import { deserializeAws_restJson1GetSignalingChannelEndpointCommand, serializeAws_restJson1GetSignalingChannelEndpointCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Provides an endpoint for the specified signaling channel to send and receive messages.
 *             This API uses the <code>SingleMasterChannelEndpointConfiguration</code> input parameter,
 *             which consists of the <code>Protocols</code> and <code>Role</code> properties.</p>
 *         <p>
 *             <code>Protocols</code> is used to determine the communication mechanism. For example,
 *             if you specify <code>WSS</code> as the protocol, this API produces a secure websocket
 *             endpoint. If you specify <code>HTTPS</code> as the protocol, this API generates an HTTPS
 *             endpoint. </p>
 *         <p>
 *             <code>Role</code> determines the messaging permissions. A <code>MASTER</code> role
 *             results in this API generating an endpoint that a client can use to communicate with any
 *             of the viewers on the channel. A <code>VIEWER</code> role results in this API generating
 *             an endpoint that a client can use to communicate only with a
 *                 <code>MASTER</code>. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { KinesisVideoClient, GetSignalingChannelEndpointCommand } from "@aws-sdk/client-kinesis-video"; // ES Modules import
 * // const { KinesisVideoClient, GetSignalingChannelEndpointCommand } = require("@aws-sdk/client-kinesis-video"); // CommonJS import
 * const client = new KinesisVideoClient(config);
 * const command = new GetSignalingChannelEndpointCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetSignalingChannelEndpointCommandInput} for command's `input` shape.
 * @see {@link GetSignalingChannelEndpointCommandOutput} for command's `response` shape.
 * @see {@link KinesisVideoClientResolvedConfig | config} for command's `input` shape.
 *
 */
var GetSignalingChannelEndpointCommand = /** @class */ (function (_super) {
    __extends(GetSignalingChannelEndpointCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function GetSignalingChannelEndpointCommand(input) {
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
    GetSignalingChannelEndpointCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "KinesisVideoClient";
        var commandName = "GetSignalingChannelEndpointCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: GetSignalingChannelEndpointInput.filterSensitiveLog,
            outputFilterSensitiveLog: GetSignalingChannelEndpointOutput.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    GetSignalingChannelEndpointCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1GetSignalingChannelEndpointCommand(input, context);
    };
    GetSignalingChannelEndpointCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1GetSignalingChannelEndpointCommand(output, context);
    };
    return GetSignalingChannelEndpointCommand;
}($Command));
export { GetSignalingChannelEndpointCommand };
//# sourceMappingURL=GetSignalingChannelEndpointCommand.js.map