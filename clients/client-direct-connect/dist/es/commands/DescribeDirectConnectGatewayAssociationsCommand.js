import { __extends } from "tslib";
import { DescribeDirectConnectGatewayAssociationsRequest, DescribeDirectConnectGatewayAssociationsResult, } from "../models/models_0";
import { deserializeAws_json1_1DescribeDirectConnectGatewayAssociationsCommand, serializeAws_json1_1DescribeDirectConnectGatewayAssociationsCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Lists the associations between your Direct Connect gateways and virtual private gateways and transit gateways. You must specify one of the following:</p>
 *          <ul>
 *             <li>
 *                <p>A Direct Connect gateway</p>
 *                <p>The response contains all virtual private gateways and transit gateways associated with the Direct Connect gateway.</p>
 *             </li>
 *             <li>
 *                <p>A virtual private gateway</p>
 *                <p>The response contains the Direct Connect gateway.</p>
 *             </li>
 *             <li>
 *                <p>A transit gateway</p>
 *                <p>The response contains the Direct Connect gateway.</p>
 *             </li>
 *             <li>
 *                <p>A Direct Connect gateway and a virtual private gateway</p>
 *                <p>The response contains the association between the Direct Connect gateway and virtual private gateway.</p>
 *             </li>
 *             <li>
 *                <p>A Direct Connect gateway and a transit gateway</p>
 *                <p>The response contains the association between the Direct Connect gateway and transit gateway.</p>
 *             </li>
 *          </ul>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DirectConnectClient, DescribeDirectConnectGatewayAssociationsCommand } from "@aws-sdk/client-direct-connect"; // ES Modules import
 * // const { DirectConnectClient, DescribeDirectConnectGatewayAssociationsCommand } = require("@aws-sdk/client-direct-connect"); // CommonJS import
 * const client = new DirectConnectClient(config);
 * const command = new DescribeDirectConnectGatewayAssociationsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeDirectConnectGatewayAssociationsCommandInput} for command's `input` shape.
 * @see {@link DescribeDirectConnectGatewayAssociationsCommandOutput} for command's `response` shape.
 * @see {@link DirectConnectClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DescribeDirectConnectGatewayAssociationsCommand = /** @class */ (function (_super) {
    __extends(DescribeDirectConnectGatewayAssociationsCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DescribeDirectConnectGatewayAssociationsCommand(input) {
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
    DescribeDirectConnectGatewayAssociationsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "DirectConnectClient";
        var commandName = "DescribeDirectConnectGatewayAssociationsCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DescribeDirectConnectGatewayAssociationsRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DescribeDirectConnectGatewayAssociationsResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DescribeDirectConnectGatewayAssociationsCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1DescribeDirectConnectGatewayAssociationsCommand(input, context);
    };
    DescribeDirectConnectGatewayAssociationsCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1DescribeDirectConnectGatewayAssociationsCommand(output, context);
    };
    return DescribeDirectConnectGatewayAssociationsCommand;
}($Command));
export { DescribeDirectConnectGatewayAssociationsCommand };
//# sourceMappingURL=DescribeDirectConnectGatewayAssociationsCommand.js.map