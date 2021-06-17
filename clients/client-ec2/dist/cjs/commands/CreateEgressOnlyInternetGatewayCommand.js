"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateEgressOnlyInternetGatewayCommand = void 0;
const models_0_1 = require("../models/models_0");
const Aws_ec2_1 = require("../protocols/Aws_ec2");
const middleware_serde_1 = require("@aws-sdk/middleware-serde");
const smithy_client_1 = require("@aws-sdk/smithy-client");
/**
 * <p>[IPv6 only] Creates an egress-only internet gateway for your VPC. An egress-only
 * 			internet gateway is used to enable outbound communication over IPv6 from instances in
 * 			your VPC to the internet, and prevents hosts outside of your VPC from initiating an IPv6
 * 			connection with your instance.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, CreateEgressOnlyInternetGatewayCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, CreateEgressOnlyInternetGatewayCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const command = new CreateEgressOnlyInternetGatewayCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateEgressOnlyInternetGatewayCommandInput} for command's `input` shape.
 * @see {@link CreateEgressOnlyInternetGatewayCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
class CreateEgressOnlyInternetGatewayCommand extends smithy_client_1.Command {
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
        const commandName = "CreateEgressOnlyInternetGatewayCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: models_0_1.CreateEgressOnlyInternetGatewayRequest.filterSensitiveLog,
            outputFilterSensitiveLog: models_0_1.CreateEgressOnlyInternetGatewayResult.filterSensitiveLog,
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return Aws_ec2_1.serializeAws_ec2CreateEgressOnlyInternetGatewayCommand(input, context);
    }
    deserialize(output, context) {
        return Aws_ec2_1.deserializeAws_ec2CreateEgressOnlyInternetGatewayCommand(output, context);
    }
}
exports.CreateEgressOnlyInternetGatewayCommand = CreateEgressOnlyInternetGatewayCommand;
//# sourceMappingURL=CreateEgressOnlyInternetGatewayCommand.js.map