import { LookoutEquipmentClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LookoutEquipmentClient";
import { DescribeDataIngestionJobRequest, DescribeDataIngestionJobResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DescribeDataIngestionJobCommandInput extends DescribeDataIngestionJobRequest {
}
export interface DescribeDataIngestionJobCommandOutput extends DescribeDataIngestionJobResponse, __MetadataBearer {
}
/**
 * <p>Provides information on a specific data ingestion job such as creation time, dataset
 *          ARN, status, and so on. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LookoutEquipmentClient, DescribeDataIngestionJobCommand } from "@aws-sdk/client-lookoutequipment"; // ES Modules import
 * // const { LookoutEquipmentClient, DescribeDataIngestionJobCommand } = require("@aws-sdk/client-lookoutequipment"); // CommonJS import
 * const client = new LookoutEquipmentClient(config);
 * const command = new DescribeDataIngestionJobCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeDataIngestionJobCommandInput} for command's `input` shape.
 * @see {@link DescribeDataIngestionJobCommandOutput} for command's `response` shape.
 * @see {@link LookoutEquipmentClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DescribeDataIngestionJobCommand extends $Command<DescribeDataIngestionJobCommandInput, DescribeDataIngestionJobCommandOutput, LookoutEquipmentClientResolvedConfig> {
    readonly input: DescribeDataIngestionJobCommandInput;
    constructor(input: DescribeDataIngestionJobCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: LookoutEquipmentClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeDataIngestionJobCommandInput, DescribeDataIngestionJobCommandOutput>;
    private serialize;
    private deserialize;
}
