"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetAuthorizationTokenCommand = void 0;
const models_0_1 = require("../models/models_0");
const Aws_json1_1_1 = require("../protocols/Aws_json1_1");
const middleware_serde_1 = require("@aws-sdk/middleware-serde");
const smithy_client_1 = require("@aws-sdk/smithy-client");
/**
 * <p>Retrieves an authorization token. An authorization token represents your IAM
 *             authentication credentials and can be used to access any Amazon ECR registry that your IAM
 *             principal has access to. The authorization token is valid for 12 hours.</p>
 *         <p>The <code>authorizationToken</code> returned is a base64 encoded string that can be
 *             decoded and used in a <code>docker login</code> command to authenticate to a registry.
 *             The AWS CLI offers an <code>get-login-password</code> command that simplifies the login
 *             process. For more information, see <a href="https://docs.aws.amazon.com/AmazonECR/latest/userguide/Registries.html#registry_auth">Registry
 *                 Authentication</a> in the <i>Amazon Elastic Container Registry User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ECRClient, GetAuthorizationTokenCommand } from "@aws-sdk/client-ecr"; // ES Modules import
 * // const { ECRClient, GetAuthorizationTokenCommand } = require("@aws-sdk/client-ecr"); // CommonJS import
 * const client = new ECRClient(config);
 * const command = new GetAuthorizationTokenCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetAuthorizationTokenCommandInput} for command's `input` shape.
 * @see {@link GetAuthorizationTokenCommandOutput} for command's `response` shape.
 * @see {@link ECRClientResolvedConfig | config} for command's `input` shape.
 *
 */
class GetAuthorizationTokenCommand extends smithy_client_1.Command {
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
        const clientName = "ECRClient";
        const commandName = "GetAuthorizationTokenCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: models_0_1.GetAuthorizationTokenRequest.filterSensitiveLog,
            outputFilterSensitiveLog: models_0_1.GetAuthorizationTokenResponse.filterSensitiveLog,
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return Aws_json1_1_1.serializeAws_json1_1GetAuthorizationTokenCommand(input, context);
    }
    deserialize(output, context) {
        return Aws_json1_1_1.deserializeAws_json1_1GetAuthorizationTokenCommand(output, context);
    }
}
exports.GetAuthorizationTokenCommand = GetAuthorizationTokenCommand;
//# sourceMappingURL=GetAuthorizationTokenCommand.js.map