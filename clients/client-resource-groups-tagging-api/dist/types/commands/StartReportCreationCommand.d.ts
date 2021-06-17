import { ResourceGroupsTaggingAPIClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ResourceGroupsTaggingAPIClient";
import { StartReportCreationInput, StartReportCreationOutput } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface StartReportCreationCommandInput extends StartReportCreationInput {
}
export interface StartReportCreationCommandOutput extends StartReportCreationOutput, __MetadataBearer {
}
/**
 * <p>Generates a report that lists all tagged resources in the accounts across your
 *             organization and tells whether each resource is compliant with the effective tag policy.
 *             Compliance data is refreshed daily. The report is generated asynchronously.</p>
 *         <p>The generated report is saved to the following location:</p>
 *         <p>
 *             <code>s3://example-bucket/AwsTagPolicies/o-exampleorgid/YYYY-MM-ddTHH:mm:ssZ/report.csv</code>
 *          </p>
 *         <p>You can call this operation only from the organization's
 *     management account and from the us-east-1 Region.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ResourceGroupsTaggingAPIClient, StartReportCreationCommand } from "@aws-sdk/client-resource-groups-tagging-api"; // ES Modules import
 * // const { ResourceGroupsTaggingAPIClient, StartReportCreationCommand } = require("@aws-sdk/client-resource-groups-tagging-api"); // CommonJS import
 * const client = new ResourceGroupsTaggingAPIClient(config);
 * const command = new StartReportCreationCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link StartReportCreationCommandInput} for command's `input` shape.
 * @see {@link StartReportCreationCommandOutput} for command's `response` shape.
 * @see {@link ResourceGroupsTaggingAPIClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class StartReportCreationCommand extends $Command<StartReportCreationCommandInput, StartReportCreationCommandOutput, ResourceGroupsTaggingAPIClientResolvedConfig> {
    readonly input: StartReportCreationCommandInput;
    constructor(input: StartReportCreationCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ResourceGroupsTaggingAPIClientResolvedConfig, options?: __HttpHandlerOptions): Handler<StartReportCreationCommandInput, StartReportCreationCommandOutput>;
    private serialize;
    private deserialize;
}
