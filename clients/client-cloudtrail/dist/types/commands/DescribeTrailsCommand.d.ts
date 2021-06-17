import { CloudTrailClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudTrailClient";
import { DescribeTrailsRequest, DescribeTrailsResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DescribeTrailsCommandInput extends DescribeTrailsRequest {
}
export interface DescribeTrailsCommandOutput extends DescribeTrailsResponse, __MetadataBearer {
}
/**
 * <p>Retrieves settings for one or more trails associated with the current region for your account.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudTrailClient, DescribeTrailsCommand } from "@aws-sdk/client-cloudtrail"; // ES Modules import
 * // const { CloudTrailClient, DescribeTrailsCommand } = require("@aws-sdk/client-cloudtrail"); // CommonJS import
 * const client = new CloudTrailClient(config);
 * const command = new DescribeTrailsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeTrailsCommandInput} for command's `input` shape.
 * @see {@link DescribeTrailsCommandOutput} for command's `response` shape.
 * @see {@link CloudTrailClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DescribeTrailsCommand extends $Command<DescribeTrailsCommandInput, DescribeTrailsCommandOutput, CloudTrailClientResolvedConfig> {
    readonly input: DescribeTrailsCommandInput;
    constructor(input: DescribeTrailsCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: CloudTrailClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeTrailsCommandInput, DescribeTrailsCommandOutput>;
    private serialize;
    private deserialize;
}
