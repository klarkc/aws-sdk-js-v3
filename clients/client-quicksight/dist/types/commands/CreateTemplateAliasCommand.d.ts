import { QuickSightClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../QuickSightClient";
import { CreateTemplateAliasRequest, CreateTemplateAliasResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface CreateTemplateAliasCommandInput extends CreateTemplateAliasRequest {
}
export interface CreateTemplateAliasCommandOutput extends CreateTemplateAliasResponse, __MetadataBearer {
}
/**
 * <p>Creates a template alias for a template.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { QuickSightClient, CreateTemplateAliasCommand } from "@aws-sdk/client-quicksight"; // ES Modules import
 * // const { QuickSightClient, CreateTemplateAliasCommand } = require("@aws-sdk/client-quicksight"); // CommonJS import
 * const client = new QuickSightClient(config);
 * const command = new CreateTemplateAliasCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateTemplateAliasCommandInput} for command's `input` shape.
 * @see {@link CreateTemplateAliasCommandOutput} for command's `response` shape.
 * @see {@link QuickSightClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class CreateTemplateAliasCommand extends $Command<CreateTemplateAliasCommandInput, CreateTemplateAliasCommandOutput, QuickSightClientResolvedConfig> {
    readonly input: CreateTemplateAliasCommandInput;
    constructor(input: CreateTemplateAliasCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: QuickSightClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CreateTemplateAliasCommandInput, CreateTemplateAliasCommandOutput>;
    private serialize;
    private deserialize;
}
