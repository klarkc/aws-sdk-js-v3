import { __extends } from "tslib";
import { GetDefaultCreditSpecificationRequest, GetDefaultCreditSpecificationResult } from "../models/models_4";
import { deserializeAws_ec2GetDefaultCreditSpecificationCommand, serializeAws_ec2GetDefaultCreditSpecificationCommand, } from "../protocols/Aws_ec2";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Describes the default credit option for CPU usage of a burstable performance instance family.</p>
 *         <p>For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/burstable-performance-instances.html">Burstable
 *             performance instances</a> in the <i>Amazon EC2 User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, GetDefaultCreditSpecificationCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, GetDefaultCreditSpecificationCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const command = new GetDefaultCreditSpecificationCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetDefaultCreditSpecificationCommandInput} for command's `input` shape.
 * @see {@link GetDefaultCreditSpecificationCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
var GetDefaultCreditSpecificationCommand = /** @class */ (function (_super) {
    __extends(GetDefaultCreditSpecificationCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function GetDefaultCreditSpecificationCommand(input) {
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
    GetDefaultCreditSpecificationCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "EC2Client";
        var commandName = "GetDefaultCreditSpecificationCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: GetDefaultCreditSpecificationRequest.filterSensitiveLog,
            outputFilterSensitiveLog: GetDefaultCreditSpecificationResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    GetDefaultCreditSpecificationCommand.prototype.serialize = function (input, context) {
        return serializeAws_ec2GetDefaultCreditSpecificationCommand(input, context);
    };
    GetDefaultCreditSpecificationCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_ec2GetDefaultCreditSpecificationCommand(output, context);
    };
    return GetDefaultCreditSpecificationCommand;
}($Command));
export { GetDefaultCreditSpecificationCommand };
//# sourceMappingURL=GetDefaultCreditSpecificationCommand.js.map