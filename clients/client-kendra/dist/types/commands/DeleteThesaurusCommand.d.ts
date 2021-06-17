import { KendraClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../KendraClient";
import { DeleteThesaurusRequest } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DeleteThesaurusCommandInput extends DeleteThesaurusRequest {
}
export interface DeleteThesaurusCommandOutput extends __MetadataBearer {
}
/**
 * <p>Deletes an existing Amazon Kendra thesaurus.
 *       </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { KendraClient, DeleteThesaurusCommand } from "@aws-sdk/client-kendra"; // ES Modules import
 * // const { KendraClient, DeleteThesaurusCommand } = require("@aws-sdk/client-kendra"); // CommonJS import
 * const client = new KendraClient(config);
 * const command = new DeleteThesaurusCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteThesaurusCommandInput} for command's `input` shape.
 * @see {@link DeleteThesaurusCommandOutput} for command's `response` shape.
 * @see {@link KendraClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DeleteThesaurusCommand extends $Command<DeleteThesaurusCommandInput, DeleteThesaurusCommandOutput, KendraClientResolvedConfig> {
    readonly input: DeleteThesaurusCommandInput;
    constructor(input: DeleteThesaurusCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: KendraClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteThesaurusCommandInput, DeleteThesaurusCommandOutput>;
    private serialize;
    private deserialize;
}
