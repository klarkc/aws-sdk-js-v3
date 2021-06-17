import { QuickSightClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../QuickSightClient";
import { UpdateTemplateAliasRequest, UpdateTemplateAliasResponse } from "../models/models_1";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface UpdateTemplateAliasCommandInput extends UpdateTemplateAliasRequest {
}
export interface UpdateTemplateAliasCommandOutput extends UpdateTemplateAliasResponse, __MetadataBearer {
}
/**
 * <p>Updates the template alias of a template.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { QuickSightClient, UpdateTemplateAliasCommand } from "@aws-sdk/client-quicksight"; // ES Modules import
 * // const { QuickSightClient, UpdateTemplateAliasCommand } = require("@aws-sdk/client-quicksight"); // CommonJS import
 * const client = new QuickSightClient(config);
 * const command = new UpdateTemplateAliasCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateTemplateAliasCommandInput} for command's `input` shape.
 * @see {@link UpdateTemplateAliasCommandOutput} for command's `response` shape.
 * @see {@link QuickSightClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class UpdateTemplateAliasCommand extends $Command<UpdateTemplateAliasCommandInput, UpdateTemplateAliasCommandOutput, QuickSightClientResolvedConfig> {
    readonly input: UpdateTemplateAliasCommandInput;
    constructor(input: UpdateTemplateAliasCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: QuickSightClientResolvedConfig, options?: __HttpHandlerOptions): Handler<UpdateTemplateAliasCommandInput, UpdateTemplateAliasCommandOutput>;
    private serialize;
    private deserialize;
}
