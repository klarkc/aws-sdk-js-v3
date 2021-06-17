import { ResourceGroupsTaggingAPIClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ResourceGroupsTaggingAPIClient";
import { DescribeReportCreationInput, DescribeReportCreationOutput } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DescribeReportCreationCommandInput extends DescribeReportCreationInput {
}
export interface DescribeReportCreationCommandOutput extends DescribeReportCreationOutput, __MetadataBearer {
}
/**
 * <p>Describes the status of the <code>StartReportCreation</code> operation. </p>
 *         <p>You can call this operation only from the organization's
 *     management account and from the us-east-1 Region.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ResourceGroupsTaggingAPIClient, DescribeReportCreationCommand } from "@aws-sdk/client-resource-groups-tagging-api"; // ES Modules import
 * // const { ResourceGroupsTaggingAPIClient, DescribeReportCreationCommand } = require("@aws-sdk/client-resource-groups-tagging-api"); // CommonJS import
 * const client = new ResourceGroupsTaggingAPIClient(config);
 * const command = new DescribeReportCreationCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeReportCreationCommandInput} for command's `input` shape.
 * @see {@link DescribeReportCreationCommandOutput} for command's `response` shape.
 * @see {@link ResourceGroupsTaggingAPIClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DescribeReportCreationCommand extends $Command<DescribeReportCreationCommandInput, DescribeReportCreationCommandOutput, ResourceGroupsTaggingAPIClientResolvedConfig> {
    readonly input: DescribeReportCreationCommandInput;
    constructor(input: DescribeReportCreationCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ResourceGroupsTaggingAPIClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeReportCreationCommandInput, DescribeReportCreationCommandOutput>;
    private serialize;
    private deserialize;
}
