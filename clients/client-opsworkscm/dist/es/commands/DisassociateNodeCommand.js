import { __extends } from "tslib";
import { DisassociateNodeRequest, DisassociateNodeResponse } from "../models/models_0";
import { deserializeAws_json1_1DisassociateNodeCommand, serializeAws_json1_1DisassociateNodeCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>
 *       Disassociates a node from an AWS OpsWorks CM server, and removes the node from the server's managed nodes. After a node is disassociated,
 *       the node key pair is no longer valid for accessing the configuration manager's API. For more information about how to associate a node, see <a>AssociateNode</a>.
 *     </p>
 *          <p>A node can can only be disassociated from a server that is in a <code>HEALTHY</code> state. Otherwise, an <code>InvalidStateException</code> is thrown.
 *       A <code>ResourceNotFoundException</code> is thrown when the server does not exist.
 *       A <code>ValidationException</code> is raised when parameters of the request are not valid.
 *     </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { OpsWorksCMClient, DisassociateNodeCommand } from "@aws-sdk/client-opsworkscm"; // ES Modules import
 * // const { OpsWorksCMClient, DisassociateNodeCommand } = require("@aws-sdk/client-opsworkscm"); // CommonJS import
 * const client = new OpsWorksCMClient(config);
 * const command = new DisassociateNodeCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DisassociateNodeCommandInput} for command's `input` shape.
 * @see {@link DisassociateNodeCommandOutput} for command's `response` shape.
 * @see {@link OpsWorksCMClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DisassociateNodeCommand = /** @class */ (function (_super) {
    __extends(DisassociateNodeCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DisassociateNodeCommand(input) {
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
    DisassociateNodeCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "OpsWorksCMClient";
        var commandName = "DisassociateNodeCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DisassociateNodeRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DisassociateNodeResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DisassociateNodeCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1DisassociateNodeCommand(input, context);
    };
    DisassociateNodeCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1DisassociateNodeCommand(output, context);
    };
    return DisassociateNodeCommand;
}($Command));
export { DisassociateNodeCommand };
//# sourceMappingURL=DisassociateNodeCommand.js.map