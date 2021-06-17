import { LicenseManagerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LicenseManagerClient";
import { ListDistributedGrantsRequest, ListDistributedGrantsResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface ListDistributedGrantsCommandInput extends ListDistributedGrantsRequest {
}
export interface ListDistributedGrantsCommandOutput extends ListDistributedGrantsResponse, __MetadataBearer {
}
/**
 * <p>Lists the grants distributed for the specified license.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LicenseManagerClient, ListDistributedGrantsCommand } from "@aws-sdk/client-license-manager"; // ES Modules import
 * // const { LicenseManagerClient, ListDistributedGrantsCommand } = require("@aws-sdk/client-license-manager"); // CommonJS import
 * const client = new LicenseManagerClient(config);
 * const command = new ListDistributedGrantsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListDistributedGrantsCommandInput} for command's `input` shape.
 * @see {@link ListDistributedGrantsCommandOutput} for command's `response` shape.
 * @see {@link LicenseManagerClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class ListDistributedGrantsCommand extends $Command<ListDistributedGrantsCommandInput, ListDistributedGrantsCommandOutput, LicenseManagerClientResolvedConfig> {
    readonly input: ListDistributedGrantsCommandInput;
    constructor(input: ListDistributedGrantsCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: LicenseManagerClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListDistributedGrantsCommandInput, ListDistributedGrantsCommandOutput>;
    private serialize;
    private deserialize;
}
