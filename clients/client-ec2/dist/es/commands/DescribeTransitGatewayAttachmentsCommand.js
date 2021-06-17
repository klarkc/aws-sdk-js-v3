import { __extends } from "tslib";
import { DescribeTransitGatewayAttachmentsRequest, DescribeTransitGatewayAttachmentsResult } from "../models/models_3";
import { deserializeAws_ec2DescribeTransitGatewayAttachmentsCommand, serializeAws_ec2DescribeTransitGatewayAttachmentsCommand, } from "../protocols/Aws_ec2";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Describes one or more attachments between resources and transit gateways. By default, all attachments are described.
 *          Alternatively, you can filter the results by attachment ID, attachment state, resource ID, or resource owner.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, DescribeTransitGatewayAttachmentsCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, DescribeTransitGatewayAttachmentsCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const command = new DescribeTransitGatewayAttachmentsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeTransitGatewayAttachmentsCommandInput} for command's `input` shape.
 * @see {@link DescribeTransitGatewayAttachmentsCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DescribeTransitGatewayAttachmentsCommand = /** @class */ (function (_super) {
    __extends(DescribeTransitGatewayAttachmentsCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DescribeTransitGatewayAttachmentsCommand(input) {
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
    DescribeTransitGatewayAttachmentsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "EC2Client";
        var commandName = "DescribeTransitGatewayAttachmentsCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DescribeTransitGatewayAttachmentsRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DescribeTransitGatewayAttachmentsResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DescribeTransitGatewayAttachmentsCommand.prototype.serialize = function (input, context) {
        return serializeAws_ec2DescribeTransitGatewayAttachmentsCommand(input, context);
    };
    DescribeTransitGatewayAttachmentsCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_ec2DescribeTransitGatewayAttachmentsCommand(output, context);
    };
    return DescribeTransitGatewayAttachmentsCommand;
}($Command));
export { DescribeTransitGatewayAttachmentsCommand };
//# sourceMappingURL=DescribeTransitGatewayAttachmentsCommand.js.map