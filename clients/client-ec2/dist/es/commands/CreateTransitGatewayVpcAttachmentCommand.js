import { __extends } from "tslib";
import { CreateTransitGatewayVpcAttachmentRequest, CreateTransitGatewayVpcAttachmentResult } from "../models/models_1";
import { deserializeAws_ec2CreateTransitGatewayVpcAttachmentCommand, serializeAws_ec2CreateTransitGatewayVpcAttachmentCommand, } from "../protocols/Aws_ec2";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Attaches the specified VPC to the specified transit gateway.</p>
 *          <p>If you attach a VPC with a CIDR range that overlaps the CIDR range of a VPC that is already attached,
 *          the new VPC CIDR range is not propagated to the default propagation route table.</p>
 *          <p>To send VPC traffic to an attached transit gateway, add a route to the VPC route table using <a>CreateRoute</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, CreateTransitGatewayVpcAttachmentCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, CreateTransitGatewayVpcAttachmentCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const command = new CreateTransitGatewayVpcAttachmentCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateTransitGatewayVpcAttachmentCommandInput} for command's `input` shape.
 * @see {@link CreateTransitGatewayVpcAttachmentCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
var CreateTransitGatewayVpcAttachmentCommand = /** @class */ (function (_super) {
    __extends(CreateTransitGatewayVpcAttachmentCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function CreateTransitGatewayVpcAttachmentCommand(input) {
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
    CreateTransitGatewayVpcAttachmentCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "EC2Client";
        var commandName = "CreateTransitGatewayVpcAttachmentCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: CreateTransitGatewayVpcAttachmentRequest.filterSensitiveLog,
            outputFilterSensitiveLog: CreateTransitGatewayVpcAttachmentResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    CreateTransitGatewayVpcAttachmentCommand.prototype.serialize = function (input, context) {
        return serializeAws_ec2CreateTransitGatewayVpcAttachmentCommand(input, context);
    };
    CreateTransitGatewayVpcAttachmentCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_ec2CreateTransitGatewayVpcAttachmentCommand(output, context);
    };
    return CreateTransitGatewayVpcAttachmentCommand;
}($Command));
export { CreateTransitGatewayVpcAttachmentCommand };
//# sourceMappingURL=CreateTransitGatewayVpcAttachmentCommand.js.map