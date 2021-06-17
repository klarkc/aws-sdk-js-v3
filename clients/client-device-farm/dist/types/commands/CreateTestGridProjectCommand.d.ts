import { DeviceFarmClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DeviceFarmClient";
import { CreateTestGridProjectRequest, CreateTestGridProjectResult } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface CreateTestGridProjectCommandInput extends CreateTestGridProjectRequest {
}
export interface CreateTestGridProjectCommandOutput extends CreateTestGridProjectResult, __MetadataBearer {
}
/**
 * <p>Creates a Selenium testing project. Projects are used to track <a>TestGridSession</a>
 *          instances.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DeviceFarmClient, CreateTestGridProjectCommand } from "@aws-sdk/client-device-farm"; // ES Modules import
 * // const { DeviceFarmClient, CreateTestGridProjectCommand } = require("@aws-sdk/client-device-farm"); // CommonJS import
 * const client = new DeviceFarmClient(config);
 * const command = new CreateTestGridProjectCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateTestGridProjectCommandInput} for command's `input` shape.
 * @see {@link CreateTestGridProjectCommandOutput} for command's `response` shape.
 * @see {@link DeviceFarmClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class CreateTestGridProjectCommand extends $Command<CreateTestGridProjectCommandInput, CreateTestGridProjectCommandOutput, DeviceFarmClientResolvedConfig> {
    readonly input: CreateTestGridProjectCommandInput;
    constructor(input: CreateTestGridProjectCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: DeviceFarmClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CreateTestGridProjectCommandInput, CreateTestGridProjectCommandOutput>;
    private serialize;
    private deserialize;
}
