import { __extends } from "tslib";
import { AllocateHostedConnectionRequest, Connection } from "../models/models_0";
import { deserializeAws_json1_1AllocateHostedConnectionCommand, serializeAws_json1_1AllocateHostedConnectionCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Creates a hosted connection on the specified interconnect or a link aggregation group (LAG) of interconnects.</p>
 *          <p>Allocates a VLAN number and a specified amount of capacity (bandwidth) for use by a hosted connection on the specified interconnect or LAG of interconnects. AWS polices the hosted connection for the specified capacity and the AWS Direct Connect Partner must also police the hosted connection for the specified capacity.</p>
 *          <note>
 *             <p>Intended for use by AWS Direct Connect Partners only.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DirectConnectClient, AllocateHostedConnectionCommand } from "@aws-sdk/client-direct-connect"; // ES Modules import
 * // const { DirectConnectClient, AllocateHostedConnectionCommand } = require("@aws-sdk/client-direct-connect"); // CommonJS import
 * const client = new DirectConnectClient(config);
 * const command = new AllocateHostedConnectionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link AllocateHostedConnectionCommandInput} for command's `input` shape.
 * @see {@link AllocateHostedConnectionCommandOutput} for command's `response` shape.
 * @see {@link DirectConnectClientResolvedConfig | config} for command's `input` shape.
 *
 */
var AllocateHostedConnectionCommand = /** @class */ (function (_super) {
    __extends(AllocateHostedConnectionCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function AllocateHostedConnectionCommand(input) {
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
    AllocateHostedConnectionCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "DirectConnectClient";
        var commandName = "AllocateHostedConnectionCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: AllocateHostedConnectionRequest.filterSensitiveLog,
            outputFilterSensitiveLog: Connection.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    AllocateHostedConnectionCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1AllocateHostedConnectionCommand(input, context);
    };
    AllocateHostedConnectionCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1AllocateHostedConnectionCommand(output, context);
    };
    return AllocateHostedConnectionCommand;
}($Command));
export { AllocateHostedConnectionCommand };
//# sourceMappingURL=AllocateHostedConnectionCommand.js.map