"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteContainerCommand = void 0;
const models_0_1 = require("../models/models_0");
const Aws_json1_1_1 = require("../protocols/Aws_json1_1");
const middleware_serde_1 = require("@aws-sdk/middleware-serde");
const smithy_client_1 = require("@aws-sdk/smithy-client");
/**
 * <p>Deletes the specified container. Before you make a <code>DeleteContainer</code>
 *          request, delete any objects in the container or in any folders in the container. You can
 *          delete only empty containers. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MediaStoreClient, DeleteContainerCommand } from "@aws-sdk/client-mediastore"; // ES Modules import
 * // const { MediaStoreClient, DeleteContainerCommand } = require("@aws-sdk/client-mediastore"); // CommonJS import
 * const client = new MediaStoreClient(config);
 * const command = new DeleteContainerCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteContainerCommandInput} for command's `input` shape.
 * @see {@link DeleteContainerCommandOutput} for command's `response` shape.
 * @see {@link MediaStoreClientResolvedConfig | config} for command's `input` shape.
 *
 */
class DeleteContainerCommand extends smithy_client_1.Command {
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
        const clientName = "MediaStoreClient";
        const commandName = "DeleteContainerCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: models_0_1.DeleteContainerInput.filterSensitiveLog,
            outputFilterSensitiveLog: models_0_1.DeleteContainerOutput.filterSensitiveLog,
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return Aws_json1_1_1.serializeAws_json1_1DeleteContainerCommand(input, context);
    }
    deserialize(output, context) {
        return Aws_json1_1_1.deserializeAws_json1_1DeleteContainerCommand(output, context);
    }
}
exports.DeleteContainerCommand = DeleteContainerCommand;
//# sourceMappingURL=DeleteContainerCommand.js.map