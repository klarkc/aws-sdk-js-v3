import { ECRClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ECRClient";
import { BatchCheckLayerAvailabilityRequest, BatchCheckLayerAvailabilityResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface BatchCheckLayerAvailabilityCommandInput extends BatchCheckLayerAvailabilityRequest {
}
export interface BatchCheckLayerAvailabilityCommandOutput extends BatchCheckLayerAvailabilityResponse, __MetadataBearer {
}
/**
 * <p>Checks the availability of one or more image layers in a repository.</p>
 *         <p>When an image is pushed to a repository, each image layer is checked to verify if it
 *             has been uploaded before. If it has been uploaded, then the image layer is
 *             skipped.</p>
 *          <note>
 *             <p>This operation is used by the Amazon ECR proxy and is not generally used by
 *         customers for pulling and pushing images. In most cases, you should use the <code>docker</code> CLI to pull, tag, and push images.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ECRClient, BatchCheckLayerAvailabilityCommand } from "@aws-sdk/client-ecr"; // ES Modules import
 * // const { ECRClient, BatchCheckLayerAvailabilityCommand } = require("@aws-sdk/client-ecr"); // CommonJS import
 * const client = new ECRClient(config);
 * const command = new BatchCheckLayerAvailabilityCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link BatchCheckLayerAvailabilityCommandInput} for command's `input` shape.
 * @see {@link BatchCheckLayerAvailabilityCommandOutput} for command's `response` shape.
 * @see {@link ECRClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class BatchCheckLayerAvailabilityCommand extends $Command<BatchCheckLayerAvailabilityCommandInput, BatchCheckLayerAvailabilityCommandOutput, ECRClientResolvedConfig> {
    readonly input: BatchCheckLayerAvailabilityCommandInput;
    constructor(input: BatchCheckLayerAvailabilityCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ECRClientResolvedConfig, options?: __HttpHandlerOptions): Handler<BatchCheckLayerAvailabilityCommandInput, BatchCheckLayerAvailabilityCommandOutput>;
    private serialize;
    private deserialize;
}
