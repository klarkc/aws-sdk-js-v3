import { __extends } from "tslib";
import { DescribeVirtualInterfacesRequest, VirtualInterfaces } from "../models/models_0";
import { deserializeAws_json1_1DescribeVirtualInterfacesCommand, serializeAws_json1_1DescribeVirtualInterfacesCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Displays all virtual interfaces for an AWS account. Virtual interfaces deleted fewer
 *       than 15 minutes before you make the request are also returned. If you specify a
 *       connection ID, only the virtual interfaces associated with the connection are returned.
 *       If you specify a virtual interface ID, then only a single virtual interface is returned.</p>
 *          <p>A virtual interface (VLAN) transmits the traffic between the AWS Direct Connect location and the customer network.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DirectConnectClient, DescribeVirtualInterfacesCommand } from "@aws-sdk/client-direct-connect"; // ES Modules import
 * // const { DirectConnectClient, DescribeVirtualInterfacesCommand } = require("@aws-sdk/client-direct-connect"); // CommonJS import
 * const client = new DirectConnectClient(config);
 * const command = new DescribeVirtualInterfacesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeVirtualInterfacesCommandInput} for command's `input` shape.
 * @see {@link DescribeVirtualInterfacesCommandOutput} for command's `response` shape.
 * @see {@link DirectConnectClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DescribeVirtualInterfacesCommand = /** @class */ (function (_super) {
    __extends(DescribeVirtualInterfacesCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DescribeVirtualInterfacesCommand(input) {
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
    DescribeVirtualInterfacesCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "DirectConnectClient";
        var commandName = "DescribeVirtualInterfacesCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DescribeVirtualInterfacesRequest.filterSensitiveLog,
            outputFilterSensitiveLog: VirtualInterfaces.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DescribeVirtualInterfacesCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1DescribeVirtualInterfacesCommand(input, context);
    };
    DescribeVirtualInterfacesCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1DescribeVirtualInterfacesCommand(output, context);
    };
    return DescribeVirtualInterfacesCommand;
}($Command));
export { DescribeVirtualInterfacesCommand };
//# sourceMappingURL=DescribeVirtualInterfacesCommand.js.map