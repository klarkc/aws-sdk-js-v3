import { ECSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ECSClient";
import { DescribeContainerInstancesRequest, DescribeContainerInstancesResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DescribeContainerInstancesCommandInput extends DescribeContainerInstancesRequest {
}
export interface DescribeContainerInstancesCommandOutput extends DescribeContainerInstancesResponse, __MetadataBearer {
}
/**
 * <p>Describes one or more container instances. Returns metadata about each container
 * 			instance requested.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ECSClient, DescribeContainerInstancesCommand } from "@aws-sdk/client-ecs"; // ES Modules import
 * // const { ECSClient, DescribeContainerInstancesCommand } = require("@aws-sdk/client-ecs"); // CommonJS import
 * const client = new ECSClient(config);
 * const command = new DescribeContainerInstancesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeContainerInstancesCommandInput} for command's `input` shape.
 * @see {@link DescribeContainerInstancesCommandOutput} for command's `response` shape.
 * @see {@link ECSClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DescribeContainerInstancesCommand extends $Command<DescribeContainerInstancesCommandInput, DescribeContainerInstancesCommandOutput, ECSClientResolvedConfig> {
    readonly input: DescribeContainerInstancesCommandInput;
    constructor(input: DescribeContainerInstancesCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ECSClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeContainerInstancesCommandInput, DescribeContainerInstancesCommandOutput>;
    private serialize;
    private deserialize;
}
