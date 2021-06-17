import { SageMakerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SageMakerClient";
import { ListArtifactsRequest, ListArtifactsResponse } from "../models/models_2";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface ListArtifactsCommandInput extends ListArtifactsRequest {
}
export interface ListArtifactsCommandOutput extends ListArtifactsResponse, __MetadataBearer {
}
/**
 * <p>Lists the artifacts in your account and their properties.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SageMakerClient, ListArtifactsCommand } from "@aws-sdk/client-sagemaker"; // ES Modules import
 * // const { SageMakerClient, ListArtifactsCommand } = require("@aws-sdk/client-sagemaker"); // CommonJS import
 * const client = new SageMakerClient(config);
 * const command = new ListArtifactsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListArtifactsCommandInput} for command's `input` shape.
 * @see {@link ListArtifactsCommandOutput} for command's `response` shape.
 * @see {@link SageMakerClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class ListArtifactsCommand extends $Command<ListArtifactsCommandInput, ListArtifactsCommandOutput, SageMakerClientResolvedConfig> {
    readonly input: ListArtifactsCommandInput;
    constructor(input: ListArtifactsCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SageMakerClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListArtifactsCommandInput, ListArtifactsCommandOutput>;
    private serialize;
    private deserialize;
}
