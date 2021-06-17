import { OpsWorksClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../OpsWorksClient";
import { DescribeAgentVersionsRequest, DescribeAgentVersionsResult } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DescribeAgentVersionsCommandInput extends DescribeAgentVersionsRequest {
}
export interface DescribeAgentVersionsCommandOutput extends DescribeAgentVersionsResult, __MetadataBearer {
}
/**
 * <p>Describes the available AWS OpsWorks Stacks agent versions. You must specify a stack ID or a
 *     configuration manager. <code>DescribeAgentVersions</code> returns a list of available
 *     agent versions for the specified stack or configuration manager.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { OpsWorksClient, DescribeAgentVersionsCommand } from "@aws-sdk/client-opsworks"; // ES Modules import
 * // const { OpsWorksClient, DescribeAgentVersionsCommand } = require("@aws-sdk/client-opsworks"); // CommonJS import
 * const client = new OpsWorksClient(config);
 * const command = new DescribeAgentVersionsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeAgentVersionsCommandInput} for command's `input` shape.
 * @see {@link DescribeAgentVersionsCommandOutput} for command's `response` shape.
 * @see {@link OpsWorksClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DescribeAgentVersionsCommand extends $Command<DescribeAgentVersionsCommandInput, DescribeAgentVersionsCommandOutput, OpsWorksClientResolvedConfig> {
    readonly input: DescribeAgentVersionsCommandInput;
    constructor(input: DescribeAgentVersionsCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: OpsWorksClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeAgentVersionsCommandInput, DescribeAgentVersionsCommandOutput>;
    private serialize;
    private deserialize;
}
