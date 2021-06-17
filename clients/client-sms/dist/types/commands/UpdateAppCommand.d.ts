import { SMSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SMSClient";
import { UpdateAppRequest, UpdateAppResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface UpdateAppCommandInput extends UpdateAppRequest {
}
export interface UpdateAppCommandOutput extends UpdateAppResponse, __MetadataBearer {
}
/**
 * <p>Updates the specified application.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SMSClient, UpdateAppCommand } from "@aws-sdk/client-sms"; // ES Modules import
 * // const { SMSClient, UpdateAppCommand } = require("@aws-sdk/client-sms"); // CommonJS import
 * const client = new SMSClient(config);
 * const command = new UpdateAppCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateAppCommandInput} for command's `input` shape.
 * @see {@link UpdateAppCommandOutput} for command's `response` shape.
 * @see {@link SMSClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class UpdateAppCommand extends $Command<UpdateAppCommandInput, UpdateAppCommandOutput, SMSClientResolvedConfig> {
    readonly input: UpdateAppCommandInput;
    constructor(input: UpdateAppCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SMSClientResolvedConfig, options?: __HttpHandlerOptions): Handler<UpdateAppCommandInput, UpdateAppCommandOutput>;
    private serialize;
    private deserialize;
}
