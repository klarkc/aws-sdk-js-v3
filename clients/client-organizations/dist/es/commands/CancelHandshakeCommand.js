import { __extends } from "tslib";
import { CancelHandshakeRequest, CancelHandshakeResponse } from "../models/models_0";
import { deserializeAws_json1_1CancelHandshakeCommand, serializeAws_json1_1CancelHandshakeCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Cancels a handshake. Canceling a handshake sets the handshake state to
 *                 <code>CANCELED</code>.</p>
 *         <p>This operation can be called only from the account that originated the handshake. The recipient of the handshake can't cancel it, but can use <a>DeclineHandshake</a> instead. After a handshake is canceled, the recipient
 *             can no longer respond to that handshake.</p>
 *         <p>After you cancel a handshake, it continues to appear in the results of relevant APIs
 *             for only 30 days. After that, it's deleted.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { OrganizationsClient, CancelHandshakeCommand } from "@aws-sdk/client-organizations"; // ES Modules import
 * // const { OrganizationsClient, CancelHandshakeCommand } = require("@aws-sdk/client-organizations"); // CommonJS import
 * const client = new OrganizationsClient(config);
 * const command = new CancelHandshakeCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CancelHandshakeCommandInput} for command's `input` shape.
 * @see {@link CancelHandshakeCommandOutput} for command's `response` shape.
 * @see {@link OrganizationsClientResolvedConfig | config} for command's `input` shape.
 *
 */
var CancelHandshakeCommand = /** @class */ (function (_super) {
    __extends(CancelHandshakeCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function CancelHandshakeCommand(input) {
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
    CancelHandshakeCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "OrganizationsClient";
        var commandName = "CancelHandshakeCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: CancelHandshakeRequest.filterSensitiveLog,
            outputFilterSensitiveLog: CancelHandshakeResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    CancelHandshakeCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1CancelHandshakeCommand(input, context);
    };
    CancelHandshakeCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1CancelHandshakeCommand(output, context);
    };
    return CancelHandshakeCommand;
}($Command));
export { CancelHandshakeCommand };
//# sourceMappingURL=CancelHandshakeCommand.js.map