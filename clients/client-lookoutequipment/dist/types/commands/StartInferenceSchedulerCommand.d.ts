import { LookoutEquipmentClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LookoutEquipmentClient";
import { StartInferenceSchedulerRequest, StartInferenceSchedulerResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface StartInferenceSchedulerCommandInput extends StartInferenceSchedulerRequest {
}
export interface StartInferenceSchedulerCommandOutput extends StartInferenceSchedulerResponse, __MetadataBearer {
}
/**
 * <p>Starts an inference scheduler. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LookoutEquipmentClient, StartInferenceSchedulerCommand } from "@aws-sdk/client-lookoutequipment"; // ES Modules import
 * // const { LookoutEquipmentClient, StartInferenceSchedulerCommand } = require("@aws-sdk/client-lookoutequipment"); // CommonJS import
 * const client = new LookoutEquipmentClient(config);
 * const command = new StartInferenceSchedulerCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link StartInferenceSchedulerCommandInput} for command's `input` shape.
 * @see {@link StartInferenceSchedulerCommandOutput} for command's `response` shape.
 * @see {@link LookoutEquipmentClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class StartInferenceSchedulerCommand extends $Command<StartInferenceSchedulerCommandInput, StartInferenceSchedulerCommandOutput, LookoutEquipmentClientResolvedConfig> {
    readonly input: StartInferenceSchedulerCommandInput;
    constructor(input: StartInferenceSchedulerCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: LookoutEquipmentClientResolvedConfig, options?: __HttpHandlerOptions): Handler<StartInferenceSchedulerCommandInput, StartInferenceSchedulerCommandOutput>;
    private serialize;
    private deserialize;
}
