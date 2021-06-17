import { __extends } from "tslib";
import { ModifyInstanceCreditSpecificationRequest, ModifyInstanceCreditSpecificationResult } from "../models/models_4";
import { deserializeAws_ec2ModifyInstanceCreditSpecificationCommand, serializeAws_ec2ModifyInstanceCreditSpecificationCommand, } from "../protocols/Aws_ec2";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Modifies the credit option for CPU usage on a running or stopped burstable performance
 *             instance. The credit options are <code>standard</code> and
 *             <code>unlimited</code>.</p>
 *         <p>For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/burstable-performance-instances.html">Burstable
 *                 performance instances</a> in the <i>Amazon EC2 User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, ModifyInstanceCreditSpecificationCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, ModifyInstanceCreditSpecificationCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const command = new ModifyInstanceCreditSpecificationCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ModifyInstanceCreditSpecificationCommandInput} for command's `input` shape.
 * @see {@link ModifyInstanceCreditSpecificationCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ModifyInstanceCreditSpecificationCommand = /** @class */ (function (_super) {
    __extends(ModifyInstanceCreditSpecificationCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function ModifyInstanceCreditSpecificationCommand(input) {
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
    ModifyInstanceCreditSpecificationCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "EC2Client";
        var commandName = "ModifyInstanceCreditSpecificationCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: ModifyInstanceCreditSpecificationRequest.filterSensitiveLog,
            outputFilterSensitiveLog: ModifyInstanceCreditSpecificationResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    ModifyInstanceCreditSpecificationCommand.prototype.serialize = function (input, context) {
        return serializeAws_ec2ModifyInstanceCreditSpecificationCommand(input, context);
    };
    ModifyInstanceCreditSpecificationCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_ec2ModifyInstanceCreditSpecificationCommand(output, context);
    };
    return ModifyInstanceCreditSpecificationCommand;
}($Command));
export { ModifyInstanceCreditSpecificationCommand };
//# sourceMappingURL=ModifyInstanceCreditSpecificationCommand.js.map