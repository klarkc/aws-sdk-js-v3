import { __extends } from "tslib";
import { Connection, DisassociateConnectionFromLagRequest } from "../models/models_0";
import { deserializeAws_json1_1DisassociateConnectionFromLagCommand, serializeAws_json1_1DisassociateConnectionFromLagCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Disassociates a connection from a link aggregation group (LAG). The connection is
 *       interrupted and re-established as a standalone connection (the connection is not
 *       deleted; to delete the connection, use the <a>DeleteConnection</a> request).
 *       If the LAG has associated virtual interfaces or hosted connections, they remain
 *       associated with the LAG. A disassociated connection owned by an AWS Direct Connect Partner is
 *       automatically converted to an interconnect.</p>
 *          <p>If disassociating the connection would cause the LAG to fall below its setting for
 *       minimum number of operational connections, the request fails, except when it's the last
 *       member of the LAG. If all connections are disassociated, the LAG continues to exist as
 *       an empty LAG with no physical connections. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DirectConnectClient, DisassociateConnectionFromLagCommand } from "@aws-sdk/client-direct-connect"; // ES Modules import
 * // const { DirectConnectClient, DisassociateConnectionFromLagCommand } = require("@aws-sdk/client-direct-connect"); // CommonJS import
 * const client = new DirectConnectClient(config);
 * const command = new DisassociateConnectionFromLagCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DisassociateConnectionFromLagCommandInput} for command's `input` shape.
 * @see {@link DisassociateConnectionFromLagCommandOutput} for command's `response` shape.
 * @see {@link DirectConnectClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DisassociateConnectionFromLagCommand = /** @class */ (function (_super) {
    __extends(DisassociateConnectionFromLagCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DisassociateConnectionFromLagCommand(input) {
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
    DisassociateConnectionFromLagCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "DirectConnectClient";
        var commandName = "DisassociateConnectionFromLagCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DisassociateConnectionFromLagRequest.filterSensitiveLog,
            outputFilterSensitiveLog: Connection.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DisassociateConnectionFromLagCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1DisassociateConnectionFromLagCommand(input, context);
    };
    DisassociateConnectionFromLagCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1DisassociateConnectionFromLagCommand(output, context);
    };
    return DisassociateConnectionFromLagCommand;
}($Command));
export { DisassociateConnectionFromLagCommand };
//# sourceMappingURL=DisassociateConnectionFromLagCommand.js.map