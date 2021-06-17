import { SageMakerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SageMakerClient";
import { DeleteDeviceFleetRequest } from "../models/models_1";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DeleteDeviceFleetCommandInput extends DeleteDeviceFleetRequest {
}
export interface DeleteDeviceFleetCommandOutput extends __MetadataBearer {
}
/**
 * <p>Deletes a fleet.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SageMakerClient, DeleteDeviceFleetCommand } from "@aws-sdk/client-sagemaker"; // ES Modules import
 * // const { SageMakerClient, DeleteDeviceFleetCommand } = require("@aws-sdk/client-sagemaker"); // CommonJS import
 * const client = new SageMakerClient(config);
 * const command = new DeleteDeviceFleetCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteDeviceFleetCommandInput} for command's `input` shape.
 * @see {@link DeleteDeviceFleetCommandOutput} for command's `response` shape.
 * @see {@link SageMakerClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DeleteDeviceFleetCommand extends $Command<DeleteDeviceFleetCommandInput, DeleteDeviceFleetCommandOutput, SageMakerClientResolvedConfig> {
    readonly input: DeleteDeviceFleetCommandInput;
    constructor(input: DeleteDeviceFleetCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SageMakerClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteDeviceFleetCommandInput, DeleteDeviceFleetCommandOutput>;
    private serialize;
    private deserialize;
}
