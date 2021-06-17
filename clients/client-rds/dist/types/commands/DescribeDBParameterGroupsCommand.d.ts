import { RDSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RDSClient";
import { DBParameterGroupsMessage, DescribeDBParameterGroupsMessage } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DescribeDBParameterGroupsCommandInput extends DescribeDBParameterGroupsMessage {
}
export interface DescribeDBParameterGroupsCommandOutput extends DBParameterGroupsMessage, __MetadataBearer {
}
/**
 * <p>
 *         Returns a list of <code>DBParameterGroup</code> descriptions. If a <code>DBParameterGroupName</code> is specified,
 *             the list will contain only the description of the specified DB parameter group.
 *         </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RDSClient, DescribeDBParameterGroupsCommand } from "@aws-sdk/client-rds"; // ES Modules import
 * // const { RDSClient, DescribeDBParameterGroupsCommand } = require("@aws-sdk/client-rds"); // CommonJS import
 * const client = new RDSClient(config);
 * const command = new DescribeDBParameterGroupsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeDBParameterGroupsCommandInput} for command's `input` shape.
 * @see {@link DescribeDBParameterGroupsCommandOutput} for command's `response` shape.
 * @see {@link RDSClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DescribeDBParameterGroupsCommand extends $Command<DescribeDBParameterGroupsCommandInput, DescribeDBParameterGroupsCommandOutput, RDSClientResolvedConfig> {
    readonly input: DescribeDBParameterGroupsCommandInput;
    constructor(input: DescribeDBParameterGroupsCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: RDSClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeDBParameterGroupsCommandInput, DescribeDBParameterGroupsCommandOutput>;
    private serialize;
    private deserialize;
}
