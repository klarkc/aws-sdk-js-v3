"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DescribeImagesCommand = void 0;
const models_0_1 = require("../models/models_0");
const Aws_json1_1_1 = require("../protocols/Aws_json1_1");
const middleware_serde_1 = require("@aws-sdk/middleware-serde");
const smithy_client_1 = require("@aws-sdk/smithy-client");
/**
 * <p>Returns metadata about the images in a repository.</p>
 *         <note>
 *             <p>Beginning with Docker version 1.9, the Docker client compresses image layers
 *                 before pushing them to a V2 Docker registry. The output of the <code>docker
 *                     images</code> command shows the uncompressed image size, so it may return a
 *                 larger image size than the image sizes returned by <a>DescribeImages</a>.</p>
 *         </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ECRClient, DescribeImagesCommand } from "@aws-sdk/client-ecr"; // ES Modules import
 * // const { ECRClient, DescribeImagesCommand } = require("@aws-sdk/client-ecr"); // CommonJS import
 * const client = new ECRClient(config);
 * const command = new DescribeImagesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeImagesCommandInput} for command's `input` shape.
 * @see {@link DescribeImagesCommandOutput} for command's `response` shape.
 * @see {@link ECRClientResolvedConfig | config} for command's `input` shape.
 *
 */
class DescribeImagesCommand extends smithy_client_1.Command {
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
        const commandName = "DescribeImagesCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: models_0_1.DescribeImagesRequest.filterSensitiveLog,
            outputFilterSensitiveLog: models_0_1.DescribeImagesResponse.filterSensitiveLog,
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return Aws_json1_1_1.serializeAws_json1_1DescribeImagesCommand(input, context);
    }
    deserialize(output, context) {
        return Aws_json1_1_1.deserializeAws_json1_1DescribeImagesCommand(output, context);
    }
}
exports.DescribeImagesCommand = DescribeImagesCommand;
//# sourceMappingURL=DescribeImagesCommand.js.map