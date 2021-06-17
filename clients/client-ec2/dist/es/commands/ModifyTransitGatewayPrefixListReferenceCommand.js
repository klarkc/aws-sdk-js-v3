import { __extends } from "tslib";
import { ModifyTransitGatewayPrefixListReferenceRequest, ModifyTransitGatewayPrefixListReferenceResult, } from "../models/models_4";
import { deserializeAws_ec2ModifyTransitGatewayPrefixListReferenceCommand, serializeAws_ec2ModifyTransitGatewayPrefixListReferenceCommand, } from "../protocols/Aws_ec2";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Modifies a reference (route) to a prefix list in a specified transit gateway route table.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, ModifyTransitGatewayPrefixListReferenceCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, ModifyTransitGatewayPrefixListReferenceCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const command = new ModifyTransitGatewayPrefixListReferenceCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ModifyTransitGatewayPrefixListReferenceCommandInput} for command's `input` shape.
 * @see {@link ModifyTransitGatewayPrefixListReferenceCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ModifyTransitGatewayPrefixListReferenceCommand = /** @class */ (function (_super) {
    __extends(ModifyTransitGatewayPrefixListReferenceCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function ModifyTransitGatewayPrefixListReferenceCommand(input) {
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
    ModifyTransitGatewayPrefixListReferenceCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "EC2Client";
        var commandName = "ModifyTransitGatewayPrefixListReferenceCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: ModifyTransitGatewayPrefixListReferenceRequest.filterSensitiveLog,
            outputFilterSensitiveLog: ModifyTransitGatewayPrefixListReferenceResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    ModifyTransitGatewayPrefixListReferenceCommand.prototype.serialize = function (input, context) {
        return serializeAws_ec2ModifyTransitGatewayPrefixListReferenceCommand(input, context);
    };
    ModifyTransitGatewayPrefixListReferenceCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_ec2ModifyTransitGatewayPrefixListReferenceCommand(output, context);
    };
    return ModifyTransitGatewayPrefixListReferenceCommand;
}($Command));
export { ModifyTransitGatewayPrefixListReferenceCommand };
//# sourceMappingURL=ModifyTransitGatewayPrefixListReferenceCommand.js.map