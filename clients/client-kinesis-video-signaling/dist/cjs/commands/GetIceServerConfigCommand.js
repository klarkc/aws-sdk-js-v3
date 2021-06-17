"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetIceServerConfigCommand = void 0;
const models_0_1 = require("../models/models_0");
const Aws_restJson1_1 = require("../protocols/Aws_restJson1");
const middleware_serde_1 = require("@aws-sdk/middleware-serde");
const smithy_client_1 = require("@aws-sdk/smithy-client");
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
class GetIceServerConfigCommand extends smithy_client_1.Command {
    // Start section: command_properties
    // End section: command_properties
    constructor(input) {
        // Start section: command_constructor
        super();
        this.input = input;
        // End section: command_constructor
    }
    /**
     * @internal
     */
    resolveMiddleware(clientStack, configuration, options) {
        this.middlewareStack.use(middleware_serde_1.getSerdePlugin(configuration, this.serialize, this.deserialize));
        const stack = clientStack.concat(this.middlewareStack);
        const { logger } = configuration;
        const clientName = "KinesisVideoSignalingClient";
        const commandName = "GetIceServerConfigCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: models_0_1.GetIceServerConfigRequest.filterSensitiveLog,
            outputFilterSensitiveLog: models_0_1.GetIceServerConfigResponse.filterSensitiveLog,
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return Aws_restJson1_1.serializeAws_restJson1GetIceServerConfigCommand(input, context);
    }
    deserialize(output, context) {
        return Aws_restJson1_1.deserializeAws_restJson1GetIceServerConfigCommand(output, context);
    }
}
exports.GetIceServerConfigCommand = GetIceServerConfigCommand;
//# sourceMappingURL=GetIceServerConfigCommand.js.map