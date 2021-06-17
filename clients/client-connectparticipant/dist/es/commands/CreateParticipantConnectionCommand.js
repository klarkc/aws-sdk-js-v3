import { __extends } from "tslib";
import { CreateParticipantConnectionRequest, CreateParticipantConnectionResponse } from "../models/models_0";
import { deserializeAws_restJson1CreateParticipantConnectionCommand, serializeAws_restJson1CreateParticipantConnectionCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Creates the participant's connection. Note that ParticipantToken is used for invoking
 *             this API instead of ConnectionToken.</p>
 *         <p>The participant token is valid for the lifetime of the participant – until they are
 *             part of a contact.</p>
 *         <p>The response URL for <code>WEBSOCKET</code> Type has a connect expiry timeout of 100s.
 *             Clients must manually connect to the returned websocket URL and subscribe to the desired
 *             topic. </p>
 *         <p>For chat, you need to publish the following on the established websocket
 *             connection:</p>
 *
 *
 *         <p>
 *             <code>{"topic":"aws/subscribe","content":{"topics":["aws/chat"]}}</code>
 *          </p>
 *
 *         <p>Upon websocket URL expiry, as specified in the response ConnectionExpiry parameter,
 *             clients need to call this API again to obtain a new websocket URL and perform the same
 *             steps as before.</p>
 *
 *         <note>
 *             <p>The Amazon Connect Participant Service APIs do not use <a href="https://docs.aws.amazon.com/general/latest/gr/signature-version-4.html">Signature Version 4
 *                     authentication</a>.</p>
 *         </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConnectParticipantClient, CreateParticipantConnectionCommand } from "@aws-sdk/client-connectparticipant"; // ES Modules import
 * // const { ConnectParticipantClient, CreateParticipantConnectionCommand } = require("@aws-sdk/client-connectparticipant"); // CommonJS import
 * const client = new ConnectParticipantClient(config);
 * const command = new CreateParticipantConnectionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateParticipantConnectionCommandInput} for command's `input` shape.
 * @see {@link CreateParticipantConnectionCommandOutput} for command's `response` shape.
 * @see {@link ConnectParticipantClientResolvedConfig | config} for command's `input` shape.
 *
 */
var CreateParticipantConnectionCommand = /** @class */ (function (_super) {
    __extends(CreateParticipantConnectionCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function CreateParticipantConnectionCommand(input) {
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
    CreateParticipantConnectionCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "ConnectParticipantClient";
        var commandName = "CreateParticipantConnectionCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: CreateParticipantConnectionRequest.filterSensitiveLog,
            outputFilterSensitiveLog: CreateParticipantConnectionResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    CreateParticipantConnectionCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1CreateParticipantConnectionCommand(input, context);
    };
    CreateParticipantConnectionCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1CreateParticipantConnectionCommand(output, context);
    };
    return CreateParticipantConnectionCommand;
}($Command));
export { CreateParticipantConnectionCommand };
//# sourceMappingURL=CreateParticipantConnectionCommand.js.map