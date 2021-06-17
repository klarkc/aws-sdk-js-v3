import { ServiceInputTypes, ServiceOutputTypes, WorkLinkClientResolvedConfig } from "../WorkLinkClient";
import { DescribeFleetMetadataRequest, DescribeFleetMetadataResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DescribeFleetMetadataCommandInput extends DescribeFleetMetadataRequest {
}
export interface DescribeFleetMetadataCommandOutput extends DescribeFleetMetadataResponse, __MetadataBearer {
}
/**
 * <p>Provides basic information for the specified fleet, excluding identity provider,
 *             networking, and device configuration details.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WorkLinkClient, DescribeFleetMetadataCommand } from "@aws-sdk/client-worklink"; // ES Modules import
 * // const { WorkLinkClient, DescribeFleetMetadataCommand } = require("@aws-sdk/client-worklink"); // CommonJS import
 * const client = new WorkLinkClient(config);
 * const command = new DescribeFleetMetadataCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeFleetMetadataCommandInput} for command's `input` shape.
 * @see {@link DescribeFleetMetadataCommandOutput} for command's `response` shape.
 * @see {@link WorkLinkClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DescribeFleetMetadataCommand extends $Command<DescribeFleetMetadataCommandInput, DescribeFleetMetadataCommandOutput, WorkLinkClientResolvedConfig> {
    readonly input: DescribeFleetMetadataCommandInput;
    constructor(input: DescribeFleetMetadataCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: WorkLinkClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeFleetMetadataCommandInput, DescribeFleetMetadataCommandOutput>;
    private serialize;
    private deserialize;
}
