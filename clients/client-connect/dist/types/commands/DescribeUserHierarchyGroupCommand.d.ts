import { ConnectClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ConnectClient";
import { DescribeUserHierarchyGroupRequest, DescribeUserHierarchyGroupResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DescribeUserHierarchyGroupCommandInput extends DescribeUserHierarchyGroupRequest {
}
export interface DescribeUserHierarchyGroupCommandOutput extends DescribeUserHierarchyGroupResponse, __MetadataBearer {
}
/**
 * <p>Describes the specified hierarchy group.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConnectClient, DescribeUserHierarchyGroupCommand } from "@aws-sdk/client-connect"; // ES Modules import
 * // const { ConnectClient, DescribeUserHierarchyGroupCommand } = require("@aws-sdk/client-connect"); // CommonJS import
 * const client = new ConnectClient(config);
 * const command = new DescribeUserHierarchyGroupCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeUserHierarchyGroupCommandInput} for command's `input` shape.
 * @see {@link DescribeUserHierarchyGroupCommandOutput} for command's `response` shape.
 * @see {@link ConnectClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DescribeUserHierarchyGroupCommand extends $Command<DescribeUserHierarchyGroupCommandInput, DescribeUserHierarchyGroupCommandOutput, ConnectClientResolvedConfig> {
    readonly input: DescribeUserHierarchyGroupCommandInput;
    constructor(input: DescribeUserHierarchyGroupCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ConnectClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeUserHierarchyGroupCommandInput, DescribeUserHierarchyGroupCommandOutput>;
    private serialize;
    private deserialize;
}
