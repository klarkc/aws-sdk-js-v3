import { LookoutEquipmentClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LookoutEquipmentClient";
import { CreateInferenceSchedulerRequest, CreateInferenceSchedulerResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface CreateInferenceSchedulerCommandInput extends CreateInferenceSchedulerRequest {
}
export interface CreateInferenceSchedulerCommandOutput extends CreateInferenceSchedulerResponse, __MetadataBearer {
}
/**
 * <p> Creates a scheduled inference. Scheduling an inference is setting up a continuous
 *          real-time inference plan to analyze new measurement data. When setting up the schedule, you
 *          provide an S3 bucket location for the input data, assign it a delimiter between separate
 *          entries in the data, set an offset delay if desired, and set the frequency of inferencing.
 *          You must also provide an S3 bucket location for the output data. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LookoutEquipmentClient, CreateInferenceSchedulerCommand } from "@aws-sdk/client-lookoutequipment"; // ES Modules import
 * // const { LookoutEquipmentClient, CreateInferenceSchedulerCommand } = require("@aws-sdk/client-lookoutequipment"); // CommonJS import
 * const client = new LookoutEquipmentClient(config);
 * const command = new CreateInferenceSchedulerCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateInferenceSchedulerCommandInput} for command's `input` shape.
 * @see {@link CreateInferenceSchedulerCommandOutput} for command's `response` shape.
 * @see {@link LookoutEquipmentClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class CreateInferenceSchedulerCommand extends $Command<CreateInferenceSchedulerCommandInput, CreateInferenceSchedulerCommandOutput, LookoutEquipmentClientResolvedConfig> {
    readonly input: CreateInferenceSchedulerCommandInput;
    constructor(input: CreateInferenceSchedulerCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: LookoutEquipmentClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CreateInferenceSchedulerCommandInput, CreateInferenceSchedulerCommandOutput>;
    private serialize;
    private deserialize;
}
