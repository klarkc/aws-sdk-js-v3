import { DataBrewClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DataBrewClient";
import { BatchDeleteRecipeVersionRequest, BatchDeleteRecipeVersionResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface BatchDeleteRecipeVersionCommandInput extends BatchDeleteRecipeVersionRequest {
}
export interface BatchDeleteRecipeVersionCommandOutput extends BatchDeleteRecipeVersionResponse, __MetadataBearer {
}
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
export declare class BatchDeleteRecipeVersionCommand extends $Command<BatchDeleteRecipeVersionCommandInput, BatchDeleteRecipeVersionCommandOutput, DataBrewClientResolvedConfig> {
    readonly input: BatchDeleteRecipeVersionCommandInput;
    constructor(input: BatchDeleteRecipeVersionCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: DataBrewClientResolvedConfig, options?: __HttpHandlerOptions): Handler<BatchDeleteRecipeVersionCommandInput, BatchDeleteRecipeVersionCommandOutput>;
    private serialize;
    private deserialize;
}
