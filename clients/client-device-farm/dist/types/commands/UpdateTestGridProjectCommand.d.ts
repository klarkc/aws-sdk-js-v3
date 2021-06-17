import { DeviceFarmClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DeviceFarmClient";
import { UpdateTestGridProjectRequest, UpdateTestGridProjectResult } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface UpdateTestGridProjectCommandInput extends UpdateTestGridProjectRequest {
}
export interface UpdateTestGridProjectCommandOutput extends UpdateTestGridProjectResult, __MetadataBearer {
}
/**
 * <p>Change details of a project.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DeviceFarmClient, UpdateTestGridProjectCommand } from "@aws-sdk/client-device-farm"; // ES Modules import
 * // const { DeviceFarmClient, UpdateTestGridProjectCommand } = require("@aws-sdk/client-device-farm"); // CommonJS import
 * const client = new DeviceFarmClient(config);
 * const command = new UpdateTestGridProjectCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateTestGridProjectCommandInput} for command's `input` shape.
 * @see {@link UpdateTestGridProjectCommandOutput} for command's `response` shape.
 * @see {@link DeviceFarmClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class UpdateTestGridProjectCommand extends $Command<UpdateTestGridProjectCommandInput, UpdateTestGridProjectCommandOutput, DeviceFarmClientResolvedConfig> {
    readonly input: UpdateTestGridProjectCommandInput;
    constructor(input: UpdateTestGridProjectCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: DeviceFarmClientResolvedConfig, options?: __HttpHandlerOptions): Handler<UpdateTestGridProjectCommandInput, UpdateTestGridProjectCommandOutput>;
    private serialize;
    private deserialize;
}
