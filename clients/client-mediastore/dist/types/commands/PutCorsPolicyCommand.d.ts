import { MediaStoreClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MediaStoreClient";
import { PutCorsPolicyInput, PutCorsPolicyOutput } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface PutCorsPolicyCommandInput extends PutCorsPolicyInput {
}
export interface PutCorsPolicyCommandOutput extends PutCorsPolicyOutput, __MetadataBearer {
}
/**
 * <p>Sets the cross-origin resource sharing (CORS) configuration on a container so that
 *          the container can service cross-origin requests. For example, you might want to enable a
 *          request whose origin is http://www.example.com to access your AWS Elemental MediaStore
 *          container at my.example.container.com by using the browser's XMLHttpRequest
 *          capability.</p>
 *          <p>To enable CORS on a container, you attach a CORS policy to the container. In the CORS
 *          policy, you configure rules that identify origins and the HTTP methods that can be executed
 *          on your container. The policy can contain up to 398,000 characters. You can add up to 100
 *          rules to a CORS policy. If more than one rule applies, the service uses the first
 *          applicable rule listed.</p>
 *          <p>To learn more about CORS, see <a href="https://docs.aws.amazon.com/mediastore/latest/ug/cors-policy.html">Cross-Origin Resource Sharing (CORS) in AWS Elemental MediaStore</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MediaStoreClient, PutCorsPolicyCommand } from "@aws-sdk/client-mediastore"; // ES Modules import
 * // const { MediaStoreClient, PutCorsPolicyCommand } = require("@aws-sdk/client-mediastore"); // CommonJS import
 * const client = new MediaStoreClient(config);
 * const command = new PutCorsPolicyCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link PutCorsPolicyCommandInput} for command's `input` shape.
 * @see {@link PutCorsPolicyCommandOutput} for command's `response` shape.
 * @see {@link MediaStoreClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class PutCorsPolicyCommand extends $Command<PutCorsPolicyCommandInput, PutCorsPolicyCommandOutput, MediaStoreClientResolvedConfig> {
    readonly input: PutCorsPolicyCommandInput;
    constructor(input: PutCorsPolicyCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: MediaStoreClientResolvedConfig, options?: __HttpHandlerOptions): Handler<PutCorsPolicyCommandInput, PutCorsPolicyCommandOutput>;
    private serialize;
    private deserialize;
}
