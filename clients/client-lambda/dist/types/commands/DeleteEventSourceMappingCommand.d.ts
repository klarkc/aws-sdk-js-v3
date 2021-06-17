import { LambdaClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LambdaClient";
import { DeleteEventSourceMappingRequest, EventSourceMappingConfiguration } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DeleteEventSourceMappingCommandInput extends DeleteEventSourceMappingRequest {
}
export interface DeleteEventSourceMappingCommandOutput extends EventSourceMappingConfiguration, __MetadataBearer {
}
/**
 * <p>Deletes an <a href="https://docs.aws.amazon.com/lambda/latest/dg/intro-invocation-modes.html">event source
 *       mapping</a>. You can get the identifier of a mapping from the output of <a>ListEventSourceMappings</a>.</p>
 *          <p>When you delete an event source mapping, it enters a <code>Deleting</code> state and might not be completely deleted for several seconds.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LambdaClient, DeleteEventSourceMappingCommand } from "@aws-sdk/client-lambda"; // ES Modules import
 * // const { LambdaClient, DeleteEventSourceMappingCommand } = require("@aws-sdk/client-lambda"); // CommonJS import
 * const client = new LambdaClient(config);
 * const command = new DeleteEventSourceMappingCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteEventSourceMappingCommandInput} for command's `input` shape.
 * @see {@link DeleteEventSourceMappingCommandOutput} for command's `response` shape.
 * @see {@link LambdaClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DeleteEventSourceMappingCommand extends $Command<DeleteEventSourceMappingCommandInput, DeleteEventSourceMappingCommandOutput, LambdaClientResolvedConfig> {
    readonly input: DeleteEventSourceMappingCommandInput;
    constructor(input: DeleteEventSourceMappingCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: LambdaClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteEventSourceMappingCommandInput, DeleteEventSourceMappingCommandOutput>;
    private serialize;
    private deserialize;
}
