import { SageMakerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SageMakerClient";
import { CreateImageVersionRequest, CreateImageVersionResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface CreateImageVersionCommandInput extends CreateImageVersionRequest {
}
export interface CreateImageVersionCommandOutput extends CreateImageVersionResponse, __MetadataBearer {
}
/**
 * <p>Creates a version of the SageMaker image specified by <code>ImageName</code>. The version
 *         represents the Amazon Container Registry (ECR) container image specified by <code>BaseImage</code>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SageMakerClient, CreateImageVersionCommand } from "@aws-sdk/client-sagemaker"; // ES Modules import
 * // const { SageMakerClient, CreateImageVersionCommand } = require("@aws-sdk/client-sagemaker"); // CommonJS import
 * const client = new SageMakerClient(config);
 * const command = new CreateImageVersionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateImageVersionCommandInput} for command's `input` shape.
 * @see {@link CreateImageVersionCommandOutput} for command's `response` shape.
 * @see {@link SageMakerClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class CreateImageVersionCommand extends $Command<CreateImageVersionCommandInput, CreateImageVersionCommandOutput, SageMakerClientResolvedConfig> {
    readonly input: CreateImageVersionCommandInput;
    constructor(input: CreateImageVersionCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SageMakerClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CreateImageVersionCommandInput, CreateImageVersionCommandOutput>;
    private serialize;
    private deserialize;
}
