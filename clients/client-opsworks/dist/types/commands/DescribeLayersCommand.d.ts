import { OpsWorksClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../OpsWorksClient";
import { DescribeLayersRequest, DescribeLayersResult } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DescribeLayersCommandInput extends DescribeLayersRequest {
}
export interface DescribeLayersCommandOutput extends DescribeLayersResult, __MetadataBearer {
}
/**
 * <p>Requests a description of one or more layers in a specified stack.</p>
 *          <note>
 *             <p>This call accepts only one resource-identifying parameter.</p>
 *          </note>
 *          <p>
 *             <b>Required Permissions</b>: To use this action, an IAM user must have a Show, Deploy, or
 *       Manage permissions level for the stack, or an attached policy that explicitly grants
 *       permissions. For more information about user permissions, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html">Managing User
 *         Permissions</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { OpsWorksClient, DescribeLayersCommand } from "@aws-sdk/client-opsworks"; // ES Modules import
 * // const { OpsWorksClient, DescribeLayersCommand } = require("@aws-sdk/client-opsworks"); // CommonJS import
 * const client = new OpsWorksClient(config);
 * const command = new DescribeLayersCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeLayersCommandInput} for command's `input` shape.
 * @see {@link DescribeLayersCommandOutput} for command's `response` shape.
 * @see {@link OpsWorksClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DescribeLayersCommand extends $Command<DescribeLayersCommandInput, DescribeLayersCommandOutput, OpsWorksClientResolvedConfig> {
    readonly input: DescribeLayersCommandInput;
    constructor(input: DescribeLayersCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: OpsWorksClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeLayersCommandInput, DescribeLayersCommandOutput>;
    private serialize;
    private deserialize;
}
