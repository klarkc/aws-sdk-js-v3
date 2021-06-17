import { __extends } from "tslib";
import { DescribeDirectConnectGatewayAssociationProposalsRequest, DescribeDirectConnectGatewayAssociationProposalsResult, } from "../models/models_0";
import { deserializeAws_json1_1DescribeDirectConnectGatewayAssociationProposalsCommand, serializeAws_json1_1DescribeDirectConnectGatewayAssociationProposalsCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Describes one or more association proposals for connection between a virtual private gateway or transit gateway and a Direct Connect gateway. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DirectConnectClient, DescribeDirectConnectGatewayAssociationProposalsCommand } from "@aws-sdk/client-direct-connect"; // ES Modules import
 * // const { DirectConnectClient, DescribeDirectConnectGatewayAssociationProposalsCommand } = require("@aws-sdk/client-direct-connect"); // CommonJS import
 * const client = new DirectConnectClient(config);
 * const command = new DescribeDirectConnectGatewayAssociationProposalsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeDirectConnectGatewayAssociationProposalsCommandInput} for command's `input` shape.
 * @see {@link DescribeDirectConnectGatewayAssociationProposalsCommandOutput} for command's `response` shape.
 * @see {@link DirectConnectClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DescribeDirectConnectGatewayAssociationProposalsCommand = /** @class */ (function (_super) {
    __extends(DescribeDirectConnectGatewayAssociationProposalsCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DescribeDirectConnectGatewayAssociationProposalsCommand(input) {
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
    DescribeDirectConnectGatewayAssociationProposalsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "DirectConnectClient";
        var commandName = "DescribeDirectConnectGatewayAssociationProposalsCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DescribeDirectConnectGatewayAssociationProposalsRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DescribeDirectConnectGatewayAssociationProposalsResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DescribeDirectConnectGatewayAssociationProposalsCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1DescribeDirectConnectGatewayAssociationProposalsCommand(input, context);
    };
    DescribeDirectConnectGatewayAssociationProposalsCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1DescribeDirectConnectGatewayAssociationProposalsCommand(output, context);
    };
    return DescribeDirectConnectGatewayAssociationProposalsCommand;
}($Command));
export { DescribeDirectConnectGatewayAssociationProposalsCommand };
//# sourceMappingURL=DescribeDirectConnectGatewayAssociationProposalsCommand.js.map