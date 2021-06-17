import { LexModelsV2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LexModelsV2Client";
import { DeleteExportRequest, DeleteExportResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DeleteExportCommandInput extends DeleteExportRequest {
}
export interface DeleteExportCommandOutput extends DeleteExportResponse, __MetadataBearer {
}
/**
 * <p>Removes a previous export and the associated files stored in an S3
 *          bucket.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LexModelsV2Client, DeleteExportCommand } from "@aws-sdk/client-lex-models-v2"; // ES Modules import
 * // const { LexModelsV2Client, DeleteExportCommand } = require("@aws-sdk/client-lex-models-v2"); // CommonJS import
 * const client = new LexModelsV2Client(config);
 * const command = new DeleteExportCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteExportCommandInput} for command's `input` shape.
 * @see {@link DeleteExportCommandOutput} for command's `response` shape.
 * @see {@link LexModelsV2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DeleteExportCommand extends $Command<DeleteExportCommandInput, DeleteExportCommandOutput, LexModelsV2ClientResolvedConfig> {
    readonly input: DeleteExportCommandInput;
    constructor(input: DeleteExportCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: LexModelsV2ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteExportCommandInput, DeleteExportCommandOutput>;
    private serialize;
    private deserialize;
}
