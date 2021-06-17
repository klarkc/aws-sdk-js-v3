import { LicenseManagerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LicenseManagerClient";
import { ListTokensRequest, ListTokensResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface ListTokensCommandInput extends ListTokensRequest {
}
export interface ListTokensCommandOutput extends ListTokensResponse, __MetadataBearer {
}
/**
 * <p>Lists your tokens.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LicenseManagerClient, ListTokensCommand } from "@aws-sdk/client-license-manager"; // ES Modules import
 * // const { LicenseManagerClient, ListTokensCommand } = require("@aws-sdk/client-license-manager"); // CommonJS import
 * const client = new LicenseManagerClient(config);
 * const command = new ListTokensCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListTokensCommandInput} for command's `input` shape.
 * @see {@link ListTokensCommandOutput} for command's `response` shape.
 * @see {@link LicenseManagerClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class ListTokensCommand extends $Command<ListTokensCommandInput, ListTokensCommandOutput, LicenseManagerClientResolvedConfig> {
    readonly input: ListTokensCommandInput;
    constructor(input: ListTokensCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: LicenseManagerClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListTokensCommandInput, ListTokensCommandOutput>;
    private serialize;
    private deserialize;
}
