import { DeviceFarmClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DeviceFarmClient";
import { GetSuiteRequest, GetSuiteResult } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface GetSuiteCommandInput extends GetSuiteRequest {
}
export interface GetSuiteCommandOutput extends GetSuiteResult, __MetadataBearer {
}
/**
 * <p>Gets information about a suite.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DeviceFarmClient, GetSuiteCommand } from "@aws-sdk/client-device-farm"; // ES Modules import
 * // const { DeviceFarmClient, GetSuiteCommand } = require("@aws-sdk/client-device-farm"); // CommonJS import
 * const client = new DeviceFarmClient(config);
 * const command = new GetSuiteCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetSuiteCommandInput} for command's `input` shape.
 * @see {@link GetSuiteCommandOutput} for command's `response` shape.
 * @see {@link DeviceFarmClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class GetSuiteCommand extends $Command<GetSuiteCommandInput, GetSuiteCommandOutput, DeviceFarmClientResolvedConfig> {
    readonly input: GetSuiteCommandInput;
    constructor(input: GetSuiteCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: DeviceFarmClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetSuiteCommandInput, GetSuiteCommandOutput>;
    private serialize;
    private deserialize;
}
