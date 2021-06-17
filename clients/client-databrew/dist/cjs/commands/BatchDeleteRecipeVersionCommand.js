"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BatchDeleteRecipeVersionCommand = void 0;
const models_0_1 = require("../models/models_0");
const Aws_restJson1_1 = require("../protocols/Aws_restJson1");
const middleware_serde_1 = require("@aws-sdk/middleware-serde");
const smithy_client_1 = require("@aws-sdk/smithy-client");
/**
 * <p>Deletes one or more versions of a recipe at a time.</p>
 *
 *         <p>The entire request will be rejected if:</p>
 *         <ul>
 *             <li>
 *                 <p>The recipe does not exist.</p>
 *             </li>
 *             <li>
 *                 <p>There is an invalid version identifier in the list of versions.</p>
 *             </li>
 *             <li>
 *                 <p>The version list is empty.</p>
 *             </li>
 *             <li>
 *                 <p>The version list size exceeds 50.</p>
 *             </li>
 *             <li>
 *                 <p>The version list contains duplicate entries.</p>
 *             </li>
 *          </ul>
 *
 *         <p>The request will complete successfully, but with partial failures, if:</p>
 *         <ul>
 *             <li>
 *                 <p>A version does not exist.</p>
 *             </li>
 *             <li>
 *                 <p>A version is being used by a job.</p>
 *             </li>
 *             <li>
 *                 <p>You specify <code>LATEST_WORKING</code>, but it's being used by a
 *                     project.</p>
 *             </li>
 *             <li>
 *                 <p>The version fails to be deleted.</p>
 *             </li>
 *          </ul>
 *         <p>The <code>LATEST_WORKING</code> version will only be deleted if the recipe has no
 *             other versions. If you try to delete <code>LATEST_WORKING</code> while other versions
 *             exist (or if they can't be deleted), then <code>LATEST_WORKING</code> will be listed as
 *             partial failure in the response.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DataBrewClient, BatchDeleteRecipeVersionCommand } from "@aws-sdk/client-databrew"; // ES Modules import
 * // const { DataBrewClient, BatchDeleteRecipeVersionCommand } = require("@aws-sdk/client-databrew"); // CommonJS import
 * const client = new DataBrewClient(config);
 * const command = new BatchDeleteRecipeVersionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link BatchDeleteRecipeVersionCommandInput} for command's `input` shape.
 * @see {@link BatchDeleteRecipeVersionCommandOutput} for command's `response` shape.
 * @see {@link DataBrewClientResolvedConfig | config} for command's `input` shape.
 *
 */
class BatchDeleteRecipeVersionCommand extends smithy_client_1.Command {
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
        const clientName = "DataBrewClient";
        const commandName = "BatchDeleteRecipeVersionCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: models_0_1.BatchDeleteRecipeVersionRequest.filterSensitiveLog,
            outputFilterSensitiveLog: models_0_1.BatchDeleteRecipeVersionResponse.filterSensitiveLog,
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return Aws_restJson1_1.serializeAws_restJson1BatchDeleteRecipeVersionCommand(input, context);
    }
    deserialize(output, context) {
        return Aws_restJson1_1.deserializeAws_restJson1BatchDeleteRecipeVersionCommand(output, context);
    }
}
exports.BatchDeleteRecipeVersionCommand = BatchDeleteRecipeVersionCommand;
//# sourceMappingURL=BatchDeleteRecipeVersionCommand.js.map