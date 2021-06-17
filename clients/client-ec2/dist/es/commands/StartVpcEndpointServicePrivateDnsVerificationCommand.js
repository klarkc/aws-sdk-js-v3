import { __extends } from "tslib";
import { StartVpcEndpointServicePrivateDnsVerificationRequest, StartVpcEndpointServicePrivateDnsVerificationResult, } from "../models/models_5";
import { deserializeAws_ec2StartVpcEndpointServicePrivateDnsVerificationCommand, serializeAws_ec2StartVpcEndpointServicePrivateDnsVerificationCommand, } from "../protocols/Aws_ec2";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Initiates the verification process to prove that the service provider owns the private
 *             DNS name domain for the endpoint service.</p>
 *         <p>The service provider must successfully perform the verification before the consumer can use the name to access the service.</p>
 *         <p>Before the service provider runs this command, they must add a record to the DNS server. For more information, see  <a href="https://docs.aws.amazon.com/vpc/latest/userguide/endpoint-services-dns-validation.html#add-dns-txt-record">Adding a TXT Record to Your Domain's DNS Server </a> in the <i>Amazon VPC User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, StartVpcEndpointServicePrivateDnsVerificationCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, StartVpcEndpointServicePrivateDnsVerificationCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const command = new StartVpcEndpointServicePrivateDnsVerificationCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link StartVpcEndpointServicePrivateDnsVerificationCommandInput} for command's `input` shape.
 * @see {@link StartVpcEndpointServicePrivateDnsVerificationCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
var StartVpcEndpointServicePrivateDnsVerificationCommand = /** @class */ (function (_super) {
    __extends(StartVpcEndpointServicePrivateDnsVerificationCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function StartVpcEndpointServicePrivateDnsVerificationCommand(input) {
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
    StartVpcEndpointServicePrivateDnsVerificationCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "EC2Client";
        var commandName = "StartVpcEndpointServicePrivateDnsVerificationCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: StartVpcEndpointServicePrivateDnsVerificationRequest.filterSensitiveLog,
            outputFilterSensitiveLog: StartVpcEndpointServicePrivateDnsVerificationResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    StartVpcEndpointServicePrivateDnsVerificationCommand.prototype.serialize = function (input, context) {
        return serializeAws_ec2StartVpcEndpointServicePrivateDnsVerificationCommand(input, context);
    };
    StartVpcEndpointServicePrivateDnsVerificationCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_ec2StartVpcEndpointServicePrivateDnsVerificationCommand(output, context);
    };
    return StartVpcEndpointServicePrivateDnsVerificationCommand;
}($Command));
export { StartVpcEndpointServicePrivateDnsVerificationCommand };
//# sourceMappingURL=StartVpcEndpointServicePrivateDnsVerificationCommand.js.map