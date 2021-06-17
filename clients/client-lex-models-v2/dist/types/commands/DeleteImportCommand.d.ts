import { LexModelsV2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LexModelsV2Client";
import { DeleteImportRequest, DeleteImportResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DeleteImportCommandInput extends DeleteImportRequest {
}
export interface DeleteImportCommandOutput extends DeleteImportResponse, __MetadataBearer {
}
/**
 * <p>Removes a previous import and the associated file stored in an S3
 *          bucket.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LexModelsV2Client, DeleteImportCommand } from "@aws-sdk/client-lex-models-v2"; // ES Modules import
 * // const { LexModelsV2Client, DeleteImportCommand } = require("@aws-sdk/client-lex-models-v2"); // CommonJS import
 * const client = new LexModelsV2Client(config);
 * const command = new DeleteImportCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteImportCommandInput} for command's `input` shape.
 * @see {@link DeleteImportCommandOutput} for command's `response` shape.
 * @see {@link LexModelsV2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DeleteImportCommand extends $Command<DeleteImportCommandInput, DeleteImportCommandOutput, LexModelsV2ClientResolvedConfig> {
    readonly input: DeleteImportCommandInput;
    constructor(input: DeleteImportCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: LexModelsV2ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteImportCommandInput, DeleteImportCommandOutput>;
    private serialize;
    private deserialize;
}
