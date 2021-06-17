import { HoneycodeClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../HoneycodeClient";
import { DescribeTableDataImportJobRequest, DescribeTableDataImportJobResult } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DescribeTableDataImportJobCommandInput extends DescribeTableDataImportJobRequest {
}
export interface DescribeTableDataImportJobCommandOutput extends DescribeTableDataImportJobResult, __MetadataBearer {
}
/**
 * <p>
 *             The DescribeTableDataImportJob API allows you to retrieve the status and details of a table data import job.
 *         </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { HoneycodeClient, DescribeTableDataImportJobCommand } from "@aws-sdk/client-honeycode"; // ES Modules import
 * // const { HoneycodeClient, DescribeTableDataImportJobCommand } = require("@aws-sdk/client-honeycode"); // CommonJS import
 * const client = new HoneycodeClient(config);
 * const command = new DescribeTableDataImportJobCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeTableDataImportJobCommandInput} for command's `input` shape.
 * @see {@link DescribeTableDataImportJobCommandOutput} for command's `response` shape.
 * @see {@link HoneycodeClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DescribeTableDataImportJobCommand extends $Command<DescribeTableDataImportJobCommandInput, DescribeTableDataImportJobCommandOutput, HoneycodeClientResolvedConfig> {
    readonly input: DescribeTableDataImportJobCommandInput;
    constructor(input: DescribeTableDataImportJobCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: HoneycodeClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeTableDataImportJobCommandInput, DescribeTableDataImportJobCommandOutput>;
    private serialize;
    private deserialize;
}
