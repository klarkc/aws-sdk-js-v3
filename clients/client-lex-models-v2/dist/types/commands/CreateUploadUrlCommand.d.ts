import { LexModelsV2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LexModelsV2Client";
import { CreateUploadUrlRequest, CreateUploadUrlResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface CreateUploadUrlCommandInput extends CreateUploadUrlRequest {
}
export interface CreateUploadUrlCommandOutput extends CreateUploadUrlResponse, __MetadataBearer {
}
/**
 * <p>Gets a pre-signed S3 write URL that you use to upload the zip
 *          archive when importing a bot or a bot locale. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LexModelsV2Client, CreateUploadUrlCommand } from "@aws-sdk/client-lex-models-v2"; // ES Modules import
 * // const { LexModelsV2Client, CreateUploadUrlCommand } = require("@aws-sdk/client-lex-models-v2"); // CommonJS import
 * const client = new LexModelsV2Client(config);
 * const command = new CreateUploadUrlCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateUploadUrlCommandInput} for command's `input` shape.
 * @see {@link CreateUploadUrlCommandOutput} for command's `response` shape.
 * @see {@link LexModelsV2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class CreateUploadUrlCommand extends $Command<CreateUploadUrlCommandInput, CreateUploadUrlCommandOutput, LexModelsV2ClientResolvedConfig> {
    readonly input: CreateUploadUrlCommandInput;
    constructor(input: CreateUploadUrlCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: LexModelsV2ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CreateUploadUrlCommandInput, CreateUploadUrlCommandOutput>;
    private serialize;
    private deserialize;
}
