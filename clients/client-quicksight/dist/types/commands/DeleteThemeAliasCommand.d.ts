import { QuickSightClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../QuickSightClient";
import { DeleteThemeAliasRequest, DeleteThemeAliasResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DeleteThemeAliasCommandInput extends DeleteThemeAliasRequest {
}
export interface DeleteThemeAliasCommandOutput extends DeleteThemeAliasResponse, __MetadataBearer {
}
/**
 * <p>Deletes the version of the theme that the specified theme alias points to.
 * 			If you provide a specific alias, you delete the version of the theme
 * 			that the alias points to.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { QuickSightClient, DeleteThemeAliasCommand } from "@aws-sdk/client-quicksight"; // ES Modules import
 * // const { QuickSightClient, DeleteThemeAliasCommand } = require("@aws-sdk/client-quicksight"); // CommonJS import
 * const client = new QuickSightClient(config);
 * const command = new DeleteThemeAliasCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteThemeAliasCommandInput} for command's `input` shape.
 * @see {@link DeleteThemeAliasCommandOutput} for command's `response` shape.
 * @see {@link QuickSightClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DeleteThemeAliasCommand extends $Command<DeleteThemeAliasCommandInput, DeleteThemeAliasCommandOutput, QuickSightClientResolvedConfig> {
    readonly input: DeleteThemeAliasCommandInput;
    constructor(input: DeleteThemeAliasCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: QuickSightClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteThemeAliasCommandInput, DeleteThemeAliasCommandOutput>;
    private serialize;
    private deserialize;
}
