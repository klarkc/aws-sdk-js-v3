import { LookoutEquipmentClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LookoutEquipmentClient";
import { DeleteInferenceSchedulerRequest } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DeleteInferenceSchedulerCommandInput extends DeleteInferenceSchedulerRequest {
}
export interface DeleteInferenceSchedulerCommandOutput extends __MetadataBearer {
}
/**
 * <p>Deletes an inference scheduler that has been set up. Already processed output results
 *          are not affected. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LookoutEquipmentClient, DeleteInferenceSchedulerCommand } from "@aws-sdk/client-lookoutequipment"; // ES Modules import
 * // const { LookoutEquipmentClient, DeleteInferenceSchedulerCommand } = require("@aws-sdk/client-lookoutequipment"); // CommonJS import
 * const client = new LookoutEquipmentClient(config);
 * const command = new DeleteInferenceSchedulerCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteInferenceSchedulerCommandInput} for command's `input` shape.
 * @see {@link DeleteInferenceSchedulerCommandOutput} for command's `response` shape.
 * @see {@link LookoutEquipmentClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DeleteInferenceSchedulerCommand extends $Command<DeleteInferenceSchedulerCommandInput, DeleteInferenceSchedulerCommandOutput, LookoutEquipmentClientResolvedConfig> {
    readonly input: DeleteInferenceSchedulerCommandInput;
    constructor(input: DeleteInferenceSchedulerCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: LookoutEquipmentClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteInferenceSchedulerCommandInput, DeleteInferenceSchedulerCommandOutput>;
    private serialize;
    private deserialize;
}
