"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateServiceSpecificCredentialCommand = void 0;
const models_0_1 = require("../models/models_0");
const Aws_query_1 = require("../protocols/Aws_query");
const middleware_serde_1 = require("@aws-sdk/middleware-serde");
const smithy_client_1 = require("@aws-sdk/smithy-client");
/**
 * <p>Generates a set of credentials consisting of a user name and password that can be used
 *             to access the service specified in the request. These credentials are generated by
 *             IAM, and can be used only for the specified service. </p>
 *         <p>You can have a maximum of two sets of service-specific credentials for each supported
 *             service per user.</p>
 *         <p>You can create service-specific credentials for AWS CodeCommit and Amazon Keyspaces (for Apache
 *             Cassandra).</p>
 *         <p>You can reset the password to a new service-generated value by calling <a>ResetServiceSpecificCredential</a>.</p>
 *         <p>For more information about service-specific credentials, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_ssh-keys.html">Using IAM
 *                 with AWS CodeCommit: Git credentials, SSH keys, and AWS access keys</a> in the
 *                 <i>IAM User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IAMClient, CreateServiceSpecificCredentialCommand } from "@aws-sdk/client-iam"; // ES Modules import
 * // const { IAMClient, CreateServiceSpecificCredentialCommand } = require("@aws-sdk/client-iam"); // CommonJS import
 * const client = new IAMClient(config);
 * const command = new CreateServiceSpecificCredentialCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateServiceSpecificCredentialCommandInput} for command's `input` shape.
 * @see {@link CreateServiceSpecificCredentialCommandOutput} for command's `response` shape.
 * @see {@link IAMClientResolvedConfig | config} for command's `input` shape.
 *
 */
class CreateServiceSpecificCredentialCommand extends smithy_client_1.Command {
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
        const clientName = "IAMClient";
        const commandName = "CreateServiceSpecificCredentialCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: models_0_1.CreateServiceSpecificCredentialRequest.filterSensitiveLog,
            outputFilterSensitiveLog: models_0_1.CreateServiceSpecificCredentialResponse.filterSensitiveLog,
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return Aws_query_1.serializeAws_queryCreateServiceSpecificCredentialCommand(input, context);
    }
    deserialize(output, context) {
        return Aws_query_1.deserializeAws_queryCreateServiceSpecificCredentialCommand(output, context);
    }
}
exports.CreateServiceSpecificCredentialCommand = CreateServiceSpecificCredentialCommand;
//# sourceMappingURL=CreateServiceSpecificCredentialCommand.js.map