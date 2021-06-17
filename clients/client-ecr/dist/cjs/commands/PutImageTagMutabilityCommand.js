"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PutImageTagMutabilityCommand = void 0;
const models_0_1 = require("../models/models_0");
const Aws_json1_1_1 = require("../protocols/Aws_json1_1");
const middleware_serde_1 = require("@aws-sdk/middleware-serde");
const smithy_client_1 = require("@aws-sdk/smithy-client");
/**
 * <p>Updates the image tag mutability settings for the specified repository. For more
 *             information, see <a href="https://docs.aws.amazon.com/AmazonECR/latest/userguide/image-tag-mutability.html">Image Tag
 *                 Mutability</a> in the <i>Amazon Elastic Container Registry User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ECRClient, PutImageTagMutabilityCommand } from "@aws-sdk/client-ecr"; // ES Modules import
 * // const { ECRClient, PutImageTagMutabilityCommand } = require("@aws-sdk/client-ecr"); // CommonJS import
 * const client = new ECRClient(config);
 * const command = new PutImageTagMutabilityCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link PutImageTagMutabilityCommandInput} for command's `input` shape.
 * @see {@link PutImageTagMutabilityCommandOutput} for command's `response` shape.
 * @see {@link ECRClientResolvedConfig | config} for command's `input` shape.
 *
 */
class PutImageTagMutabilityCommand extends smithy_client_1.Command {
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
        const commandName = "PutImageTagMutabilityCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: models_0_1.PutImageTagMutabilityRequest.filterSensitiveLog,
            outputFilterSensitiveLog: models_0_1.PutImageTagMutabilityResponse.filterSensitiveLog,
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return Aws_json1_1_1.serializeAws_json1_1PutImageTagMutabilityCommand(input, context);
    }
    deserialize(output, context) {
        return Aws_json1_1_1.deserializeAws_json1_1PutImageTagMutabilityCommand(output, context);
    }
}
exports.PutImageTagMutabilityCommand = PutImageTagMutabilityCommand;
//# sourceMappingURL=PutImageTagMutabilityCommand.js.map