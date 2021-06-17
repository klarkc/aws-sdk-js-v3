import { LexModelsV2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LexModelsV2Client";
import { UpdateExportRequest, UpdateExportResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface UpdateExportCommandInput extends UpdateExportRequest {
}
export interface UpdateExportCommandOutput extends UpdateExportResponse, __MetadataBearer {
}
/**
 * <p>Updates the password used to encrypt an export zip archive.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LexModelsV2Client, UpdateExportCommand } from "@aws-sdk/client-lex-models-v2"; // ES Modules import
 * // const { LexModelsV2Client, UpdateExportCommand } = require("@aws-sdk/client-lex-models-v2"); // CommonJS import
 * const client = new LexModelsV2Client(config);
 * const command = new UpdateExportCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateExportCommandInput} for command's `input` shape.
 * @see {@link UpdateExportCommandOutput} for command's `response` shape.
 * @see {@link LexModelsV2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class UpdateExportCommand extends $Command<UpdateExportCommandInput, UpdateExportCommandOutput, LexModelsV2ClientResolvedConfig> {
    readonly input: UpdateExportCommandInput;
    constructor(input: UpdateExportCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: LexModelsV2ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<UpdateExportCommandInput, UpdateExportCommandOutput>;
    private serialize;
    private deserialize;
}
