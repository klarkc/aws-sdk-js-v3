import { LookoutEquipmentClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LookoutEquipmentClient";
import { CreateModelRequest, CreateModelResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface CreateModelCommandInput extends CreateModelRequest {
}
export interface CreateModelCommandOutput extends CreateModelResponse, __MetadataBearer {
}
/**
 * <p>Creates an ML model for data inference. </p>
 *          <p>A machine-learning (ML) model is a mathematical model that finds patterns in your data.
 *          In Amazon Lookout for Equipment, the model learns the patterns of normal behavior and detects abnormal
 *          behavior that could be potential equipment failure (or maintenance events). The models are
 *          made by analyzing normal data and abnormalities in machine behavior that have already
 *          occurred.</p>
 *          <p>Your model is trained using a portion of the data from your dataset and uses that data
 *          to learn patterns of normal behavior and abnormal patterns that lead to equipment failure.
 *          Another portion of the data is used to evaluate the model's accuracy. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LookoutEquipmentClient, CreateModelCommand } from "@aws-sdk/client-lookoutequipment"; // ES Modules import
 * // const { LookoutEquipmentClient, CreateModelCommand } = require("@aws-sdk/client-lookoutequipment"); // CommonJS import
 * const client = new LookoutEquipmentClient(config);
 * const command = new CreateModelCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateModelCommandInput} for command's `input` shape.
 * @see {@link CreateModelCommandOutput} for command's `response` shape.
 * @see {@link LookoutEquipmentClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class CreateModelCommand extends $Command<CreateModelCommandInput, CreateModelCommandOutput, LookoutEquipmentClientResolvedConfig> {
    readonly input: CreateModelCommandInput;
    constructor(input: CreateModelCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: LookoutEquipmentClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CreateModelCommandInput, CreateModelCommandOutput>;
    private serialize;
    private deserialize;
}
