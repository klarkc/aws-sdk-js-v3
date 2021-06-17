import { MachineLearningClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MachineLearningClient";
import { CreateRealtimeEndpointInput, CreateRealtimeEndpointOutput } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface CreateRealtimeEndpointCommandInput extends CreateRealtimeEndpointInput {
}
export interface CreateRealtimeEndpointCommandOutput extends CreateRealtimeEndpointOutput, __MetadataBearer {
}
/**
 * <p>Creates a real-time endpoint for the <code>MLModel</code>. The endpoint contains the URI of the <code>MLModel</code>; that is, the location to send real-time prediction requests for the specified <code>MLModel</code>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MachineLearningClient, CreateRealtimeEndpointCommand } from "@aws-sdk/client-machine-learning"; // ES Modules import
 * // const { MachineLearningClient, CreateRealtimeEndpointCommand } = require("@aws-sdk/client-machine-learning"); // CommonJS import
 * const client = new MachineLearningClient(config);
 * const command = new CreateRealtimeEndpointCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateRealtimeEndpointCommandInput} for command's `input` shape.
 * @see {@link CreateRealtimeEndpointCommandOutput} for command's `response` shape.
 * @see {@link MachineLearningClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class CreateRealtimeEndpointCommand extends $Command<CreateRealtimeEndpointCommandInput, CreateRealtimeEndpointCommandOutput, MachineLearningClientResolvedConfig> {
    readonly input: CreateRealtimeEndpointCommandInput;
    constructor(input: CreateRealtimeEndpointCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: MachineLearningClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CreateRealtimeEndpointCommandInput, CreateRealtimeEndpointCommandOutput>;
    private serialize;
    private deserialize;
}
