import { __extends } from "tslib";
import { GetTransitGatewayAttachmentPropagationsRequest, GetTransitGatewayAttachmentPropagationsResult, } from "../models/models_4";
import { deserializeAws_ec2GetTransitGatewayAttachmentPropagationsCommand, serializeAws_ec2GetTransitGatewayAttachmentPropagationsCommand, } from "../protocols/Aws_ec2";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Lists the route tables to which the specified resource attachment propagates routes.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, GetTransitGatewayAttachmentPropagationsCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, GetTransitGatewayAttachmentPropagationsCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const command = new GetTransitGatewayAttachmentPropagationsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetTransitGatewayAttachmentPropagationsCommandInput} for command's `input` shape.
 * @see {@link GetTransitGatewayAttachmentPropagationsCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
var GetTransitGatewayAttachmentPropagationsCommand = /** @class */ (function (_super) {
    __extends(GetTransitGatewayAttachmentPropagationsCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function GetTransitGatewayAttachmentPropagationsCommand(input) {
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
    GetTransitGatewayAttachmentPropagationsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "EC2Client";
        var commandName = "GetTransitGatewayAttachmentPropagationsCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: GetTransitGatewayAttachmentPropagationsRequest.filterSensitiveLog,
            outputFilterSensitiveLog: GetTransitGatewayAttachmentPropagationsResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    GetTransitGatewayAttachmentPropagationsCommand.prototype.serialize = function (input, context) {
        return serializeAws_ec2GetTransitGatewayAttachmentPropagationsCommand(input, context);
    };
    GetTransitGatewayAttachmentPropagationsCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_ec2GetTransitGatewayAttachmentPropagationsCommand(output, context);
    };
    return GetTransitGatewayAttachmentPropagationsCommand;
}($Command));
export { GetTransitGatewayAttachmentPropagationsCommand };
//# sourceMappingURL=GetTransitGatewayAttachmentPropagationsCommand.js.map