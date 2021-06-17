import { LightsailClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LightsailClient";
import { GetDisksRequest, GetDisksResult } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface GetDisksCommandInput extends GetDisksRequest {
}
export interface GetDisksCommandOutput extends GetDisksResult, __MetadataBearer {
}
/**
 * <p>Returns information about all block storage disks in your AWS account and region.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LightsailClient, GetDisksCommand } from "@aws-sdk/client-lightsail"; // ES Modules import
 * // const { LightsailClient, GetDisksCommand } = require("@aws-sdk/client-lightsail"); // CommonJS import
 * const client = new LightsailClient(config);
 * const command = new GetDisksCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetDisksCommandInput} for command's `input` shape.
 * @see {@link GetDisksCommandOutput} for command's `response` shape.
 * @see {@link LightsailClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class GetDisksCommand extends $Command<GetDisksCommandInput, GetDisksCommandOutput, LightsailClientResolvedConfig> {
    readonly input: GetDisksCommandInput;
    constructor(input: GetDisksCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: LightsailClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetDisksCommandInput, GetDisksCommandOutput>;
    private serialize;
    private deserialize;
}
