import { MediaStoreClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MediaStoreClient";
import { DescribeContainerInput, DescribeContainerOutput } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DescribeContainerCommandInput extends DescribeContainerInput {
}
export interface DescribeContainerCommandOutput extends DescribeContainerOutput, __MetadataBearer {
}
/**
 * <p>Retrieves the properties of the requested container. This request is commonly used to
 *          retrieve the endpoint of a container. An endpoint is a value assigned by the service when a
 *          new container is created. A container's endpoint does not change after it has been
 *          assigned. The <code>DescribeContainer</code> request returns a single
 *             <code>Container</code> object based on <code>ContainerName</code>. To return all
 *             <code>Container</code> objects that are associated with a specified AWS account, use
 *             <a>ListContainers</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MediaStoreClient, DescribeContainerCommand } from "@aws-sdk/client-mediastore"; // ES Modules import
 * // const { MediaStoreClient, DescribeContainerCommand } = require("@aws-sdk/client-mediastore"); // CommonJS import
 * const client = new MediaStoreClient(config);
 * const command = new DescribeContainerCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeContainerCommandInput} for command's `input` shape.
 * @see {@link DescribeContainerCommandOutput} for command's `response` shape.
 * @see {@link MediaStoreClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DescribeContainerCommand extends $Command<DescribeContainerCommandInput, DescribeContainerCommandOutput, MediaStoreClientResolvedConfig> {
    readonly input: DescribeContainerCommandInput;
    constructor(input: DescribeContainerCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: MediaStoreClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeContainerCommandInput, DescribeContainerCommandOutput>;
    private serialize;
    private deserialize;
}
