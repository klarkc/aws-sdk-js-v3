import { __extends } from "tslib";
import { DescribeLocalGatewayVirtualInterfaceGroupsRequest, DescribeLocalGatewayVirtualInterfaceGroupsResult, } from "../models/models_3";
import { deserializeAws_ec2DescribeLocalGatewayVirtualInterfaceGroupsCommand, serializeAws_ec2DescribeLocalGatewayVirtualInterfaceGroupsCommand, } from "../protocols/Aws_ec2";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Describes the specified local gateway virtual interface groups.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, DescribeLocalGatewayVirtualInterfaceGroupsCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, DescribeLocalGatewayVirtualInterfaceGroupsCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const command = new DescribeLocalGatewayVirtualInterfaceGroupsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeLocalGatewayVirtualInterfaceGroupsCommandInput} for command's `input` shape.
 * @see {@link DescribeLocalGatewayVirtualInterfaceGroupsCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DescribeLocalGatewayVirtualInterfaceGroupsCommand = /** @class */ (function (_super) {
    __extends(DescribeLocalGatewayVirtualInterfaceGroupsCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DescribeLocalGatewayVirtualInterfaceGroupsCommand(input) {
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
    DescribeLocalGatewayVirtualInterfaceGroupsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "EC2Client";
        var commandName = "DescribeLocalGatewayVirtualInterfaceGroupsCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DescribeLocalGatewayVirtualInterfaceGroupsRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DescribeLocalGatewayVirtualInterfaceGroupsResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DescribeLocalGatewayVirtualInterfaceGroupsCommand.prototype.serialize = function (input, context) {
        return serializeAws_ec2DescribeLocalGatewayVirtualInterfaceGroupsCommand(input, context);
    };
    DescribeLocalGatewayVirtualInterfaceGroupsCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_ec2DescribeLocalGatewayVirtualInterfaceGroupsCommand(output, context);
    };
    return DescribeLocalGatewayVirtualInterfaceGroupsCommand;
}($Command));
export { DescribeLocalGatewayVirtualInterfaceGroupsCommand };
//# sourceMappingURL=DescribeLocalGatewayVirtualInterfaceGroupsCommand.js.map