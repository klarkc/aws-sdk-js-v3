import { ServiceInputTypes, ServiceOutputTypes, WorkSpacesClientResolvedConfig } from "../WorkSpacesClient";
import { DescribeAccountModificationsRequest, DescribeAccountModificationsResult } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DescribeAccountModificationsCommandInput extends DescribeAccountModificationsRequest {
}
export interface DescribeAccountModificationsCommandOutput extends DescribeAccountModificationsResult, __MetadataBearer {
}
/**
 * <p>Retrieves a list that describes modifications to the configuration of Bring Your Own
 *          License (BYOL) for the specified account.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WorkSpacesClient, DescribeAccountModificationsCommand } from "@aws-sdk/client-workspaces"; // ES Modules import
 * // const { WorkSpacesClient, DescribeAccountModificationsCommand } = require("@aws-sdk/client-workspaces"); // CommonJS import
 * const client = new WorkSpacesClient(config);
 * const command = new DescribeAccountModificationsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeAccountModificationsCommandInput} for command's `input` shape.
 * @see {@link DescribeAccountModificationsCommandOutput} for command's `response` shape.
 * @see {@link WorkSpacesClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DescribeAccountModificationsCommand extends $Command<DescribeAccountModificationsCommandInput, DescribeAccountModificationsCommandOutput, WorkSpacesClientResolvedConfig> {
    readonly input: DescribeAccountModificationsCommandInput;
    constructor(input: DescribeAccountModificationsCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: WorkSpacesClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeAccountModificationsCommandInput, DescribeAccountModificationsCommandOutput>;
    private serialize;
    private deserialize;
}
