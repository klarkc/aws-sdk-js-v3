import { ConnectClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ConnectClient";
import { DescribeUserHierarchyStructureRequest, DescribeUserHierarchyStructureResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DescribeUserHierarchyStructureCommandInput extends DescribeUserHierarchyStructureRequest {
}
export interface DescribeUserHierarchyStructureCommandOutput extends DescribeUserHierarchyStructureResponse, __MetadataBearer {
}
/**
 * <p>Describes the hierarchy structure of the specified Amazon Connect instance.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConnectClient, DescribeUserHierarchyStructureCommand } from "@aws-sdk/client-connect"; // ES Modules import
 * // const { ConnectClient, DescribeUserHierarchyStructureCommand } = require("@aws-sdk/client-connect"); // CommonJS import
 * const client = new ConnectClient(config);
 * const command = new DescribeUserHierarchyStructureCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeUserHierarchyStructureCommandInput} for command's `input` shape.
 * @see {@link DescribeUserHierarchyStructureCommandOutput} for command's `response` shape.
 * @see {@link ConnectClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DescribeUserHierarchyStructureCommand extends $Command<DescribeUserHierarchyStructureCommandInput, DescribeUserHierarchyStructureCommandOutput, ConnectClientResolvedConfig> {
    readonly input: DescribeUserHierarchyStructureCommandInput;
    constructor(input: DescribeUserHierarchyStructureCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ConnectClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeUserHierarchyStructureCommandInput, DescribeUserHierarchyStructureCommandOutput>;
    private serialize;
    private deserialize;
}
