"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListImagesCommand = void 0;
const models_0_1 = require("../models/models_0");
const Aws_json1_1_1 = require("../protocols/Aws_json1_1");
const middleware_serde_1 = require("@aws-sdk/middleware-serde");
const smithy_client_1 = require("@aws-sdk/smithy-client");
/**
 * <p>Lists all the image IDs for the specified repository.</p>
 *         <p>You can filter images based on whether or not they are tagged by using the
 *                 <code>tagStatus</code> filter and specifying either <code>TAGGED</code>,
 *                 <code>UNTAGGED</code> or <code>ANY</code>. For example, you can filter your results
 *             to return only <code>UNTAGGED</code> images and then pipe that result to a <a>BatchDeleteImage</a> operation to delete them. Or, you can filter your
 *             results to return only <code>TAGGED</code> images to list all of the tags in your
 *             repository.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ECRClient, ListImagesCommand } from "@aws-sdk/client-ecr"; // ES Modules import
 * // const { ECRClient, ListImagesCommand } = require("@aws-sdk/client-ecr"); // CommonJS import
 * const client = new ECRClient(config);
 * const command = new ListImagesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListImagesCommandInput} for command's `input` shape.
 * @see {@link ListImagesCommandOutput} for command's `response` shape.
 * @see {@link ECRClientResolvedConfig | config} for command's `input` shape.
 *
 */
class ListImagesCommand extends smithy_client_1.Command {
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
        const commandName = "ListImagesCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: models_0_1.ListImagesRequest.filterSensitiveLog,
            outputFilterSensitiveLog: models_0_1.ListImagesResponse.filterSensitiveLog,
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return Aws_json1_1_1.serializeAws_json1_1ListImagesCommand(input, context);
    }
    deserialize(output, context) {
        return Aws_json1_1_1.deserializeAws_json1_1ListImagesCommand(output, context);
    }
}
exports.ListImagesCommand = ListImagesCommand;
//# sourceMappingURL=ListImagesCommand.js.map