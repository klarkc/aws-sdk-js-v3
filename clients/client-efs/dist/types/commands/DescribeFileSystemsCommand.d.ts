import { EFSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EFSClient";
import { DescribeFileSystemsRequest, DescribeFileSystemsResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DescribeFileSystemsCommandInput extends DescribeFileSystemsRequest {
}
export interface DescribeFileSystemsCommandOutput extends DescribeFileSystemsResponse, __MetadataBearer {
}
/**
 * <p>Returns the description of a specific Amazon EFS file system if either the file system
 *         <code>CreationToken</code> or the <code>FileSystemId</code> is provided. Otherwise, it
 *       returns descriptions of all file systems owned by the caller's AWS account in the AWS
 *       Region of the endpoint that you're calling.</p>
 *
 *          <p>When retrieving all file system descriptions, you can optionally specify the
 *         <code>MaxItems</code> parameter to limit the number of descriptions in a response.
 *       Currently, this number is automatically set to 10. If more file system descriptions remain,
 *       Amazon EFS returns a <code>NextMarker</code>, an opaque token, in the response. In this case,
 *       you should send a subsequent request with the <code>Marker</code> request parameter set to the
 *       value of <code>NextMarker</code>. </p>
 *
 *          <p>To retrieve a list of your file system descriptions, this operation is used in an
 *       iterative process, where <code>DescribeFileSystems</code> is called first without the
 *         <code>Marker</code> and then the operation continues to call it with the <code>Marker</code>
 *       parameter set to the value of the <code>NextMarker</code> from the previous response until the
 *       response has no <code>NextMarker</code>. </p>
 *
 *          <p> The order of file systems returned in the response of one
 *         <code>DescribeFileSystems</code> call and the order of file systems returned across the
 *       responses of a multi-call iteration is unspecified. </p>
 *          <p> This operation requires permissions for the
 *         <code>elasticfilesystem:DescribeFileSystems</code> action. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EFSClient, DescribeFileSystemsCommand } from "@aws-sdk/client-efs"; // ES Modules import
 * // const { EFSClient, DescribeFileSystemsCommand } = require("@aws-sdk/client-efs"); // CommonJS import
 * const client = new EFSClient(config);
 * const command = new DescribeFileSystemsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeFileSystemsCommandInput} for command's `input` shape.
 * @see {@link DescribeFileSystemsCommandOutput} for command's `response` shape.
 * @see {@link EFSClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DescribeFileSystemsCommand extends $Command<DescribeFileSystemsCommandInput, DescribeFileSystemsCommandOutput, EFSClientResolvedConfig> {
    readonly input: DescribeFileSystemsCommandInput;
    constructor(input: DescribeFileSystemsCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: EFSClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeFileSystemsCommandInput, DescribeFileSystemsCommandOutput>;
    private serialize;
    private deserialize;
}
