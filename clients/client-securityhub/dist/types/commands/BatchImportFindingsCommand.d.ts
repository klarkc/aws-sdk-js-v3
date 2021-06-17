import { SecurityHubClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SecurityHubClient";
import { BatchImportFindingsRequest, BatchImportFindingsResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface BatchImportFindingsCommandInput extends BatchImportFindingsRequest {
}
export interface BatchImportFindingsCommandOutput extends BatchImportFindingsResponse, __MetadataBearer {
}
/**
 * <p>Imports security findings generated from an integrated product into Security Hub.
 *          This action is requested by the integrated product to import its findings into
 *          Security Hub.</p>
 *          <p>The maximum allowed size for a finding is 240 Kb. An error is returned for any finding
 *          larger than 240 Kb.</p>
 *          <p>After a finding is created, <code>BatchImportFindings</code> cannot be used to update
 *          the following finding fields and objects, which Security Hub customers use to manage their
 *          investigation workflow.</p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <code>Note</code>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>UserDefinedFields</code>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>VerificationState</code>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>Workflow</code>
 *                </p>
 *             </li>
 *          </ul>
 *          <p>Finding providers also should not use <code>BatchImportFindings</code> to update the following attributes.</p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <code>Confidence</code>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>Criticality</code>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>RelatedFindings</code>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>Severity</code>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>Types</code>
 *                </p>
 *             </li>
 *          </ul>
 *          <p>Instead, finding providers use <code>FindingProviderFields</code> to provide values for these attributes.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SecurityHubClient, BatchImportFindingsCommand } from "@aws-sdk/client-securityhub"; // ES Modules import
 * // const { SecurityHubClient, BatchImportFindingsCommand } = require("@aws-sdk/client-securityhub"); // CommonJS import
 * const client = new SecurityHubClient(config);
 * const command = new BatchImportFindingsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link BatchImportFindingsCommandInput} for command's `input` shape.
 * @see {@link BatchImportFindingsCommandOutput} for command's `response` shape.
 * @see {@link SecurityHubClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class BatchImportFindingsCommand extends $Command<BatchImportFindingsCommandInput, BatchImportFindingsCommandOutput, SecurityHubClientResolvedConfig> {
    readonly input: BatchImportFindingsCommandInput;
    constructor(input: BatchImportFindingsCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SecurityHubClientResolvedConfig, options?: __HttpHandlerOptions): Handler<BatchImportFindingsCommandInput, BatchImportFindingsCommandOutput>;
    private serialize;
    private deserialize;
}
