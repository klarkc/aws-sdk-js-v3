import { SageMakerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SageMakerClient";
import { CreateAppImageConfigRequest, CreateAppImageConfigResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface CreateAppImageConfigCommandInput extends CreateAppImageConfigRequest {
}
export interface CreateAppImageConfigCommandOutput extends CreateAppImageConfigResponse, __MetadataBearer {
}
/**
 * <p>Creates a configuration for running a SageMaker image as a KernelGateway app. The
 *         configuration specifies the Amazon Elastic File System (EFS) storage volume on the image, and a list of the
 *         kernels in the image.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SageMakerClient, CreateAppImageConfigCommand } from "@aws-sdk/client-sagemaker"; // ES Modules import
 * // const { SageMakerClient, CreateAppImageConfigCommand } = require("@aws-sdk/client-sagemaker"); // CommonJS import
 * const client = new SageMakerClient(config);
 * const command = new CreateAppImageConfigCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateAppImageConfigCommandInput} for command's `input` shape.
 * @see {@link CreateAppImageConfigCommandOutput} for command's `response` shape.
 * @see {@link SageMakerClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class CreateAppImageConfigCommand extends $Command<CreateAppImageConfigCommandInput, CreateAppImageConfigCommandOutput, SageMakerClientResolvedConfig> {
    readonly input: CreateAppImageConfigCommandInput;
    constructor(input: CreateAppImageConfigCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SageMakerClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CreateAppImageConfigCommandInput, CreateAppImageConfigCommandOutput>;
    private serialize;
    private deserialize;
}
