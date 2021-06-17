import { __extends } from "tslib";
import { AllocateConnectionOnInterconnectRequest, Connection } from "../models/models_0";
import { deserializeAws_json1_1AllocateConnectionOnInterconnectCommand, serializeAws_json1_1AllocateConnectionOnInterconnectCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * @deprecated
 *
 * <p>Deprecated. Use <a>AllocateHostedConnection</a> instead.</p>
 *          <p>Creates a hosted connection on an interconnect.</p>
 *          <p>Allocates a VLAN number and a specified amount of bandwidth for use by a hosted connection on the specified interconnect.</p>
 *          <note>
 *             <p>Intended for use by AWS Direct Connect Partners only.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DirectConnectClient, AllocateConnectionOnInterconnectCommand } from "@aws-sdk/client-direct-connect"; // ES Modules import
 * // const { DirectConnectClient, AllocateConnectionOnInterconnectCommand } = require("@aws-sdk/client-direct-connect"); // CommonJS import
 * const client = new DirectConnectClient(config);
 * const command = new AllocateConnectionOnInterconnectCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link AllocateConnectionOnInterconnectCommandInput} for command's `input` shape.
 * @see {@link AllocateConnectionOnInterconnectCommandOutput} for command's `response` shape.
 * @see {@link DirectConnectClientResolvedConfig | config} for command's `input` shape.
 *
 */
var AllocateConnectionOnInterconnectCommand = /** @class */ (function (_super) {
    __extends(AllocateConnectionOnInterconnectCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function AllocateConnectionOnInterconnectCommand(input) {
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
    AllocateConnectionOnInterconnectCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "DirectConnectClient";
        var commandName = "AllocateConnectionOnInterconnectCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: AllocateConnectionOnInterconnectRequest.filterSensitiveLog,
            outputFilterSensitiveLog: Connection.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    AllocateConnectionOnInterconnectCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1AllocateConnectionOnInterconnectCommand(input, context);
    };
    AllocateConnectionOnInterconnectCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1AllocateConnectionOnInterconnectCommand(output, context);
    };
    return AllocateConnectionOnInterconnectCommand;
}($Command));
export { AllocateConnectionOnInterconnectCommand };
//# sourceMappingURL=AllocateConnectionOnInterconnectCommand.js.map