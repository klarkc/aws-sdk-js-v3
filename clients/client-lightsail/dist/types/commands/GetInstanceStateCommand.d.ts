import { LightsailClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LightsailClient";
import { GetInstanceStateRequest, GetInstanceStateResult } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface GetInstanceStateCommandInput extends GetInstanceStateRequest {
}
export interface GetInstanceStateCommandOutput extends GetInstanceStateResult, __MetadataBearer {
}
/**
 * <p>Returns the state of a specific instance. Works on one instance at a time.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LightsailClient, GetInstanceStateCommand } from "@aws-sdk/client-lightsail"; // ES Modules import
 * // const { LightsailClient, GetInstanceStateCommand } = require("@aws-sdk/client-lightsail"); // CommonJS import
 * const client = new LightsailClient(config);
 * const command = new GetInstanceStateCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetInstanceStateCommandInput} for command's `input` shape.
 * @see {@link GetInstanceStateCommandOutput} for command's `response` shape.
 * @see {@link LightsailClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class GetInstanceStateCommand extends $Command<GetInstanceStateCommandInput, GetInstanceStateCommandOutput, LightsailClientResolvedConfig> {
    readonly input: GetInstanceStateCommandInput;
    constructor(input: GetInstanceStateCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: LightsailClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetInstanceStateCommandInput, GetInstanceStateCommandOutput>;
    private serialize;
    private deserialize;
}
