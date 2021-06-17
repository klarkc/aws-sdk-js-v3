import { __extends } from "tslib";
import { ModifyVolumeAttributeRequest } from "../models/models_4";
import { deserializeAws_ec2ModifyVolumeAttributeCommand, serializeAws_ec2ModifyVolumeAttributeCommand, } from "../protocols/Aws_ec2";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Modifies a volume attribute.</p>
 *          <p>By default, all I/O operations for the volume are suspended when the data on the volume is
 *       determined to be potentially inconsistent, to prevent undetectable, latent data corruption.
 *       The I/O access to the volume can be resumed by first enabling I/O access and then checking the
 *       data consistency on your volume.</p>
 *          <p>You can change the default behavior to resume I/O operations. We recommend that you change
 *       this only for boot volumes or for volumes that are stateless or disposable.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, ModifyVolumeAttributeCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, ModifyVolumeAttributeCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const command = new ModifyVolumeAttributeCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ModifyVolumeAttributeCommandInput} for command's `input` shape.
 * @see {@link ModifyVolumeAttributeCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ModifyVolumeAttributeCommand = /** @class */ (function (_super) {
    __extends(ModifyVolumeAttributeCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function ModifyVolumeAttributeCommand(input) {
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
    ModifyVolumeAttributeCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "EC2Client";
        var commandName = "ModifyVolumeAttributeCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: ModifyVolumeAttributeRequest.filterSensitiveLog,
            outputFilterSensitiveLog: function (output) { return output; },
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    ModifyVolumeAttributeCommand.prototype.serialize = function (input, context) {
        return serializeAws_ec2ModifyVolumeAttributeCommand(input, context);
    };
    ModifyVolumeAttributeCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_ec2ModifyVolumeAttributeCommand(output, context);
    };
    return ModifyVolumeAttributeCommand;
}($Command));
export { ModifyVolumeAttributeCommand };
//# sourceMappingURL=ModifyVolumeAttributeCommand.js.map