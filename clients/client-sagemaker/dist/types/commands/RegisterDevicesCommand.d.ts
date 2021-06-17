import { SageMakerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SageMakerClient";
import { RegisterDevicesRequest } from "../models/models_2";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface RegisterDevicesCommandInput extends RegisterDevicesRequest {
}
export interface RegisterDevicesCommandOutput extends __MetadataBearer {
}
/**
 * <p>Register devices.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SageMakerClient, RegisterDevicesCommand } from "@aws-sdk/client-sagemaker"; // ES Modules import
 * // const { SageMakerClient, RegisterDevicesCommand } = require("@aws-sdk/client-sagemaker"); // CommonJS import
 * const client = new SageMakerClient(config);
 * const command = new RegisterDevicesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link RegisterDevicesCommandInput} for command's `input` shape.
 * @see {@link RegisterDevicesCommandOutput} for command's `response` shape.
 * @see {@link SageMakerClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class RegisterDevicesCommand extends $Command<RegisterDevicesCommandInput, RegisterDevicesCommandOutput, SageMakerClientResolvedConfig> {
    readonly input: RegisterDevicesCommandInput;
    constructor(input: RegisterDevicesCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SageMakerClientResolvedConfig, options?: __HttpHandlerOptions): Handler<RegisterDevicesCommandInput, RegisterDevicesCommandOutput>;
    private serialize;
    private deserialize;
}
