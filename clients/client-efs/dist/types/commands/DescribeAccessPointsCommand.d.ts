import { EFSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EFSClient";
import { DescribeAccessPointsRequest, DescribeAccessPointsResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DescribeAccessPointsCommandInput extends DescribeAccessPointsRequest {
}
export interface DescribeAccessPointsCommandOutput extends DescribeAccessPointsResponse, __MetadataBearer {
}
/**
 * <p>Returns the description of a specific Amazon EFS access point if the <code>AccessPointId</code> is provided.
 *       If you provide an EFS <code>FileSystemId</code>, it returns descriptions of all access points for that file system.
 *       You can provide either an <code>AccessPointId</code> or a <code>FileSystemId</code> in the request, but not both. </p>
 *          <p>This operation requires permissions for the <code>elasticfilesystem:DescribeAccessPoints</code> action.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EFSClient, DescribeAccessPointsCommand } from "@aws-sdk/client-efs"; // ES Modules import
 * // const { EFSClient, DescribeAccessPointsCommand } = require("@aws-sdk/client-efs"); // CommonJS import
 * const client = new EFSClient(config);
 * const command = new DescribeAccessPointsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeAccessPointsCommandInput} for command's `input` shape.
 * @see {@link DescribeAccessPointsCommandOutput} for command's `response` shape.
 * @see {@link EFSClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DescribeAccessPointsCommand extends $Command<DescribeAccessPointsCommandInput, DescribeAccessPointsCommandOutput, EFSClientResolvedConfig> {
    readonly input: DescribeAccessPointsCommandInput;
    constructor(input: DescribeAccessPointsCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: EFSClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeAccessPointsCommandInput, DescribeAccessPointsCommandOutput>;
    private serialize;
    private deserialize;
}
