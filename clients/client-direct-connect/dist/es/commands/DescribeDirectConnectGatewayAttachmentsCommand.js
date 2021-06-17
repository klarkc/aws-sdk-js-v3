import { __extends } from "tslib";
import { DescribeDirectConnectGatewayAttachmentsRequest, DescribeDirectConnectGatewayAttachmentsResult, } from "../models/models_0";
import { deserializeAws_json1_1DescribeDirectConnectGatewayAttachmentsCommand, serializeAws_json1_1DescribeDirectConnectGatewayAttachmentsCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Lists the attachments between your Direct Connect gateways and virtual interfaces. You must specify
 *       a Direct Connect gateway, a virtual interface, or both. If you specify a Direct Connect gateway, the response contains
 *       all virtual interfaces attached to the Direct Connect gateway. If you specify a virtual interface, the
 *       response contains all Direct Connect gateways attached to the virtual interface. If you specify both,
 *       the response contains the attachment between the Direct Connect gateway and the virtual interface.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DirectConnectClient, DescribeDirectConnectGatewayAttachmentsCommand } from "@aws-sdk/client-direct-connect"; // ES Modules import
 * // const { DirectConnectClient, DescribeDirectConnectGatewayAttachmentsCommand } = require("@aws-sdk/client-direct-connect"); // CommonJS import
 * const client = new DirectConnectClient(config);
 * const command = new DescribeDirectConnectGatewayAttachmentsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeDirectConnectGatewayAttachmentsCommandInput} for command's `input` shape.
 * @see {@link DescribeDirectConnectGatewayAttachmentsCommandOutput} for command's `response` shape.
 * @see {@link DirectConnectClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DescribeDirectConnectGatewayAttachmentsCommand = /** @class */ (function (_super) {
    __extends(DescribeDirectConnectGatewayAttachmentsCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DescribeDirectConnectGatewayAttachmentsCommand(input) {
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
    DescribeDirectConnectGatewayAttachmentsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "DirectConnectClient";
        var commandName = "DescribeDirectConnectGatewayAttachmentsCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DescribeDirectConnectGatewayAttachmentsRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DescribeDirectConnectGatewayAttachmentsResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DescribeDirectConnectGatewayAttachmentsCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1DescribeDirectConnectGatewayAttachmentsCommand(input, context);
    };
    DescribeDirectConnectGatewayAttachmentsCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1DescribeDirectConnectGatewayAttachmentsCommand(output, context);
    };
    return DescribeDirectConnectGatewayAttachmentsCommand;
}($Command));
export { DescribeDirectConnectGatewayAttachmentsCommand };
//# sourceMappingURL=DescribeDirectConnectGatewayAttachmentsCommand.js.map