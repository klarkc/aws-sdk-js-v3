import { __extends } from "tslib";
import { SendAlexaOfferToMasterRequest, SendAlexaOfferToMasterResponse } from "../models/models_0";
import { deserializeAws_restJson1SendAlexaOfferToMasterCommand, serializeAws_restJson1SendAlexaOfferToMasterCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>This API allows you to connect WebRTC-enabled devices with Alexa display devices. When
 *             invoked, it sends the Alexa Session Description Protocol (SDP) offer to the master peer.
 *             The offer is delivered as soon as the master is connected to the specified signaling
 *             channel. This API returns the SDP answer from the connected master. If the master is not
 *             connected to the signaling channel, redelivery requests are made until the message
 *             expires.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { KinesisVideoSignalingClient, SendAlexaOfferToMasterCommand } from "@aws-sdk/client-kinesis-video-signaling"; // ES Modules import
 * // const { KinesisVideoSignalingClient, SendAlexaOfferToMasterCommand } = require("@aws-sdk/client-kinesis-video-signaling"); // CommonJS import
 * const client = new KinesisVideoSignalingClient(config);
 * const command = new SendAlexaOfferToMasterCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link SendAlexaOfferToMasterCommandInput} for command's `input` shape.
 * @see {@link SendAlexaOfferToMasterCommandOutput} for command's `response` shape.
 * @see {@link KinesisVideoSignalingClientResolvedConfig | config} for command's `input` shape.
 *
 */
var SendAlexaOfferToMasterCommand = /** @class */ (function (_super) {
    __extends(SendAlexaOfferToMasterCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function SendAlexaOfferToMasterCommand(input) {
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
    SendAlexaOfferToMasterCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "KinesisVideoSignalingClient";
        var commandName = "SendAlexaOfferToMasterCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: SendAlexaOfferToMasterRequest.filterSensitiveLog,
            outputFilterSensitiveLog: SendAlexaOfferToMasterResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    SendAlexaOfferToMasterCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1SendAlexaOfferToMasterCommand(input, context);
    };
    SendAlexaOfferToMasterCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1SendAlexaOfferToMasterCommand(output, context);
    };
    return SendAlexaOfferToMasterCommand;
}($Command));
export { SendAlexaOfferToMasterCommand };
//# sourceMappingURL=SendAlexaOfferToMasterCommand.js.map