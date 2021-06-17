import { LambdaClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LambdaClient";
import { EventSourceMappingConfiguration, GetEventSourceMappingRequest } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface GetEventSourceMappingCommandInput extends GetEventSourceMappingRequest {
}
export interface GetEventSourceMappingCommandOutput extends EventSourceMappingConfiguration, __MetadataBearer {
}
/**
 * <p>Returns details about an event source mapping. You can get the identifier of a mapping from the output of <a>ListEventSourceMappings</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LambdaClient, GetEventSourceMappingCommand } from "@aws-sdk/client-lambda"; // ES Modules import
 * // const { LambdaClient, GetEventSourceMappingCommand } = require("@aws-sdk/client-lambda"); // CommonJS import
 * const client = new LambdaClient(config);
 * const command = new GetEventSourceMappingCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetEventSourceMappingCommandInput} for command's `input` shape.
 * @see {@link GetEventSourceMappingCommandOutput} for command's `response` shape.
 * @see {@link LambdaClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class GetEventSourceMappingCommand extends $Command<GetEventSourceMappingCommandInput, GetEventSourceMappingCommandOutput, LambdaClientResolvedConfig> {
    readonly input: GetEventSourceMappingCommandInput;
    constructor(input: GetEventSourceMappingCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: LambdaClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetEventSourceMappingCommandInput, GetEventSourceMappingCommandOutput>;
    private serialize;
    private deserialize;
}
