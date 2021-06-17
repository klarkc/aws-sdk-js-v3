import { __extends } from "tslib";
import { GetIceServerConfigRequest, GetIceServerConfigResponse } from "../models/models_0";
import { deserializeAws_restJson1GetIceServerConfigCommand, serializeAws_restJson1GetIceServerConfigCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Gets the Interactive Connectivity Establishment (ICE) server configuration
 *             information, including URIs, username, and password which can be used to configure the
 *             WebRTC connection. The ICE component uses this configuration information to setup the
 *             WebRTC connection, including authenticating with the Traversal Using Relays around NAT
 *             (TURN) relay server. </p>
 *         <p>TURN is a protocol that is used to improve the connectivity of peer-to-peer
 *             applications. By providing a cloud-based relay service, TURN ensures that a connection
 *             can be established even when one or more peers are incapable of a direct peer-to-peer
 *             connection. For more information, see <a href="https://tools.ietf.org/html/draft-uberti-rtcweb-turn-rest-00">A REST API For
 *                 Access To TURN Services</a>.</p>
 *         <p> You can invoke this API to establish a fallback mechanism in case either of the peers
 *             is unable to establish a direct peer-to-peer connection over a signaling channel. You
 *             must specify either a signaling channel ARN or the client ID in order to invoke this
 *             API.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { KinesisVideoSignalingClient, GetIceServerConfigCommand } from "@aws-sdk/client-kinesis-video-signaling"; // ES Modules import
 * // const { KinesisVideoSignalingClient, GetIceServerConfigCommand } = require("@aws-sdk/client-kinesis-video-signaling"); // CommonJS import
 * const client = new KinesisVideoSignalingClient(config);
 * const command = new GetIceServerConfigCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetIceServerConfigCommandInput} for command's `input` shape.
 * @see {@link GetIceServerConfigCommandOutput} for command's `response` shape.
 * @see {@link KinesisVideoSignalingClientResolvedConfig | config} for command's `input` shape.
 *
 */
var GetIceServerConfigCommand = /** @class */ (function (_super) {
    __extends(GetIceServerConfigCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function GetIceServerConfigCommand(input) {
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
    GetIceServerConfigCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "KinesisVideoSignalingClient";
        var commandName = "GetIceServerConfigCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: GetIceServerConfigRequest.filterSensitiveLog,
            outputFilterSensitiveLog: GetIceServerConfigResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    GetIceServerConfigCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1GetIceServerConfigCommand(input, context);
    };
    GetIceServerConfigCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1GetIceServerConfigCommand(output, context);
    };
    return GetIceServerConfigCommand;
}($Command));
export { GetIceServerConfigCommand };
//# sourceMappingURL=GetIceServerConfigCommand.js.map