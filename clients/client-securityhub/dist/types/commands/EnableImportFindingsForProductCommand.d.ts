import { SecurityHubClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SecurityHubClient";
import { EnableImportFindingsForProductRequest, EnableImportFindingsForProductResponse } from "../models/models_1";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface EnableImportFindingsForProductCommandInput extends EnableImportFindingsForProductRequest {
}
export interface EnableImportFindingsForProductCommandOutput extends EnableImportFindingsForProductResponse, __MetadataBearer {
}
/**
 * <p>Enables the integration of a partner product with Security Hub. Integrated products send
 *          findings to Security Hub.</p>
 *          <p>When you enable a product integration, a permissions policy that grants permission for
 *          the product to send findings to Security Hub is applied.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SecurityHubClient, EnableImportFindingsForProductCommand } from "@aws-sdk/client-securityhub"; // ES Modules import
 * // const { SecurityHubClient, EnableImportFindingsForProductCommand } = require("@aws-sdk/client-securityhub"); // CommonJS import
 * const client = new SecurityHubClient(config);
 * const command = new EnableImportFindingsForProductCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link EnableImportFindingsForProductCommandInput} for command's `input` shape.
 * @see {@link EnableImportFindingsForProductCommandOutput} for command's `response` shape.
 * @see {@link SecurityHubClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class EnableImportFindingsForProductCommand extends $Command<EnableImportFindingsForProductCommandInput, EnableImportFindingsForProductCommandOutput, SecurityHubClientResolvedConfig> {
    readonly input: EnableImportFindingsForProductCommandInput;
    constructor(input: EnableImportFindingsForProductCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SecurityHubClientResolvedConfig, options?: __HttpHandlerOptions): Handler<EnableImportFindingsForProductCommandInput, EnableImportFindingsForProductCommandOutput>;
    private serialize;
    private deserialize;
}
