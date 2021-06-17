"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BatchDeleteImageCommand = void 0;
const models_0_1 = require("../models/models_0");
const Aws_json1_1_1 = require("../protocols/Aws_json1_1");
const middleware_serde_1 = require("@aws-sdk/middleware-serde");
const smithy_client_1 = require("@aws-sdk/smithy-client");
/**
 * <p>Deletes a list of specified images within a repository. Images are specified with
 *             either an <code>imageTag</code> or <code>imageDigest</code>.</p>
 *         <p>You can remove a tag from an image by specifying the image's tag in your request. When
 *             you remove the last tag from an image, the image is deleted from your repository.</p>
 *         <p>You can completely delete an image (and all of its tags) by specifying the image's
 *             digest in your request.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ECRClient, BatchDeleteImageCommand } from "@aws-sdk/client-ecr"; // ES Modules import
 * // const { ECRClient, BatchDeleteImageCommand } = require("@aws-sdk/client-ecr"); // CommonJS import
 * const client = new ECRClient(config);
 * const command = new BatchDeleteImageCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link BatchDeleteImageCommandInput} for command's `input` shape.
 * @see {@link BatchDeleteImageCommandOutput} for command's `response` shape.
 * @see {@link ECRClientResolvedConfig | config} for command's `input` shape.
 *
 */
class BatchDeleteImageCommand extends smithy_client_1.Command {
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
        const commandName = "BatchDeleteImageCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: models_0_1.BatchDeleteImageRequest.filterSensitiveLog,
            outputFilterSensitiveLog: models_0_1.BatchDeleteImageResponse.filterSensitiveLog,
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return Aws_json1_1_1.serializeAws_json1_1BatchDeleteImageCommand(input, context);
    }
    deserialize(output, context) {
        return Aws_json1_1_1.deserializeAws_json1_1BatchDeleteImageCommand(output, context);
    }
}
exports.BatchDeleteImageCommand = BatchDeleteImageCommand;
//# sourceMappingURL=BatchDeleteImageCommand.js.map