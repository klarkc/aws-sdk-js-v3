import { SecurityHubClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SecurityHubClient";
import { DisableImportFindingsForProductRequest, DisableImportFindingsForProductResponse } from "../models/models_1";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DisableImportFindingsForProductCommandInput extends DisableImportFindingsForProductRequest {
}
export interface DisableImportFindingsForProductCommandOutput extends DisableImportFindingsForProductResponse, __MetadataBearer {
}
/**
 * <p>Disables the integration of the specified product with Security Hub. After the integration is
 *          disabled, findings from that product are no longer sent to Security Hub.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SecurityHubClient, DisableImportFindingsForProductCommand } from "@aws-sdk/client-securityhub"; // ES Modules import
 * // const { SecurityHubClient, DisableImportFindingsForProductCommand } = require("@aws-sdk/client-securityhub"); // CommonJS import
 * const client = new SecurityHubClient(config);
 * const command = new DisableImportFindingsForProductCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DisableImportFindingsForProductCommandInput} for command's `input` shape.
 * @see {@link DisableImportFindingsForProductCommandOutput} for command's `response` shape.
 * @see {@link SecurityHubClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DisableImportFindingsForProductCommand extends $Command<DisableImportFindingsForProductCommandInput, DisableImportFindingsForProductCommandOutput, SecurityHubClientResolvedConfig> {
    readonly input: DisableImportFindingsForProductCommandInput;
    constructor(input: DisableImportFindingsForProductCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SecurityHubClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DisableImportFindingsForProductCommandInput, DisableImportFindingsForProductCommandOutput>;
    private serialize;
    private deserialize;
}
