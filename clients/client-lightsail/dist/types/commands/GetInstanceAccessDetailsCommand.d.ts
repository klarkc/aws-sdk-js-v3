import { LightsailClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LightsailClient";
import { GetInstanceAccessDetailsRequest, GetInstanceAccessDetailsResult } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface GetInstanceAccessDetailsCommandInput extends GetInstanceAccessDetailsRequest {
}
export interface GetInstanceAccessDetailsCommandOutput extends GetInstanceAccessDetailsResult, __MetadataBearer {
}
/**
 * <p>Returns temporary SSH keys you can use to connect to a specific virtual private server, or
 *         <i>instance</i>.</p>
 *          <p>The <code>get instance access details</code> operation supports tag-based access control
 *       via resource tags applied to the resource identified by <code>instance name</code>. For more
 *       information, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en/articles/amazon-lightsail-controlling-access-using-tags">Lightsail Dev Guide</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LightsailClient, GetInstanceAccessDetailsCommand } from "@aws-sdk/client-lightsail"; // ES Modules import
 * // const { LightsailClient, GetInstanceAccessDetailsCommand } = require("@aws-sdk/client-lightsail"); // CommonJS import
 * const client = new LightsailClient(config);
 * const command = new GetInstanceAccessDetailsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetInstanceAccessDetailsCommandInput} for command's `input` shape.
 * @see {@link GetInstanceAccessDetailsCommandOutput} for command's `response` shape.
 * @see {@link LightsailClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class GetInstanceAccessDetailsCommand extends $Command<GetInstanceAccessDetailsCommandInput, GetInstanceAccessDetailsCommandOutput, LightsailClientResolvedConfig> {
    readonly input: GetInstanceAccessDetailsCommandInput;
    constructor(input: GetInstanceAccessDetailsCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: LightsailClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetInstanceAccessDetailsCommandInput, GetInstanceAccessDetailsCommandOutput>;
    private serialize;
    private deserialize;
}
