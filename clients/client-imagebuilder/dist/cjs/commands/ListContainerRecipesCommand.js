"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListContainerRecipesCommand = void 0;
const models_0_1 = require("../models/models_0");
const Aws_restJson1_1 = require("../protocols/Aws_restJson1");
const middleware_serde_1 = require("@aws-sdk/middleware-serde");
const smithy_client_1 = require("@aws-sdk/smithy-client");
/**
 * <p>Returns a list of container recipes.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ImagebuilderClient, ListContainerRecipesCommand } from "@aws-sdk/client-imagebuilder"; // ES Modules import
 * // const { ImagebuilderClient, ListContainerRecipesCommand } = require("@aws-sdk/client-imagebuilder"); // CommonJS import
 * const client = new ImagebuilderClient(config);
 * const command = new ListContainerRecipesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListContainerRecipesCommandInput} for command's `input` shape.
 * @see {@link ListContainerRecipesCommandOutput} for command's `response` shape.
 * @see {@link ImagebuilderClientResolvedConfig | config} for command's `input` shape.
 *
 */
class ListContainerRecipesCommand extends smithy_client_1.Command {
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
        const clientName = "ImagebuilderClient";
        const commandName = "ListContainerRecipesCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: models_0_1.ListContainerRecipesRequest.filterSensitiveLog,
            outputFilterSensitiveLog: models_0_1.ListContainerRecipesResponse.filterSensitiveLog,
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return Aws_restJson1_1.serializeAws_restJson1ListContainerRecipesCommand(input, context);
    }
    deserialize(output, context) {
        return Aws_restJson1_1.deserializeAws_restJson1ListContainerRecipesCommand(output, context);
    }
}
exports.ListContainerRecipesCommand = ListContainerRecipesCommand;
//# sourceMappingURL=ListContainerRecipesCommand.js.map