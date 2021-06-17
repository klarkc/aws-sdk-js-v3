import { ServiceInputTypes, ServiceOutputTypes, WorkSpacesClientResolvedConfig } from "../WorkSpacesClient";
import { CopyWorkspaceImageRequest, CopyWorkspaceImageResult } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface CopyWorkspaceImageCommandInput extends CopyWorkspaceImageRequest {
}
export interface CopyWorkspaceImageCommandOutput extends CopyWorkspaceImageResult, __MetadataBearer {
}
/**
 * <p>Copies the specified image from the specified Region to the current Region.
 *          For more information about copying images, see
 *          <a href="https://docs.aws.amazon.com/workspaces/latest/adminguide/copy-custom-image.html">
 *             Copy a Custom WorkSpaces Image</a>.</p>
 *
 *          <note>
 *             <p>In the China (Ningxia) Region, you can copy images only within the same Region.</p>
 *
 *             <p>In the AWS GovCloud (US-West) Region, to copy images to and from other AWS Regions,
 *             contact AWS Support.</p>
 *          </note>
 *
 *          <important>
 *             <p>Before copying a shared image, be sure to verify that it has been shared from the
 *             correct AWS account. To determine if an image has been shared and to see the AWS
 *             account ID that owns an image, use the <a href="https://docs.aws.amazon.com/workspaces/latest/api/API_DescribeWorkspaceImages.html">DescribeWorkSpaceImages</a> and <a href="https://docs.aws.amazon.com/workspaces/latest/api/API_DescribeWorkspaceImagePermissions.html">DescribeWorkspaceImagePermissions</a> API operations. </p>
 *          </important>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WorkSpacesClient, CopyWorkspaceImageCommand } from "@aws-sdk/client-workspaces"; // ES Modules import
 * // const { WorkSpacesClient, CopyWorkspaceImageCommand } = require("@aws-sdk/client-workspaces"); // CommonJS import
 * const client = new WorkSpacesClient(config);
 * const command = new CopyWorkspaceImageCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CopyWorkspaceImageCommandInput} for command's `input` shape.
 * @see {@link CopyWorkspaceImageCommandOutput} for command's `response` shape.
 * @see {@link WorkSpacesClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class CopyWorkspaceImageCommand extends $Command<CopyWorkspaceImageCommandInput, CopyWorkspaceImageCommandOutput, WorkSpacesClientResolvedConfig> {
    readonly input: CopyWorkspaceImageCommandInput;
    constructor(input: CopyWorkspaceImageCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: WorkSpacesClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CopyWorkspaceImageCommandInput, CopyWorkspaceImageCommandOutput>;
    private serialize;
    private deserialize;
}
