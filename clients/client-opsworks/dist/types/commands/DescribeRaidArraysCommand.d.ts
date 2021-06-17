import { OpsWorksClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../OpsWorksClient";
import { DescribeRaidArraysRequest, DescribeRaidArraysResult } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DescribeRaidArraysCommandInput extends DescribeRaidArraysRequest {
}
export interface DescribeRaidArraysCommandOutput extends DescribeRaidArraysResult, __MetadataBearer {
}
/**
 * <p>Describe an instance's RAID arrays.</p>
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
 * import { OpsWorksClient, DescribeRaidArraysCommand } from "@aws-sdk/client-opsworks"; // ES Modules import
 * // const { OpsWorksClient, DescribeRaidArraysCommand } = require("@aws-sdk/client-opsworks"); // CommonJS import
 * const client = new OpsWorksClient(config);
 * const command = new DescribeRaidArraysCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeRaidArraysCommandInput} for command's `input` shape.
 * @see {@link DescribeRaidArraysCommandOutput} for command's `response` shape.
 * @see {@link OpsWorksClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DescribeRaidArraysCommand extends $Command<DescribeRaidArraysCommandInput, DescribeRaidArraysCommandOutput, OpsWorksClientResolvedConfig> {
    readonly input: DescribeRaidArraysCommandInput;
    constructor(input: DescribeRaidArraysCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: OpsWorksClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeRaidArraysCommandInput, DescribeRaidArraysCommandOutput>;
    private serialize;
    private deserialize;
}
