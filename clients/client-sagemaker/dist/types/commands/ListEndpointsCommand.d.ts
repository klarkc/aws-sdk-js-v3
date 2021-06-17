import { SageMakerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SageMakerClient";
import { ListEndpointsInput, ListEndpointsOutput } from "../models/models_2";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface ListEndpointsCommandInput extends ListEndpointsInput {
}
export interface ListEndpointsCommandOutput extends ListEndpointsOutput, __MetadataBearer {
}
/**
 * <p>Lists endpoints.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SageMakerClient, ListEndpointsCommand } from "@aws-sdk/client-sagemaker"; // ES Modules import
 * // const { SageMakerClient, ListEndpointsCommand } = require("@aws-sdk/client-sagemaker"); // CommonJS import
 * const client = new SageMakerClient(config);
 * const command = new ListEndpointsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListEndpointsCommandInput} for command's `input` shape.
 * @see {@link ListEndpointsCommandOutput} for command's `response` shape.
 * @see {@link SageMakerClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class ListEndpointsCommand extends $Command<ListEndpointsCommandInput, ListEndpointsCommandOutput, SageMakerClientResolvedConfig> {
    readonly input: ListEndpointsCommandInput;
    constructor(input: ListEndpointsCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SageMakerClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListEndpointsCommandInput, ListEndpointsCommandOutput>;
    private serialize;
    private deserialize;
}
