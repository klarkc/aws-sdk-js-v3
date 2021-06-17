import { SageMakerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SageMakerClient";
import { CreateDeviceFleetRequest } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface CreateDeviceFleetCommandInput extends CreateDeviceFleetRequest {
}
export interface CreateDeviceFleetCommandOutput extends __MetadataBearer {
}
/**
 * <p>Creates a device fleet.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SageMakerClient, CreateDeviceFleetCommand } from "@aws-sdk/client-sagemaker"; // ES Modules import
 * // const { SageMakerClient, CreateDeviceFleetCommand } = require("@aws-sdk/client-sagemaker"); // CommonJS import
 * const client = new SageMakerClient(config);
 * const command = new CreateDeviceFleetCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateDeviceFleetCommandInput} for command's `input` shape.
 * @see {@link CreateDeviceFleetCommandOutput} for command's `response` shape.
 * @see {@link SageMakerClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class CreateDeviceFleetCommand extends $Command<CreateDeviceFleetCommandInput, CreateDeviceFleetCommandOutput, SageMakerClientResolvedConfig> {
    readonly input: CreateDeviceFleetCommandInput;
    constructor(input: CreateDeviceFleetCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SageMakerClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CreateDeviceFleetCommandInput, CreateDeviceFleetCommandOutput>;
    private serialize;
    private deserialize;
}
