import { SESClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SESClient";
import { ListIdentitiesRequest, ListIdentitiesResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface ListIdentitiesCommandInput extends ListIdentitiesRequest {
}
export interface ListIdentitiesCommandOutput extends ListIdentitiesResponse, __MetadataBearer {
}
/**
 * <p>Returns a list containing all of the identities (email addresses and domains) for your
 *             AWS account in the current AWS Region, regardless of verification status.</p>
 *         <p>You can execute this operation no more than once per second.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SESClient, ListIdentitiesCommand } from "@aws-sdk/client-ses"; // ES Modules import
 * // const { SESClient, ListIdentitiesCommand } = require("@aws-sdk/client-ses"); // CommonJS import
 * const client = new SESClient(config);
 * const command = new ListIdentitiesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListIdentitiesCommandInput} for command's `input` shape.
 * @see {@link ListIdentitiesCommandOutput} for command's `response` shape.
 * @see {@link SESClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class ListIdentitiesCommand extends $Command<ListIdentitiesCommandInput, ListIdentitiesCommandOutput, SESClientResolvedConfig> {
    readonly input: ListIdentitiesCommandInput;
    constructor(input: ListIdentitiesCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SESClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListIdentitiesCommandInput, ListIdentitiesCommandOutput>;
    private serialize;
    private deserialize;
}
