"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StartVpcEndpointServicePrivateDnsVerificationCommand = void 0;
const models_5_1 = require("../models/models_5");
const Aws_ec2_1 = require("../protocols/Aws_ec2");
const middleware_serde_1 = require("@aws-sdk/middleware-serde");
const smithy_client_1 = require("@aws-sdk/smithy-client");
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
class StartVpcEndpointServicePrivateDnsVerificationCommand extends smithy_client_1.Command {
    // Start section: command_properties
    // End section: command_properties
    constructor(input) {
        // Start section: command_constructor
        super();
        this.input = input;
        // End section: command_constructor
    }
    /**
     * @internal
     */
    resolveMiddleware(clientStack, configuration, options) {
        this.middlewareStack.use(middleware_serde_1.getSerdePlugin(configuration, this.serialize, this.deserialize));
        const stack = clientStack.concat(this.middlewareStack);
        const { logger } = configuration;
        const clientName = "EC2Client";
        const commandName = "StartVpcEndpointServicePrivateDnsVerificationCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: models_5_1.StartVpcEndpointServicePrivateDnsVerificationRequest.filterSensitiveLog,
            outputFilterSensitiveLog: models_5_1.StartVpcEndpointServicePrivateDnsVerificationResult.filterSensitiveLog,
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return Aws_ec2_1.serializeAws_ec2StartVpcEndpointServicePrivateDnsVerificationCommand(input, context);
    }
    deserialize(output, context) {
        return Aws_ec2_1.deserializeAws_ec2StartVpcEndpointServicePrivateDnsVerificationCommand(output, context);
    }
}
exports.StartVpcEndpointServicePrivateDnsVerificationCommand = StartVpcEndpointServicePrivateDnsVerificationCommand;
//# sourceMappingURL=StartVpcEndpointServicePrivateDnsVerificationCommand.js.map