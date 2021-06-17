"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PutImageCommand = void 0;
const models_0_1 = require("../models/models_0");
const Aws_json1_1_1 = require("../protocols/Aws_json1_1");
const middleware_serde_1 = require("@aws-sdk/middleware-serde");
const smithy_client_1 = require("@aws-sdk/smithy-client");
/**
 * <p>Creates or updates the image manifest and tags associated with an image.</p>
 *         <p>When an image is pushed and all new image layers have been uploaded, the PutImage API
 *             is called once to create or update the image manifest and the tags associated with the
 *             image.</p>
 *
 *         <note>
 *             <p>This operation is used by the Amazon ECR proxy and is not generally used by
 *         customers for pulling and pushing images. In most cases, you should use the <code>docker</code> CLI to pull, tag, and push images.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ECRClient, PutImageCommand } from "@aws-sdk/client-ecr"; // ES Modules import
 * // const { ECRClient, PutImageCommand } = require("@aws-sdk/client-ecr"); // CommonJS import
 * const client = new ECRClient(config);
 * const command = new PutImageCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link PutImageCommandInput} for command's `input` shape.
 * @see {@link PutImageCommandOutput} for command's `response` shape.
 * @see {@link ECRClientResolvedConfig | config} for command's `input` shape.
 *
 */
class PutImageCommand extends smithy_client_1.Command {
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
        const commandName = "PutImageCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: models_0_1.PutImageRequest.filterSensitiveLog,
            outputFilterSensitiveLog: models_0_1.PutImageResponse.filterSensitiveLog,
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return Aws_json1_1_1.serializeAws_json1_1PutImageCommand(input, context);
    }
    deserialize(output, context) {
        return Aws_json1_1_1.deserializeAws_json1_1PutImageCommand(output, context);
    }
}
exports.PutImageCommand = PutImageCommand;
//# sourceMappingURL=PutImageCommand.js.map