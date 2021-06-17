"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetDownloadUrlForLayerCommand = void 0;
const models_0_1 = require("../models/models_0");
const Aws_json1_1_1 = require("../protocols/Aws_json1_1");
const middleware_serde_1 = require("@aws-sdk/middleware-serde");
const smithy_client_1 = require("@aws-sdk/smithy-client");
/**
 * <p>Retrieves the pre-signed Amazon S3 download URL corresponding to an image layer. You
 *             can only get URLs for image layers that are referenced in an image.</p>
 *         <p>When an image is pulled, the GetDownloadUrlForLayer API is called once per image layer
 *             that is not already cached.</p>
 *          <note>
 *             <p>This operation is used by the Amazon ECR proxy and is not generally used by
 *         customers for pulling and pushing images. In most cases, you should use the <code>docker</code> CLI to pull, tag, and push images.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ECRClient, GetDownloadUrlForLayerCommand } from "@aws-sdk/client-ecr"; // ES Modules import
 * // const { ECRClient, GetDownloadUrlForLayerCommand } = require("@aws-sdk/client-ecr"); // CommonJS import
 * const client = new ECRClient(config);
 * const command = new GetDownloadUrlForLayerCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetDownloadUrlForLayerCommandInput} for command's `input` shape.
 * @see {@link GetDownloadUrlForLayerCommandOutput} for command's `response` shape.
 * @see {@link ECRClientResolvedConfig | config} for command's `input` shape.
 *
 */
class GetDownloadUrlForLayerCommand extends smithy_client_1.Command {
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
        const commandName = "GetDownloadUrlForLayerCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: models_0_1.GetDownloadUrlForLayerRequest.filterSensitiveLog,
            outputFilterSensitiveLog: models_0_1.GetDownloadUrlForLayerResponse.filterSensitiveLog,
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return Aws_json1_1_1.serializeAws_json1_1GetDownloadUrlForLayerCommand(input, context);
    }
    deserialize(output, context) {
        return Aws_json1_1_1.deserializeAws_json1_1GetDownloadUrlForLayerCommand(output, context);
    }
}
exports.GetDownloadUrlForLayerCommand = GetDownloadUrlForLayerCommand;
//# sourceMappingURL=GetDownloadUrlForLayerCommand.js.map