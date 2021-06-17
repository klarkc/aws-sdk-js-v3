import { LookoutEquipmentClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LookoutEquipmentClient";
import { ListDataIngestionJobsRequest, ListDataIngestionJobsResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface ListDataIngestionJobsCommandInput extends ListDataIngestionJobsRequest {
}
export interface ListDataIngestionJobsCommandOutput extends ListDataIngestionJobsResponse, __MetadataBearer {
}
/**
 * <p>Provides a list of all data ingestion jobs, including dataset name and ARN, S3 location
 *          of the input data, status, and so on. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LookoutEquipmentClient, ListDataIngestionJobsCommand } from "@aws-sdk/client-lookoutequipment"; // ES Modules import
 * // const { LookoutEquipmentClient, ListDataIngestionJobsCommand } = require("@aws-sdk/client-lookoutequipment"); // CommonJS import
 * const client = new LookoutEquipmentClient(config);
 * const command = new ListDataIngestionJobsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListDataIngestionJobsCommandInput} for command's `input` shape.
 * @see {@link ListDataIngestionJobsCommandOutput} for command's `response` shape.
 * @see {@link LookoutEquipmentClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class ListDataIngestionJobsCommand extends $Command<ListDataIngestionJobsCommandInput, ListDataIngestionJobsCommandOutput, LookoutEquipmentClientResolvedConfig> {
    readonly input: ListDataIngestionJobsCommandInput;
    constructor(input: ListDataIngestionJobsCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: LookoutEquipmentClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListDataIngestionJobsCommandInput, ListDataIngestionJobsCommandOutput>;
    private serialize;
    private deserialize;
}
