import { LightsailClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LightsailClient";
import { GetInstancesRequest, GetInstancesResult } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface GetInstancesCommandInput extends GetInstancesRequest {
}
export interface GetInstancesCommandOutput extends GetInstancesResult, __MetadataBearer {
}
/**
 * <p>Returns information about all Amazon Lightsail virtual private servers, or
 *         <i>instances</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LightsailClient, GetInstancesCommand } from "@aws-sdk/client-lightsail"; // ES Modules import
 * // const { LightsailClient, GetInstancesCommand } = require("@aws-sdk/client-lightsail"); // CommonJS import
 * const client = new LightsailClient(config);
 * const command = new GetInstancesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetInstancesCommandInput} for command's `input` shape.
 * @see {@link GetInstancesCommandOutput} for command's `response` shape.
 * @see {@link LightsailClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class GetInstancesCommand extends $Command<GetInstancesCommandInput, GetInstancesCommandOutput, LightsailClientResolvedConfig> {
    readonly input: GetInstancesCommandInput;
    constructor(input: GetInstancesCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: LightsailClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetInstancesCommandInput, GetInstancesCommandOutput>;
    private serialize;
    private deserialize;
}
