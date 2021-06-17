import { MediaStoreClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MediaStoreClient";
import { DeleteMetricPolicyInput, DeleteMetricPolicyOutput } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DeleteMetricPolicyCommandInput extends DeleteMetricPolicyInput {
}
export interface DeleteMetricPolicyCommandOutput extends DeleteMetricPolicyOutput, __MetadataBearer {
}
/**
 * <p>Deletes the metric policy that is associated with the specified container. If there is no metric policy associated with the container, MediaStore doesn't send metrics to CloudWatch.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MediaStoreClient, DeleteMetricPolicyCommand } from "@aws-sdk/client-mediastore"; // ES Modules import
 * // const { MediaStoreClient, DeleteMetricPolicyCommand } = require("@aws-sdk/client-mediastore"); // CommonJS import
 * const client = new MediaStoreClient(config);
 * const command = new DeleteMetricPolicyCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteMetricPolicyCommandInput} for command's `input` shape.
 * @see {@link DeleteMetricPolicyCommandOutput} for command's `response` shape.
 * @see {@link MediaStoreClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DeleteMetricPolicyCommand extends $Command<DeleteMetricPolicyCommandInput, DeleteMetricPolicyCommandOutput, MediaStoreClientResolvedConfig> {
    readonly input: DeleteMetricPolicyCommandInput;
    constructor(input: DeleteMetricPolicyCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: MediaStoreClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteMetricPolicyCommandInput, DeleteMetricPolicyCommandOutput>;
    private serialize;
    private deserialize;
}
