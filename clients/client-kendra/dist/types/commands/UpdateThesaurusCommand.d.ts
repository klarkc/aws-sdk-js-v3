import { KendraClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../KendraClient";
import { UpdateThesaurusRequest } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface UpdateThesaurusCommandInput extends UpdateThesaurusRequest {
}
export interface UpdateThesaurusCommandOutput extends __MetadataBearer {
}
/**
 * <p>Updates a thesaurus file associated with an index.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { KendraClient, UpdateThesaurusCommand } from "@aws-sdk/client-kendra"; // ES Modules import
 * // const { KendraClient, UpdateThesaurusCommand } = require("@aws-sdk/client-kendra"); // CommonJS import
 * const client = new KendraClient(config);
 * const command = new UpdateThesaurusCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateThesaurusCommandInput} for command's `input` shape.
 * @see {@link UpdateThesaurusCommandOutput} for command's `response` shape.
 * @see {@link KendraClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class UpdateThesaurusCommand extends $Command<UpdateThesaurusCommandInput, UpdateThesaurusCommandOutput, KendraClientResolvedConfig> {
    readonly input: UpdateThesaurusCommandInput;
    constructor(input: UpdateThesaurusCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: KendraClientResolvedConfig, options?: __HttpHandlerOptions): Handler<UpdateThesaurusCommandInput, UpdateThesaurusCommandOutput>;
    private serialize;
    private deserialize;
}
