import { __extends } from "tslib";
import { ModifyInstanceMetadataOptionsRequest, ModifyInstanceMetadataOptionsResult } from "../models/models_4";
import { deserializeAws_ec2ModifyInstanceMetadataOptionsCommand, serializeAws_ec2ModifyInstanceMetadataOptionsCommand, } from "../protocols/Aws_ec2";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Modify the instance metadata parameters on a running or stopped instance. When you
 *             modify the parameters on a stopped instance, they are applied when the instance is
 *             started. When you modify the parameters on a running instance, the API responds with a
 *             state of “pending”. After the parameter modifications are successfully applied to the
 *             instance, the state of the modifications changes from “pending” to “applied” in
 *             subsequent describe-instances API calls. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-instance-metadata.html">Instance metadata and user data</a>
 *           in the <i>Amazon EC2 User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, ModifyInstanceMetadataOptionsCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, ModifyInstanceMetadataOptionsCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const command = new ModifyInstanceMetadataOptionsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ModifyInstanceMetadataOptionsCommandInput} for command's `input` shape.
 * @see {@link ModifyInstanceMetadataOptionsCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ModifyInstanceMetadataOptionsCommand = /** @class */ (function (_super) {
    __extends(ModifyInstanceMetadataOptionsCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function ModifyInstanceMetadataOptionsCommand(input) {
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
    ModifyInstanceMetadataOptionsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "EC2Client";
        var commandName = "ModifyInstanceMetadataOptionsCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: ModifyInstanceMetadataOptionsRequest.filterSensitiveLog,
            outputFilterSensitiveLog: ModifyInstanceMetadataOptionsResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    ModifyInstanceMetadataOptionsCommand.prototype.serialize = function (input, context) {
        return serializeAws_ec2ModifyInstanceMetadataOptionsCommand(input, context);
    };
    ModifyInstanceMetadataOptionsCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_ec2ModifyInstanceMetadataOptionsCommand(output, context);
    };
    return ModifyInstanceMetadataOptionsCommand;
}($Command));
export { ModifyInstanceMetadataOptionsCommand };
//# sourceMappingURL=ModifyInstanceMetadataOptionsCommand.js.map