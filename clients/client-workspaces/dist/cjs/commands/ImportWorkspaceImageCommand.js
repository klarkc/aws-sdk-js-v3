"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ImportWorkspaceImageCommand = void 0;
const models_0_1 = require("../models/models_0");
const Aws_json1_1_1 = require("../protocols/Aws_json1_1");
const middleware_serde_1 = require("@aws-sdk/middleware-serde");
const smithy_client_1 = require("@aws-sdk/smithy-client");
/**
 * <p>Imports the specified Windows 10 Bring Your Own License (BYOL) image into Amazon
 *          WorkSpaces. The image must be an already licensed Amazon EC2 image that is in your AWS
 *          account, and you must own the image. For more information about creating BYOL images, see
 *             <a href="https://docs.aws.amazon.com/workspaces/latest/adminguide/byol-windows-images.html">
 *             Bring Your Own Windows Desktop Licenses</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WorkSpacesClient, ImportWorkspaceImageCommand } from "@aws-sdk/client-workspaces"; // ES Modules import
 * // const { WorkSpacesClient, ImportWorkspaceImageCommand } = require("@aws-sdk/client-workspaces"); // CommonJS import
 * const client = new WorkSpacesClient(config);
 * const command = new ImportWorkspaceImageCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ImportWorkspaceImageCommandInput} for command's `input` shape.
 * @see {@link ImportWorkspaceImageCommandOutput} for command's `response` shape.
 * @see {@link WorkSpacesClientResolvedConfig | config} for command's `input` shape.
 *
 */
class ImportWorkspaceImageCommand extends smithy_client_1.Command {
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
        const clientName = "WorkSpacesClient";
        const commandName = "ImportWorkspaceImageCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: models_0_1.ImportWorkspaceImageRequest.filterSensitiveLog,
            outputFilterSensitiveLog: models_0_1.ImportWorkspaceImageResult.filterSensitiveLog,
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return Aws_json1_1_1.serializeAws_json1_1ImportWorkspaceImageCommand(input, context);
    }
    deserialize(output, context) {
        return Aws_json1_1_1.deserializeAws_json1_1ImportWorkspaceImageCommand(output, context);
    }
}
exports.ImportWorkspaceImageCommand = ImportWorkspaceImageCommand;
//# sourceMappingURL=ImportWorkspaceImageCommand.js.map