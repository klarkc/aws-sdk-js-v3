import { SFNClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SFNClient";
import { DescribeActivityInput, DescribeActivityOutput } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DescribeActivityCommandInput extends DescribeActivityInput {
}
export interface DescribeActivityCommandOutput extends DescribeActivityOutput, __MetadataBearer {
}
/**
 * <p>Describes an activity.</p>
 *          <note>
 *             <p>This operation is eventually consistent. The results are best effort and may not reflect very recent updates and changes.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SFNClient, DescribeActivityCommand } from "@aws-sdk/client-sfn"; // ES Modules import
 * // const { SFNClient, DescribeActivityCommand } = require("@aws-sdk/client-sfn"); // CommonJS import
 * const client = new SFNClient(config);
 * const command = new DescribeActivityCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeActivityCommandInput} for command's `input` shape.
 * @see {@link DescribeActivityCommandOutput} for command's `response` shape.
 * @see {@link SFNClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DescribeActivityCommand extends $Command<DescribeActivityCommandInput, DescribeActivityCommandOutput, SFNClientResolvedConfig> {
    readonly input: DescribeActivityCommandInput;
    constructor(input: DescribeActivityCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SFNClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeActivityCommandInput, DescribeActivityCommandOutput>;
    private serialize;
    private deserialize;
}
