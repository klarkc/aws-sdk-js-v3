import { OrganizationsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../OrganizationsClient";
import { DescribeCreateAccountStatusRequest, DescribeCreateAccountStatusResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DescribeCreateAccountStatusCommandInput extends DescribeCreateAccountStatusRequest {
}
export interface DescribeCreateAccountStatusCommandOutput extends DescribeCreateAccountStatusResponse, __MetadataBearer {
}
/**
 * <p>Retrieves the current status of an asynchronous request to create an account.</p>
 *         <p>This operation can be called only from the organization's
 * management account or by a member account that is a delegated administrator for an AWS service.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { OrganizationsClient, DescribeCreateAccountStatusCommand } from "@aws-sdk/client-organizations"; // ES Modules import
 * // const { OrganizationsClient, DescribeCreateAccountStatusCommand } = require("@aws-sdk/client-organizations"); // CommonJS import
 * const client = new OrganizationsClient(config);
 * const command = new DescribeCreateAccountStatusCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeCreateAccountStatusCommandInput} for command's `input` shape.
 * @see {@link DescribeCreateAccountStatusCommandOutput} for command's `response` shape.
 * @see {@link OrganizationsClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DescribeCreateAccountStatusCommand extends $Command<DescribeCreateAccountStatusCommandInput, DescribeCreateAccountStatusCommandOutput, OrganizationsClientResolvedConfig> {
    readonly input: DescribeCreateAccountStatusCommandInput;
    constructor(input: DescribeCreateAccountStatusCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: OrganizationsClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeCreateAccountStatusCommandInput, DescribeCreateAccountStatusCommandOutput>;
    private serialize;
    private deserialize;
}
