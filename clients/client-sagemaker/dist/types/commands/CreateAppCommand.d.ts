import { SageMakerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SageMakerClient";
import { CreateAppRequest, CreateAppResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface CreateAppCommandInput extends CreateAppRequest {
}
export interface CreateAppCommandOutput extends CreateAppResponse, __MetadataBearer {
}
/**
 * <p>Creates a running app for the specified UserProfile. Supported apps are
 *       <code>JupyterServer</code> and <code>KernelGateway</code>. This operation is automatically
 *       invoked by Amazon SageMaker Studio upon access to the associated Domain, and when new kernel
 *       configurations are selected by the user. A user may have multiple Apps active simultaneously.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SageMakerClient, CreateAppCommand } from "@aws-sdk/client-sagemaker"; // ES Modules import
 * // const { SageMakerClient, CreateAppCommand } = require("@aws-sdk/client-sagemaker"); // CommonJS import
 * const client = new SageMakerClient(config);
 * const command = new CreateAppCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateAppCommandInput} for command's `input` shape.
 * @see {@link CreateAppCommandOutput} for command's `response` shape.
 * @see {@link SageMakerClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class CreateAppCommand extends $Command<CreateAppCommandInput, CreateAppCommandOutput, SageMakerClientResolvedConfig> {
    readonly input: CreateAppCommandInput;
    constructor(input: CreateAppCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SageMakerClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CreateAppCommandInput, CreateAppCommandOutput>;
    private serialize;
    private deserialize;
}
