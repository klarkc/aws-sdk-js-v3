"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteDatasetCommand = void 0;
const models_0_1 = require("../models/models_0");
const Aws_restJson1_1 = require("../protocols/Aws_restJson1");
const middleware_serde_1 = require("@aws-sdk/middleware-serde");
const smithy_client_1 = require("@aws-sdk/smithy-client");
/**
 * <p>Deletes an existing Amazon Lookout for Vision <code>dataset</code>. </p>
 *          <p>If your the project has a single
 *       dataset, you must create a new dataset before you can create a model.</p>
 *          <p>If you project has a training dataset and a test dataset consider the following. </p>
 *          <ul>
 *             <li>
 *                <p>If you delete the test dataset, your project reverts to a single dataset project. If you then
 *       train the model, Amazon Lookout for Vision internally splits the remaining dataset into a training and test dataset.</p>
 *             </li>
 *             <li>
 *                <p>If you delete the training dataset, you must create a training dataset before you can create a model.</p>
 *             </li>
 *          </ul>
 *          <p>This operation requires permissions to perform the
 *          <code>lookoutvision:DeleteDataset</code> operation.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LookoutVisionClient, DeleteDatasetCommand } from "@aws-sdk/client-lookoutvision"; // ES Modules import
 * // const { LookoutVisionClient, DeleteDatasetCommand } = require("@aws-sdk/client-lookoutvision"); // CommonJS import
 * const client = new LookoutVisionClient(config);
 * const command = new DeleteDatasetCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteDatasetCommandInput} for command's `input` shape.
 * @see {@link DeleteDatasetCommandOutput} for command's `response` shape.
 * @see {@link LookoutVisionClientResolvedConfig | config} for command's `input` shape.
 *
 */
class DeleteDatasetCommand extends smithy_client_1.Command {
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
        const clientName = "LookoutVisionClient";
        const commandName = "DeleteDatasetCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: models_0_1.DeleteDatasetRequest.filterSensitiveLog,
            outputFilterSensitiveLog: models_0_1.DeleteDatasetResponse.filterSensitiveLog,
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return Aws_restJson1_1.serializeAws_restJson1DeleteDatasetCommand(input, context);
    }
    deserialize(output, context) {
        return Aws_restJson1_1.deserializeAws_restJson1DeleteDatasetCommand(output, context);
    }
}
exports.DeleteDatasetCommand = DeleteDatasetCommand;
//# sourceMappingURL=DeleteDatasetCommand.js.map