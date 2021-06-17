import { MediaStoreClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MediaStoreClient";
import { CreateContainerInput, CreateContainerOutput } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface CreateContainerCommandInput extends CreateContainerInput {
}
export interface CreateContainerCommandOutput extends CreateContainerOutput, __MetadataBearer {
}
/**
 * <p>Creates a storage container to hold objects. A container is similar to a bucket in
 *          the Amazon S3 service.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MediaStoreClient, CreateContainerCommand } from "@aws-sdk/client-mediastore"; // ES Modules import
 * // const { MediaStoreClient, CreateContainerCommand } = require("@aws-sdk/client-mediastore"); // CommonJS import
 * const client = new MediaStoreClient(config);
 * const command = new CreateContainerCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateContainerCommandInput} for command's `input` shape.
 * @see {@link CreateContainerCommandOutput} for command's `response` shape.
 * @see {@link MediaStoreClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class CreateContainerCommand extends $Command<CreateContainerCommandInput, CreateContainerCommandOutput, MediaStoreClientResolvedConfig> {
    readonly input: CreateContainerCommandInput;
    constructor(input: CreateContainerCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: MediaStoreClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CreateContainerCommandInput, CreateContainerCommandOutput>;
    private serialize;
    private deserialize;
}
