import { MediaStoreClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MediaStoreClient";
import { GetMetricPolicyInput, GetMetricPolicyOutput } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface GetMetricPolicyCommandInput extends GetMetricPolicyInput {
}
export interface GetMetricPolicyCommandOutput extends GetMetricPolicyOutput, __MetadataBearer {
}
/**
 * <p>Returns the metric policy for the specified container. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MediaStoreClient, GetMetricPolicyCommand } from "@aws-sdk/client-mediastore"; // ES Modules import
 * // const { MediaStoreClient, GetMetricPolicyCommand } = require("@aws-sdk/client-mediastore"); // CommonJS import
 * const client = new MediaStoreClient(config);
 * const command = new GetMetricPolicyCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetMetricPolicyCommandInput} for command's `input` shape.
 * @see {@link GetMetricPolicyCommandOutput} for command's `response` shape.
 * @see {@link MediaStoreClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class GetMetricPolicyCommand extends $Command<GetMetricPolicyCommandInput, GetMetricPolicyCommandOutput, MediaStoreClientResolvedConfig> {
    readonly input: GetMetricPolicyCommandInput;
    constructor(input: GetMetricPolicyCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: MediaStoreClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetMetricPolicyCommandInput, GetMetricPolicyCommandOutput>;
    private serialize;
    private deserialize;
}
