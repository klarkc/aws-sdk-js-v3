import { MachineLearningClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MachineLearningClient";
import { DeleteRealtimeEndpointInput, DeleteRealtimeEndpointOutput } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DeleteRealtimeEndpointCommandInput extends DeleteRealtimeEndpointInput {
}
export interface DeleteRealtimeEndpointCommandOutput extends DeleteRealtimeEndpointOutput, __MetadataBearer {
}
/**
 * <p>Deletes a real time endpoint of an <code>MLModel</code>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MachineLearningClient, DeleteRealtimeEndpointCommand } from "@aws-sdk/client-machine-learning"; // ES Modules import
 * // const { MachineLearningClient, DeleteRealtimeEndpointCommand } = require("@aws-sdk/client-machine-learning"); // CommonJS import
 * const client = new MachineLearningClient(config);
 * const command = new DeleteRealtimeEndpointCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteRealtimeEndpointCommandInput} for command's `input` shape.
 * @see {@link DeleteRealtimeEndpointCommandOutput} for command's `response` shape.
 * @see {@link MachineLearningClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DeleteRealtimeEndpointCommand extends $Command<DeleteRealtimeEndpointCommandInput, DeleteRealtimeEndpointCommandOutput, MachineLearningClientResolvedConfig> {
    readonly input: DeleteRealtimeEndpointCommandInput;
    constructor(input: DeleteRealtimeEndpointCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: MachineLearningClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteRealtimeEndpointCommandInput, DeleteRealtimeEndpointCommandOutput>;
    private serialize;
    private deserialize;
}
