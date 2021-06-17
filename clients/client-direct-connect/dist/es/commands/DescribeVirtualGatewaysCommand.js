import { __extends } from "tslib";
import { VirtualGateways } from "../models/models_0";
import { deserializeAws_json1_1DescribeVirtualGatewaysCommand, serializeAws_json1_1DescribeVirtualGatewaysCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Lists the virtual private gateways owned by the AWS account.</p>
 *          <p>You can create one or more AWS Direct Connect private virtual interfaces linked to a virtual private gateway.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DirectConnectClient, DescribeVirtualGatewaysCommand } from "@aws-sdk/client-direct-connect"; // ES Modules import
 * // const { DirectConnectClient, DescribeVirtualGatewaysCommand } = require("@aws-sdk/client-direct-connect"); // CommonJS import
 * const client = new DirectConnectClient(config);
 * const command = new DescribeVirtualGatewaysCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeVirtualGatewaysCommandInput} for command's `input` shape.
 * @see {@link DescribeVirtualGatewaysCommandOutput} for command's `response` shape.
 * @see {@link DirectConnectClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DescribeVirtualGatewaysCommand = /** @class */ (function (_super) {
    __extends(DescribeVirtualGatewaysCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DescribeVirtualGatewaysCommand(input) {
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
    DescribeVirtualGatewaysCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "DirectConnectClient";
        var commandName = "DescribeVirtualGatewaysCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: function (input) { return input; },
            outputFilterSensitiveLog: VirtualGateways.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DescribeVirtualGatewaysCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1DescribeVirtualGatewaysCommand(input, context);
    };
    DescribeVirtualGatewaysCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1DescribeVirtualGatewaysCommand(output, context);
    };
    return DescribeVirtualGatewaysCommand;
}($Command));
export { DescribeVirtualGatewaysCommand };
//# sourceMappingURL=DescribeVirtualGatewaysCommand.js.map