import { LightsailClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LightsailClient";
import { DeleteKeyPairRequest, DeleteKeyPairResult } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DeleteKeyPairCommandInput extends DeleteKeyPairRequest {
}
export interface DeleteKeyPairCommandOutput extends DeleteKeyPairResult, __MetadataBearer {
}
/**
 * <p>Deletes a specific SSH key pair.</p>
 *          <p>The <code>delete key pair</code> operation supports tag-based access control via resource
 *       tags applied to the resource identified by <code>key pair name</code>. For more information,
 *       see the <a href="https://lightsail.aws.amazon.com/ls/docs/en/articles/amazon-lightsail-controlling-access-using-tags">Lightsail Dev Guide</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LightsailClient, DeleteKeyPairCommand } from "@aws-sdk/client-lightsail"; // ES Modules import
 * // const { LightsailClient, DeleteKeyPairCommand } = require("@aws-sdk/client-lightsail"); // CommonJS import
 * const client = new LightsailClient(config);
 * const command = new DeleteKeyPairCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteKeyPairCommandInput} for command's `input` shape.
 * @see {@link DeleteKeyPairCommandOutput} for command's `response` shape.
 * @see {@link LightsailClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DeleteKeyPairCommand extends $Command<DeleteKeyPairCommandInput, DeleteKeyPairCommandOutput, LightsailClientResolvedConfig> {
    readonly input: DeleteKeyPairCommandInput;
    constructor(input: DeleteKeyPairCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: LightsailClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteKeyPairCommandInput, DeleteKeyPairCommandOutput>;
    private serialize;
    private deserialize;
}
