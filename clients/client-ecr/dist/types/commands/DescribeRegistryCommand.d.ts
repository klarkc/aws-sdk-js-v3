import { ECRClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ECRClient";
import { DescribeRegistryRequest, DescribeRegistryResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DescribeRegistryCommandInput extends DescribeRegistryRequest {
}
export interface DescribeRegistryCommandOutput extends DescribeRegistryResponse, __MetadataBearer {
}
/**
 * <p>Describes the settings for a registry. The replication configuration for a repository
 *             can be created or updated with the <a>PutReplicationConfiguration</a> API
 *             action.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ECRClient, DescribeRegistryCommand } from "@aws-sdk/client-ecr"; // ES Modules import
 * // const { ECRClient, DescribeRegistryCommand } = require("@aws-sdk/client-ecr"); // CommonJS import
 * const client = new ECRClient(config);
 * const command = new DescribeRegistryCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeRegistryCommandInput} for command's `input` shape.
 * @see {@link DescribeRegistryCommandOutput} for command's `response` shape.
 * @see {@link ECRClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DescribeRegistryCommand extends $Command<DescribeRegistryCommandInput, DescribeRegistryCommandOutput, ECRClientResolvedConfig> {
    readonly input: DescribeRegistryCommandInput;
    constructor(input: DescribeRegistryCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ECRClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeRegistryCommandInput, DescribeRegistryCommandOutput>;
    private serialize;
    private deserialize;
}
