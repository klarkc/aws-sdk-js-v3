import { QuickSightClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../QuickSightClient";
import { CreateThemeAliasRequest, CreateThemeAliasResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface CreateThemeAliasCommandInput extends CreateThemeAliasRequest {
}
export interface CreateThemeAliasCommandOutput extends CreateThemeAliasResponse, __MetadataBearer {
}
/**
 * <p>Creates a theme alias for a theme.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { QuickSightClient, CreateThemeAliasCommand } from "@aws-sdk/client-quicksight"; // ES Modules import
 * // const { QuickSightClient, CreateThemeAliasCommand } = require("@aws-sdk/client-quicksight"); // CommonJS import
 * const client = new QuickSightClient(config);
 * const command = new CreateThemeAliasCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateThemeAliasCommandInput} for command's `input` shape.
 * @see {@link CreateThemeAliasCommandOutput} for command's `response` shape.
 * @see {@link QuickSightClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class CreateThemeAliasCommand extends $Command<CreateThemeAliasCommandInput, CreateThemeAliasCommandOutput, QuickSightClientResolvedConfig> {
    readonly input: CreateThemeAliasCommandInput;
    constructor(input: CreateThemeAliasCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: QuickSightClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CreateThemeAliasCommandInput, CreateThemeAliasCommandOutput>;
    private serialize;
    private deserialize;
}
