import { __extends } from "tslib";
import { DeleteTransitGatewayPrefixListReferenceRequest, DeleteTransitGatewayPrefixListReferenceResult, } from "../models/models_2";
import { deserializeAws_ec2DeleteTransitGatewayPrefixListReferenceCommand, serializeAws_ec2DeleteTransitGatewayPrefixListReferenceCommand, } from "../protocols/Aws_ec2";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Deletes a reference (route) to a prefix list in a specified transit gateway route table.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, DeleteTransitGatewayPrefixListReferenceCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, DeleteTransitGatewayPrefixListReferenceCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const command = new DeleteTransitGatewayPrefixListReferenceCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteTransitGatewayPrefixListReferenceCommandInput} for command's `input` shape.
 * @see {@link DeleteTransitGatewayPrefixListReferenceCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DeleteTransitGatewayPrefixListReferenceCommand = /** @class */ (function (_super) {
    __extends(DeleteTransitGatewayPrefixListReferenceCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DeleteTransitGatewayPrefixListReferenceCommand(input) {
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
    DeleteTransitGatewayPrefixListReferenceCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "EC2Client";
        var commandName = "DeleteTransitGatewayPrefixListReferenceCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DeleteTransitGatewayPrefixListReferenceRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DeleteTransitGatewayPrefixListReferenceResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DeleteTransitGatewayPrefixListReferenceCommand.prototype.serialize = function (input, context) {
        return serializeAws_ec2DeleteTransitGatewayPrefixListReferenceCommand(input, context);
    };
    DeleteTransitGatewayPrefixListReferenceCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_ec2DeleteTransitGatewayPrefixListReferenceCommand(output, context);
    };
    return DeleteTransitGatewayPrefixListReferenceCommand;
}($Command));
export { DeleteTransitGatewayPrefixListReferenceCommand };
//# sourceMappingURL=DeleteTransitGatewayPrefixListReferenceCommand.js.map