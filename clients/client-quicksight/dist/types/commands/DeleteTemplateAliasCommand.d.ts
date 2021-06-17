import { QuickSightClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../QuickSightClient";
import { DeleteTemplateAliasRequest, DeleteTemplateAliasResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DeleteTemplateAliasCommandInput extends DeleteTemplateAliasRequest {
}
export interface DeleteTemplateAliasCommandOutput extends DeleteTemplateAliasResponse, __MetadataBearer {
}
/**
 * <p>Deletes the item that the specified template alias points to. If you provide a specific
 * 			alias, you delete the version of the template that the alias points to.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { QuickSightClient, DeleteTemplateAliasCommand } from "@aws-sdk/client-quicksight"; // ES Modules import
 * // const { QuickSightClient, DeleteTemplateAliasCommand } = require("@aws-sdk/client-quicksight"); // CommonJS import
 * const client = new QuickSightClient(config);
 * const command = new DeleteTemplateAliasCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteTemplateAliasCommandInput} for command's `input` shape.
 * @see {@link DeleteTemplateAliasCommandOutput} for command's `response` shape.
 * @see {@link QuickSightClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DeleteTemplateAliasCommand extends $Command<DeleteTemplateAliasCommandInput, DeleteTemplateAliasCommandOutput, QuickSightClientResolvedConfig> {
    readonly input: DeleteTemplateAliasCommandInput;
    constructor(input: DeleteTemplateAliasCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: QuickSightClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteTemplateAliasCommandInput, DeleteTemplateAliasCommandOutput>;
    private serialize;
    private deserialize;
}
