import { __extends } from "tslib";
import { AcceptDirectConnectGatewayAssociationProposalRequest, AcceptDirectConnectGatewayAssociationProposalResult, } from "../models/models_0";
import { deserializeAws_json1_1AcceptDirectConnectGatewayAssociationProposalCommand, serializeAws_json1_1AcceptDirectConnectGatewayAssociationProposalCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Accepts a proposal request to attach a virtual private gateway or transit gateway to a Direct Connect gateway.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DirectConnectClient, AcceptDirectConnectGatewayAssociationProposalCommand } from "@aws-sdk/client-direct-connect"; // ES Modules import
 * // const { DirectConnectClient, AcceptDirectConnectGatewayAssociationProposalCommand } = require("@aws-sdk/client-direct-connect"); // CommonJS import
 * const client = new DirectConnectClient(config);
 * const command = new AcceptDirectConnectGatewayAssociationProposalCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link AcceptDirectConnectGatewayAssociationProposalCommandInput} for command's `input` shape.
 * @see {@link AcceptDirectConnectGatewayAssociationProposalCommandOutput} for command's `response` shape.
 * @see {@link DirectConnectClientResolvedConfig | config} for command's `input` shape.
 *
 */
var AcceptDirectConnectGatewayAssociationProposalCommand = /** @class */ (function (_super) {
    __extends(AcceptDirectConnectGatewayAssociationProposalCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function AcceptDirectConnectGatewayAssociationProposalCommand(input) {
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
    AcceptDirectConnectGatewayAssociationProposalCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "DirectConnectClient";
        var commandName = "AcceptDirectConnectGatewayAssociationProposalCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: AcceptDirectConnectGatewayAssociationProposalRequest.filterSensitiveLog,
            outputFilterSensitiveLog: AcceptDirectConnectGatewayAssociationProposalResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    AcceptDirectConnectGatewayAssociationProposalCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1AcceptDirectConnectGatewayAssociationProposalCommand(input, context);
    };
    AcceptDirectConnectGatewayAssociationProposalCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1AcceptDirectConnectGatewayAssociationProposalCommand(output, context);
    };
    return AcceptDirectConnectGatewayAssociationProposalCommand;
}($Command));
export { AcceptDirectConnectGatewayAssociationProposalCommand };
//# sourceMappingURL=AcceptDirectConnectGatewayAssociationProposalCommand.js.map