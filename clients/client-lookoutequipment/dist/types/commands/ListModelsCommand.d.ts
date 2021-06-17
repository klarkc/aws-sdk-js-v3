import { LookoutEquipmentClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LookoutEquipmentClient";
import { ListModelsRequest, ListModelsResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface ListModelsCommandInput extends ListModelsRequest {
}
export interface ListModelsCommandOutput extends ListModelsResponse, __MetadataBearer {
}
/**
 * <p>Generates a list of all models in the account, including model name and ARN, dataset,
 *          and status. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LookoutEquipmentClient, ListModelsCommand } from "@aws-sdk/client-lookoutequipment"; // ES Modules import
 * // const { LookoutEquipmentClient, ListModelsCommand } = require("@aws-sdk/client-lookoutequipment"); // CommonJS import
 * const client = new LookoutEquipmentClient(config);
 * const command = new ListModelsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListModelsCommandInput} for command's `input` shape.
 * @see {@link ListModelsCommandOutput} for command's `response` shape.
 * @see {@link LookoutEquipmentClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class ListModelsCommand extends $Command<ListModelsCommandInput, ListModelsCommandOutput, LookoutEquipmentClientResolvedConfig> {
    readonly input: ListModelsCommandInput;
    constructor(input: ListModelsCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: LookoutEquipmentClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListModelsCommandInput, ListModelsCommandOutput>;
    private serialize;
    private deserialize;
}
