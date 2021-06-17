import { ServiceInputTypes, ServiceOutputTypes, SignerClientResolvedConfig } from "../SignerClient";
import { ListSigningPlatformsRequest, ListSigningPlatformsResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface ListSigningPlatformsCommandInput extends ListSigningPlatformsRequest {
}
export interface ListSigningPlatformsCommandOutput extends ListSigningPlatformsResponse, __MetadataBearer {
}
/**
 * <p>Lists all signing platforms available in code signing that match the request parameters. If
 * 			additional jobs remain to be listed, code signing returns a <code>nextToken</code> value. Use
 * 			this value in subsequent calls to <code>ListSigningJobs</code> to fetch the remaining
 * 			values. You can continue calling <code>ListSigningJobs</code> with your
 * 				<code>maxResults</code> parameter and with new values that code signing returns in the
 * 				<code>nextToken</code> parameter until all of your signing jobs have been
 * 			returned.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SignerClient, ListSigningPlatformsCommand } from "@aws-sdk/client-signer"; // ES Modules import
 * // const { SignerClient, ListSigningPlatformsCommand } = require("@aws-sdk/client-signer"); // CommonJS import
 * const client = new SignerClient(config);
 * const command = new ListSigningPlatformsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListSigningPlatformsCommandInput} for command's `input` shape.
 * @see {@link ListSigningPlatformsCommandOutput} for command's `response` shape.
 * @see {@link SignerClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class ListSigningPlatformsCommand extends $Command<ListSigningPlatformsCommandInput, ListSigningPlatformsCommandOutput, SignerClientResolvedConfig> {
    readonly input: ListSigningPlatformsCommandInput;
    constructor(input: ListSigningPlatformsCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SignerClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListSigningPlatformsCommandInput, ListSigningPlatformsCommandOutput>;
    private serialize;
    private deserialize;
}
