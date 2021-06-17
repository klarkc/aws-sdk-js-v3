import { MgnClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MgnClient";
import { DescribeReplicationConfigurationTemplatesRequest, DescribeReplicationConfigurationTemplatesResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DescribeReplicationConfigurationTemplatesCommandInput extends DescribeReplicationConfigurationTemplatesRequest {
}
export interface DescribeReplicationConfigurationTemplatesCommandOutput extends DescribeReplicationConfigurationTemplatesResponse, __MetadataBearer {
}
/**
 * <p>Lists all ReplicationConfigurationTemplates, filtered by Source Server IDs.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MgnClient, DescribeReplicationConfigurationTemplatesCommand } from "@aws-sdk/client-mgn"; // ES Modules import
 * // const { MgnClient, DescribeReplicationConfigurationTemplatesCommand } = require("@aws-sdk/client-mgn"); // CommonJS import
 * const client = new MgnClient(config);
 * const command = new DescribeReplicationConfigurationTemplatesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeReplicationConfigurationTemplatesCommandInput} for command's `input` shape.
 * @see {@link DescribeReplicationConfigurationTemplatesCommandOutput} for command's `response` shape.
 * @see {@link MgnClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DescribeReplicationConfigurationTemplatesCommand extends $Command<DescribeReplicationConfigurationTemplatesCommandInput, DescribeReplicationConfigurationTemplatesCommandOutput, MgnClientResolvedConfig> {
    readonly input: DescribeReplicationConfigurationTemplatesCommandInput;
    constructor(input: DescribeReplicationConfigurationTemplatesCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: MgnClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeReplicationConfigurationTemplatesCommandInput, DescribeReplicationConfigurationTemplatesCommandOutput>;
    private serialize;
    private deserialize;
}
