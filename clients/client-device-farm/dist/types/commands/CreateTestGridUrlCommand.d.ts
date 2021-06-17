import { DeviceFarmClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DeviceFarmClient";
import { CreateTestGridUrlRequest, CreateTestGridUrlResult } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface CreateTestGridUrlCommandInput extends CreateTestGridUrlRequest {
}
export interface CreateTestGridUrlCommandOutput extends CreateTestGridUrlResult, __MetadataBearer {
}
/**
 * <p>Creates a signed, short-term URL that can be passed to a Selenium <code>RemoteWebDriver</code>
 *          constructor.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DeviceFarmClient, CreateTestGridUrlCommand } from "@aws-sdk/client-device-farm"; // ES Modules import
 * // const { DeviceFarmClient, CreateTestGridUrlCommand } = require("@aws-sdk/client-device-farm"); // CommonJS import
 * const client = new DeviceFarmClient(config);
 * const command = new CreateTestGridUrlCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateTestGridUrlCommandInput} for command's `input` shape.
 * @see {@link CreateTestGridUrlCommandOutput} for command's `response` shape.
 * @see {@link DeviceFarmClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class CreateTestGridUrlCommand extends $Command<CreateTestGridUrlCommandInput, CreateTestGridUrlCommandOutput, DeviceFarmClientResolvedConfig> {
    readonly input: CreateTestGridUrlCommandInput;
    constructor(input: CreateTestGridUrlCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: DeviceFarmClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CreateTestGridUrlCommandInput, CreateTestGridUrlCommandOutput>;
    private serialize;
    private deserialize;
}
