import { SMSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SMSClient";
import { NotifyAppValidationOutputRequest, NotifyAppValidationOutputResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface NotifyAppValidationOutputCommandInput extends NotifyAppValidationOutputRequest {
}
export interface NotifyAppValidationOutputCommandOutput extends NotifyAppValidationOutputResponse, __MetadataBearer {
}
/**
 * <p>Provides information to AWS SMS about whether application validation is successful.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SMSClient, NotifyAppValidationOutputCommand } from "@aws-sdk/client-sms"; // ES Modules import
 * // const { SMSClient, NotifyAppValidationOutputCommand } = require("@aws-sdk/client-sms"); // CommonJS import
 * const client = new SMSClient(config);
 * const command = new NotifyAppValidationOutputCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link NotifyAppValidationOutputCommandInput} for command's `input` shape.
 * @see {@link NotifyAppValidationOutputCommandOutput} for command's `response` shape.
 * @see {@link SMSClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class NotifyAppValidationOutputCommand extends $Command<NotifyAppValidationOutputCommandInput, NotifyAppValidationOutputCommandOutput, SMSClientResolvedConfig> {
    readonly input: NotifyAppValidationOutputCommandInput;
    constructor(input: NotifyAppValidationOutputCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SMSClientResolvedConfig, options?: __HttpHandlerOptions): Handler<NotifyAppValidationOutputCommandInput, NotifyAppValidationOutputCommandOutput>;
    private serialize;
    private deserialize;
}
