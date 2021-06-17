import { RDSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RDSClient";
import { DBSecurityGroupMessage, DescribeDBSecurityGroupsMessage } from "../models/models_1";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DescribeDBSecurityGroupsCommandInput extends DescribeDBSecurityGroupsMessage {
}
export interface DescribeDBSecurityGroupsCommandOutput extends DBSecurityGroupMessage, __MetadataBearer {
}
/**
 * <p>
 *         Returns a list of <code>DBSecurityGroup</code> descriptions. If a <code>DBSecurityGroupName</code> is specified,
 *             the list will contain only the descriptions of the specified DB security group.
 *         </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RDSClient, DescribeDBSecurityGroupsCommand } from "@aws-sdk/client-rds"; // ES Modules import
 * // const { RDSClient, DescribeDBSecurityGroupsCommand } = require("@aws-sdk/client-rds"); // CommonJS import
 * const client = new RDSClient(config);
 * const command = new DescribeDBSecurityGroupsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeDBSecurityGroupsCommandInput} for command's `input` shape.
 * @see {@link DescribeDBSecurityGroupsCommandOutput} for command's `response` shape.
 * @see {@link RDSClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DescribeDBSecurityGroupsCommand extends $Command<DescribeDBSecurityGroupsCommandInput, DescribeDBSecurityGroupsCommandOutput, RDSClientResolvedConfig> {
    readonly input: DescribeDBSecurityGroupsCommandInput;
    constructor(input: DescribeDBSecurityGroupsCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: RDSClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeDBSecurityGroupsCommandInput, DescribeDBSecurityGroupsCommandOutput>;
    private serialize;
    private deserialize;
}
