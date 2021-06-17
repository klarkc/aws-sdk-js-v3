import { LicenseManagerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LicenseManagerClient";
import { ListReceivedGrantsRequest, ListReceivedGrantsResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface ListReceivedGrantsCommandInput extends ListReceivedGrantsRequest {
}
export interface ListReceivedGrantsCommandOutput extends ListReceivedGrantsResponse, __MetadataBearer {
}
/**
 * <p>Lists grants that are received but not accepted.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LicenseManagerClient, ListReceivedGrantsCommand } from "@aws-sdk/client-license-manager"; // ES Modules import
 * // const { LicenseManagerClient, ListReceivedGrantsCommand } = require("@aws-sdk/client-license-manager"); // CommonJS import
 * const client = new LicenseManagerClient(config);
 * const command = new ListReceivedGrantsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListReceivedGrantsCommandInput} for command's `input` shape.
 * @see {@link ListReceivedGrantsCommandOutput} for command's `response` shape.
 * @see {@link LicenseManagerClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class ListReceivedGrantsCommand extends $Command<ListReceivedGrantsCommandInput, ListReceivedGrantsCommandOutput, LicenseManagerClientResolvedConfig> {
    readonly input: ListReceivedGrantsCommandInput;
    constructor(input: ListReceivedGrantsCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: LicenseManagerClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListReceivedGrantsCommandInput, ListReceivedGrantsCommandOutput>;
    private serialize;
    private deserialize;
}
