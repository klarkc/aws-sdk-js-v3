import { __extends } from "tslib";
import { ModifyDefaultCreditSpecificationRequest, ModifyDefaultCreditSpecificationResult } from "../models/models_4";
import { deserializeAws_ec2ModifyDefaultCreditSpecificationCommand, serializeAws_ec2ModifyDefaultCreditSpecificationCommand, } from "../protocols/Aws_ec2";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Modifies the default credit option for CPU usage of burstable performance instances.
 *             The default credit option is set at the account level per AWS Region, and is specified
 *             per instance family. All new burstable performance instances in the account launch using
 *             the default credit option.</p>
 *         <p>
 *             <code>ModifyDefaultCreditSpecification</code> is an asynchronous operation, which works at an AWS
 *             Region level and modifies the credit option for each Availability Zone. All zones in a
 *             Region are updated within five minutes. But if instances are launched during this
 *             operation, they might not get the new credit option until the zone is updated. To verify
 *             whether the update has occurred, you can call <code>GetDefaultCreditSpecification</code> and check
 *             <code>DefaultCreditSpecification</code> for updates.</p>
 *         <p>For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/burstable-performance-instances.html">Burstable
 *             performance instances</a> in the <i>Amazon EC2 User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, ModifyDefaultCreditSpecificationCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, ModifyDefaultCreditSpecificationCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const command = new ModifyDefaultCreditSpecificationCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ModifyDefaultCreditSpecificationCommandInput} for command's `input` shape.
 * @see {@link ModifyDefaultCreditSpecificationCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ModifyDefaultCreditSpecificationCommand = /** @class */ (function (_super) {
    __extends(ModifyDefaultCreditSpecificationCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function ModifyDefaultCreditSpecificationCommand(input) {
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
    ModifyDefaultCreditSpecificationCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "EC2Client";
        var commandName = "ModifyDefaultCreditSpecificationCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: ModifyDefaultCreditSpecificationRequest.filterSensitiveLog,
            outputFilterSensitiveLog: ModifyDefaultCreditSpecificationResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    ModifyDefaultCreditSpecificationCommand.prototype.serialize = function (input, context) {
        return serializeAws_ec2ModifyDefaultCreditSpecificationCommand(input, context);
    };
    ModifyDefaultCreditSpecificationCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_ec2ModifyDefaultCreditSpecificationCommand(output, context);
    };
    return ModifyDefaultCreditSpecificationCommand;
}($Command));
export { ModifyDefaultCreditSpecificationCommand };
//# sourceMappingURL=ModifyDefaultCreditSpecificationCommand.js.map