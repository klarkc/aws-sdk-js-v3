import { __extends } from "tslib";
import { ConfirmConnectionRequest, ConfirmConnectionResponse } from "../models/models_0";
import { deserializeAws_json1_1ConfirmConnectionCommand, serializeAws_json1_1ConfirmConnectionCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Confirms the creation of the specified hosted connection on an interconnect.</p>
 *          <p>Upon creation, the hosted connection is initially in the <code>Ordering</code> state, and
 *       remains in this state until the owner confirms creation of the hosted connection.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DirectConnectClient, ConfirmConnectionCommand } from "@aws-sdk/client-direct-connect"; // ES Modules import
 * // const { DirectConnectClient, ConfirmConnectionCommand } = require("@aws-sdk/client-direct-connect"); // CommonJS import
 * const client = new DirectConnectClient(config);
 * const command = new ConfirmConnectionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ConfirmConnectionCommandInput} for command's `input` shape.
 * @see {@link ConfirmConnectionCommandOutput} for command's `response` shape.
 * @see {@link DirectConnectClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ConfirmConnectionCommand = /** @class */ (function (_super) {
    __extends(ConfirmConnectionCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function ConfirmConnectionCommand(input) {
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
    ConfirmConnectionCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "DirectConnectClient";
        var commandName = "ConfirmConnectionCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: ConfirmConnectionRequest.filterSensitiveLog,
            outputFilterSensitiveLog: ConfirmConnectionResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    ConfirmConnectionCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1ConfirmConnectionCommand(input, context);
    };
    ConfirmConnectionCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1ConfirmConnectionCommand(output, context);
    };
    return ConfirmConnectionCommand;
}($Command));
export { ConfirmConnectionCommand };
//# sourceMappingURL=ConfirmConnectionCommand.js.map