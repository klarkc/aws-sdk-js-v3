import { SSOAdminClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SSOAdminClient";
import { DescribeAccountAssignmentCreationStatusRequest, DescribeAccountAssignmentCreationStatusResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DescribeAccountAssignmentCreationStatusCommandInput extends DescribeAccountAssignmentCreationStatusRequest {
}
export interface DescribeAccountAssignmentCreationStatusCommandOutput extends DescribeAccountAssignmentCreationStatusResponse, __MetadataBearer {
}
/**
 * <p>Describes the status of the assignment creation request.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SSOAdminClient, DescribeAccountAssignmentCreationStatusCommand } from "@aws-sdk/client-sso-admin"; // ES Modules import
 * // const { SSOAdminClient, DescribeAccountAssignmentCreationStatusCommand } = require("@aws-sdk/client-sso-admin"); // CommonJS import
 * const client = new SSOAdminClient(config);
 * const command = new DescribeAccountAssignmentCreationStatusCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeAccountAssignmentCreationStatusCommandInput} for command's `input` shape.
 * @see {@link DescribeAccountAssignmentCreationStatusCommandOutput} for command's `response` shape.
 * @see {@link SSOAdminClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DescribeAccountAssignmentCreationStatusCommand extends $Command<DescribeAccountAssignmentCreationStatusCommandInput, DescribeAccountAssignmentCreationStatusCommandOutput, SSOAdminClientResolvedConfig> {
    readonly input: DescribeAccountAssignmentCreationStatusCommandInput;
    constructor(input: DescribeAccountAssignmentCreationStatusCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SSOAdminClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeAccountAssignmentCreationStatusCommandInput, DescribeAccountAssignmentCreationStatusCommandOutput>;
    private serialize;
    private deserialize;
}
