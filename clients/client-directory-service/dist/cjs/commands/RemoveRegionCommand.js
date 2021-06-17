"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RemoveRegionCommand = void 0;
const models_0_1 = require("../models/models_0");
const Aws_json1_1_1 = require("../protocols/Aws_json1_1");
const middleware_serde_1 = require("@aws-sdk/middleware-serde");
const smithy_client_1 = require("@aws-sdk/smithy-client");
/**
 * <p>Stops all replication and removes the domain controllers from the specified Region. You
 *       cannot remove the primary Region with this operation. Instead, use the
 *         <code>DeleteDirectory</code> API.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DirectoryServiceClient, RemoveRegionCommand } from "@aws-sdk/client-directory-service"; // ES Modules import
 * // const { DirectoryServiceClient, RemoveRegionCommand } = require("@aws-sdk/client-directory-service"); // CommonJS import
 * const client = new DirectoryServiceClient(config);
 * const command = new RemoveRegionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link RemoveRegionCommandInput} for command's `input` shape.
 * @see {@link RemoveRegionCommandOutput} for command's `response` shape.
 * @see {@link DirectoryServiceClientResolvedConfig | config} for command's `input` shape.
 *
 */
class RemoveRegionCommand extends smithy_client_1.Command {
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
        const commandName = "RemoveRegionCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: models_0_1.RemoveRegionRequest.filterSensitiveLog,
            outputFilterSensitiveLog: models_0_1.RemoveRegionResult.filterSensitiveLog,
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return Aws_json1_1_1.serializeAws_json1_1RemoveRegionCommand(input, context);
    }
    deserialize(output, context) {
        return Aws_json1_1_1.deserializeAws_json1_1RemoveRegionCommand(output, context);
    }
}
exports.RemoveRegionCommand = RemoveRegionCommand;
//# sourceMappingURL=RemoveRegionCommand.js.map