import { ServiceInputTypes, ServiceOutputTypes, WorkDocsClientResolvedConfig } from "../WorkDocsClient";
import { DescribeActivitiesRequest, DescribeActivitiesResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DescribeActivitiesCommandInput extends DescribeActivitiesRequest {
}
export interface DescribeActivitiesCommandOutput extends DescribeActivitiesResponse, __MetadataBearer {
}
/**
 * <p>Describes the user activities in a specified time period.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WorkDocsClient, DescribeActivitiesCommand } from "@aws-sdk/client-workdocs"; // ES Modules import
 * // const { WorkDocsClient, DescribeActivitiesCommand } = require("@aws-sdk/client-workdocs"); // CommonJS import
 * const client = new WorkDocsClient(config);
 * const command = new DescribeActivitiesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeActivitiesCommandInput} for command's `input` shape.
 * @see {@link DescribeActivitiesCommandOutput} for command's `response` shape.
 * @see {@link WorkDocsClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DescribeActivitiesCommand extends $Command<DescribeActivitiesCommandInput, DescribeActivitiesCommandOutput, WorkDocsClientResolvedConfig> {
    readonly input: DescribeActivitiesCommandInput;
    constructor(input: DescribeActivitiesCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: WorkDocsClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeActivitiesCommandInput, DescribeActivitiesCommandOutput>;
    private serialize;
    private deserialize;
}
