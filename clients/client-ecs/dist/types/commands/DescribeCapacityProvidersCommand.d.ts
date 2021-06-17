import { ECSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ECSClient";
import { DescribeCapacityProvidersRequest, DescribeCapacityProvidersResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DescribeCapacityProvidersCommandInput extends DescribeCapacityProvidersRequest {
}
export interface DescribeCapacityProvidersCommandOutput extends DescribeCapacityProvidersResponse, __MetadataBearer {
}
/**
 * <p>Describes one or more of your capacity providers.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ECSClient, DescribeCapacityProvidersCommand } from "@aws-sdk/client-ecs"; // ES Modules import
 * // const { ECSClient, DescribeCapacityProvidersCommand } = require("@aws-sdk/client-ecs"); // CommonJS import
 * const client = new ECSClient(config);
 * const command = new DescribeCapacityProvidersCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeCapacityProvidersCommandInput} for command's `input` shape.
 * @see {@link DescribeCapacityProvidersCommandOutput} for command's `response` shape.
 * @see {@link ECSClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DescribeCapacityProvidersCommand extends $Command<DescribeCapacityProvidersCommandInput, DescribeCapacityProvidersCommandOutput, ECSClientResolvedConfig> {
    readonly input: DescribeCapacityProvidersCommandInput;
    constructor(input: DescribeCapacityProvidersCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ECSClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeCapacityProvidersCommandInput, DescribeCapacityProvidersCommandOutput>;
    private serialize;
    private deserialize;
}
