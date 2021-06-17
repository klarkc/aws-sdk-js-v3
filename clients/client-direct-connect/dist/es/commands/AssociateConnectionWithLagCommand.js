import { __extends } from "tslib";
import { AssociateConnectionWithLagRequest, Connection } from "../models/models_0";
import { deserializeAws_json1_1AssociateConnectionWithLagCommand, serializeAws_json1_1AssociateConnectionWithLagCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Associates an existing connection with a link aggregation group (LAG). The connection
 *       is interrupted and re-established as a member of the LAG (connectivity to AWS is
 *       interrupted). The connection must be hosted on the same AWS Direct Connect endpoint as the LAG, and its
 *       bandwidth must match the bandwidth for the LAG. You can re-associate a connection that's
 *       currently associated with a different LAG; however, if removing the connection would cause
 *       the original LAG to fall below its setting for minimum number of operational connections,
 *       the request fails.</p>
 *          <p>Any virtual interfaces that are directly associated with the connection are
 *       automatically re-associated with the LAG. If the connection was originally associated
 *       with a different LAG, the virtual interfaces remain associated with the original
 *       LAG.</p>
 *          <p>For interconnects, any hosted connections are automatically re-associated with the
 *       LAG. If the interconnect was originally associated with a different LAG, the hosted
 *       connections remain associated with the original LAG.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DirectConnectClient, AssociateConnectionWithLagCommand } from "@aws-sdk/client-direct-connect"; // ES Modules import
 * // const { DirectConnectClient, AssociateConnectionWithLagCommand } = require("@aws-sdk/client-direct-connect"); // CommonJS import
 * const client = new DirectConnectClient(config);
 * const command = new AssociateConnectionWithLagCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link AssociateConnectionWithLagCommandInput} for command's `input` shape.
 * @see {@link AssociateConnectionWithLagCommandOutput} for command's `response` shape.
 * @see {@link DirectConnectClientResolvedConfig | config} for command's `input` shape.
 *
 */
var AssociateConnectionWithLagCommand = /** @class */ (function (_super) {
    __extends(AssociateConnectionWithLagCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function AssociateConnectionWithLagCommand(input) {
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
    AssociateConnectionWithLagCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "DirectConnectClient";
        var commandName = "AssociateConnectionWithLagCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: AssociateConnectionWithLagRequest.filterSensitiveLog,
            outputFilterSensitiveLog: Connection.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    AssociateConnectionWithLagCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1AssociateConnectionWithLagCommand(input, context);
    };
    AssociateConnectionWithLagCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1AssociateConnectionWithLagCommand(output, context);
    };
    return AssociateConnectionWithLagCommand;
}($Command));
export { AssociateConnectionWithLagCommand };
//# sourceMappingURL=AssociateConnectionWithLagCommand.js.map