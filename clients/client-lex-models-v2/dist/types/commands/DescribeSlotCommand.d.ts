import { LexModelsV2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LexModelsV2Client";
import { DescribeSlotRequest, DescribeSlotResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DescribeSlotCommandInput extends DescribeSlotRequest {
}
export interface DescribeSlotCommandOutput extends DescribeSlotResponse, __MetadataBearer {
}
/**
 * <p>Gets metadata information about a slot.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LexModelsV2Client, DescribeSlotCommand } from "@aws-sdk/client-lex-models-v2"; // ES Modules import
 * // const { LexModelsV2Client, DescribeSlotCommand } = require("@aws-sdk/client-lex-models-v2"); // CommonJS import
 * const client = new LexModelsV2Client(config);
 * const command = new DescribeSlotCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeSlotCommandInput} for command's `input` shape.
 * @see {@link DescribeSlotCommandOutput} for command's `response` shape.
 * @see {@link LexModelsV2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DescribeSlotCommand extends $Command<DescribeSlotCommandInput, DescribeSlotCommandOutput, LexModelsV2ClientResolvedConfig> {
    readonly input: DescribeSlotCommandInput;
    constructor(input: DescribeSlotCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: LexModelsV2ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeSlotCommandInput, DescribeSlotCommandOutput>;
    private serialize;
    private deserialize;
}
