import { ServiceInputTypes, ServiceOutputTypes, WorkSpacesClientResolvedConfig } from "../WorkSpacesClient";
import { DescribeClientPropertiesRequest, DescribeClientPropertiesResult } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DescribeClientPropertiesCommandInput extends DescribeClientPropertiesRequest {
}
export interface DescribeClientPropertiesCommandOutput extends DescribeClientPropertiesResult, __MetadataBearer {
}
/**
 * <p>Retrieves a list that describes one or more specified Amazon WorkSpaces clients.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WorkSpacesClient, DescribeClientPropertiesCommand } from "@aws-sdk/client-workspaces"; // ES Modules import
 * // const { WorkSpacesClient, DescribeClientPropertiesCommand } = require("@aws-sdk/client-workspaces"); // CommonJS import
 * const client = new WorkSpacesClient(config);
 * const command = new DescribeClientPropertiesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeClientPropertiesCommandInput} for command's `input` shape.
 * @see {@link DescribeClientPropertiesCommandOutput} for command's `response` shape.
 * @see {@link WorkSpacesClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DescribeClientPropertiesCommand extends $Command<DescribeClientPropertiesCommandInput, DescribeClientPropertiesCommandOutput, WorkSpacesClientResolvedConfig> {
    readonly input: DescribeClientPropertiesCommandInput;
    constructor(input: DescribeClientPropertiesCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: WorkSpacesClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeClientPropertiesCommandInput, DescribeClientPropertiesCommandOutput>;
    private serialize;
    private deserialize;
}
