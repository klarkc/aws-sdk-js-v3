import { __extends } from "tslib";
import { DeclineHandshakeRequest, DeclineHandshakeResponse } from "../models/models_0";
import { deserializeAws_json1_1DeclineHandshakeCommand, serializeAws_json1_1DeclineHandshakeCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Declines a handshake request. This sets the handshake state to <code>DECLINED</code>
 *             and effectively deactivates the request.</p>
 *         <p>This operation can be called only from the account that received the handshake. The originator of the handshake can use <a>CancelHandshake</a>
 *             instead. The originator can't reactivate a declined request, but can reinitiate the
 *             process with a new handshake request.</p>
 *         <p>After you decline a handshake, it continues to appear in the results of relevant APIs
 *             for only 30 days. After that, it's deleted.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { OrganizationsClient, DeclineHandshakeCommand } from "@aws-sdk/client-organizations"; // ES Modules import
 * // const { OrganizationsClient, DeclineHandshakeCommand } = require("@aws-sdk/client-organizations"); // CommonJS import
 * const client = new OrganizationsClient(config);
 * const command = new DeclineHandshakeCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeclineHandshakeCommandInput} for command's `input` shape.
 * @see {@link DeclineHandshakeCommandOutput} for command's `response` shape.
 * @see {@link OrganizationsClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DeclineHandshakeCommand = /** @class */ (function (_super) {
    __extends(DeclineHandshakeCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DeclineHandshakeCommand(input) {
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
    DeclineHandshakeCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "OrganizationsClient";
        var commandName = "DeclineHandshakeCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DeclineHandshakeRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DeclineHandshakeResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DeclineHandshakeCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1DeclineHandshakeCommand(input, context);
    };
    DeclineHandshakeCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1DeclineHandshakeCommand(output, context);
    };
    return DeclineHandshakeCommand;
}($Command));
export { DeclineHandshakeCommand };
//# sourceMappingURL=DeclineHandshakeCommand.js.map