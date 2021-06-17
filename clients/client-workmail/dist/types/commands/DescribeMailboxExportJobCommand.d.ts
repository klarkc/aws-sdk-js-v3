import { ServiceInputTypes, ServiceOutputTypes, WorkMailClientResolvedConfig } from "../WorkMailClient";
import { DescribeMailboxExportJobRequest, DescribeMailboxExportJobResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DescribeMailboxExportJobCommandInput extends DescribeMailboxExportJobRequest {
}
export interface DescribeMailboxExportJobCommandOutput extends DescribeMailboxExportJobResponse, __MetadataBearer {
}
/**
 * <p>Describes the current status of a mailbox export job.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WorkMailClient, DescribeMailboxExportJobCommand } from "@aws-sdk/client-workmail"; // ES Modules import
 * // const { WorkMailClient, DescribeMailboxExportJobCommand } = require("@aws-sdk/client-workmail"); // CommonJS import
 * const client = new WorkMailClient(config);
 * const command = new DescribeMailboxExportJobCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeMailboxExportJobCommandInput} for command's `input` shape.
 * @see {@link DescribeMailboxExportJobCommandOutput} for command's `response` shape.
 * @see {@link WorkMailClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DescribeMailboxExportJobCommand extends $Command<DescribeMailboxExportJobCommandInput, DescribeMailboxExportJobCommandOutput, WorkMailClientResolvedConfig> {
    readonly input: DescribeMailboxExportJobCommandInput;
    constructor(input: DescribeMailboxExportJobCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: WorkMailClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeMailboxExportJobCommandInput, DescribeMailboxExportJobCommandOutput>;
    private serialize;
    private deserialize;
}
