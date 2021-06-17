import { LicenseManagerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LicenseManagerClient";
import { ListResourceInventoryRequest, ListResourceInventoryResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface ListResourceInventoryCommandInput extends ListResourceInventoryRequest {
}
export interface ListResourceInventoryCommandOutput extends ListResourceInventoryResponse, __MetadataBearer {
}
/**
 * <p>Lists resources managed using Systems Manager inventory.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LicenseManagerClient, ListResourceInventoryCommand } from "@aws-sdk/client-license-manager"; // ES Modules import
 * // const { LicenseManagerClient, ListResourceInventoryCommand } = require("@aws-sdk/client-license-manager"); // CommonJS import
 * const client = new LicenseManagerClient(config);
 * const command = new ListResourceInventoryCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListResourceInventoryCommandInput} for command's `input` shape.
 * @see {@link ListResourceInventoryCommandOutput} for command's `response` shape.
 * @see {@link LicenseManagerClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class ListResourceInventoryCommand extends $Command<ListResourceInventoryCommandInput, ListResourceInventoryCommandOutput, LicenseManagerClientResolvedConfig> {
    readonly input: ListResourceInventoryCommandInput;
    constructor(input: ListResourceInventoryCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: LicenseManagerClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListResourceInventoryCommandInput, ListResourceInventoryCommandOutput>;
    private serialize;
    private deserialize;
}
