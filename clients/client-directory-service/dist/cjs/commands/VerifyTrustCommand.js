"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VerifyTrustCommand = void 0;
const models_0_1 = require("../models/models_0");
const Aws_json1_1_1 = require("../protocols/Aws_json1_1");
const middleware_serde_1 = require("@aws-sdk/middleware-serde");
const smithy_client_1 = require("@aws-sdk/smithy-client");
/**
 * <p>AWS Directory Service for Microsoft Active Directory allows you to configure and verify trust relationships.</p>
 *          <p>This action verifies a trust relationship between your AWS Managed Microsoft AD directory and an external domain.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DirectoryServiceClient, VerifyTrustCommand } from "@aws-sdk/client-directory-service"; // ES Modules import
 * // const { DirectoryServiceClient, VerifyTrustCommand } = require("@aws-sdk/client-directory-service"); // CommonJS import
 * const client = new DirectoryServiceClient(config);
 * const command = new VerifyTrustCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link VerifyTrustCommandInput} for command's `input` shape.
 * @see {@link VerifyTrustCommandOutput} for command's `response` shape.
 * @see {@link DirectoryServiceClientResolvedConfig | config} for command's `input` shape.
 *
 */
class VerifyTrustCommand extends smithy_client_1.Command {
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
        const clientName = "DirectoryServiceClient";
        const commandName = "VerifyTrustCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: models_0_1.VerifyTrustRequest.filterSensitiveLog,
            outputFilterSensitiveLog: models_0_1.VerifyTrustResult.filterSensitiveLog,
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return Aws_json1_1_1.serializeAws_json1_1VerifyTrustCommand(input, context);
    }
    deserialize(output, context) {
        return Aws_json1_1_1.deserializeAws_json1_1VerifyTrustCommand(output, context);
    }
}
exports.VerifyTrustCommand = VerifyTrustCommand;
//# sourceMappingURL=VerifyTrustCommand.js.map