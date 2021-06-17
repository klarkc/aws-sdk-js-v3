import { LexModelsV2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LexModelsV2Client";
import { DescribeSlotTypeRequest, DescribeSlotTypeResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DescribeSlotTypeCommandInput extends DescribeSlotTypeRequest {
}
export interface DescribeSlotTypeCommandOutput extends DescribeSlotTypeResponse, __MetadataBearer {
}
/**
 * <p>Gets metadata information about a slot type.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LexModelsV2Client, DescribeSlotTypeCommand } from "@aws-sdk/client-lex-models-v2"; // ES Modules import
 * // const { LexModelsV2Client, DescribeSlotTypeCommand } = require("@aws-sdk/client-lex-models-v2"); // CommonJS import
 * const client = new LexModelsV2Client(config);
 * const command = new DescribeSlotTypeCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeSlotTypeCommandInput} for command's `input` shape.
 * @see {@link DescribeSlotTypeCommandOutput} for command's `response` shape.
 * @see {@link LexModelsV2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DescribeSlotTypeCommand extends $Command<DescribeSlotTypeCommandInput, DescribeSlotTypeCommandOutput, LexModelsV2ClientResolvedConfig> {
    readonly input: DescribeSlotTypeCommandInput;
    constructor(input: DescribeSlotTypeCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: LexModelsV2ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeSlotTypeCommandInput, DescribeSlotTypeCommandOutput>;
    private serialize;
    private deserialize;
}
