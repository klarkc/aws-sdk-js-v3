import { PinpointClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../PinpointClient";
import { UpdateTemplateActiveVersionRequest, UpdateTemplateActiveVersionResponse } from "../models/models_1";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface UpdateTemplateActiveVersionCommandInput extends UpdateTemplateActiveVersionRequest {
}
export interface UpdateTemplateActiveVersionCommandOutput extends UpdateTemplateActiveVersionResponse, __MetadataBearer {
}
/**
 * <p>Changes the status of a specific version of a message template to <i>active</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PinpointClient, UpdateTemplateActiveVersionCommand } from "@aws-sdk/client-pinpoint"; // ES Modules import
 * // const { PinpointClient, UpdateTemplateActiveVersionCommand } = require("@aws-sdk/client-pinpoint"); // CommonJS import
 * const client = new PinpointClient(config);
 * const command = new UpdateTemplateActiveVersionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateTemplateActiveVersionCommandInput} for command's `input` shape.
 * @see {@link UpdateTemplateActiveVersionCommandOutput} for command's `response` shape.
 * @see {@link PinpointClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class UpdateTemplateActiveVersionCommand extends $Command<UpdateTemplateActiveVersionCommandInput, UpdateTemplateActiveVersionCommandOutput, PinpointClientResolvedConfig> {
    readonly input: UpdateTemplateActiveVersionCommandInput;
    constructor(input: UpdateTemplateActiveVersionCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: PinpointClientResolvedConfig, options?: __HttpHandlerOptions): Handler<UpdateTemplateActiveVersionCommandInput, UpdateTemplateActiveVersionCommandOutput>;
    private serialize;
    private deserialize;
}
