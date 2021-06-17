import { ServiceInputTypes, ServiceOutputTypes, SignerClientResolvedConfig } from "../SignerClient";
import { ListSigningProfilesRequest, ListSigningProfilesResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface ListSigningProfilesCommandInput extends ListSigningProfilesRequest {
}
export interface ListSigningProfilesCommandOutput extends ListSigningProfilesResponse, __MetadataBearer {
}
/**
 * <p>Lists all available signing profiles in your AWS account. Returns only profiles with
 * 			an <code>ACTIVE</code> status unless the <code>includeCanceled</code> request field is
 * 			set to <code>true</code>. If additional jobs remain to be listed, code signing returns a
 * 				<code>nextToken</code> value. Use this value in subsequent calls to
 * 				<code>ListSigningJobs</code> to fetch the remaining values. You can continue calling
 * 				<code>ListSigningJobs</code> with your <code>maxResults</code> parameter and with
 * 			new values that code signing returns in the <code>nextToken</code> parameter until all of your
 * 			signing jobs have been returned.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SignerClient, ListSigningProfilesCommand } from "@aws-sdk/client-signer"; // ES Modules import
 * // const { SignerClient, ListSigningProfilesCommand } = require("@aws-sdk/client-signer"); // CommonJS import
 * const client = new SignerClient(config);
 * const command = new ListSigningProfilesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListSigningProfilesCommandInput} for command's `input` shape.
 * @see {@link ListSigningProfilesCommandOutput} for command's `response` shape.
 * @see {@link SignerClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class ListSigningProfilesCommand extends $Command<ListSigningProfilesCommandInput, ListSigningProfilesCommandOutput, SignerClientResolvedConfig> {
    readonly input: ListSigningProfilesCommandInput;
    constructor(input: ListSigningProfilesCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SignerClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListSigningProfilesCommandInput, ListSigningProfilesCommandOutput>;
    private serialize;
    private deserialize;
}
