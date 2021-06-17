import { SageMakerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SageMakerClient";
import { UpdateDeviceFleetRequest } from "../models/models_2";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface UpdateDeviceFleetCommandInput extends UpdateDeviceFleetRequest {
}
export interface UpdateDeviceFleetCommandOutput extends __MetadataBearer {
}
/**
 * <p>Updates a fleet of devices.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SageMakerClient, UpdateDeviceFleetCommand } from "@aws-sdk/client-sagemaker"; // ES Modules import
 * // const { SageMakerClient, UpdateDeviceFleetCommand } = require("@aws-sdk/client-sagemaker"); // CommonJS import
 * const client = new SageMakerClient(config);
 * const command = new UpdateDeviceFleetCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateDeviceFleetCommandInput} for command's `input` shape.
 * @see {@link UpdateDeviceFleetCommandOutput} for command's `response` shape.
 * @see {@link SageMakerClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class UpdateDeviceFleetCommand extends $Command<UpdateDeviceFleetCommandInput, UpdateDeviceFleetCommandOutput, SageMakerClientResolvedConfig> {
    readonly input: UpdateDeviceFleetCommandInput;
    constructor(input: UpdateDeviceFleetCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SageMakerClientResolvedConfig, options?: __HttpHandlerOptions): Handler<UpdateDeviceFleetCommandInput, UpdateDeviceFleetCommandOutput>;
    private serialize;
    private deserialize;
}
