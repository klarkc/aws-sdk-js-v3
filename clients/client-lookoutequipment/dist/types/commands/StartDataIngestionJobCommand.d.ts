import { LookoutEquipmentClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LookoutEquipmentClient";
import { StartDataIngestionJobRequest, StartDataIngestionJobResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface StartDataIngestionJobCommandInput extends StartDataIngestionJobRequest {
}
export interface StartDataIngestionJobCommandOutput extends StartDataIngestionJobResponse, __MetadataBearer {
}
/**
 * <p>Starts a data ingestion job. Amazon Lookout for Equipment returns the job status. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LookoutEquipmentClient, StartDataIngestionJobCommand } from "@aws-sdk/client-lookoutequipment"; // ES Modules import
 * // const { LookoutEquipmentClient, StartDataIngestionJobCommand } = require("@aws-sdk/client-lookoutequipment"); // CommonJS import
 * const client = new LookoutEquipmentClient(config);
 * const command = new StartDataIngestionJobCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link StartDataIngestionJobCommandInput} for command's `input` shape.
 * @see {@link StartDataIngestionJobCommandOutput} for command's `response` shape.
 * @see {@link LookoutEquipmentClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class StartDataIngestionJobCommand extends $Command<StartDataIngestionJobCommandInput, StartDataIngestionJobCommandOutput, LookoutEquipmentClientResolvedConfig> {
    readonly input: StartDataIngestionJobCommandInput;
    constructor(input: StartDataIngestionJobCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: LookoutEquipmentClientResolvedConfig, options?: __HttpHandlerOptions): Handler<StartDataIngestionJobCommandInput, StartDataIngestionJobCommandOutput>;
    private serialize;
    private deserialize;
}
