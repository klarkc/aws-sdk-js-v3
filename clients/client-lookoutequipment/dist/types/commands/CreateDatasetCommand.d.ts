import { LookoutEquipmentClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LookoutEquipmentClient";
import { CreateDatasetRequest, CreateDatasetResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface CreateDatasetCommandInput extends CreateDatasetRequest {
}
export interface CreateDatasetCommandOutput extends CreateDatasetResponse, __MetadataBearer {
}
/**
 * <p>Creates a container for a collection of data being ingested for analysis. The dataset
 *          contains the metadata describing where the data is and what the data actually looks like.
 *          In other words, it contains the location of the data source, the data schema, and other
 *          information. A dataset also contains any tags associated with the ingested data. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LookoutEquipmentClient, CreateDatasetCommand } from "@aws-sdk/client-lookoutequipment"; // ES Modules import
 * // const { LookoutEquipmentClient, CreateDatasetCommand } = require("@aws-sdk/client-lookoutequipment"); // CommonJS import
 * const client = new LookoutEquipmentClient(config);
 * const command = new CreateDatasetCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateDatasetCommandInput} for command's `input` shape.
 * @see {@link CreateDatasetCommandOutput} for command's `response` shape.
 * @see {@link LookoutEquipmentClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class CreateDatasetCommand extends $Command<CreateDatasetCommandInput, CreateDatasetCommandOutput, LookoutEquipmentClientResolvedConfig> {
    readonly input: CreateDatasetCommandInput;
    constructor(input: CreateDatasetCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: LookoutEquipmentClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CreateDatasetCommandInput, CreateDatasetCommandOutput>;
    private serialize;
    private deserialize;
}
