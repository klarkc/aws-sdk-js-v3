import { SSMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SSMClient";
import { DescribeDocumentPermissionRequest, DescribeDocumentPermissionResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DescribeDocumentPermissionCommandInput extends DescribeDocumentPermissionRequest {
}
export interface DescribeDocumentPermissionCommandOutput extends DescribeDocumentPermissionResponse, __MetadataBearer {
}
/**
 * <p>Describes the permissions for a Systems Manager document. If you created the document, you are the
 *    owner. If a document is shared, it can either be shared privately (by specifying a user's AWS
 *    account ID) or publicly (<i>All</i>). </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SSMClient, DescribeDocumentPermissionCommand } from "@aws-sdk/client-ssm"; // ES Modules import
 * // const { SSMClient, DescribeDocumentPermissionCommand } = require("@aws-sdk/client-ssm"); // CommonJS import
 * const client = new SSMClient(config);
 * const command = new DescribeDocumentPermissionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeDocumentPermissionCommandInput} for command's `input` shape.
 * @see {@link DescribeDocumentPermissionCommandOutput} for command's `response` shape.
 * @see {@link SSMClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DescribeDocumentPermissionCommand extends $Command<DescribeDocumentPermissionCommandInput, DescribeDocumentPermissionCommandOutput, SSMClientResolvedConfig> {
    readonly input: DescribeDocumentPermissionCommandInput;
    constructor(input: DescribeDocumentPermissionCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SSMClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeDocumentPermissionCommandInput, DescribeDocumentPermissionCommandOutput>;
    private serialize;
    private deserialize;
}
