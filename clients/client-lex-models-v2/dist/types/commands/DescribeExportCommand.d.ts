import { LexModelsV2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LexModelsV2Client";
import { DescribeExportRequest, DescribeExportResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DescribeExportCommandInput extends DescribeExportRequest {
}
export interface DescribeExportCommandOutput extends DescribeExportResponse, __MetadataBearer {
}
/**
 * <p>Gets information about a specific export.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LexModelsV2Client, DescribeExportCommand } from "@aws-sdk/client-lex-models-v2"; // ES Modules import
 * // const { LexModelsV2Client, DescribeExportCommand } = require("@aws-sdk/client-lex-models-v2"); // CommonJS import
 * const client = new LexModelsV2Client(config);
 * const command = new DescribeExportCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeExportCommandInput} for command's `input` shape.
 * @see {@link DescribeExportCommandOutput} for command's `response` shape.
 * @see {@link LexModelsV2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DescribeExportCommand extends $Command<DescribeExportCommandInput, DescribeExportCommandOutput, LexModelsV2ClientResolvedConfig> {
    readonly input: DescribeExportCommandInput;
    constructor(input: DescribeExportCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: LexModelsV2ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeExportCommandInput, DescribeExportCommandOutput>;
    private serialize;
    private deserialize;
}
