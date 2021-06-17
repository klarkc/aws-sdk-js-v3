import { SSOAdminClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SSOAdminClient";
import { DescribeAccountAssignmentDeletionStatusRequest, DescribeAccountAssignmentDeletionStatusResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DescribeAccountAssignmentDeletionStatusCommandInput extends DescribeAccountAssignmentDeletionStatusRequest {
}
export interface DescribeAccountAssignmentDeletionStatusCommandOutput extends DescribeAccountAssignmentDeletionStatusResponse, __MetadataBearer {
}
/**
 * <p>Describes the status of the assignment deletion request.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SSOAdminClient, DescribeAccountAssignmentDeletionStatusCommand } from "@aws-sdk/client-sso-admin"; // ES Modules import
 * // const { SSOAdminClient, DescribeAccountAssignmentDeletionStatusCommand } = require("@aws-sdk/client-sso-admin"); // CommonJS import
 * const client = new SSOAdminClient(config);
 * const command = new DescribeAccountAssignmentDeletionStatusCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeAccountAssignmentDeletionStatusCommandInput} for command's `input` shape.
 * @see {@link DescribeAccountAssignmentDeletionStatusCommandOutput} for command's `response` shape.
 * @see {@link SSOAdminClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DescribeAccountAssignmentDeletionStatusCommand extends $Command<DescribeAccountAssignmentDeletionStatusCommandInput, DescribeAccountAssignmentDeletionStatusCommandOutput, SSOAdminClientResolvedConfig> {
    readonly input: DescribeAccountAssignmentDeletionStatusCommandInput;
    constructor(input: DescribeAccountAssignmentDeletionStatusCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SSOAdminClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeAccountAssignmentDeletionStatusCommandInput, DescribeAccountAssignmentDeletionStatusCommandOutput>;
    private serialize;
    private deserialize;
}
