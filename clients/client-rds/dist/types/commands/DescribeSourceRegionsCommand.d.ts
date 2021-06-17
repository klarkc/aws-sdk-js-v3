import { RDSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RDSClient";
import { DescribeSourceRegionsMessage, SourceRegionMessage } from "../models/models_1";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DescribeSourceRegionsCommandInput extends DescribeSourceRegionsMessage {
}
export interface DescribeSourceRegionsCommandOutput extends SourceRegionMessage, __MetadataBearer {
}
/**
 * <p>Returns a list of the source AWS Regions where the current AWS Region can create a read replica,
 *          copy a DB snapshot from, or replicate automated backups from. This API action supports pagination.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RDSClient, DescribeSourceRegionsCommand } from "@aws-sdk/client-rds"; // ES Modules import
 * // const { RDSClient, DescribeSourceRegionsCommand } = require("@aws-sdk/client-rds"); // CommonJS import
 * const client = new RDSClient(config);
 * const command = new DescribeSourceRegionsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeSourceRegionsCommandInput} for command's `input` shape.
 * @see {@link DescribeSourceRegionsCommandOutput} for command's `response` shape.
 * @see {@link RDSClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DescribeSourceRegionsCommand extends $Command<DescribeSourceRegionsCommandInput, DescribeSourceRegionsCommandOutput, RDSClientResolvedConfig> {
    readonly input: DescribeSourceRegionsCommandInput;
    constructor(input: DescribeSourceRegionsCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: RDSClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeSourceRegionsCommandInput, DescribeSourceRegionsCommandOutput>;
    private serialize;
    private deserialize;
}
