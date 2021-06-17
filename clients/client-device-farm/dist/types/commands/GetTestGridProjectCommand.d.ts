import { DeviceFarmClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DeviceFarmClient";
import { GetTestGridProjectRequest, GetTestGridProjectResult } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface GetTestGridProjectCommandInput extends GetTestGridProjectRequest {
}
export interface GetTestGridProjectCommandOutput extends GetTestGridProjectResult, __MetadataBearer {
}
/**
 * <p>Retrieves information about a Selenium testing project.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DeviceFarmClient, GetTestGridProjectCommand } from "@aws-sdk/client-device-farm"; // ES Modules import
 * // const { DeviceFarmClient, GetTestGridProjectCommand } = require("@aws-sdk/client-device-farm"); // CommonJS import
 * const client = new DeviceFarmClient(config);
 * const command = new GetTestGridProjectCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetTestGridProjectCommandInput} for command's `input` shape.
 * @see {@link GetTestGridProjectCommandOutput} for command's `response` shape.
 * @see {@link DeviceFarmClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class GetTestGridProjectCommand extends $Command<GetTestGridProjectCommandInput, GetTestGridProjectCommandOutput, DeviceFarmClientResolvedConfig> {
    readonly input: GetTestGridProjectCommandInput;
    constructor(input: GetTestGridProjectCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: DeviceFarmClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetTestGridProjectCommandInput, GetTestGridProjectCommandOutput>;
    private serialize;
    private deserialize;
}
