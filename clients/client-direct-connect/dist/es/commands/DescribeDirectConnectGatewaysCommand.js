import { __extends } from "tslib";
import { DescribeDirectConnectGatewaysRequest, DescribeDirectConnectGatewaysResult } from "../models/models_0";
import { deserializeAws_json1_1DescribeDirectConnectGatewaysCommand, serializeAws_json1_1DescribeDirectConnectGatewaysCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Lists all your Direct Connect gateways or only the specified Direct Connect gateway. Deleted Direct Connect gateways are not returned.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DirectConnectClient, DescribeDirectConnectGatewaysCommand } from "@aws-sdk/client-direct-connect"; // ES Modules import
 * // const { DirectConnectClient, DescribeDirectConnectGatewaysCommand } = require("@aws-sdk/client-direct-connect"); // CommonJS import
 * const client = new DirectConnectClient(config);
 * const command = new DescribeDirectConnectGatewaysCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeDirectConnectGatewaysCommandInput} for command's `input` shape.
 * @see {@link DescribeDirectConnectGatewaysCommandOutput} for command's `response` shape.
 * @see {@link DirectConnectClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DescribeDirectConnectGatewaysCommand = /** @class */ (function (_super) {
    __extends(DescribeDirectConnectGatewaysCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DescribeDirectConnectGatewaysCommand(input) {
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
    DescribeDirectConnectGatewaysCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "DirectConnectClient";
        var commandName = "DescribeDirectConnectGatewaysCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DescribeDirectConnectGatewaysRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DescribeDirectConnectGatewaysResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DescribeDirectConnectGatewaysCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1DescribeDirectConnectGatewaysCommand(input, context);
    };
    DescribeDirectConnectGatewaysCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1DescribeDirectConnectGatewaysCommand(output, context);
    };
    return DescribeDirectConnectGatewaysCommand;
}($Command));
export { DescribeDirectConnectGatewaysCommand };
//# sourceMappingURL=DescribeDirectConnectGatewaysCommand.js.map