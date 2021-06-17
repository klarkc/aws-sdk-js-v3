import { LookoutEquipmentClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LookoutEquipmentClient";
import { UpdateInferenceSchedulerRequest } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface UpdateInferenceSchedulerCommandInput extends UpdateInferenceSchedulerRequest {
}
export interface UpdateInferenceSchedulerCommandOutput extends __MetadataBearer {
}
/**
 * <p>Updates an inference scheduler. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LookoutEquipmentClient, UpdateInferenceSchedulerCommand } from "@aws-sdk/client-lookoutequipment"; // ES Modules import
 * // const { LookoutEquipmentClient, UpdateInferenceSchedulerCommand } = require("@aws-sdk/client-lookoutequipment"); // CommonJS import
 * const client = new LookoutEquipmentClient(config);
 * const command = new UpdateInferenceSchedulerCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateInferenceSchedulerCommandInput} for command's `input` shape.
 * @see {@link UpdateInferenceSchedulerCommandOutput} for command's `response` shape.
 * @see {@link LookoutEquipmentClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class UpdateInferenceSchedulerCommand extends $Command<UpdateInferenceSchedulerCommandInput, UpdateInferenceSchedulerCommandOutput, LookoutEquipmentClientResolvedConfig> {
    readonly input: UpdateInferenceSchedulerCommandInput;
    constructor(input: UpdateInferenceSchedulerCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: LookoutEquipmentClientResolvedConfig, options?: __HttpHandlerOptions): Handler<UpdateInferenceSchedulerCommandInput, UpdateInferenceSchedulerCommandOutput>;
    private serialize;
    private deserialize;
}
