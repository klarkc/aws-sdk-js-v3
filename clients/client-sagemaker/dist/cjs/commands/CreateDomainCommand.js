"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateDomainCommand = void 0;
const models_0_1 = require("../models/models_0");
const Aws_json1_1_1 = require("../protocols/Aws_json1_1");
const middleware_serde_1 = require("@aws-sdk/middleware-serde");
const smithy_client_1 = require("@aws-sdk/smithy-client");
/**
 * <p>Creates a <code>Domain</code> used by Amazon SageMaker Studio. A domain consists of an associated
 *     Amazon Elastic File System (EFS) volume, a list of authorized users, and a variety of security, application,
 *     policy, and Amazon Virtual Private Cloud (VPC) configurations. An AWS account is limited to one domain per region.
 *     Users within a domain can share notebook files and other artifacts with each other.</p>
 *
 *          <p>
 *             <b>EFS storage</b>
 *          </p>
 *          <p>When a domain is created, an EFS volume is created for use by all of the users within the
 *     domain. Each user receives a private home directory within the EFS volume for notebooks,
 *     Git repositories, and data files.</p>
 *          <p>SageMaker uses the AWS Key Management Service (AWS KMS) to encrypt the EFS volume attached to the domain with
 *     an AWS managed customer master key (CMK) by default. For more control, you can specify a
 *     customer managed CMK. For more information, see
 *     <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/encryption-at-rest.html">Protect Data at
 *       Rest Using Encryption</a>.</p>
 *
 *          <p>
 *             <b>VPC configuration</b>
 *          </p>
 *          <p>All SageMaker Studio traffic between the domain and the EFS volume is through the specified
 *     VPC and subnets. For other Studio traffic, you can specify the <code>AppNetworkAccessType</code>
 *     parameter. <code>AppNetworkAccessType</code> corresponds to the network access type that you
 *     choose when you onboard to Studio. The following options are available:</p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <code>PublicInternetOnly</code> - Non-EFS traffic goes through a VPC managed by
 *         Amazon SageMaker, which allows internet access. This is the default value.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>VpcOnly</code> - All Studio traffic is through the specified VPC and subnets.
 *         Internet access is disabled by default. To allow internet access, you must specify a
 *         NAT gateway.</p>
 *                <p>When internet access is disabled, you won't be able to run a Studio notebook or to
 *         train or host models unless your VPC has an interface endpoint to the SageMaker API and runtime
 *         or a NAT gateway and your security groups allow outbound connections.</p>
 *             </li>
 *          </ul>
 *          <p>For more information, see
 *     <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/studio-notebooks-and-internet-access.html">Connect
 *       SageMaker Studio Notebooks to Resources in a VPC</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SageMakerClient, CreateDomainCommand } from "@aws-sdk/client-sagemaker"; // ES Modules import
 * // const { SageMakerClient, CreateDomainCommand } = require("@aws-sdk/client-sagemaker"); // CommonJS import
 * const client = new SageMakerClient(config);
 * const command = new CreateDomainCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateDomainCommandInput} for command's `input` shape.
 * @see {@link CreateDomainCommandOutput} for command's `response` shape.
 * @see {@link SageMakerClientResolvedConfig | config} for command's `input` shape.
 *
 */
class CreateDomainCommand extends smithy_client_1.Command {
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
        const clientName = "SageMakerClient";
        const commandName = "CreateDomainCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: models_0_1.CreateDomainRequest.filterSensitiveLog,
            outputFilterSensitiveLog: models_0_1.CreateDomainResponse.filterSensitiveLog,
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return Aws_json1_1_1.serializeAws_json1_1CreateDomainCommand(input, context);
    }
    deserialize(output, context) {
        return Aws_json1_1_1.deserializeAws_json1_1CreateDomainCommand(output, context);
    }
}
exports.CreateDomainCommand = CreateDomainCommand;
//# sourceMappingURL=CreateDomainCommand.js.map