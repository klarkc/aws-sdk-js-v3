import { __extends } from "tslib";
import { DescribeTransitGatewayVpcAttachmentsRequest, DescribeTransitGatewayVpcAttachmentsResult, } from "../models/models_3";
import { deserializeAws_ec2DescribeTransitGatewayVpcAttachmentsCommand, serializeAws_ec2DescribeTransitGatewayVpcAttachmentsCommand, } from "../protocols/Aws_ec2";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Describes one or more VPC attachments. By default, all VPC attachments are described.
 *          Alternatively, you can filter the results.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, DescribeTransitGatewayVpcAttachmentsCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, DescribeTransitGatewayVpcAttachmentsCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const command = new DescribeTransitGatewayVpcAttachmentsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeTransitGatewayVpcAttachmentsCommandInput} for command's `input` shape.
 * @see {@link DescribeTransitGatewayVpcAttachmentsCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DescribeTransitGatewayVpcAttachmentsCommand = /** @class */ (function (_super) {
    __extends(DescribeTransitGatewayVpcAttachmentsCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DescribeTransitGatewayVpcAttachmentsCommand(input) {
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
    DescribeTransitGatewayVpcAttachmentsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "EC2Client";
        var commandName = "DescribeTransitGatewayVpcAttachmentsCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DescribeTransitGatewayVpcAttachmentsRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DescribeTransitGatewayVpcAttachmentsResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DescribeTransitGatewayVpcAttachmentsCommand.prototype.serialize = function (input, context) {
        return serializeAws_ec2DescribeTransitGatewayVpcAttachmentsCommand(input, context);
    };
    DescribeTransitGatewayVpcAttachmentsCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_ec2DescribeTransitGatewayVpcAttachmentsCommand(output, context);
    };
    return DescribeTransitGatewayVpcAttachmentsCommand;
}($Command));
export { DescribeTransitGatewayVpcAttachmentsCommand };
//# sourceMappingURL=DescribeTransitGatewayVpcAttachmentsCommand.js.map