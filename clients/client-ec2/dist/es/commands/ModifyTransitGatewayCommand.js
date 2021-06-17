import { __extends } from "tslib";
import { ModifyTransitGatewayRequest, ModifyTransitGatewayResult } from "../models/models_4";
import { deserializeAws_ec2ModifyTransitGatewayCommand, serializeAws_ec2ModifyTransitGatewayCommand, } from "../protocols/Aws_ec2";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Modifies the specified transit gateway. When you modify a transit gateway, the modified options are applied to new transit gateway attachments only. Your existing transit gateway attachments are not modified.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, ModifyTransitGatewayCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, ModifyTransitGatewayCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const command = new ModifyTransitGatewayCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ModifyTransitGatewayCommandInput} for command's `input` shape.
 * @see {@link ModifyTransitGatewayCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ModifyTransitGatewayCommand = /** @class */ (function (_super) {
    __extends(ModifyTransitGatewayCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function ModifyTransitGatewayCommand(input) {
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
    ModifyTransitGatewayCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "EC2Client";
        var commandName = "ModifyTransitGatewayCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: ModifyTransitGatewayRequest.filterSensitiveLog,
            outputFilterSensitiveLog: ModifyTransitGatewayResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    ModifyTransitGatewayCommand.prototype.serialize = function (input, context) {
        return serializeAws_ec2ModifyTransitGatewayCommand(input, context);
    };
    ModifyTransitGatewayCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_ec2ModifyTransitGatewayCommand(output, context);
    };
    return ModifyTransitGatewayCommand;
}($Command));
export { ModifyTransitGatewayCommand };
//# sourceMappingURL=ModifyTransitGatewayCommand.js.map