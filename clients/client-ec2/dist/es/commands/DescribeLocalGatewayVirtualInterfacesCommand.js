import { __extends } from "tslib";
import { DescribeLocalGatewayVirtualInterfacesRequest, DescribeLocalGatewayVirtualInterfacesResult, } from "../models/models_3";
import { deserializeAws_ec2DescribeLocalGatewayVirtualInterfacesCommand, serializeAws_ec2DescribeLocalGatewayVirtualInterfacesCommand, } from "../protocols/Aws_ec2";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Describes the specified local gateway virtual interfaces.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, DescribeLocalGatewayVirtualInterfacesCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, DescribeLocalGatewayVirtualInterfacesCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const command = new DescribeLocalGatewayVirtualInterfacesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeLocalGatewayVirtualInterfacesCommandInput} for command's `input` shape.
 * @see {@link DescribeLocalGatewayVirtualInterfacesCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DescribeLocalGatewayVirtualInterfacesCommand = /** @class */ (function (_super) {
    __extends(DescribeLocalGatewayVirtualInterfacesCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DescribeLocalGatewayVirtualInterfacesCommand(input) {
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
    DescribeLocalGatewayVirtualInterfacesCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "EC2Client";
        var commandName = "DescribeLocalGatewayVirtualInterfacesCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DescribeLocalGatewayVirtualInterfacesRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DescribeLocalGatewayVirtualInterfacesResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DescribeLocalGatewayVirtualInterfacesCommand.prototype.serialize = function (input, context) {
        return serializeAws_ec2DescribeLocalGatewayVirtualInterfacesCommand(input, context);
    };
    DescribeLocalGatewayVirtualInterfacesCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_ec2DescribeLocalGatewayVirtualInterfacesCommand(output, context);
    };
    return DescribeLocalGatewayVirtualInterfacesCommand;
}($Command));
export { DescribeLocalGatewayVirtualInterfacesCommand };
//# sourceMappingURL=DescribeLocalGatewayVirtualInterfacesCommand.js.map