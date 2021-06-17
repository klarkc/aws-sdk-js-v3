import { __extends } from "tslib";
import { AssociateHostedConnectionRequest, Connection } from "../models/models_0";
import { deserializeAws_json1_1AssociateHostedConnectionCommand, serializeAws_json1_1AssociateHostedConnectionCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Associates a hosted connection and its virtual interfaces with a link aggregation
 *       group (LAG) or interconnect. If the target interconnect or LAG has an existing hosted
 *       connection with a conflicting VLAN number or IP address, the operation fails. This
 *       action temporarily interrupts the hosted connection's connectivity to AWS as it is being
 *       migrated.</p>
 *          <note>
 *             <p>Intended for use by AWS Direct Connect Partners only.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DirectConnectClient, AssociateHostedConnectionCommand } from "@aws-sdk/client-direct-connect"; // ES Modules import
 * // const { DirectConnectClient, AssociateHostedConnectionCommand } = require("@aws-sdk/client-direct-connect"); // CommonJS import
 * const client = new DirectConnectClient(config);
 * const command = new AssociateHostedConnectionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link AssociateHostedConnectionCommandInput} for command's `input` shape.
 * @see {@link AssociateHostedConnectionCommandOutput} for command's `response` shape.
 * @see {@link DirectConnectClientResolvedConfig | config} for command's `input` shape.
 *
 */
var AssociateHostedConnectionCommand = /** @class */ (function (_super) {
    __extends(AssociateHostedConnectionCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function AssociateHostedConnectionCommand(input) {
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
    AssociateHostedConnectionCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "DirectConnectClient";
        var commandName = "AssociateHostedConnectionCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: AssociateHostedConnectionRequest.filterSensitiveLog,
            outputFilterSensitiveLog: Connection.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    AssociateHostedConnectionCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1AssociateHostedConnectionCommand(input, context);
    };
    AssociateHostedConnectionCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1AssociateHostedConnectionCommand(output, context);
    };
    return AssociateHostedConnectionCommand;
}($Command));
export { AssociateHostedConnectionCommand };
//# sourceMappingURL=AssociateHostedConnectionCommand.js.map